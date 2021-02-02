import React from 'react'
import '../styles/Footer.css'
export const Footer = () => {


    return (    

        <div className="footer" id="contact">
            <h1 className="more">Más Información</h1>
            <div className="footerIcons">
               
                <a href="https://www.linkedin.com/in/arias-martin/" target="_blank" rel="noopener noreferrer"> <i className="fab fa-linkedin fa-2x"></i></a>
                <a href="https://github.com/Martin-Arias" target="_blank" rel="noopener noreferrer"><i className="fab fa-github-square fa-2x"></i></a>
                <a href="mailto:arias95martin@gmail.com"><i className="fas fa-envelope-square fa-2x"> </i></a>

            </div>
            {/* <p className="copy">
                &copy; Martin Arias {new Date().getFullYear()}
            </p> */}

        </div>
    )
}
