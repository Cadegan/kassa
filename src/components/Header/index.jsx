import React from "react";
import { BrowserRouter as Link } from "react-router-dom";
import {logoKasa} from "../../assets/logo.svg"

function Header() {
  return (
      <header className="header">
      <div className="logo">
         <img src={logoKasa} alt="logo"></img>
      </div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
        </header>
  );
}

export default Header;
