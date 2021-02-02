import React from 'react'
import '../styles/Proyectos.css'

import siono from '../img/siono.png'
import celebration from '../img/Celebration.png'
import sugarboo from '../img/sugarboo.png'

import Proyecto from './Proyecto';

export const Proyectos = () => {
    return (

        <section className="projects" id="projects" >
            <section className="titleSection">
                <h1 className="projecTitle">Proyectos Realizados </h1>
            </section>

             <section className="projectSection">
             <Proyecto titulo="Siono Website" descripcion="" imagen={siono} url="https://siono.io"/>
             <Proyecto titulo="Celebration Company Ecommerce" descripcion="" imagen={celebration} url="https://store.celebrationcompany.org/"/>
             <Proyecto titulo="Sugarboo Ecommerce" descripcion="" imagen={sugarboo} url="https://www.sugarbooandco.com/"/>

            
            </section> 
            
           
        </section>

    )
}
