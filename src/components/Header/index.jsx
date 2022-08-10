import React from "react";
import { NavLink, Link } from "react-router-dom";
import logoKasa from "../../assets/logo.svg";

function Header() {
  let activeStyle = {
    textDecoration: "underline",
  }

  return (
     <header className="header">
      <div className="logo">
        <Link to="/">
          <img src={logoKasa} alt="logo" className="logoHeader"></img>
        </Link>
      </div>
        <nav className="navbar">
              <NavLink 
                className="navHome" 
                to="/"
                style={({ isActive }) => 
                isActive ? activeStyle : undefined
                }
              >
                Accueil
              </NavLink>
                <NavLink 
                className="navAbout" 
                to="/about"
                style={({ isActive }) => 
                isActive ? activeStyle : undefined
                }
              >
                A propos
              </NavLink>
        </nav>
        </header>
  );
}

export default Header;
