import React from 'react'
import '../../styles/Melamina.scss'
import SideBar from './SideBar';
import {LaminadosData} from '../Diseña_tu_cocina/DesignData';

const{stylesMate,namesMate} = LaminadosData

export default function LaminadoLacados() {


    let SectionOne=()=>{
        return (
                <section className="melamina__section-one">
                     <div className="melamina__section-one--image-container">
                        <img className="melamina__section-one--image" src="https://res.cloudinary.com/sl-cocilux/image/upload/f_auto/v1620825706/DISE%C3%91OS%20Y%20MATERIALES/2.%20MELAMINA%20LACADA/COCINAS/Cocilux-Laminado_Lacado-Cocinas%20Madrid-1_MELAMINA.png" alt="tebackground cocina estilo melamina"/>
                    </div>
                    <div className="melamina__section-one--header" >
                        <div className="melamina__section-one--header-content">
                            <p className="melamina__section-one--header--A">Estilo</p>
                            <p className="melamina__section-one--header--B">LAMINADO</p>
                            <p className="melamina__section-one--header--B">LACADO</p>
                        </div>
                    </div>
                </section>
        )
    }

    let SectionTwo=()=>{
        return (
            <section className="melamina__section-two">
                <div >
                    <div className="melamina__section-two--header">Características del Laminado Lacado</div>
                    <div className="melamina__section-two--separation-bar"></div>
                    <br/><br/>
                    <div className="melamina__section-two--caracteristicas">Son puertas y frentes de fibra ( MDF) recubiertos de un laminado melamínico y posteriormente lacado con un secado ultravioleta.
                    <br/><br/>
                    El resultado es un panel decorativo de alta resistencia, en acabado brillo, mate y el llamado supermate suave al tacto.
                    <br/><br/> Da una alta resistencia al rayado, calidad supercial, nivel de brillo espejo o mate suave al tacto y estabilidad de los colores a la luz. Disponible en colores lisos y con diversos diseños de fantasía.</div>
                </div>
            </section>
        )
    }

    let SectionThree=()=>{
        return (
                <div className="melamina__section-three" >
                    <div className="melamina__section-three--image-container"></div>
                    <div className="melamina__section-three--content-container">
                            <div className="melamina__section-three--content">Colección de Laminados Lacados</div>
                            <div className="melamina__section-three--separation-bar"></div>
                    </div>
                </div>
        )
    }

    let ColorMateTmatt=()=>{
        return(
            <>
            { namesMate[4].map((name,i)=>{
                    return(
                        <div key={`ColorMateTmatt${i}`} className="melamina__colores--one-unit">
                            <div className={`melamina__colores--one ${stylesMate[4][i]}`}></div>
                            <div className="melamina__colores--one-text">{name}</div>
                        </div>
                    )
                })
            }
            </>
        )
    }

    let ColorMateCrystal=()=>{
        return(
            <>
            { namesMate[5].map((name,i)=>{
                    return(
                        <div key={`ColorMateCrystal${i}`} className="melamina__colores--one-unit">
                            <div className={`melamina__colores--one ${stylesMate[5][i]}`}></div>
                            <div className="melamina__colores--one-text">{name}</div>
                        </div>
                    )
                })
            }
            </>
        )
    }

    let ColorMateFenix=()=>{
        return(
            <>
            { namesMate[6].map((name,i)=>{
                    return(
                        <div key={`ColorMateFenix${i}`} className="melamina__colores--one-unit">
                            <div className={`melamina__colores--one ${stylesMate[6][i]}`}></div>
                            <div className="melamina__colores--one-text">{name}</div>
                        </div>
                    )
                })
            }
            </>
        )
    }

    let ColoresDisplay=()=>{
        return(
            <div className="melamina__colores--container">
                    <div className="melamina__colores-header-container">
                        <div className="melamina__colores-header"> Colores Mate Antihuella </div>
                        <div className="melamina__logo-container-tmatt"></div>
                    </div>
                    <div className="melamina__colores--grid-one">
                        <ColorMateTmatt/>
                    </div> 
                    <div className="melamina__colores-header-container">
                        <div className="melamina__colores-header"> Colores Alto Brillo </div>
                        <div className="melamina__logo-container-crystal"></div>
                    </div>
                    <div className="melamina__colores--grid-one">
                        <ColorMateCrystal/>
                    </div> 

                    <div className="melamina__colores-header-container">
                        <div className="melamina__colores-header"> Colores Super Mate </div>
                        <div className="melamina__logo-container-fenix"></div>
                    </div>
                    <div className="melamina__colores--grid-one">
                        <ColorMateFenix/>
                    </div> 
            </div>
        )
    }

    return(
        <div style={{overflow:'hidden'}}>
           <SideBar/>
           <SectionOne/>
           <SectionTwo/>
           <SectionThree/>
           <ColoresDisplay/>
        </div>
       
    )
   }