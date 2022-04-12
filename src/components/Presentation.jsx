import React from "react";
import "./Presentation.css";

import Logo from "../img/logo.png";

export default () =>
    <section className="presentation">
        <img src={Logo} alt="logo" />
        <div className="curso">
            <h1>Curso de</h1>
            <h1>Desenvolvimento</h1>
            <h1>Web</h1>
            <h1>(HTML5, CSS3, JS, Node.js e React.js)</h1>
        </div>
        <a href="#sale"><div className="button">QUERO ME TORNAR UM <br/>DESENVOLVEDOR WEB!</div></a>  
    </section>