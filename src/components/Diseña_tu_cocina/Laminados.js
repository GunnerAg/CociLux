import React, {useState,useRef,useEffect} from 'react'
import '../../styles/Laminados.scss'
import SideBar from './SideBar';

export default function Laminados() {


    let [colorsToggle,setColorsToggled]=useState(false);
    let [woodToggle,setWoodToggled]=useState(false);
    const colors = useRef();
    const woods = useRef();
    const executeScroll=()=>colorsToggle===true && colors.current.scrollIntoView()||woodToggle===true && woods.current.scrollIntoView()
    useEffect(() => {
         executeScroll()
    }, [colorsToggle,woodToggle])
    // let isTouchScreen = (('ontouchstart' in window) ||(navigator.MaxTouchPoints > 0) ||(navigator.msMaxTouchPoints > 0));

    const displayContent=(e)=>{
        if(e.currentTarget.id=='colors'){setWoodToggled(false); setColorsToggled(!colorsToggle)}
        else if(e.currentTarget.id=='wood'){setColorsToggled(false); setWoodToggled(!woodToggle)}
        
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
                            <button onClick={displayContent} className="laminados__section-three--button spin circle" id="colors" style={{outline:'none'}}> <p>ESTILO <br/> COLORES </p></button>
                            <button onClick={displayContent} className="laminados__section-three--button spin circle" id="wood" style={{outline:'none'}}> ESTILO <br/> MADERAS</button>
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
                        <div className="laminados__colors-container--three-text">NUBE TOUCH</div>  
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

    let WoodSection=()=>{
        return(
            <div ref={woods} className="laminados__wood--container-one">
                <div className="laminados__woods-header"> Maderas - 19 mm </div>
                    <div className="laminados__woods--grid-one">
                        <div className="laminados__woods--one-unit">
                            <div className="laminados__woods--one roble-hercules-atlas"></div>
                            <div className="laminados__woods--one-text">Roble Hércules Atlas</div>
                        </div>
                        <div className="laminados__woods--one-unit">
                            <div className="laminados__woods--one roble-osstipo-atlas"></div>
                            <div className="laminados__woods--one-text">Roble Osstipo Atlas</div>
                        </div>
                        <div className="laminados__woods--one-unit">
                            <div className="laminados__woods--one roble-aurora-atlas"></div>
                            <div className="laminados__woods--one-text">Roble Aurora Atlas</div>
                        </div>
                        <div className="laminados__woods--one-unit">
                            <div className="laminados__woods--one fresno-estepa-sega"></div>
                            <div className="laminados__woods--one-text">Fresno Estepa Sega</div>
                        </div>
                        <div className="laminados__woods--one-unit">
                            <div className="laminados__woods--one heaven-oak-atlas"></div>
                            <div className="laminados__woods--one-text">Heaven Oak Atlas</div>
                        </div>
                        <div className="laminados__woods--one-unit">
                            <div className="laminados__woods--one iron-oak-atlas"></div>
                            <div className="laminados__woods--one-text">Iron Oak Atlas</div>
                        </div>
                        <div className="laminados__woods--one-unit">
                            <div className="laminados__woods--one oak-market-atlas"></div>
                            <div className="laminados__woods--one-text">Oak Market Atlas</div>
                        </div>
                        <div className="laminados__woods--one-unit">
                            <div className="laminados__woods--one roble-pegasus-atlas"></div>
                            <div className="laminados__woods--one-text">Roble Pegasus Atlas</div>
                        </div>
                        <div className="laminados__woods--one-unit">
                            <div className="laminados__woods--one roble-denver-atlas"></div>
                            <div className="laminados__woods--one-text">Roble Denver Atlas</div>
                        </div>
                        <div className="laminados__woods--one-unit">
                            <div className="laminados__woods--one roble-sinatra-essence"></div>
                            <div className="laminados__woods--one-text">Roble Sinatra Essence</div>
                        </div>
                        <div className="laminados__woods--one-unit">
                            <div className="laminados__woods--one prime-wood-legno"></div>
                            <div className="laminados__woods--one-text">Prime Wood Legno</div>
                        </div>
                        <div className="laminados__woods--one-unit">
                            <div className="laminados__woods--one oak-river-atlas"></div>
                            <div className="laminados__woods--one-text">Oak River Atlas</div>
                        </div>
                        <div className="laminados__woods--one-unit">
                            <div className="laminados__woods--one roble-arezzo-soul"></div>
                            <div className="laminados__woods--one-text">Roble Arezzo Soul</div>
                        </div>
                        <div className="laminados__woods--one-unit">
                            <div className="laminados__woods--one roble-nordico-atlas"></div>
                            <div className="laminados__woods--one-text">Roble Nórdico Atlas</div>
                        </div>
                    </div> 

                     <div className="laminados__woods-header"> Maderas - 22 mm </div>
                    <div className="laminados__woods--grid-one">
                        <div className="laminados__woods--one-unit">
                            <div className="laminados__woods--one W4452"></div>
                            <div className="laminados__woods--one-text">4452 Poro doble</div>
                        </div>
                        <div className="laminados__woods--one-unit">
                            <div className="laminados__woods--one W4479"></div>
                            <div className="laminados__woods--one-text">4479 Seda Mate - Poro doble</div>
                        </div>
                        <div className="laminados__woods--one-unit">
                            <div className="laminados__woods--one W4479-1R"></div>
                            <div className="laminados__woods--one-text">4479 1R - Poro doble</div>
                        </div>
                        <div className="laminados__woods--one-unit">
                            <div className="laminados__woods--one W4479-R"></div>
                            <div className="laminados__woods--one-text">4479 R - Poro doble</div>
                        </div>
                        <div className="laminados__woods--one-unit">
                            <div className="laminados__woods--one W4487"></div>
                            <div className="laminados__woods--one-text">4487 Poro doble</div>
                        </div>
                        <div className="laminados__woods--one-unit">
                            <div className="laminados__woods--one W4569"></div>
                            <div className="laminados__woods--one-text">4569 Roble - Poro doble</div>
                        </div>
                        <div className="laminados__woods--one-unit">
                            <div className="laminados__woods--one W4570"></div>
                            <div className="laminados__woods--one-text">4570 Roble - Poro doble</div>
                        </div>
                        <div className="laminados__woods--one-unit">
                            <div className="laminados__woods--one W4574"></div>
                            <div className="laminados__woods--one-text">4574 Poro doble</div>
                        </div>
                        <div className="laminados__woods--one-unit">
                            <div className="laminados__woods--one W4603"></div>
                            <div className="laminados__woods--one-text">4603 Poro doble</div>
                        </div>
                        <div className="laminados__woods--one-unit">
                            <div className="laminados__woods--one W4619"></div>
                            <div className="laminados__woods--one-text">4619 Poro doble</div>
                        </div>
                        <div className="laminados__woods--one-unit">
                            <div className="laminados__woods--one W4622"></div>
                            <div className="laminados__woods--one-text">4622 Poro doble</div>
                        </div>
                        <div className="laminados__woods--one-unit">
                            <div className="laminados__woods--one W4654"></div>
                            <div className="laminados__woods--one-text">4654 Poro doble</div>
                        </div>
                        <div className="laminados__woods--one-unit">
                            <div className="laminados__woods--one W4660"></div>
                            <div className="laminados__woods--one-text">4660 Poro doble</div>
                        </div>
                        <div className="laminados__woods--one-unit">
                            <div className="laminados__woods--one W4673"></div>
                            <div className="laminados__woods--one-text">4673 Poro doble</div>
                        </div>
                        <div className="laminados__woods--one-unit">
                            <div className="laminados__woods--one W4677"></div>
                            <div className="laminados__woods--one-text">4677 Poro doble</div>
                        </div>
                        <div className="laminados__woods--one-unit">
                            <div className="laminados__woods--one W4678"></div>
                            <div className="laminados__woods--one-text">4678 Poro doble</div>
                        </div>
                        <div className="laminados__woods--one-unit">
                            <div className="laminados__woods--one W4692"></div>
                            <div className="laminados__woods--one-text">4692 Roble - Poro pizarra</div>
                        </div>
                        <div className="laminados__woods--one-unit">
                            <div className="laminados__woods--one W4694"></div>
                            <div className="laminados__woods--one-text">4694 Roble - Poro pizarra</div>
                        </div>
                        <div className="laminados__woods--one-unit">
                            <div className="laminados__woods--one W4698"></div>
                            <div className="laminados__woods--one-text">4698 Roble - Poro pizarra</div>
                        </div>
                        <div className="laminados__woods--one-unit">
                            <div className="laminados__woods--one W4697"></div>
                            <div className="laminados__woods--one-text">4697 Roble - Poro pizarra</div>
                        </div>
                        <div className="laminados__woods--one-unit">
                            <div className="laminados__woods--one W4701"></div>
                            <div className="laminados__woods--one-text">4701 Roble - Poro pizarra</div>
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
        {woodToggle && <WoodSection/>}
     </div>
    
 )
}
