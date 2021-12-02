import React from 'react';
import { useState } from "react";
import { useEffect } from "react";




const Header: React.FC = () => {
const [ title, setTitle ] = useState<string>("＜ここをクリックして大会名や部門を入力してください＞")

  const changeTitle = (e:any) => {
    setTitle(e.target.value);
  }
  const titleClear = () => {
    setTitle('');
  }

  useEffect(() => {
    // Update the document title using the browser API
    document.title = title
  });

  return (
    <div className="Header">
        <input className="HeaderTitle" type="text" onChange={changeTitle} onClick={titleClear} value={title} />
    </div>
  )
}


export default Header;
