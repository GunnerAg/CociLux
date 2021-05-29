import React from 'react'
import '../../styles/Maderas.scss'
import SideBar from './SideBar';
import {MaderaData} from '../Diseña_tu_cocina/DesignData';

export default function Maderas() {
    // let isTouchScreen = (('ontouchstart' in window) ||(navigator.MaxTouchPoints > 0) ||(navigator.msMaxTouchPoints > 0));
    const {zonas,modelos,acabados,grosores,urls}=MaderaData;

    let SectionOne=()=>{
        return (
                <section className="maderas__section-one">
                    <div className="maderas__section-one--image-container">
                        <img className="maderas__section-one--image" src="https://res.cloudinary.com/sl-cocilux/image/upload/v1621531393/DISE%C3%91OS%20Y%20MATERIALES/7.%20MADERAS/COCINAS/Cocilux-Trabajos_Realizados-Cocinas_Madrid-MAD_1.png" alt="test"/>
                    </div>
                    <div className="maderas__section-one--header" >
                        <div className="maderas__section-one--header-content">
                            <p className="maderas__section-one--header--A">Estilo</p>
                            <p className="maderas__section-one--header--B">MADERAS</p>
                        </div>
                    </div>
                </section>
        )
    }

    let SectionTwo=()=>{
        return (
            <section className="maderas__section-two">
                <div style={{height:'fitContent'}}>
                    <div className="maderas__section-two--header">Características de la Madera. </div>
                    <div className="maderas__section-two--separation-bar"></div>
                    <br/><br/>
                    <div className="maderas__section-two--caracteristicas">Nuestros estilos de cocinas Madera con un estilo atemporal y un diseño incomparable, se caracterizan por la elegancia y el arte que crean muebles en roble, cerezo, nogal etc...
                    <br/><br/> Es un material natural ideal para todo tipo de gustos puesto que hay una infinidad de colores y texturas para elegir. Es una apuesta segura que nunca pasa de moda.
                    <br/><br/>También hay que tener en cuenta que con el paso de los años y la mejoría en muchos productos como los aceites, los barnices o las resinas, la protección de la madera es magnífica para que logre tener una durabilidad más larga en el tiempo. La madera también es un material que se limpia con facilidad y en algunos tipos como de haya, roble o iroko la resistencia a la humedad es muy buena, lo que consigue que el mueble o la propia encimera no sufra deterioro alguno.
                    <br/><br/> Estéticamente, estos diseños tienen un acabado clásico, rústico y elegante para los gustos más exquisitos.
                    </div>
                </div>
            </section>
        )
    }

    let SectionThree=()=>{
        return (
                <div className="maderas__section-three" >
                    <div className="maderas__section-three--image-container"></div>
                    <div className="maderas__section-three--content-container">
                            <div className="maderas__section-three--content">Colección de Maderas</div>
                            <div className="maderas__section-three--separation-bar"></div>
                    </div>
                </div>
        )
    }

    let MaderasDisplay=()=>{
        return(
            <div className="maderas--container">
                    <div className="maderas--grid">
                        <MaderaGridUnit zonas={zonas} modelos={modelos} acabados={acabados} grosores={grosores} urls={urls}/>
                    </div> 
            </div>
        )
    }

    let DoorDescriptions =({zona,modelo,acabado,grosor})=>{
        return (
        <div className="maderas__grid-unit-description"> 
            <div className="maderas__grid-unit-description-bold">Zona</div>: {zona} <br/>
            <div className="maderas__grid-unit-description-bold">Modelo</div>: {modelo} <br/>
            <div className="maderas__grid-unit-description-bold">Acabado</div>: {acabado}<br/>
            <div className="maderas__grid-unit-description-bold">Grosor</div>: {grosor} <br/>
        </div>
        )
    }

    let MaderaGridUnit=({ zonas, modelos, acabados, grosores})=>{
        return(

            <>
                {modelos.map((modelo,i)=>{
                    return(
                        <div key={`mad-doors${i}`} className="maderas--grid-unit-container">
                        <img className={'polilaminados__image'} src={urls[i]} alt={`Puerta ${modelos[i]}, acabado ${acabados[i]}`}/>
                            <DoorDescriptions zona={zonas[i]} modelo={modelo} acabado={acabados[i]} grosor={grosores[i]}/>
                        </div>
                    )
                })}
            </>
        )
    }

    return(
        <div style={{overflow:'hidden'}}>
           <SideBar/>
           <SectionOne/>
           <SectionTwo/>
           <SectionThree/>
           <MaderasDisplay/>
        </div>
       
    )
   }