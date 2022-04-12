import React from "react";
import "./Modules.css";

import HTML5 from "../img/logo-html5.png";
import CSS3 from "../img/logo-css3.png";
import JavaScript from "../img/logo-js.png";
import NodeJs from "../img/logo-nodejs.png";
import ReactJs from "../img/logo-reactjs.png";

export default () =>
    <section className="modules">
        <h1>Módulos</h1>
        <h2>O curso de <strong>Desenvolvimento Web </strong><br/>é composto por 5 módulos</h2>
        <div className="modules-list">
            <div>
                <img src={HTML5} alt="html"/>
                <h3>HTML5</h3>
                <p>Módulo 1</p>
            </div>
            <div>
                <img src={CSS3} alt="CSS3"/>
                <h3>CSS3</h3>
                <p>Módulo 2</p>
            </div>
            <div>
                <img src={JavaScript} alt="JavaScript"/>
                <h3>JavaScript</h3>
                <p>Módulo 3</p>
            </div>
            <div>
                <img src={NodeJs} alt="Node.js"/>
                <h3>Node.js</h3>
                <p>Módulo 4</p>
            </div>
            <div>
                <img src={ReactJs} alt="React.js"/>
                <h3>React.js</h3>
                <p>Módulo 5</p>
            </div>
        </div>
    </section>