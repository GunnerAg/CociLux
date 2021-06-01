import React, {useState,useRef,useEffect,Suspense} from 'react'
import '../../styles/Laminados.scss'
import TransitionAnimation from '../TransitionAnimation';
import SideBar from './SideBar';
import {LaminadosData} from '../Diseña_tu_cocina/DesignData';

const WoodSection = React.lazy(() => import ('../Diseña_tu_cocina/WoodSectionLaminados'));

const{stylesMate,namesMate,stylesBrillo,namesBrillo}= LaminadosData

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
                    <div className="laminados__section-one--image-container">
                        <img className="laminados__section-one--image" src="https://res.cloudinary.com/sl-cocilux/image/upload/f_auto/v1620825490/DISE%C3%91OS%20Y%20MATERIALES/1.%20LAMINADOS/COCINAS/Cocilux-%20Laminados-%20Cocinas%20Madrid-1_LAMINADA.jpg" alt="background cocina estilo laminado"/>
                    </div>
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
                    Estas cocinas, a parte de modernas y duraderas, son la gama más económica. Diferentes acabados y dimensiones, con todas las garantías para proporcionarte un producto de alta calidad. Gran variedad de diseños, alta estabilidad, alta resistencia mecánica, química y térmica, proporcionando una fácil limpieza y procesamiento.</div>
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

    let ColorMateUnit=()=>{
        return(
            <>
            { namesMate[1].map((name,i)=>{
                    return(
                        <div key={`ColorMateUnit${i}`}  className="laminados__colores-mate-container">
                            <div className={`laminados__colores-mate ${stylesMate[1][i]}`}></div>
                            <div>{name}</div>
                        </div>
                    )
                })
            }
            </>
        )
    }
    
    let MateColorsOne=()=>{
        return(
        <>
            <div ref={colors} className="laminados__colores">
                <div className="laminados__colores-container">
                    <div className="laminados__colores-header">Colores Mate</div>
                    <div className="laminados__colores-mate--grid">
                    <ColorMateUnit/>
    
                    </div>
                </div>
            </div>
        </>
        )
    }

    let ColorMateUnit2=()=>{
        return(
            <>
            { namesMate[2].map((name,i)=>{
                    return(
                        <div key={`ColorMateUnit2${i}`}  className="laminados__colors-container--two-unit">
                            <div className={`laminados__colores-mate--two ${stylesMate[2][i]}`}></div>
                            <div>{name}</div>  
                        </div>
                    )
                })
            }
            </>
        )
    }
    
    let MateColorsTwo =()=>{
        return(
        <div className="laminados__colors-container--two">
                <ColorMateUnit2/>
        </div>
        )
    }
 
    let ColorMateUnit3a=()=>{
        return(
            <div className="laminados__colors-container--three-first">
            { namesMate[3.1].map((name,i)=>{
                    return(
                        <div key={`ColorMateUnit3a${i}`} className="laminados__colors-container--three-unit">
                            <div className={`laminados__colors-mate--three ${stylesMate[3.1][i]}`}></div>
                            <div className="laminados__colors-container--three-text-white">{name}</div>  
                        </div>
                    )   
                })
            }
            </div>
        )
    }

    let ColorMateUnit3b=()=>{
        return(
            <div className="laminados__colors-container--three-second">
            { namesMate[3.2].map((name,i)=>{
                    return(
                        <div key={`ColorMateUnit3b${i}`} className="laminados__colors-container--three-unit">
                            <div className={`laminados__colors-mate--three ${stylesMate[3.2][i]}`}></div>
                            <div className="laminados__colors-container--three-text">{name}</div>  
                        </div>
                    )   
                })
            }
            </div>
        )
    }

    let MateColorsThree =()=>{
        return(
        <div className="laminados__colors-container--three">
            <ColorMateUnit3a/>
            <ColorMateUnit3b/>
        </div>
        )
    }

    let ColorBrilloUnit=()=>{
        return(
            <>
            { namesBrillo[1].map((name,i)=>{
                    return(
                        <div key={`ColorBrilloUnit${i}`} className="laminados__colors-brillo--one-unit">
                            <div className={`laminados__colors-brillo--one ${stylesBrillo[1][i]}`}></div>
                            <div className="laminados__colors-brillo--one-text">{name}</div>
                        </div>
                    )
                })
            }
            </>
        )
    }

    let ColorBrilloUnit2=()=>{
        return(
            <>
            { namesBrillo[2].map((name,i)=>{
                    return(
                        <div key={`ColorBrilloUnit2${i}`} className="laminados__colors-brillo--one-unit">
                            <div className={`laminados__colors-brillo--one ${stylesBrillo[2][i]}`}></div>
                            <div className="laminados__colors-brillo--one-text">{name}</div>
                        </div>
                    )
                })
            }
            </>
        )
    }
    
    let ColorBrilloUnit3=()=>{
        return(
            <>
            { namesBrillo[3].map((name,i)=>{
                    return(
                        <div key={`ColorBrilloUnit3${i}`} className="laminados__colors-brillo--one-unit">
                            <div className={`laminados__colors-brillo--one ${stylesBrillo[3][i]}`}></div>
                            <div className="laminados__colors-brillo--one-text">{name}</div>
                        </div>
                    )
                })
            }
            </>
        )
    }

    let ColoresBrillo=()=>{
        return(
            <div className="laminados__colors-brillo--container-one">
                <div className="laminados__colors-brillo-header"> Colores Brillo </div>
                    <div className="laminados__colors-brillo--grid">
                        <ColorBrilloUnit/>
                    </div> 
            </div>
        )
    }
    
    
    let ColoresBrilloTwo=()=>{
        return(
            <div className="laminados__colors-brillo--container-one">
                <div className="laminados__colors-brillo-header"> Colores Brillo </div>
                    <div className="laminados__colors-brillo--grid">
                    <ColorBrilloUnit2/>
                    </div> 
            </div>
        )
    }
    
    let ColoresBrilloThree=()=>{
        return(
            <div className="laminados__colors-brillo--container-one">
                <div className="laminados__colors-brillo-header"> Colores Brillo </div>
                    <div className="laminados__colors-brillo--grid">
                        <ColorBrilloUnit3/>
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
            {woodToggle && <div ref={woods} style={woodStyle}><WoodSection/></div>}
        </Suspense>
     </div>
    
 )
}
