import React from 'react'
import '../styles/Hero.css'
import code from '../img/code.svg'

import {ReactComponent as JavaScriptLogo} from '../img/icons/javascript.svg';
import {ReactComponent as NodeLogo} from '../img/icons/nodejs.svg';
import {ReactComponent as ReactLogo} from '../img/icons/react.svg';
import {ReactComponent as HtmlLogo} from '../img/icons/html.svg';
import {ReactComponent as CssLogo} from '../img/icons/css3.svg';

export const Hero = () => {
    return (

        
        <section className="main" id="main">
       
        <section className="left">
            <p className="title">Desarrollador Front End</p>
            <p className="msg">"+1 Año de experiencia realizando sitios web, gran experiencia en plataformas de desarrollo de E-Commerce"</p>
            <p className="icons">
                <HtmlLogo/>
                <CssLogo/>
                <JavaScriptLogo/>
                <ReactLogo/>
                <NodeLogo/>
             </p>
        </section>

        <section className="right">
           <img src={code} alt="Landing"/> 
        </section>

       <a href="#main" className="upBtn"><i class="fas fa-chevron-circle-up fa-3x"></i></a>
    </section>
  
    )
}
