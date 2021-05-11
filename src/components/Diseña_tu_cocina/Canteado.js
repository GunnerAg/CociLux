import React,{useState} from 'react'
import '../../styles/Canteados.scss'
import SideBar from './SideBar';

export default function Canteados() {

    // let isTouchScreen = (('ontouchstart' in window) ||(navigator.MaxTouchPoints > 0) ||(navigator.msMaxTouchPoints > 0));
    const [clicked, setClicked] = useState(false)

    let SectionOne=()=>{
        return (
                <section className="canteados__section-one">
                    <div className="canteados__section-one--image-container"></div>
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

    let CanteadosDisplay=()=>{
        return(
            <div className="canteados--container">
                    <div className="canteados--grid">
                        <div className="canteados--grid-unit one"></div>
                        <div className="canteados--grid-unit two"></div>
                        <div className="canteados--grid-unit three"></div>
                        <div className="canteados--grid-unit four"></div>
                        <div className="canteados--grid-unit five"></div>
                        <div className="canteados--grid-unit six"></div>
                        <div className="canteados--grid-unit seven"></div>
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