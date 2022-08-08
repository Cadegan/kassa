import React from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import logoKasa from "../../assets/logo.svg";

function Header() {
  let activeStyle = {
    textDecoration: "underline",
  }

  let activeClassName = "underline"

  return (
    <Router>
     <header className="header">
      <div className="logo">
         <img src={logoKasa} alt="logo"></img>
      </div>
        <nav className="navbar">
              <NavLink className="navHome" to="/">Accueil</NavLink>
              <NavLink className="navAbout" to="/about">A propos</NavLink>
        </nav>
        </header>
    </Router>
  );
}

export default Header;
