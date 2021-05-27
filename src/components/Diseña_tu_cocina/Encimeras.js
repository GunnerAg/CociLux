import React, {useState,useRef,useEffect} from 'react'
import '../../styles/Encimeras.scss'
import SideBar from './SideBar';
import {EncimerasData} from '../Diseña_tu_cocina/DesignData';

export default function Encimeras() {

    const {estilos_formica, modelos_formica, estilos_cuarzo,modelos_cuarzo,types}=EncimerasData;
    let [formicaToggle,setFormicaToggled]=useState(false);
    let [cuarzoToggle,setCuarzoToggled]=useState(false);
    const formica = useRef();
    const cuarzo = useRef();
    const executeScroll=()=>formicaToggle===true && formica.current.scrollIntoView()||cuarzoToggle===true && cuarzo.current.scrollIntoView()
    useEffect(() => {
        executeScroll()
    }, [formicaToggle,cuarzoToggle])
    // let isTouchScreen = (('ontouchstart' in window) ||(navigator.MaxTouchPoints > 0) ||(navigator.msMaxTouchPoints > 0));

    const displayContent=(e)=>{
        if(e.currentTarget.id=='formica'){setCuarzoToggled(false); setFormicaToggled(!formicaToggle)}
        else if(e.currentTarget.id=='cuarzo'){setFormicaToggled(false); setCuarzoToggled(!cuarzoToggle)}
        
    }

    let SectionOne=()=>{
        return (
                <section className="encimeras__section-one" >
                    <div className="encimeras__section-one--image-container"></div>
                    <div className="encimeras__section-one--header" >
                        <div className="encimeras__section-one--header-content">
                            <p className="encimeras__section-one--header--A">ENCIMERAS</p>
                        </div>
                    </div>
                </section>
        )
    }

    let SectionTwo=()=>{
        return (
            <section className="encimeras__section-two" >
                <div >
                    <div className="encimeras__section-two--header">ENCIMERAS</div>
                    <div className="encimeras__section-two--separation-bar"></div>
                    <br/><br/>
                    <div className="encimeras__section-two--caracteristicas">Las encimeras de cocina son, por así decirlo, la esencia de esta, ya que es el material que más espacio abarca y es una pieza clave e indispensable en la misma.
                    <br/><br/>
                    La cocina es un espacio muy personal donde sociabilizar, estar en familia, amigos, tener una reunión etc....por lo que la encimera es la primera imagen que atraerá la mirada de sus invitados.
                    <br/><br/>
                    A la hora de escoger una encimera para su cocina debería preguntarse<div style={{fontWeight:'900', display:'inline-block'}}>&nbsp;¿qué imagen desea transmitir?</div>
                    <br/><br/>
                    A continuación le dejamos una selección de los principales <div style={{fontWeight:'900', display:'inline-block'}}>grupos de materiales</div> que existen:
                    <br/><br/>
                    <div style={{fontWeight:'900'}}>- Madera</div>
                    Formica o Laminadas y Madera maciza
                    <br/>
                    <div style={{fontWeight:'900'}}>- Piedras naturales</div>
                    Cuarzo, granito, mármol
                    <br/>
                    <div style={{fontWeight:'900'}}>- Porcelánicos</div>
                    Neolith, Dekton, Rak ceramics
                    </div>
                </div>
            </section>
        )
    }

    let SectionThree=()=>{
        return (
                <div className="encimeras__section-three" >
                    <div className="encimeras__section-three--image-container" ></div>
                    <div className="encimeras__section-three--content-container" >
                        <div className="encimeras__section-three--button-container">
                            <button onClick={displayContent} className="encimeras__section-three--button spin circle" id="formica" style={{outline:'none'}}> ENCIMERAS <br/> FORMICA </button>
                            <button onClick={displayContent} className="encimeras__section-three--button spin circle" id="cuarzo" style={{outline:'none'}}> ENCIMERAS <br/> CUARZO</button>
                        </div>
                    </div>
                </div>
        )
    }

    let EncimerasFormica=()=>{
        return (
            <section ref={formica} className="encimeras__formica--info">
            <div style={{height:'fitContent'}}>
                <div className="encimeras__formica--info-header">Características Encimeras de Formica</div>
                <div className="encimeras__formica--info-separation-bar"></div>
                <br/><br/>
                <div className="encimeras__formica--info-caracteristicas">Se trata de un proceso que conlleva el recubrimiento estratificado con resinas fenólicas sobre un material de soporte que suele ser DM o aglomerado, lo que permite imitar diferentes acabados. Es un material muy duro por lo que es difícil rayarlo y muy fácil de limpiar.
                <br/><br/>  De la elección depende el resultado y para ello te ofrecemos todo tipo de materiales y acabados para configurar encimeras a medida, porque sabemos que en la variedad está el gusto y porque tenemos los mejores precios.
                <br/><br/>Nosotros somos una apuesta segura.
                </div>
            </div>
        </section>
        )
    }

    let EncimerasCuarzo=()=>{
        return (
            <section ref={cuarzo} className="encimeras__cuarzo--info">
            <div style={{height:'fitContent'}}>
                <div className="encimeras__cuarzo--info-header">Características Encimeras de Cuarzo</div>
                <div className="encimeras__cuarzo--info-separation-bar"></div>
                <br/><br/>
                <div className="encimeras__cuarzo--info-caracteristicas">Se trata de un material formado por un 94% de cuarzo, el otro 6% son resinas especiales y otros componentes que le aportan numerosas cualidades como soportar los impactos, la humedad, lo productos abrasivos y el contacto con el filo de objetos cortantes.
                <br/><br/>  Siempre es recomendable poner un protector si se van a colocar sobre ella ollas o sartenes directamente del fuego.
                <br/><br/> Es, mayoritariamente, de los materiales más usados para las encimeras de cocina, es un material muy competente gracias a su calidad precio.
                </div>
            </div>
        </section>
        )
    }

    let FormicaSection=()=>{
            return(
            <div className="encimeras__formica-cuarzo--grid-one">

                { modelos_formica.map((modelo,i)=>{
                    return(
                        <div key={`formica${i}`} className={ (i+1)%3===0? `encimeras__formica-cuarzo--one-unit-test ${types[i]}`:`encimeras__formica-cuarzo--one-unit ${types[i]}`}>
                            <div className= {`encimeras__formica-cuarzo--one ${estilos_formica[i]}`}></div>
                            <div className={`encimeras__formica-cuarzo--one-text `}>{modelo}</div>
                        </div>
                    )
                })}
                
            </div>
            )
        }     

    let FormicaColeccion=()=>{
        return(
            <div className="encimeras__formica-cuarzo--container-one">
                <div className="encimeras__formica-cuarzo--header"> Colección </div>
                <FormicaSection/>
            </div>
        )
    }

    let CuarzoSection=()=>{
        return(
        <div className="encimeras__formica-cuarzo--grid-one dark">

            { modelos_cuarzo.map((modelo,i)=>{
                return(
                    <div key={`cuarzo${i}`} className={`encimeras__formica-cuarzo--one-unit ${types[i]}`}>
                        <div className= {`encimeras__formica-cuarzo--one ${estilos_cuarzo[i]}`}></div>
                        <div className={`encimeras__formica-cuarzo--one-text `}>{modelo}</div>
                    </div>
                )
            })}
            
        </div>
        )
    }     


let CuarzoColeccion=()=>{
    return(
        <div className="encimeras__formica-cuarzo--container-one">
            <div className="encimeras__formica-cuarzo--header"> Colección </div>
            <CuarzoSection/>
        </div>
    )
}
    

    

 return(
     <div id="encimeras" style={{overflow:'hidden'}}>
        <SideBar/>
        <SectionOne/>
        <SectionTwo/>
        <SectionThree/>
        {formicaToggle && <EncimerasFormica/>}
        {formicaToggle && <FormicaColeccion/>}    
        {cuarzoToggle && <EncimerasCuarzo/>}
        {cuarzoToggle && <CuarzoColeccion/>}
     </div>
    
 )
}
