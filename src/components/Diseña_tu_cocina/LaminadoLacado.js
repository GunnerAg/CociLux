import React from 'react'
import '../../styles/Melamina.scss'
import SideBar from './SideBar';

export default function LaminadoLacados() {

    // let isTouchScreen = (('ontouchstart' in window) ||(navigator.MaxTouchPoints > 0) ||(navigator.msMaxTouchPoints > 0));


    let SectionOne=()=>{
        return (
                <section className="melamina__section-one">
                    <div className="melamina__section-one--image-container"></div>
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

    let ColoresDisplay=()=>{
        return(
            <div className="melamina__colores--container">
                    <div className="melamina__colores-header-container">
                        <div className="melamina__colores-header"> Colores Mate Antihuella </div>
                        <div className="melamina__logo-container-tmatt"></div>
                    </div>
                    <div className="melamina__colores--grid-one">
                        <div className="melamina__colores--one-unit">
                            <div className="melamina__colores--one artico"></div>
                            <div className="melamina__colores--one-text">ÁRTICO</div>
                        </div>
                        <div className="melamina__colores--one-unit">
                            <div className="melamina__colores--one smeraldo"></div>
                            <div className="melamina__colores--one-text">SMERALDO</div>
                        </div>
                        <div className="melamina__colores--one-unit">
                            <div className="melamina__colores--one lignite"></div>
                            <div className="melamina__colores--one-text">LIGNITE</div>
                        </div>
                        <div className="melamina__colores--one-unit">
                            <div className="melamina__colores--one terracotta"></div>
                            <div className="melamina__colores--one-text">TERRACOTA</div>
                        </div>
                        <div className="melamina__colores--one-unit">
                            <div className="melamina__colores--one blue"></div>
                            <div className="melamina__colores--one-text">BLUE</div>
                        </div>
                        <div className="melamina__colores--one-unit">
                            <div className="melamina__colores--one legno-fume"></div>
                            <div className="melamina__colores--one-text">LEGNO FUMÉ</div>
                        </div>
                        <div className="melamina__colores--one-unit">
                            <div className="melamina__colores--one bianco-zen"></div>
                            <div className="melamina__colores--one-text">BIANCO ZEN</div>
                        </div>
                        <div className="melamina__colores--one-unit">
                            <div className="melamina__colores--one visone"></div>
                            <div className="melamina__colores--one-text">VISONE</div>
                        </div>
                        <div className="melamina__colores--one-unit">
                            <div className="melamina__colores--one nero"></div>
                            <div className="melamina__colores--one-text">NERO</div>
                        </div>
                        <div className="melamina__colores--one-unit">
                            <div className="melamina__colores--one nuvola"></div>
                            <div className="melamina__colores--one-text">NUVOLA</div>
                        </div>
                        <div className="melamina__colores--one-unit">
                            <div className="melamina__colores--one antracite"></div>
                            <div className="melamina__colores--one-text">ANTRACITE</div>
                        </div>
                        <div className="melamina__colores--one-unit">
                            <div className="melamina__colores--one arena"></div>
                            <div className="melamina__colores--one-text">ARENA</div>
                        </div>
                        <div className="melamina__colores--one-unit">
                            <div className="melamina__colores--one toscano"></div>
                            <div className="melamina__colores--one-text">TOSCANO</div>
                        </div>
                        <div className="melamina__colores--one-unit">
                            <div className="melamina__colores--one elba"></div>
                            <div className="melamina__colores--one-text">ELBA</div>
                        </div>
                    </div> 

                    <div className="melamina__colores-header-container">
                        <div className="melamina__colores-header"> Colores Alto Brillo </div>
                        <div className="melamina__logo-container-crystal"></div>
                    </div>
                    <div className="melamina__colores--grid-one">
                        <div className="melamina__colores--one-unit">
                            <div className="melamina__colores--one cemento"></div>
                            <div className="melamina__colores--one-text">CEMENTO</div>
                        </div>
                        <div className="melamina__colores--one-unit">
                            <div className="melamina__colores--one carrara"></div>
                            <div className="melamina__colores--one-text">CARRARA</div>
                        </div>
                        <div className="melamina__colores--one-unit">
                            <div className="melamina__colores--one crema"></div>
                            <div className="melamina__colores--one-text">CREMA</div>
                        </div>
                        <div className="melamina__colores--one-unit">
                            <div className="melamina__colores--one bronce"></div>
                            <div className="melamina__colores--one-text">BRONCE</div>
                        </div>
                        <div className="melamina__colores--one-unit">
                            <div className="melamina__colores--one blanco"></div>
                            <div className="melamina__colores--one-text">BLANCO</div>
                        </div>
                        <div className="melamina__colores--one-unit">
                            <div className="melamina__colores--one negro"></div>
                            <div className="melamina__colores--one-text">NEGRO</div>
                        </div>
                        <div className="melamina__colores--one-unit">
                            <div className="melamina__colores--one arena"></div>
                            <div className="melamina__colores--one-text">ARENA</div>
                        </div>
                        <div className="melamina__colores--one-unit">
                            <div className="melamina__colores--one agua-marina"></div>
                            <div className="melamina__colores--one-text">AGUA MARINA</div>
                        </div>
                        <div className="melamina__colores--one-unit">
                            <div className="melamina__colores--one azul"></div>
                            <div className="melamina__colores--one-text">AZUL</div>
                        </div>
                        <div className="melamina__colores--one-unit">
                            <div className="melamina__colores--one gris-claro"></div>
                            <div className="melamina__colores--one-text">GRIS CLARO</div>
                        </div>
                        <div className="melamina__colores--one-unit">
                            <div className="melamina__colores--one marengo"></div>
                            <div className="melamina__colores--one-text">MARENGO</div>
                        </div>
                        <div className="melamina__colores--one-unit">
                            <div className="melamina__colores--one rojo"></div>
                            <div className="melamina__colores--one-text">ROJO</div>
                        </div>
                    </div> 

                    <div className="melamina__colores-header-container">
                        <div className="melamina__colores-header"> Colores Super Mate </div>
                        <div className="melamina__logo-container-fenix"></div>
                    </div>
                    <div className="melamina__colores--grid-one">
                        <div className="melamina__colores--one-unit">
                            <div className="melamina__colores--one negro-ingro"></div>
                            <div className="melamina__colores--one-text">NEGRO INGRO</div>
                        </div>
                        <div className="melamina__colores--one-unit">
                            <div className="melamina__colores--one grigio-efeso"></div>
                            <div className="melamina__colores--one-text">GRIGIO EFESO</div>
                        </div>
                        <div className="melamina__colores--one-unit">
                            <div className="melamina__colores--one castoro-ottawa"></div>
                            <div className="melamina__colores--one-text">CASTORO OTTAWA</div>
                        </div>
                        <div className="melamina__colores--one-unit">
                            <div className="melamina__colores--one grigio-bromo"></div>
                            <div className="melamina__colores--one-text">GRIGIO BROMO</div>
                        </div>
                        <div className="melamina__colores--one-unit">
                            <div className="melamina__colores--one bianco-kos"></div>
                            <div className="melamina__colores--one-text">BLANCO KOS</div>
                        </div>
                        <div className="melamina__colores--one-unit">
                            <div className="melamina__colores--one grigio-londra"></div>
                            <div className="melamina__colores--one-text">GRIGIO LONDRA</div>
                        </div>
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