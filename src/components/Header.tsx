import React from 'react';
import File from "./File";




const Header: React.FC = () => {
  return (
    <div className="Header">
      <h1>
        <a href="/">Process Design</a>
      </h1>
      <ul className="Jump">
        <File />
        <li className="JumpList">
          <a href="/" className="JumpList__item">GOAL</a>
        </li>
        <li className="JumpList">
          <a href="/" className="JumpList__item">BASE</a>
        </li>
        <li className="JumpList">
          <a href="/" className="JumpList__item">RECORD</a>
        </li>
        <li className="JumpList">
          <a href="/" className="JumpList__item">EVENT</a>
        </li>
      </ul>
    </div>
  )
}


export default Header;
