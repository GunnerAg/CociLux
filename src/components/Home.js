import React, {useRef,useState,useEffect} from 'react';
import '../styles/Home.scss'
import Logo from './Logo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowDown,faArrowUp} from '@fortawesome/free-solid-svg-icons'
import {motion, useViewportScroll, useTransform, } from 'framer-motion'


export default function Home(props) {
    
    const section1 = useRef();
    const section2 = useRef();
    const section3 = useRef();
    const section4 = useRef();
    const section5 = useRef();
    const section6 = useRef();

    let [sectionIcon,setIcon]=useState(faArrowDown)
    const [scrollY, setScrollY] = useState(0);
    const {scrollYProgress} = useViewportScroll();

    const yRange1 = useTransform(scrollYProgress, [0, 0.15], [1000,0]);
    const yRange2 = useTransform(scrollYProgress, [0.10, 0.35], [-1000,0]);
    const yRange3 = useTransform(scrollYProgress, [0, 0.18], [-1000,0]);
    const yRange4 = useTransform(scrollYProgress, [0.15, 0.35], [1000,0]);
    const yRange5 = useTransform(scrollYProgress, [0.20, 0.55], [1000,0]);

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
                if (scrollYProgress.current<0.18){
                    section2.current.scrollIntoView({behavior: 'smooth'})
                }
                else if (scrollYProgress.current<0.37){
                    section3.current.scrollIntoView({behavior: 'smooth'})
                }
                else if (scrollYProgress.current<0.56){
                    section4.current.scrollIntoView({behavior: 'smooth'})
                }
                else if (scrollYProgress.current<0.75){
                    section5.current.scrollIntoView({behavior: 'smooth'})
                }
                else if (scrollYProgress.current<=0.9){
                    section6.current.scrollIntoView({behavior: 'smooth'})
                }
                if (scrollYProgress.current>=0.9){
                    section1.current.scrollIntoView({behavior: 'smooth'})  
                }  
    }
    
    return (
        <>
        <button style={{ outline:'none'}} onClick={scrollSection} className="home__scroll-button">
            <div className="arrow bounce"><FontAwesomeIcon icon={sectionIcon}/></div>
        </button>

        <section style={{minHeight:window.innerHeight}}  className="home__section-one" ref={section1}>
            <div className="home__section-one--background"> </div>
            <div className="home__section-one--title-container">
                <div className="home__section-one--logo-png"> <Logo black={true}/></div>
                <motion.h3 className="home__section-one--title" initial={{x: -1500}} animate={{x: 0}} transition={{duration:0.2}} > COCILUX · Diseño de cocinas </motion.h3>
            </div>
            <motion.div initial={{x: 1500}} animate={{x: 0}} transition={{duration:0.2}}  >
            <h1 className="home__section-one--slogan">LO ÚLTIMO EN DISEÑO Y FUNCIONALIDAD</h1>
            <h4 className="home__section-one--text">Te ayudamos a conseguir la cocina que mejor se adapte a sus necesidades a precios de fábrica</h4>
            </motion.div>
        </section> 

        <section className="home__section-two" ref={section2}>
            <div className="home__section-two--background"> </div>
            
                <motion.div style={{x:yRange1}}>
                <h3 className="home__section-two--slogan">Una nueva y sofisticada visión del espacio para su cocina.</h3>
                </motion.div>

                <motion.div style={{x:yRange3}} >
                <div className="home__section-two--separation-bar" ></div>
                <h6 className="home__section-two--text" >Tras la marca se halla la fórmula que transforma el espacio en una zona cómoda, 
                    que le permita realizar sus labores de una manera práctica y ordenada, partiendo de la idea de crear ambientes modernos y
                    personalizados con la estética que mejor se adapte a sus necesidades al mejor precio. 
                </h6>
                </motion.div>   
        </section>

        <section className="home__section-three" ref={section3}>
            <div className="home__section-three--background"> </div>
            <motion.div style={{x:yRange2}}>
            <h1 className="home__section-three--slogan">Compromiso <br></br> Medioambiental </h1>
            </motion.div>
            <motion.div style={{x:yRange4}} >
            <div className="home__section-three--separation-bar" ></div>
            <h6 className="home__section-three--text">Nuevo acabado mate más ecológico con base al agua.<br/><br/>
                Fórmulas a partir de resinas, solventes, aceites, ceras y aditivos 
                de origen biológico. <br/><br/>Reduce la dependencia de materias primas 
                de origen fósil. Nuestra última contribución a la reducción de la debastable huella en la capa de ozono. 
            </h6>
            </motion.div>
        </section>

        <section className="home__section-four"  ref={section4}>
            <div className="home__section-four--background"> </div>
                <motion.div style={{x:yRange5}}>
                    <h1 className="home__section-four--slogan">Quiénes somos</h1>
                </motion.div>
        </section>

        <section className="home__section-four--active" ref={section5}>
                    <div className="home__section-four--active-background"> </div>
                        <div className="home__section-four--active-header">
                            <h5 className="home__section-four--active-header--content">En SL Cocilux fabricamos y realizamos cocinas a medida, que buscan principalmente la comodidad, la estética y la funcionalidad que mejor se adapte al espacio y a sus necesidades con una amplia gama de materiales</h5>
                        </div>
                        <div className="home__section-four--active-inner">
                            <div className="home__section-four--image-container"></div>
                            <div className="home__section-four--porque-nosotros">
                                <h6 className="home__porque-nosotros--content">Somos fabricantes especializados, con unos precios competentes directamente de fábrica. <br></br><br></br> Acérquese a nuestra tienda y exposición física, en la que descubrirá una amplia gama de materiales y encimeras.<br></br><br></br> Pídanos presupuesto sin compromiso.</h6>
                            </div>
                        </div>
                </section>
                <section className="home__section-five--active"  ref={section6}>
                    <div className="home__section-five--active-background"> </div>
                        <div className="home__section-five--active-header"> 
                            <h5 className="home__section-five--active-header--content">Compromiso y fiabilidad</h5>
                        </div>
                        <div className="home__section-five--active-inner">
                            <div className="home__section-five--compromiso">
                                <h6 className="home__porque-nosotros--content">Como fabricantes de muebles de cocina; medimos, presupuestamos y montamos en su casa directamente y sin intermediarios. <br></br><br></br> 
                                Esto nos permite realizar grandes descuentos en el material ya que proviene directamente de fábrica. Como resultado obtenemos la cocina que más se adapte a sus necesidades a precios competentes. <br></br><br></br> Todo el inmobiliario cuenta con un seguro y una garantía de fábrica, tanto de materiales como de instalación.<br></br><br></br> Dispondrá de un plazo estimado para que se solucione todo aquello que haya podido sufrir daños, errores de medición o imperfectos de fábrica.<br></br><br></br> Nuestro trabajo experimentado garantiza la calidad del producto y el servicio postventa por si hubiera algún material defectuoso.</h6>
                            </div>
                            <div className="home__section-five--image-container"></div>
                        </div>
                </section>
        </>
    )
}


    
