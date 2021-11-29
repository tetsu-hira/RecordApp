import { useState } from "react";
import * as React from 'react';
// import ExcelJS from "exceljs";
// import File from "./File";
// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd"
// import Select from 'react-select';
// import ReactDOM from "react-dom";


type Pro = {
  id: number
  name: any
  gross: number
  point: number
  score: number
}

type Pros = {
  name: any
  time1: number
  time2: number
  // count: number
}

// type Cell = {
//   name: string
//   time1: number
// }
// const reorder = (
//   list: ItemType[],
//   startIndex: number,
//   endIndex: number
// ): ItemType[] => {
//   const result = Array.from(list);
//   const [removed] = result.splice(startIndex, 1);
//   result.splice(endIndex, 0, removed);

//   return result;
// };


const Process: React.FC = () => {
  const [ plan, setPlan ] = useState<Pros[]>([]);
  const [ time1, setTime1 ] = useState<number>(0);
  const [ time2, setTime2 ] = useState<number>(0);
  const [ list, setList ] = useState<Pro[]>([]);
  const [ data, setData ] = useState<any>();


  const changeData = (e:any) => {
    setData(e.target.value)
    // setCount(Math.random());
  }
  const addList = () => {
    setList([...list, {
      id: data,
      name: data,
      gross: 0,
      point: 0,
      score: 0,
    }]);
  }

  const handleRemoveTask = (index:number) => {
    const newPlan = [...plan]
    newPlan.splice(index, 1)
    setPlan(newPlan)
  }

  const addPlan = (index: number) => {
    const addName: any = list.find((elem) => list[index] === elem )
    setPlan([...plan, {name: addName.name, time1: 0, time2: 0}]);
    const result: any = plan.filter(plans => {
      return plans.name === list[index].name
    })
    // console.log(result1.length);
    // list[0].gross = result1.length;
    // setList([...list, ]);
    // const result: any = list.find((elem) => list[index] === elem)
    console.log(result);
    const result1 = result.length + 1;
    list[index].gross = result1;
  }


  const addTime1 = (index:number, minute:number) => {
    const targetPlan: any = plan.find((elem) => plan[index] === elem )
    targetPlan.time1 = targetPlan.time1 + minute
    setTime1(targetPlan.time1)
    console.log(time1);
  }
  const addTime2 = (index:number, minute:number) => {
    const targetPlan: any = plan.find((elem) => plan[index] === elem )
    targetPlan.time2 = targetPlan.time2 + minute
    setTime2(targetPlan.time2)
    console.log(time2);
  }

  /* いずれは実装したい
  const handleClickDownloadButton = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    format:  "xlsx" | "csv"
  ) => {
    e.preventDefault();

    const workbook = new ExcelJS.Workbook();
    workbook.addWorksheet("sheet1");
    const worksheet = workbook.getWorksheet("sheet1");

    worksheet.columns = [
      { header: "No.", key: "", width: 10 },
      { header: "工程", key: "name", width: 20},
      { header: "時間", key: "time1", width: 20}
    ];

    worksheet.addRows(plan);

    const uint8Array =
      format === "xlsx"
        ? await workbook.xlsx.writeBuffer() //xlsxの場合
        : await workbook.csv.writeBuffer(); //csvの場合
    const blob = new Blob([uint8Array], { type: "application/octet-binary "});
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "NewFile." + format; //フォーマットによって拡張子を変える
    a.click();
    a.remove();
  };
  */

  // const handleOnDragEnd = (result:any) => {
  //   const items = Array.from(plan);
  //   const [reorderedItem] = items.splice(result.source.index, 1);
  //   items.splice(result.destination.index, 0, reorderedItem);

  //   setPlan(items);
  // }

  // 確認のため設置
  console.log(list);


  return (
    <div className="Process">
      <div className="ProcessContainer">
        <div className="ProcessMain">
          <div className="ProcessList">
            <h1>【設備一覧】</h1>
            <div className="ProcessList__Border">
              <div className="Head">
                <div className="name">チーム名</div>
                <div className="gross">試合数</div>
                <div className="point">勝ち点</div>
                <div className="score">得失点</div>
                <div className="space"></div>
              </div>
              <ul className="Item">
                { list.map((item:Pro, idx: number) => (
                  <li className="ItemList" key={item.name}>
                    <div className="ItemList__data">
                      <div className="name">{item.name}</div>
                      <div className="gross">{item.gross}</div>
                      <div className="point">{item.point}</div>
                      <div className="score">{item.score}</div>
                      <button className="AddPlan" onClick={()=> addPlan(idx)}>登録</button>
                    </div>
                </li>
                ))}
              </ul>
            </div>
            <div className="Form">
              <div className="FormContent">
                <input className="FormContent__name" type="text" id="name" onChange={changeData}></input>
                <button className="FormContent__button" type="submit" onClick={addList}>チーム追加</button>
              </div>
            </div>
          </div>
          <div className="Result">
            <h1 className="title">【工程設計】</h1>
              <div className="Result__Border">
                { plan.map((item, idx: number) => (
                  <div className="Flex" key={idx}>
                    <div className="FlexNumber">
                      { idx % 2 === 0 && <div className="FlexNumber__item">第{idx/2+1}試合</div> }
                    </div>
                    <div className="FlexCross">
                      { idx % 2 !== 0 && <div className="FlexCross__item">✖</div> }
                      { idx % 2 !== 0 && <div className="FlexCross__item">✖</div> }
                    </div>
                    <div className="FlexCount">
                      <div className="FlexCount__flex">
                        { idx % 2 === 0 && <button className="AddCount" onClick={()=> addTime1(idx, -1)}>-</button> }
                        { idx % 2 === 0 && <button className="AddCount" onClick={()=> addTime1(idx, 5)}>+</button> }
                        { idx % 2 !== 0 && <div className="ResultTime">{item.time1}</div> }
                      </div>
                      <div className="FlexCount__flex">
                        { idx % 2 === 0 && <button className="AddCount" onClick={()=> addTime2(idx, -1)}>-</button> }
                        { idx % 2 === 0 && <button className="AddCount" onClick={()=> addTime2(idx, 5)}>+</button> }
                        { idx % 2 !== 0 && <div className="ResultTime">{item.time2}</div> }
                      </div>
                    </div>
                    <div className="FlexName">
                      <div className="ResultName">{item.name}</div>
                      <button className="DeleteButton" onClick={()=> handleRemoveTask(idx)}>取消</button>
                    </div>
                    <div className="FlexCount">
                      <div className="FlexCount__flex">
                        { idx % 2 !== 0 && <button className="AddCount" onClick={()=> addTime1(idx, -1)}>-</button> }
                        { idx % 2 !== 0 && <button className="AddCount" onClick={()=> addTime1(idx, 5)}>+</button> }
                        { idx % 2 === 0 && <div className="ResultTime">{item.time1}</div> }
                      </div>
                      <div className="FlexCount__flex">
                        { idx % 2 !== 0 && <button className="AddCount" onClick={()=> addTime2(idx, -1)}>-</button> }
                        { idx % 2 !== 0 && <button className="AddCount" onClick={()=> addTime2(idx, 5)}>+</button> }
                        { idx % 2 === 0 && <div className="ResultTime">{item.time2}</div> }
                      </div>
                    </div>
                  </div>
                )) }
              </div>
            <div>
              {/* <button onClick={(e) => handleClickDownloadButton(e, "xlsx")}>
                Excel印刷
              </button> */}
              {/* <button onClick={(e) => handleClickDownloadButton(e, "csv")}>
                CSV形式
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Process;