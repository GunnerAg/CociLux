import React, {useState,useRef,useEffect,Suspense} from 'react'
import '../../styles/Laminados.scss'
import TransitionAnimation from '../TransitionAnimation';
import SideBar from './SideBar';

const WoodSection = React.lazy(() => import ('../Diseña_tu_cocina/WoodSectionLaminados'));

export default function Laminados() {


    let [colorsToggle,setColorsToggled]=useState(false);
    let [woodToggle,setWoodToggled]=useState(false);
    const colors = useRef();
    const woods = useRef();
    let [woodStyle,setWoodStyle] = useState({ display:'none'})
    useEffect(() => {
        function executeScroll(){(colorsToggle===true && colors.current.scrollIntoView())||(woodToggle===true && woods.current.scrollIntoView())}
        executeScroll()
    }, [colorsToggle,woodToggle])

    const displayContent=(e)=>{
        if(e.currentTarget.name==='colors'){setWoodToggled(false); setColorsToggled(!colorsToggle)}
        else if(e.currentTarget.name==='wood'){setColorsToggled(false); setWoodToggled(!woodToggle)}
        renderContents()
    }

    const renderContents=()=>{
        setWoodStyle({display:'inherit'})
    }

    let SectionOne=()=>{
        return (
                <section className="laminados__section-one" >
                    <div className="laminados__section-one--image-container"></div>
                    <div className="laminados__section-one--header" >
                        <div className="laminados__section-one--header-content">
                            <p className="laminados__section-one--header--A">Estilo</p>
                            <p className="laminados__section-one--header--B">LAMINADOS</p>
                        </div>
                    </div>
                </section>
        )
    }

    let SectionTwo=()=>{
        return (
            <section className="laminados__section-two" >
                <div >
                    <div className="laminados__section-two--header">Características del Laminado</div>
                    <div className="laminados__section-two--separation-bar"></div>
                    <br/><br/>
                    <div className="laminados__section-two--caracteristicas">Se trata de un tablero recubierto de papel decorativo impregnado con resinas melamínicas o formica de alta presión HPL, en 19mm o 22 mm.
                    <br/><br/>
                    Estas cocinas, a parte de modernas y duraderas, son la gama más económica.<br></br> Diferentes acabados y dimensiones, con todas las garantías para proporcionarte un producto de alta calidad. Gran variedad de diseños, alta estabilidad, alta resistencia mecánica, química y térmica, proporcionando una fácil limpieza y procesamiento.</div>
                </div>
            </section>
        )
    }

    let SectionThree=()=>{
        return (
                <div className="laminados__section-three" >
                    <div className="laminados__section-three--image-container" ></div>
                    <div className="laminados__section-three--content-container" >
                            <div className="laminados__section-three--content">Colección de Laminados</div>
                            <div className="laminados__section-three--separation-bar"></div>
                        <div className="laminados__section-three--button-container">
                            <button onClick={displayContent} className="laminados__section-three--button laminados-spin laminados-circle" style={{outline:"none"}} name="colors" > ESTILO <br/> COLORES </button>
                            <button onClick={displayContent} className="laminados__section-three--button laminados-spin laminados-circle" style={{outline:"none"}} name="wood"> ESTILO <br/> MADERAS</button>
                        </div>
                    </div>
                </div>
        )
    }

    let MateColorsOne=()=>{
        return(
        <>
            <div ref={colors} className="laminados__colores">
                <div className="laminados__colores-container">
                    <div className="laminados__colores-header">Colores Mate</div>
                    <div className="laminados__colores-mate--grid">
                        <div className="laminados__colores-mate aluminio-arosa-soft"></div>
                        <div>ALUMINIO AROSA SOFT</div>
                        <div className="laminados__colores-mate verde-oliva-soft"></div>
                        <div>VERDE OLIVA SOFT</div>
                        <div className="laminados__colores-mate very-berry-soft"></div>
                        <div>VERY BERRY SOFT</div>
                        <div className="laminados__colores-mate negro-soft"></div>
                        <div>NEGRO SOFT</div>
                        <div className="laminados__colores-mate verde-arcilla-soft"></div>
                        <div >VERDE ARCILLA SOFT</div>
                        <div className="laminados__colores-mate rojo-pompeya-soft"></div>
                        <div >ROJO POMPEYA SOFT</div>
                        <div className="laminados__colores-mate gris-gu-soft"></div>
                        <div >GRIS GU SOFT</div>
                        <div className="laminados__colores-mate verde-salvia-soft"></div>
                        <div>VERDE ARCILLA SOFT</div>
                        <div className="laminados__colores-mate rosa-talco-soft"></div>
                        <div >ROSA TALCO SOFT</div>
                    </div>
                </div>
            </div>
        </>
        )
    }

    let MateColorsTwo =()=>{
        return(
        <div className="laminados__colors-container--two">
                <div className="laminados__colors-container--two-unit">
                    <div className="laminados__colores-mate--two azul-indigo-touch"></div>
                    <div>AZUL ÍNDIGO TOUCH</div>  
                </div>
                <div className="laminados__colors-container--two-unit">
                    <div className="laminados__colores-mate--two amarillo-pompeya-soft"></div>
                    <div >AMARILLO POMPEYA SOFT</div>
                </div>
                <div className="laminados__colors-container--two-unit">
                    <div className="laminados__colores-mate--two rojo-touch"></div>
                    <div >ROJO TOUCH</div>
                </div>
                <div className="laminados__colors-container--two-unit">
                    <div className="laminados__colores-mate--two verde-talco-soft"></div>
                    <div >VERDE TALCO SOFT</div>
                </div>
                <div className="laminados__colors-container--two-unit">
                    <div className="laminados__colores-mate--two malva-talco-soft"></div>
                    <div >MALVA TALCO SOFT</div> 
                </div>
        </div>
        )
    }

    let MateColorsThree =()=>{
        return(
        <div className="laminados__colors-container--three">

            <div className="laminados__colors-container--three-first">
                <div className="laminados__colors-container--three-unit">
                    <div className="laminados__colors-mate--three blanco-touch"></div>
                    <div className="laminados__colors-container--three-text-white">BLANCO TOUCH</div>  
                </div>
                <div className="laminados__colors-container--three-unit">
                    <div className="laminados__colors-mate--three blanco-soft"></div>
                    <div className="laminados__colors-container--three-text-white">BLANCO SOFT</div>  
                </div>
                <div className="laminados__colors-container--three-unit">
                    <div className="laminados__colors-mate--three crema-sil-soft"></div>
                    <div className="laminados__colors-container--three-text-white">CREMA SIL SOFT</div>  
                </div>
                <div className="laminados__colors-container--three-unit">
                    <div className="laminados__colors-mate--three nube-touch"></div>
                    <div className="laminados__colors-container--three-text-white">NUBE TOUCH</div>  
                </div>
            </div>

            <div className="laminados__colors-container--three-second">
                <div className="laminados__colors-container--three-unit">
                        <div className="laminados__colors-mate--three negro-touch"></div>
                        <div className="laminados__colors-container--three-text">NEGRO TOUCH</div>  
                    </div>
                    <div className="laminados__colors-container--three-unit">
                        <div className="laminados__colors-mate--three grafito-touch"></div>
                        <div className="laminados__colors-container--three-text">BLANCO SOFT</div>  
                    </div>
                    <div className="laminados__colors-container--three-unit">
                        <div className="laminados__colors-mate--three capuccino-touch"></div>
                        <div className="laminados__colors-container--three-text">CREMA SIL SOFT</div>  
                    </div>
                    <div className="laminados__colors-container--three-unit">
                        <div className="laminados__colors-mate--three crema-touch"></div>
                        <div className="laminados__colors-container--three-text">CREMA TOUCH</div>  
                    </div>
            </div>
        </div>
        )
    }

    let ColoresBrillo=()=>{
        return(
            <div className="laminados__colors-brillo--container-one">
                <div className="laminados__colors-brillo-header"> Colores Brillo </div>
                    <div className="laminados__colors-brillo--grid-one">
                        <div className="laminados__colors-brillo--one-unit">
                            <div className="laminados__colors-brillo--one blanco-brillo"></div>
                            <div className="laminados__colors-brillo--one-text">BLANCO BRILLO</div>
                        </div>
                        <div className="laminados__colors-brillo--one-unit">
                            <div className="laminados__colors-brillo--one blanco-seda"></div>
                            <div className="laminados__colors-brillo--one-text">BLANCO SEDA</div>
                        </div>
                        <div className="laminados__colors-brillo--one-unit">
                            <div className="laminados__colors-brillo--one antique-white-brillo"></div>
                            <div className="laminados__colors-brillo--one-text">ANTIQUE WHITE BRILLO</div>
                        </div>
                        <div className="laminados__colors-brillo--one-unit">
                            <div className="laminados__colors-brillo--one levante-brillo"></div>
                            <div className="laminados__colors-brillo--one-text">LEVANTE BRILLO</div>
                        </div>
                        <div className="laminados__colors-brillo--one-unit">
                            <div className="laminados__colors-brillo--one carnaval-brillo"></div>
                            <div className="laminados__colors-brillo--one-text">CARNAVAL BRILLO</div>
                        </div>
                        <div className="laminados__colors-brillo--one-unit">
                            <div className="laminados__colors-brillo--one ciclone-brillo"></div>
                            <div className="laminados__colors-brillo--one-text">CICLONE BRILLO</div>
                        </div>
                    </div> 
            </div>
        )
    }
    
    let ColoresBrilloTwo=()=>{
        return(
            <div className="laminados__colors-brillo--container-one">
                <div className="laminados__colors-brillo-header"> Colores Brillo </div>
                    <div className="laminados__colors-brillo--grid-one">
                        <div className="laminados__colors-brillo--one-unit">
                            <div className="laminados__colors-brillo--one storm-brillo"></div>
                            <div className="laminados__colors-brillo--one-text">STORM BRILLO</div>
                        </div>
                        <div className="laminados__colors-brillo--one-unit">
                            <div className="laminados__colors-brillo--one diamond-black-brillo"></div>
                            <div className="laminados__colors-brillo--one-text">DIAMOND BLACK BRILLO</div>
                        </div>
                        <div className="laminados__colors-brillo--one-unit">
                            <div className="laminados__colors-brillo--one just-blue-brillo"></div>
                            <div className="laminados__colors-brillo--one-text">JUST BLUE BRILLO</div>
                        </div>
                        <div className="laminados__colors-brillo--one-unit">
                            <div className="laminados__colors-brillo--one maui-brillo"></div>
                            <div className="laminados__colors-brillo--one-text">MAUI BRILLO</div>
                        </div>
                        <div className="laminados__colors-brillo--one-unit">
                            <div className="laminados__colors-brillo--one dening-brillo"></div>
                            <div className="laminados__colors-brillo--one-text">DENING BRILLO</div>
                        </div>
                        <div className="laminados__colors-brillo--one-unit">
                            <div className="laminados__colors-brillo--one just-gold-brillo"></div>
                            <div className="laminados__colors-brillo--one-text">JUST GOLD BRILLO</div>
                        </div>
                    </div> 
            </div>
        )
    }
    
    let ColoresBrilloThree=()=>{
        return(
            <div className="laminados__colors-brillo--container-one">
                <div className="laminados__colors-brillo-header"> Colores Brillo </div>
                    <div className="laminados__colors-brillo--grid-three">
                        <div className="laminados__colors-brillo--one-unit">
                            <div className="laminados__colors-brillo--one lemon-brillo"></div>
                            <div className="laminados__colors-brillo--one-text">LEMON BRILLO</div>
                        </div>
                        <div className="laminados__colors-brillo--one-unit">
                            <div className="laminados__colors-brillo--one kashmir-brillo"></div>
                            <div className="laminados__colors-brillo--one-text">KASHMIR BRILLO</div>
                        </div>
                        <div className="laminados__colors-brillo--one-unit">
                            <div className="laminados__colors-brillo--one new-burgundy"></div>
                            <div className="laminados__colors-brillo--one-text">NEW BURGUNDY</div>
                        </div>
                        <div className="laminados__colors-brillo--one-unit">
                            <div className="laminados__colors-brillo--one krypton-metalizado-brillo"></div>
                            <div className="laminados__colors-brillo--one-text">KRYPTON METALIZADO BRILLO</div>
                        </div>
                        <div className="laminados__colors-brillo--one-unit">
                            <div className="laminados__colors-brillo--one glacial-brillo"></div>
                            <div className="laminados__colors-brillo--one-text">GLACIAL BRILLO</div>
                        </div>
                        <div className="laminados__colors-brillo--one-unit">
                            <div className="laminados__colors-brillo--one tierra-brillo-gloss"></div>
                            <div className="laminados__colors-brillo--one-text">TIERRA BRILLO GLOSS</div>
                        </div>
                        <div className="laminados__colors-brillo--one-unit">
                            <div className="laminados__colors-brillo--one br-blanco"></div>
                            <div className="laminados__colors-brillo--one-text">BR BLANCO</div>
                        </div>
                        <div className="laminados__colors-brillo--one-unit">
                            <div className="laminados__colors-brillo--one br-beige"></div>
                            <div className="laminados__colors-brillo--one-text">BR BEIGE</div>
                        </div>
                        <div className="laminados__colors-brillo--one-unit">
                            <div className="laminados__colors-brillo--one br-nube"></div>
                            <div className="laminados__colors-brillo--one-text">BR NUBE</div>
                        </div>
                        <div className="laminados__colors-brillo--one-unit">
                            <div className="laminados__colors-brillo--one br-grafito"></div>
                            <div className="laminados__colors-brillo--one-text">BR GRAFITO</div>
                        </div>
                        <div className="laminados__colors-brillo--one-unit">
                            <div className="laminados__colors-brillo--one br-tierra"></div>
                            <div className="laminados__colors-brillo--one-text">BR TERRA</div>
                        </div>
                    </div> 
            </div>
        )
    }


 return(
     <div id="laminados" style={{overflow:'hidden'}}>
        <SideBar/>
        <SectionOne/>
        <SectionTwo/>
        <SectionThree/>
        {colorsToggle && <MateColorsOne/>}
        {colorsToggle && <MateColorsTwo/>}
        {colorsToggle && <MateColorsThree/>}
        {colorsToggle && <ColoresBrillo/>}
        {colorsToggle && <ColoresBrilloTwo/>}
        {colorsToggle && <ColoresBrilloThree/>}
        <Suspense fallback={<div ref={woods} style={woodStyle}><TransitionAnimation renderContent={renderContents}/></div>}>
            {woodToggle && <div ref={woods} style={woodStyle}><WoodSection /></div>}
        </Suspense>
     </div>
    
 )
}
