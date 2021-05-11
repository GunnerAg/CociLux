import React,{useState} from 'react'
import '../../styles/Polilaminados.scss'
import SideBar from './SideBar';

export default function Polilaminados() {

    // let isTouchScreen = (('ontouchstart' in window) ||(navigator.MaxTouchPoints > 0) ||(navigator.msMaxTouchPoints > 0));
    const [clicked, setClicked] = useState(false)

    let SectionOne=()=>{
        return (
                <section className="polilaminados__section-one">
                    <div className="polilaminados__section-one--image-container"></div>
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

    let CanteadosDisplay=()=>{
        return(
            <div className="polilaminados--container">
                    <div className="polilaminados--grid">
                        <div className="polilaminados--grid-unit one"></div>
                        <div className="polilaminados--grid-unit two"></div>
                        <div className="polilaminados--grid-unit three"></div>
                        <div className="polilaminados--grid-unit four"></div>
                        <div className="polilaminados--grid-unit five"></div>
                        <div className="polilaminados--grid-unit six"></div>
                        <div className="polilaminados--grid-unit seven"></div>
                        <div className="polilaminados--grid-unit eight"></div>
                        <div className="polilaminados--grid-unit nine"></div>
                        <div className="polilaminados--grid-unit ten"></div>
                        <div className="polilaminados--grid-unit eleven"></div>
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
           <CanteadosDisplay/>
        </div>
       
    )
   }