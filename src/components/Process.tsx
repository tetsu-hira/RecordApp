import { useState } from "react";
import * as React from 'react';
import ExcelJS from "exceljs";
// import File from "./File";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd"
// import { useEffect } from "react";
// import Select from 'react-select';
// import ReactDOM from "react-dom";


type Pro = {
  id: number
  name: string
  work: string
}

const MC: Pro[] = [
  {
    id: 10,
    name: "MC仕掛",
    work: "MC"
  }, {
    id: 11,
    name: "MC プログラム作成",
    work: "MC-PRG"
  }, {
    id: 12,
    name: "MC1-40",
    work: "MC1-40"
  }, {
    id: 13,
    name: "MC1-50",
    work: "MC1-50"
  }, {
    id: 14,
    name: "VM53R",
    work: "VM53R"
  }, {
    id: 15,
    name: "VM73",
    work: "VM73"
  }
]
const LE: Pro[] = [
  {
    id: 20,
    name: "LE仕掛",
    work: "LE"
  }, {
    id: 21,
    name: "LE",
    work: "LE"
  }, {
    id: 22,
    name: "LEプログラム作成",
    work: "LE-PRG"
  }, {
    id: 23,
    name: "森精機",
    work: "LE-MORI"
  }, {
    id: 24,
    name: "中村留",
    work: "LE-TOME"
  }
]
const MV: Pro[] = [
  {
    id: 30,
    name: "MV仕掛",
    work: "MV"
  }, {
    id: 31,
    name: "MV-2",
    work: "MV-2"
  }, {
    id: 32,
    name: "MV-3",
    work: "MV-3"
  }, {
    id: 33,
    name: "MV-J",
    work: "MV-J"
  }, {
    id: 34,
    name: "材料取り",
    work: "ZAIRYO"
  }, {
    id: 35,
    name: "DU",
    work: "DU"
  }, {
    id: 36,
    name: "SO",
    work: "SO"
  }
]
const HQ: Pro[] = [
  {
    id: 40,
    name: "熱処理仕掛",
    work: "HQ"
  }, {
    id: 41,
    name: "岡熱",
    work: "OKAYA"
  }, {
    id: 42,
    name: "大和精",
    work: "DAIWA"
  }, {
    id: 43,
    name: "社内HQ",
    work: "HQ1"
  }, {
    id: 44,
    name: "ウメトク熱処理",
    work: "UMETOKU HQ"
  }, {
    id: 45,
    name: "中信高周波",
    work: "KOSHUHA"
  }, {
    id: 46,
    name: "室蘭ヒート",
    work: "MUROHI"
  }
]
const SL: Pro[] = [
  {
    id: 50,
    name: "SG-L仕掛",
    work: "SG-L"
  }
]
const SG: Pro[] = [
  {
    id: 60,
    name: "SG仕掛",
    work: "SG"
  }
]
const CG: Pro[] = [
  {
    id: 70,
    name: "CG仕掛",
    work: "CG"
  }, {
    id: 71,
    name: "CG-1",
    work: "CG-1"
  }, {
    id: 72,
    name: "CG-2",
    work: "CG-2"
  }
]
const PG: Pro[] = [
  {
    id: 80,
    name: "PG仕掛",
    work: "PG"
  }, {
    id: 81,
    name: "PG プログラム作成",
    work: "PG-PRG"
  }, {
    id: 82,
    name: "PG-O",
    work: "PG-O"
  }, {
    id: 83,
    name: "PGX",
    work: "PGX"
  }, {
    id: 84,
    name: "SPG",
    work: "SPG"
  }
]
const ED: Pro[] = [
  {
    id: 90,
    name: "ED仕掛",
    work: "ED"
  }
]
const EH: Pro[] = [
  {
    id: 100,
    name: "EDH仕掛",
    work: "EDH"
  }, {
    id: 101,
    name: "EDH",
    work: "EDH"
  }, {
    id: 102,
    name: "EDH-NC",
    work: "EDH-NC"
  }
]
const JG: Pro[] = [
  {
    id: 110,
    name: "JG仕掛",
    work: "JG-0"
  }, {
    id: 111,
    name: "JG",
    work: "JG"
  }, {
    id: 112,
    name: "JG-NC",
    work: "JG-NC"
  }
]
const WQ: Pro[] = [
  {
    id: 120,
    name: "WE水仕掛",
    work: "WEQ"
  }, {
    id: 121,
    name: "WE プログラム作成",
    work: "WE-PRG"
  }
]
const WP: Pro[] = [
  {
    id: 130,
    name: "WE油仕掛",
    work: "WEP"
  }
]
const MT: Pro[] = [
  {
    id: 140,
    name: "MC2仕掛",
    work: "MC2"
  }, {
    id: 141,
    name: "MC2-1",
    work: "MC2-1"
  }, {
    id: 142,
    name: "MC2-2",
    work: "MC2-2"
  }, {
    id: 143,
    name: "MC2-3",
    work: "MC2-3"
  }, {
    id: 144,
    name: "MC2-4",
    work: "MC2-4"
  }, {
    id: 145,
    name: "MC2-5",
    work: "MC2-5"
  }, {
    id: 146,
    name: "MC2-6",
    work: "MC2-6"
  }, {
    id: 147,
    name: "モデル NC 作成",
    work: "MODEL-NC"
  }
]
const CH: Pro[] = [
  {
    id: 150,
    name: "検査仕掛",
    work: "CHK"
  }, {
    id: 151,
    name: "検ﾍﾞｱﾄﾞ",
    work: "CHK1"
  }, {
    id: 152,
    name: "検ｺﾝﾄﾚ",
    work: "CHK2"
  }, {
    id: 153,
    name: "検他",
    work: "CHK3"
  }, {
    id: 154,
    name: "検ATOS",
    work: "ATOS"
  }
]
const FL: Pro[] = [
  {
    id: 160,
    name: "仕上仕掛",
    work: "FIN"
  }, {
    id: 161,
    name: "LM",
    work: "LM"
  }, {
    id: 162,
    name: "FL",
    work: "FL"
  }, {
    id: 163,
    name: "仕上",
    work: "FIN"
  }, {
    id: 164,
    name: "バラシ",
    work: "BARASI"
  }, {
    id: 165,
    name: "組立",
    work: "BUILD"
  }
]
const EN: Pro[] = [
  {
    id: 170,
    name: "完了仕掛",
    work: "END"
  }, {
    id: 171,
    name: "出荷",
    work: "SHIP"
  }, {
    id: 172,
    name: "設計保管",
    work: "SEKKEI"
  }, {
    id: 173,
    name: "生産管理保管",
    work: "SEIKAN"
  }
]

type Pros = {
  name: string
  time: number
  count: string
}
// type Cell = {
//   name: string
//   time: number
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
const a:string = "a"

const Process: React.FC = () => {
  const [ plan, setPlan] = useState<Pros[]>([{name: "開始", time: 0.10, count: "b"}]);
  const [ time, setTime ] = useState<number>(0);
  const [ count, setCount ] = useState<string>("a");
  const [ mcName, setMCName] = useState<string>(MC[0].name);
  const [ leName, setLEName] = useState<string>(LE[0].name);
  const [ mvName, setMVName] = useState<string>(MV[0].name);
  const [ hqName, setHQName] = useState<string>(HQ[0].name);
  const [ slName, setSLName] = useState<string>(SL[0].name);
  const [ sgName, setSGName] = useState<string>(SG[0].name);
  const [ cgName, setCGName] = useState<string>(CG[0].name);
  const [ pgName, setPGName] = useState<string>(PG[0].name);
  const [ edName, setEDName] = useState<string>(ED[0].name);
  const [ ehName, setEHName] = useState<string>(EH[0].name);
  const [ jgName, setJGName] = useState<string>(JG[0].name);
  const [ wqName, setWQName] = useState<string>(WQ[0].name);
  const [ wpName, setWPName] = useState<string>(WP[0].name);
  const [ mtName, setMTName] = useState<string>(MT[0].name);
  const [ chName, setCHName] = useState<string>(CH[0].name);
  const [ flName, setFLName] = useState<string>(FL[0].name);
  const [ enName, setENName] = useState<string>(EN[0].name);

  const clickAddMC = () => {setCount(count + a); setPlan([...plan, {name: mcName, time: 0.25, count: count }]);}
  const clickAddLE = () => {setCount(count + a); setPlan([...plan, {name: leName, time: 0.25, count: count }]);}
  const clickAddMV = () => {setCount(count + a); setPlan([...plan, {name: mvName, time: 0.25, count: count }]);}
  const clickAddHQ = () => {setCount(count + a); setPlan([...plan, {name: hqName, time: 0.25, count: count }]);}
  const clickAddSL = () => {setCount(count + a); setPlan([...plan, {name: slName, time: 0.25, count: count }]);}
  const clickAddSG = () => {setCount(count + a); setPlan([...plan, {name: sgName, time: 0.25, count: count }]);}
  const clickAddCG = () => {setCount(count + a); setPlan([...plan, {name: cgName, time: 0.25, count: count }]);}
  const clickAddPG = () => {setCount(count + a); setPlan([...plan, {name: pgName, time: 0.25, count: count }]);}
  const clickAddED = () => {setCount(count + a); setPlan([...plan, {name: edName, time: 0.25, count: count }]);}
  const clickAddEH = () => {setCount(count + a); setPlan([...plan, {name: ehName, time: 0.25, count: count }]);}
  const clickAddJG = () => {setCount(count + a); setPlan([...plan, {name: jgName, time: 0.25, count: count }]);}
  const clickAddWQ = () => {setCount(count + a); setPlan([...plan, {name: wqName, time: 0.25, count: count }]);}
  const clickAddWP = () => {setCount(count + a); setPlan([...plan, {name: wpName, time: 0.25, count: count }]);}
  const clickAddMT = () => {setCount(count + a); setPlan([...plan, {name: mtName, time: 0.25, count: count }]);}
  const clickAddCH = () => {setCount(count + a); setPlan([...plan, {name: chName, time: 0.25, count: count }]);}
  const clickAddFL = () => {setCount(count + a); setPlan([...plan, {name: flName, time: 0.25, count: count }]);}
  const clickAddEN = () => {setCount(count + a); setPlan([...plan, {name: enName, time: 0.25, count: count }]);}
  
  // const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => { 
  //   setMCName(e.target.value); 
  //   console.log(e);
  //   }

  const handleRemoveTask = (index:number) => {
    const newPlan = [...plan]
    newPlan.splice(index, 1)
    setPlan(newPlan)
  }

  const addTime = (index:number, minute:number) => {
    const targetPlan: any = plan.find((elem) => plan[index] === elem )
    targetPlan.time = targetPlan.time + minute
    setTime(targetPlan.time)
    console.log(time);
  }

  // const [ data, setData ] = useState<Pros[]>([]);
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
      { header: "時間", key: "time", width: 20}
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

  const handleOnDragEnd = (result:any) => {
    const items = Array.from(plan);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setPlan(items);
  }

  console.log(plan);
  
  return (
    <div className="Process">
      <div className="ProcessContainer">
        <div className="ProcessMain">
          <div className="ProcessList">
            <h1>【設備一覧】</h1>
            <div className="ProcessList__Border">
              <div className="SelectBox">
                <select onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>{ setMCName(e.target.value)}} defaultValue={MC[0].name}>
                  { MC.map((item: Pro) => (
                    <option key={ item.id }>{ item.name }</option>
                  )) }
                </select>
                <button onClick={clickAddMC} className="btn AddPlan">追 加</button>
              </div>
              <div className="SelectBox">
                <select onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>{ setLEName(e.target.value)}} defaultValue={LE[0].name}>
                  { LE.map((item: Pro) => (
                    <option key={ item.id }>{ item.name }</option>
                  )) }
                </select>
                <button onClick={clickAddLE} className="btn AddPlan">追 加</button>
              </div>
              <div className="SelectBox">
                <select onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>{ setMVName(e.target.value)}} defaultValue={MV[0].name}>
                  { MV.map((item: Pro) => (
                    <option key={ item.id }>{ item.name }</option>
                  )) }
                </select>
                <button onClick={clickAddMV} className="btn AddPlan">追 加</button>
              </div>
              <div className="SelectBox">
                <select onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>{ setHQName(e.target.value)}} defaultValue={HQ[0].name}>
                  { HQ.map((item: Pro) => (
                    <option key={ item.id }>{ item.name }</option>
                  )) }
                </select>
                <button onClick={clickAddHQ} className="btn AddPlan">追 加</button>
              </div>
              <div className="SelectBox">
                <select onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>{ setSLName(e.target.value)}} defaultValue={SL[0].name}>
                  { SL.map((item: Pro) => (
                    <option key={ item.id }>{ item.name }</option>
                  )) }
                </select>
                <button onClick={clickAddSL} className="btn AddPlan">追 加</button>
              </div>
              <div className="SelectBox">
                <select onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>{ setSGName(e.target.value)}} defaultValue={SG[0].name}>
                  { SG.map((item: Pro) => (
                    <option key={ item.id }>{ item.name }</option>
                  )) }
                </select>
                <button onClick={clickAddSG} className="btn AddPlan">追 加</button>
              </div>
              <div className="SelectBox">
                <select onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>{ setCGName(e.target.value)}} defaultValue={CG[0].name}>
                  { CG.map((item: Pro) => (
                    <option key={ item.id }>{ item.name }</option>
                  )) }
                </select>
                <button onClick={clickAddCG} className="btn AddPlan">追 加</button>
              </div>
              <div className="SelectBox">
                <select onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>{ setPGName(e.target.value)}} defaultValue={PG[0].name}>
                  { PG.map((item: Pro) => (
                    <option key={ item.id }>{ item.name }</option>
                  )) }
                </select>
                <button onClick={clickAddPG} className="btn AddPlan">追 加</button>
              </div>
              <div className="SelectBox">
                <select onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>{ setEDName(e.target.value)}} defaultValue={ED[0].name}>
                  { ED.map((item: Pro) => (
                    <option key={ item.id }>{ item.name }</option>
                  )) }
                </select>
                <button onClick={clickAddED} className="btn AddPlan">追 加</button>
              </div>
              <div className="SelectBox">
                <select onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>{ setEHName(e.target.value)}} defaultValue={EH[0].name}>
                  { EH.map((item: Pro) => (
                    <option key={ item.id }>{ item.name }</option>
                  )) }
                </select>
                <button onClick={clickAddEH} className="btn AddPlan">追 加</button>
              </div>
              <div className="SelectBox">
                <select onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>{ setJGName(e.target.value)}} defaultValue={JG[0].name}>
                  { JG.map((item: Pro) => (
                    <option key={ item.id }>{ item.name }</option>
                  )) }
                </select>
                <button onClick={clickAddJG} className="btn AddPlan">追 加</button>
              </div>
              <div className="SelectBox">
                <select onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>{ setWQName(e.target.value)}} defaultValue={WQ[0].name}>
                  { WQ.map((item: Pro) => (
                    <option key={ item.id }>{ item.name }</option>
                  )) }
                </select>
                <button onClick={clickAddWQ} className="btn AddPlan">追 加</button>
              </div>
              <div className="SelectBox">
                <select onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>{ setWPName(e.target.value)}} defaultValue={WP[0].name}>
                  { WP.map((item: Pro) => (
                    <option key={ item.id }>{ item.name }</option>
                  )) }
                </select>
                <button onClick={clickAddWP} className="btn AddPlan">追 加</button>
              </div>
              <div className="SelectBox">
                <select onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>{ setMTName(e.target.value)}} defaultValue={MT[0].name}>
                  { MT.map((item: Pro) => (
                    <option key={ item.id }>{ item.name }</option>
                  )) }
                </select>
                <button onClick={clickAddMT} className="btn AddPlan">追 加</button>
              </div>
              <div className="SelectBox">
                <select onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>{ setCHName(e.target.value)}} defaultValue={CH[0].name}>
                  { CH.map((item: Pro) => (
                    <option key={ item.id }>{ item.name }</option>
                  )) }
                </select>
                <button onClick={clickAddCH} className="btn AddPlan">追 加</button>
              </div>
              <div className="SelectBox">
                <select onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>{ setFLName(e.target.value)}} defaultValue={FL[0].name}>
                  { FL.map((item: Pro) => (
                    <option key={ item.id }>{ item.name }</option>
                  )) }
                </select>
                <button onClick={clickAddFL} className="btn AddPlan">追 加</button>
              </div>
              <div className="SelectBox">
                <select onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>{ setENName(e.target.value)}} defaultValue={EN[0].name}>
                  { EN.map((item: Pro) => (
                    <option key={ item.id }>{ item.name }</option>
                  )) }
                </select>
                <button onClick={clickAddEN} className="btn AddPlan">追 加</button>
              </div>
            </div>
          </div>
          <div className="Result">
            <h1 className="title">【工程設計】</h1>
            <DragDropContext onDragEnd={handleOnDragEnd}>
              <Droppable droppableId="Result__Border">
                {(provided) => (
                  <div className="Result__Border" {...provided.droppableProps} ref={provided.innerRef}>
                    { plan.map((item, idx: number) => (
                      <Draggable key={item.count} draggableId={item.count} index={idx}>
                        {(provided) => (
                          <div className="Flex" key={idx} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                            <div className="ResultIndex">{idx}</div>
                            <div className="ResultName">{item.name}</div>
                            <div className="ResultTime">{item.time.toFixed(2)}h</div>
                            <button className="AddCount" onClick={()=> addTime(idx, -0.25)}>-0.25</button>
                            <button className="AddCount" onClick={()=> addTime(idx, 0.25)}>+0.25</button>
                            <button className="AddCount" onClick={()=> addTime(idx, 1.00)}>+1.00</button>
                            <button className="AddCount" onClick={()=> addTime(idx, 10.0)}>+10.0</button>
                            <button className="DeleteButton" onClick={()=> handleRemoveTask(idx)}>削 除</button>
                          </div>
                        )}
                      </Draggable>
                    )) }
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </DragDropContext>
            <div>
              <button onClick={(e) => handleClickDownloadButton(e, "xlsx")}>
                Excel印刷
              </button>
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