import React from 'react'
import '../../styles/Lacados.scss'
import SideBar from './SideBar';
import {LacadosData} from '../Diseña_tu_cocina/DesignData';

export default function Lacados() {
    // let isTouchScreen = (('ontouchstart' in window) ||(navigator.MaxTouchPoints > 0) ||(navigator.msMaxTouchPoints > 0));
 
    const {zonas,modelos,lacados,grosores,urls}=LacadosData;

    let SectionOne=()=>{
        return (
                <section className="lacados__section-one">
                    <div className="lacados__section-one--image-container"></div>
                    <div className="lacados__section-one--header" >
                        <div className="lacados__section-one--header-content">
                            <p className="lacados__section-one--header--A">Estilo</p>
                            <p className="lacados__section-one--header--B">LACADOS</p>
                        </div>
                    </div>
                </section>
        )
    }

    let SectionTwo=()=>{
        return (
            <section className="lacados__section-two">
                <div style={{height:'fitContent'}}>
                    <div className="lacados__section-two--header">Características de los Lacados</div>
                    <div className="lacados__section-two--separation-bar"></div>
                    <br/><br/>
                    <div className="lacados__section-two--caracteristicas">Las cocinas lacadas están fabricadas en tablero de madera MDF, un material elaborado con fibras de madera de estructura uniforme que permite un acabado perfecto para el lacado. A los tableros se les aplican varias capas de pintura de poliéster y un acabado que puede ser poliuretano o acrílico. Son menos resistentes a los arañazos, golpes y abrasiones, pero estos muebles lacados si se pueden reparar al contrario que las sintéticas. Incluso hay empresas que suministran un frasco para retoques por si hay algún golpe o arañazo.
                    <br/><br/> Los acabados de las cocinas lacadas dependen de los muebles de cocina que queramos, pero son espectaculares debido a que requieren mayor tiempo de fabricación son cocinas que suelen ser más caras. Cuantas más capas de lacado llevan más resistentes serán aunque también subirá el precio.A los muebles con tableras MDF se les aplica laca que poco a poco se seca evaporándose el disolvente y quedando sólo la laca. Un capa de laca dura pero muy delgada y para conseguir esa dureza lo que se hace es darle varias capas para que el muebles pueda tener el uso adecuado sin estropearse.
                    </div>
                </div>
            </section>
        )
    }

    let SectionThree=()=>{
        return (
                <div className="lacados__section-three" >
                    <div className="lacados__section-three--image-container"></div>
                    <div className="lacados__section-three--content-container">
                            <div className="lacados__section-three--content">Colección de lacados</div>
                            <div className="lacados__section-three--separation-bar"></div>
                    </div>
                </div>
        )
    }

    let LacadoDisplay=()=>{
        return(
            <div className="lacados--container">
                    <div className="lacados--grid">
                        <LacadoGridUnit zonas={zonas} modelos={modelos} lacados={lacados} grosores={grosores} urls={urls}/>
                    </div> 
            </div>
        )
    }

    let DoorDescriptions =({zona,modelo,lacado,grosor})=>{
        return (
        <div className="lacados__grid-unit-description"> 
            <div className="lacados__grid-unit-description-bold">Zona</div>: {zona} <br/>
            <div className="lacados__grid-unit-description-bold">Modelo</div>: {modelo} <br/>
            <div className="lacados__grid-unit-description-bold">Lacado</div>: {lacado}<br/>
            <div className="lacados__grid-unit-description-bold">Grosor</div>: {grosor} <br/>
        </div>
        )
    }

    let LacadoGridUnit=({ zonas, modelos, lacados, grosores})=>{
        return(

            <>
                {modelos.map((modelo,i)=>{
                    return(
                        <div key={`laca-doors${i}`} className="lacados--grid-unit-container">
                            <img className={'polilaminados__image'} src={urls[i]} alt={`Puerta ${modelos[i]}, acabado ${lacados[i]}`}/>
                            <DoorDescriptions zona={zonas[i]} modelo={modelo} lacado={lacados[i]} grosor={grosores[i]}/>
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
           <LacadoDisplay/>
        </div>
       
    )
   }