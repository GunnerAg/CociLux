import React from 'react'
import '../../styles/Canteados.scss'
import SideBar from './SideBar';
import {CanteadoData} from '../Diseña_tu_cocina/DesignData'

export default function Canteados() {
    // let isTouchScreen = (('ontouchstart' in window) ||(navigator.MaxTouchPoints > 0) ||(navigator.msMaxTouchPoints > 0));

    const {zonas,modelos,acabados,grosores,urls}=CanteadoData;

    let SectionOne=()=>{
        return (
                <section className="canteados__section-one">
                    <div className="canteados__section-one--image-container">
                        <img className="canteados__section-one--image" src="https://res.cloudinary.com/sl-cocilux/image/upload/v1621527958/DISE%C3%91OS%20Y%20MATERIALES/3.%20CANTEADO/COCINAS/Cocilux-Trabajos_Realizados-Cocinas_Madrid-CAN_1.jpg" alt="test"/>
                    </div>
                    <div className="canteados__section-one--header" >
                        <div className="canteados__section-one--header-content">
                            <p className="canteados__section-one--header--A">Estilo</p>
                            <p className="canteados__section-one--header--B">CANTEADO</p>
                        </div>
                    </div>
                </section>
        )
    }

    let SectionTwo=()=>{
        return (
            <section className="canteados__section-two">
                <div style={{height:'fitContent'}}>
                    <div className="canteados__section-two--header">Características del Canteado</div>
                    <div className="canteados__section-two--separation-bar"></div>
                    <br/><br/>
                    <div className="canteados__section-two--caracteristicas">El canteado láser consiste en un proceso en el que se aplica sobre los tableros un haz de láser que calienta la cinta de cantear por el lado donde existen agentes absorbentes. Esto provoca que la cinta se una con el tablero quedando ambas partes soldadas, ofreciendo un aspecto muy estético y altamente funcional. Con este proceso evitamos la utilización de colas las cuales pueden ensuciar el trabajo de montaje o pueden dar problemas de unión al cabo del tiempo.
                    <br/> El canteado láser ofrece un mejor sellado entre el canto y el tablero, esto ofrece una disminución de filtraciones de agua hacia el interior e incrementa la vida útil de la cocina.
                    <br/><br/>Estéticamente, el diseño de estos diseños son espectaculares y elegantes, ya que a simple vista, no se aprecia separación entre el
                    tablero y la cinta, es decir, la junta es invisible, proporcionando un
                    acabado excepcional del arco.
                    </div>
                </div>
            </section>
        )
    }

    let SectionThree=()=>{
        return (
                <div className="canteados__section-three" >
                    <div className="canteados__section-three--image-container"></div>
                    <div className="canteados__section-three--content-container">
                            <div className="canteados__section-three--content">Colección de Canteados</div>
                            <div className="canteados__section-three--separation-bar"></div>
                    </div>
                </div>
        )
    }

    let CanteadoDisplay=()=>{
        return(
            <div className="canteados--container">
                    <div className="canteados--grid">
                        <CanteadoGridUnit zonas={zonas} modelos={modelos} acabados={acabados} grosores={grosores} urls={urls}/>
                    </div> 
            </div>
        )
    }

    let DoorDescriptions =({zona,modelo,acabado,grosor})=>{
        return (
        <div className="canteados__grid-unit-description"> 
            <div className="canteados__grid-unit-description-bold">Zona</div>: {zona} <br/>
            <div className="canteados__grid-unit-description-bold">Modelo</div>: {modelo} <br/>
            <div className="canteados__grid-unit-description-bold">Acabado</div>: {acabado}<br/>
            <div className="canteados__grid-unit-description-bold">Grosor</div>: {grosor} <br/>
        </div>
        )
    }

    let CanteadoGridUnit=({ zonas, modelos, acabados, grosores, urls})=>{
        return(

            <>
                {modelos.map((modelo,i)=>{
                    return(
                        <div key={`cant-doors${i}`} className="canteados--grid-unit-container">
                            <img className={'canteados__image'} src={urls[i]} alt={`Puerta ${modelos[i]}, acabado ${acabados[i]}`}/>
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
           <CanteadoDisplay/>
        </div>
       
    )
   }