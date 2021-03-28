import React, {useRef,useState,useEffect} from 'react';
import '../styles/Home.css'
import Logo from './Logo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowDown,faArrowUp} from '@fortawesome/free-solid-svg-icons'
import {motion, useViewportScroll, useTransform, } from 'framer-motion'


export default function Home(props) {   
    
    const section1 = useRef();
    const section2 = useRef();
    const section3 = useRef();
    const section4 = useRef();

    const {scrollYProgress} = useViewportScroll();
    const yRange1 = useTransform(scrollYProgress, [0, 0.3], [3000,0]);
    const yRange2 = useTransform(scrollYProgress, [0.4, 0.65], [-2000,0]);
    const yRange3 = useTransform(scrollYProgress, [0, 0.3], [-2000,0]);
    const yRange4 = useTransform(scrollYProgress, [0.4, 0.65], [3000,0]);
    const yRange5 = useTransform(scrollYProgress, [0.65, 1], [3000,0]);

    let [infoActive,setInfo]=useState('SectionFour')
    let [sectionIcon,setIcon]=useState(faArrowDown)
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        function watchScroll() {
          window.addEventListener("scroll", handleIconType);
        }
        watchScroll();
        return () => {
          window.removeEventListener("scroll", handleIconType);
        };
    });

    function handleIconType() {
        setScrollY(scrollYProgress.current);
        scrollY>0.9? setIcon(sectionIcon=faArrowUp):setIcon(sectionIcon=faArrowDown)
    }

    function scrollSection(){
        console.log(scrollYProgress.current)
        if (scrollYProgress.current<0.33){
            section2.current.scrollIntoView({behavior: 'smooth'})
        }
        else if (scrollYProgress.current<0.66){
            section3.current.scrollIntoView({behavior: 'smooth'})
        }
        else if (0.66<=scrollYProgress.current){
            section4.current.scrollIntoView({behavior: 'smooth'})
        }
        if (scrollYProgress.current>0.9){
            section1.current.scrollIntoView({behavior: 'smooth'})
        }
    }

    const handleOn=()=> {
        setInfo(infoActive="SectionFourActive")
    }


    let SectionFour= () =>{
        return (
            <>
                <section className="homeSectionFour" style={{height:window.innerHeight}} ref={section4}>
                    <div className="homeSectionFourBg"> </div>
                        <motion.div style={{x:yRange5}}>
                            <h1 onClick={handleOn} className="slogan4 bounceSlogan">Quiénes somos</h1>
                        </motion.div>
                </section>
            </>
        )
    }

    let SectionFourActive= () =>{
        return (
            <>
                <section className="homeSectionFourActive" style={{height:window.innerHeight}} ref={section4}>
                    <div className="homeSectionFourBgActive"> </div>
                        <div className="sectionFourHeaderActive">
                            <h5 className="sectionFourHeaderContent">En SL Luxury Kitchen Design fabricamos y realizamos cocinas a medida con variedad de diseños que buscan, principalmente, la comodidad, la estética y la funcionalidad que mejor se adapte al espacio y a sus necesidades</h5>
                        </div>
                        <div className="sectionFourInnerActive">
                            <div className="ImagenContainer">
                            </div>
                            <div className="porqueNosotrosContainer">
                                <h3 className="porqueNosotrosTitulo">Por Qué Nosotros</h3>
                                <h6 className="porqueNosotrosMotivo">Somos fabricantes especializados, con unos precios directamente de fábrica. <br></br><br></br> Acérquese a nuestra tienda y exposición física ubicada en Madrid, en la que descubrirá una amplia gama de materiales exclusivos al mejor precio.<br></br><br></br> Pídanos presupuesto sin compromiso.</h6>
                            </div>
                        </div>
                </section>
            </>
        )
    }
    

    return (
        <>
        <button style={{ outline:'none'}} onClick={scrollSection} className="scrollBtn">
            <div className="arrow bounce"><FontAwesomeIcon icon={sectionIcon}/></div>
        </button>

         <section className="homeSectionOne" style={{height:window.innerHeight}} ref={section1}>
            <motion.h3 className="titulo" initial={{x: -1000}} animate={{x: 0}} transition={{duration:1}} > COCILUX · Diseño de cocinas </motion.h3>
            <motion.div initial={{x: 3000}} animate={{x: 0}} transition={{duration:1}}  >
            <h1 className="slogan">LO ÚLTIMO EN ARTE Y <br></br> FUNCIONALIDAD</h1>
            <h4 className="textoExplicativo">Muebles de cocina hechos a mano <br></br> y decoración</h4>
            </motion.div>
                <div className={!props.activeBurger? "logoPng":"logoPngHiden"}><Logo /></div>:
        </section> 

        <section className="homeSectionTwo" style={{height:window.innerHeight}} ref={section2}>
            <div className="homeSectionTwoBg"> </div>
            
                <motion.div style={{x:yRange1}}>
                <h3 className="slogan2">UNA NUEVA Y SOFISTICADA VISIÓN DEL ESPACIO <br></br> PARA SU COCINA</h3>
                </motion.div>

                <motion.div style={{x:yRange3}} >
                <div className="barraSeparacion" ></div>
                <h6 className="textoExplicativo2" >Tras la marca se halla la búsqueda de la 
                    productividad y el máximo aprovechamiento 
                    del espacio, partiendo de la idea de crear 
                    ambientes y servicios personalizados con la 
                    estética que mejor se adapte a sus 
                    necesidades al mejor precio. 
                </h6>
                </motion.div>   
        </section>

        <section className="homeSectionThree" style={{height:window.innerHeight}} ref={section3}>
            <div className="homeSectionThreeBg"> </div>
            <motion.div style={{x:yRange2}}>
            <h1 className="slogan3">Compromiso <br></br> Medioambiental </h1>
            </motion.div>
            <motion.div style={{x:yRange4}} >
            <div className="barraSeparacion2" ></div>
            <h6 className="textoExplicativo3">Nuevo acabado mate más ecológico con base al agua <br></br>
                Fórmulas a partir de resinas, solventes, aceites, ceras y aditivos 
                de origen biológico. Reduce la <br></br> dependencia de materias primas 
                de origen fósil. Nuestra última contribución a la reducción de la <br></br>
                debastable huella en la capa de ozono 
            </h6>
            </motion.div>
        </section>

        {infoActive==="SectionFour" && <SectionFour/>}
        {infoActive==="SectionFourActive" && <SectionFourActive/>}
        </>
    )
}


    
