import React from "react";
import logoKasa from "../../assets/logo.svg";

function Footer () {
    return (
        <footer className="footer">
        <img src={logoKasa} alt="Logo Kasa" className="logoFooter"></img>
        <p className="copyright">© 2022 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer;