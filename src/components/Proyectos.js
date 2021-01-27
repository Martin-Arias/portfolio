import React from 'react'
import './Proyectos.css'

import siono from '../siono.png'
import celebration from '../Celebration.png'
import sugarboo from '../sugarboo.png'

import Proyecto from './Proyecto';

export const Proyectos = () => {
    return (

        <section className="projects" id="projects" >
            <section className="titleSection">
                <h1 className="projecTitle">Proyectos Realizados </h1>
            </section>

             <section className="projectSection">
             <Proyecto titulo="Siono" descripcion="lorem ipsumlorem ipsumlorem ipsumlorem ipsum" imagen={siono} url="https://siono.io"/>
             <Proyecto titulo="Celebration Company Ecommerce" descripcion="lorem ipsum" imagen={celebration} url="https://store.celebrationcompany.org/"/>
             <Proyecto titulo="Sugarboo Ecommerce" descripcion="lorem ipsum" imagen={sugarboo} url="https://www.sugarbooandco.com/"/>

            
            </section> 
            
           
        </section>

    )
}
