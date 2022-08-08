import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import logoKasa from "../../assets/logo.svg";

function Header() {
  return (
    <Router>
     <header className="header">
      <div className="logo">
         <img src={logoKasa} alt="logo"></img>
      </div>
        <nav className="navbar">
              <Link className="navHome" to="/">Accueil</Link>
              <Link className="navAbout" to="/about">A propos</Link>
        </nav>
        </header>
    </Router>
  );
}

export default Header;
