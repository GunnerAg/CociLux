import React  from 'react'
import '../../styles/Polilaminados.scss'
import SideBar from './SideBar';
import {PolilaminadoData} from '../Diseña_tu_cocina/DesignData'

export default function Polilaminados() {
    // let isTouchScreen = (('ontouchstart' in window) ||(navigator.MaxTouchPoints > 0) ||(navigator.msMaxTouchPoints > 0));
    
    const {zonas,modelos,folios,grosores,urls}=PolilaminadoData;

    let SectionOne=()=>{
        return (
                <section className="polilaminados__section-one">
                    <div className="polilaminados__section-one--image-container">
                        <img className="polilaminados__section-one--image" src="https://res.cloudinary.com/sl-cocilux/image/upload/f_auto/v1621528368/DISE%C3%91OS%20Y%20MATERIALES/4.%20POLILAMINADOS/COCINAS/Cocilux-Trabajos_Realizados-Cocinas_Madrid-MODEPOL_1.png" alt="background cocina estilo polilaminado"/>
                    </div>
                    <div className="polilaminados__section-one--header" >
                        <div className="polilaminados__section-one--header-content">
                            <p className="polilaminados__section-one--header--A">Estilo</p>
                            <p className="polilaminados__section-one--header--B">POLILAMINADO</p>
                        </div>
                    </div>
                </section>
        )
    }

    let SectionTwo=()=>{
        return (
            <section className="polilaminados__section-two">
                <div style={{height:'fitContent'}}>
                    <div className="polilaminados__section-two--header">Características del Polilaminado</div>
                    <div className="polilaminados__section-two--separation-bar"></div>
                    <br/><br/>
                    <div className="polilaminados__section-two--caracteristicas">El Polilaminado se trata de tableros de fibra de maderas (MDF) y resinas sintéticas recubiertas con un folio de vinilo que puede llegar a cubrir incluso los cantos. Ésta se aplica mediante calor, adaptando diferentes formas y relieves. Existen una variedad de diseños en colores lisos o imitaciones de madera. La contracara se recubre con melamina de diseño.
                    <br/><br/> Este sistema aporta una mayor densidad de la que presentan aglomerados tradicionales o la madera contrachapada. Durante el proceso de fabricación se pueden añadir determinados productos químicos con el fin de añadir características adicionales al MDF, como repeler el agua o evitar la aparición de hongos o moho.
                    <br/><br/> Estéticamente, nos da un acabado elegante y moderno, que en cuestión calidad / precio, sin duda es una opción acertada.
                    </div>
                </div>
            </section>
        )
    }

    let SectionThree=()=>{
        return (
                <div className="polilaminados__section-three" >
                    <div className="polilaminados__section-three--image-container"></div>
                    <div className="polilaminados__section-three--content-container">
                            <div className="polilaminados__section-three--content">Colección de Polilaminados</div>
                            <div className="polilaminados__section-three--separation-bar"></div>
                    </div>
                </div>
        )
    }

    let PolilaminadoDisplay=()=>{
        return(
            <div className="polilaminados--container">
                    <div className="polilaminados--grid">
                        <PolilaminadoGridUnit zonas={zonas} modelos={modelos} folios={folios} grosores={grosores} urls={urls}/>
                    </div> 
            </div>
        )
    }

    let DoorDescriptions =({zona,modelo,folio,grosor})=>{
        return (
        <div className="polilaminados__grid-unit-description"> 
            <div className="polilaminados__grid-unit-description-bold">Zona</div>: {zona} <br/>
            <div className="polilaminados__grid-unit-description-bold">Modelo</div>: {modelo} <br/>
            <div className="polilaminados__grid-unit-description-bold">Folio</div>: {folio}<br/>
            <div className="polilaminados__grid-unit-description-bold">Grosor</div>: {grosor} <br/>
        </div>
        )
    }

    let PolilaminadoGridUnit=({ zonas, modelos, folios, grosores})=>{
        return(

            <>
                {modelos.map((modelo,i)=>{
                    return(
                        <div key={`poli-doors${i}`} className="polilaminados--grid-unit-container">
                            <img className={'polilaminados__image'} src={urls[i]} alt={`Puerta ${modelos[i]}, acabado ${folios[i]}`}/>
                            <DoorDescriptions zona={zonas[i]} modelo={modelo} folio={folios[i]} grosor={grosores[i]}/>
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
           <PolilaminadoDisplay/>
        </div>
       
    )
   }