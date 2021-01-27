import React, { useState } from 'react'
import './NavBar.css'
export const NavBar = () => {

    const [state, setstate] = useState(false)

    const handleClick = () =>{
        setstate(!state)
        console.log(state);
    }

    return (
        <header>
        <h1>Martin Arias <i className="fas fa-terminal"></i></h1>
        
        <section className={state ? 'menu opened' : 'menu'}>
        <ul className="menu-list">

          <li><i className=" close fas fa-times" onClick={ handleClick }></i></li>
          <li><a href="#main"  onClick={ handleClick }>Acerca de mi</a></li>
          <li><a href="#projects"  onClick={ handleClick }>Proyectos</a></li>
          <li><a href="#projects"  onClick={ handleClick } >Contacto</a> </li>
        
        </ul>   
        <i className="burger fas fa-bars fa-2x" onClick={ handleClick }></i>
        </section>
      </header>
    )
}
