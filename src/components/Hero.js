import React from 'react'
import './Hero.css'
import code from '../code.svg'


export const Hero = () => {
    return (

        
        <section className="main" id="main">
       
        <section className="left">
            <p className="title">Desarrollador Front End</p>
            <p className="msg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex nihil rerum itaque quisquam!
                Natus repudiandae nesciunt tempora odio amet. Saepe?</p>
            {/* <button class="cta">Learn More</button> */}
        </section>

        <section className="right">
           <img src={code} alt="Landing"/> 
        </section>

    </section>
  
    )
}
