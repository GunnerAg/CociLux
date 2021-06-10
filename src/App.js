import {Route, Switch, withRouter} from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import DiseñoMateriales from './components/Diseña_tu_cocina/DiseñoMateriales';
import Catalogo from './components/Catalogo';
import Contact from './components/Contact';
import Products from './components/Products';
import Equipment from './components/Equipment';
import Bisagras from './components/Equipamientos/Bisagras';
import Cajones from './components/Equipamientos/Cajones';
import Colgadores from './components/Equipamientos/Colgadores';
import Tiradores from './components/Equipamientos/Tiradores';
import Patas from './components/Equipamientos/Patas';
import Elevadores from './components/Equipamientos/Elevadores';
import Laminados from './components/Diseña_tu_cocina/Laminados';
import LaminadoLacado from './components/Diseña_tu_cocina/LaminadoLacado';
import Canteados from './components/Diseña_tu_cocina/Canteado';
import Polilaminados from './components/Diseña_tu_cocina/Polilaminado';
import Lacados from './components/Diseña_tu_cocina/Lacados';
import Maderas from './components/Diseña_tu_cocina/Maderas';
import Encimeras from './components/Diseña_tu_cocina/Encimeras';
import TrabajosRealizados from './components/TrabajosRealizados';
import Error404 from './components/Error404';
import './styles/App.scss'
import Distribucion from './components/Distribucion';
import WhatsappIcon from './components/whatsappIcon';




function App() {
  console.log("%cHi there! 😉, my name is Gunner, Ive made this App on React. The source code can be found @ https://github.com/GunnerAg/CociLux", "color: #222222;   font-family: 'Abhaya Libre', serif; font-size: 1.5em; font-weight: 400; ")

  useEffect(() => {
    
    const images=[
      
      "https://res.cloudinary.com/sl-cocilux/image/upload/f_auto/v1620825490/DISE%C3%91OS%20Y%20MATERIALES/1.%20LAMINADOS/COCINAS/Cocilux-%20Laminados-%20Cocinas%20Madrid-1_LAMINADA.jpg",
      "https://res.cloudinary.com/sl-cocilux/image/upload/f_auto/v1620825490/DISE%C3%91OS%20Y%20MATERIALES/1.%20LAMINADOS/COCINAS/Cocilux-%20Laminados-%20Cocinas%20Madrid-2_LAMINADA.png",
      "https://res.cloudinary.com/sl-cocilux/image/upload/f_auto/v1620825491/DISE%C3%91OS%20Y%20MATERIALES/1.%20LAMINADOS/COCINAS/Cocilux-Laminados-Cocinas%20Madrid-3_LAMINADA.jpg",
      "https://res.cloudinary.com/sl-cocilux/image/upload/f_auto/v1620825491/DISE%C3%91OS%20Y%20MATERIALES/1.%20LAMINADOS/COCINAS/Cocilux-%20Laminados-%20Cocinas%20Madrid-4_LAMINADA.png",
      "https://res.cloudinary.com/sl-cocilux/image/upload/f_auto/v1620825491/DISE%C3%91OS%20Y%20MATERIALES/1.%20LAMINADOS/COCINAS/Cocilux-%20Laminados-%20Cocinas%20Madrid-5_LAMINADA.png",
      "https://res.cloudinary.com/sl-cocilux/image/upload/f_auto/v1620825491/DISE%C3%91OS%20Y%20MATERIALES/1.%20LAMINADOS/COCINAS/Cocilux-%20Laminados-%20Cocinas%20Madrid-6_LAMINADA.png",
      "https://res.cloudinary.com/sl-cocilux/image/upload/f_auto/v1620829677/DISE%C3%91OS%20Y%20MATERIALES/1.%20LAMINADOS/COCINAS/Cocilux-%20Laminados-%20Cocinas%20Madrid-%207_LAMINADA.png",
      "https://res.cloudinary.com/sl-cocilux/image/upload/f_auto/v1620933549/DISE%C3%91OS%20Y%20MATERIALES/1.%20LAMINADOS/COCINAS/Cocilux-Laminados-Cocinas%20Madrid-8_LAMINADA.jpg",
      "https://res.cloudinary.com/sl-cocilux/image/upload/f_auto/v1620933668/DISE%C3%91OS%20Y%20MATERIALES/1.%20LAMINADOS/COCINAS/Cocilux-Laminados-Cocinas%20Madrid-9_LAMINADA.png",
      "https://res.cloudinary.com/sl-cocilux/image/upload/f_auto/v1620933669/DISE%C3%91OS%20Y%20MATERIALES/1.%20LAMINADOS/COCINAS/Cocilux-Laminados-Cocinas%20Madrid-10_LAMINADA.jpg",
      "https://res.cloudinary.com/sl-cocilux/image/upload/f_auto/v1620933669/DISE%C3%91OS%20Y%20MATERIALES/1.%20LAMINADOS/COCINAS/Cocilux-Laminados-Cocinas%20Madrid-11_LAMINADA.jpg",

      "https://res.cloudinary.com/sl-cocilux/image/upload/f_auto/v1620825706/DISE%C3%91OS%20Y%20MATERIALES/2.%20MELAMINA%20LACADA/COCINAS/Cocilux-Laminado_Lacado-Cocinas%20Madrid-1_MELAMINA.png",
      "https://res.cloudinary.com/sl-cocilux/image/upload/f_auto/v1620825705/DISE%C3%91OS%20Y%20MATERIALES/2.%20MELAMINA%20LACADA/COCINAS/Cocilux-Laminado_Lacado-Cocinas%20Madrid-2_MELAMINA.jpg",
      "https://res.cloudinary.com/sl-cocilux/image/upload/f_auto/v1620825706/DISE%C3%91OS%20Y%20MATERIALES/2.%20MELAMINA%20LACADA/COCINAS/Cocilux-Laminado_Lacado-Cocinas%20Madrid-3_MELAMINA.jpg",
      "https://res.cloudinary.com/sl-cocilux/image/upload/f_auto/v1620825706/DISE%C3%91OS%20Y%20MATERIALES/2.%20MELAMINA%20LACADA/COCINAS/Cocilux-Laminado_Lacado-Cocinas%20Madrid-4_MELAMINA.jpg",
      "https://res.cloudinary.com/sl-cocilux/image/upload/f_auto/v1620825706/DISE%C3%91OS%20Y%20MATERIALES/2.%20MELAMINA%20LACADA/COCINAS/Cocilux-Laminado_Lacado-Cocinas%20Madrid-5_MELAMINA.jpg",
      "https://res.cloudinary.com/sl-cocilux/image/upload/f_auto/v1620825706/DISE%C3%91OS%20Y%20MATERIALES/2.%20MELAMINA%20LACADA/COCINAS/Cocilux-Laminado_Lacado-Cocinas%20Madrid-6_MELAMINA.jpg",
      "https://res.cloudinary.com/sl-cocilux/image/upload/f_auto/v1620825707/DISE%C3%91OS%20Y%20MATERIALES/2.%20MELAMINA%20LACADA/COCINAS/Cocilux-Laminado_Lacado-Cocinas%20Madrid-7_MELAMINA.jpg",
      "https://res.cloudinary.com/sl-cocilux/image/upload/f_auto/v1620825707/DISE%C3%91OS%20Y%20MATERIALES/2.%20MELAMINA%20LACADA/COCINAS/Cocilux-Laminado_Lacado-Cocinas%20Madrid-8_MELAMINA.jpg",
      "https://res.cloudinary.com/sl-cocilux/image/upload/f_auto/v1620825707/DISE%C3%91OS%20Y%20MATERIALES/2.%20MELAMINA%20LACADA/COCINAS/Cocilux-Laminado_Lacado-Cocinas%20Madrid-9_MELAMINA.jpg",
      "https://res.cloudinary.com/sl-cocilux/image/upload/f_auto/v1620825705/DISE%C3%91OS%20Y%20MATERIALES/2.%20MELAMINA%20LACADA/COCINAS/Cocilux-Laminado_Lacado-Cocinas%20Madrid-10_MELAMINA.jpg",
      "https://res.cloudinary.com/sl-cocilux/image/upload/f_auto/v1620825706/DISE%C3%91OS%20Y%20MATERIALES/2.%20MELAMINA%20LACADA/COCINAS/Cocilux-Laminado_Lacado-Cocinas%20Madrid-11_MELAMINA.jpg",

      "https://res.cloudinary.com/sl-cocilux/image/upload/f_auto/v1621527958/DISE%C3%91OS%20Y%20MATERIALES/3.%20CANTEADO/COCINAS/Cocilux-Trabajos_Realizados-Cocinas_Madrid-CAN_1.jpg",
      "https://res.cloudinary.com/sl-cocilux/image/upload/f_auto/v1621527959/DISE%C3%91OS%20Y%20MATERIALES/3.%20CANTEADO/COCINAS/Cocilux-Trabajos_Realizados-Cocinas_Madrid-CAN_2.jpg",
      "https://res.cloudinary.com/sl-cocilux/image/upload/f_auto/v1621527960/DISE%C3%91OS%20Y%20MATERIALES/3.%20CANTEADO/COCINAS/Cocilux-Trabajos_Realizados-Cocinas_Madrid-CAN_3.jpg",
      "https://res.cloudinary.com/sl-cocilux/image/upload/f_auto/v1621527958/DISE%C3%91OS%20Y%20MATERIALES/3.%20CANTEADO/COCINAS/Cocilux-Trabajos_Realizados-Cocinas_Madrid-CAN_4.jpg",
      "https://res.cloudinary.com/sl-cocilux/image/upload/f_auto/v1621527958/DISE%C3%91OS%20Y%20MATERIALES/3.%20CANTEADO/COCINAS/Cocilux-Trabajos_Realizados-Cocinas_Madrid-CAN_5.jpg",
      "https://res.cloudinary.com/sl-cocilux/image/upload/f_auto/v1621527957/DISE%C3%91OS%20Y%20MATERIALES/3.%20CANTEADO/COCINAS/Cocilux-Trabajos_Realizados-Cocinas_Madrid-CAN_6.jpg",
      "https://res.cloudinary.com/sl-cocilux/image/upload/f_auto/v1621527958/DISE%C3%91OS%20Y%20MATERIALES/3.%20CANTEADO/COCINAS/Cocilux-Trabajos_Realizados-Cocinas_Madrid-CAN_7.jpg",
      "https://res.cloudinary.com/sl-cocilux/image/upload/f_auto/v1621527957/DISE%C3%91OS%20Y%20MATERIALES/3.%20CANTEADO/COCINAS/Cocilux-Trabajos_Realizados-Cocinas_Madrid-CAN_8.jpg",
      "https://res.cloudinary.com/sl-cocilux/image/upload/f_auto/v1621527960/DISE%C3%91OS%20Y%20MATERIALES/3.%20CANTEADO/COCINAS/Cocilux-Trabajos_Realizados-Cocinas_Madrid-CAN_9.jpg",

      "https://res.cloudinary.com/sl-cocilux/image/upload/f_auto/v1621528368/DISE%C3%91OS%20Y%20MATERIALES/4.%20POLILAMINADOS/COCINAS/Cocilux-Trabajos_Realizados-Cocinas_Madrid-MODEPOL_1.png",
      "https://res.cloudinary.com/sl-cocilux/image/upload/f_auto/v1621528367/DISE%C3%91OS%20Y%20MATERIALES/4.%20POLILAMINADOS/COCINAS/Cocilux-Trabajos_Realizados-Cocinas_Madrid-POL_2.png",
      "https://res.cloudinary.com/sl-cocilux/image/upload/f_auto/v1621528369/DISE%C3%91OS%20Y%20MATERIALES/4.%20POLILAMINADOS/COCINAS/Cocilux-Trabajos_Realizados-Cocinas_Madrid-POL_3.png",
      "https://res.cloudinary.com/sl-cocilux/image/upload/f_auto/v1621528367/DISE%C3%91OS%20Y%20MATERIALES/4.%20POLILAMINADOS/COCINAS/Cocilux-Trabajos_Realizados-Cocinas_Madrid-MODEPOL_4.png",
      "https://res.cloudinary.com/sl-cocilux/image/upload/f_auto/v1621528371/DISE%C3%91OS%20Y%20MATERIALES/4.%20POLILAMINADOS/COCINAS/Cocilux-Trabajos_Realizados-Cocinas_Madrid-MODEPOL_5.png",
      "https://res.cloudinary.com/sl-cocilux/image/upload/f_auto/v1621528368/DISE%C3%91OS%20Y%20MATERIALES/4.%20POLILAMINADOS/COCINAS/Cocilux-Trabajos_Realizados-Cocinas_Madrid-MODEPOL_6.png",
      "https://res.cloudinary.com/sl-cocilux/image/upload/f_auto/v1621528371/DISE%C3%91OS%20Y%20MATERIALES/4.%20POLILAMINADOS/COCINAS/Cocilux-Trabajos_Realizados-Cocinas_Madrid-POL_7.png",
      "https://res.cloudinary.com/sl-cocilux/image/upload/f_auto/v1621528371/DISE%C3%91OS%20Y%20MATERIALES/4.%20POLILAMINADOS/COCINAS/Cocilux-Trabajos_Realizados-Cocinas_Madrid-MODEPOL_8.png",
      "https://res.cloudinary.com/sl-cocilux/image/upload/f_auto/v1621528374/DISE%C3%91OS%20Y%20MATERIALES/4.%20POLILAMINADOS/COCINAS/Cocilux-Trabajos_Realizados-Cocinas_Madrid-MODEPOL_9.png",
      "https://res.cloudinary.com/sl-cocilux/image/upload/f_auto/v1621528372/DISE%C3%91OS%20Y%20MATERIALES/4.%20POLILAMINADOS/COCINAS/Cocilux-Trabajos_Realizados-Cocinas_Madrid-MODEPOL_10.png",
      "https://res.cloudinary.com/sl-cocilux/image/upload/f_auto/v1621528374/DISE%C3%91OS%20Y%20MATERIALES/4.%20POLILAMINADOS/COCINAS/Cocilux-Trabajos_Realizados-Cocinas_Madrid-MODEPOL_11.png",

      "https://res.cloudinary.com/sl-cocilux/image/upload/f_auto/v1621528924/DISE%C3%91OS%20Y%20MATERIALES/5.%20LACADOS/COCINAS/Cocilux-Trabajos_Realizados-Cocinas_Madrid-LAC_1.png",
      "https://res.cloudinary.com/sl-cocilux/image/upload/f_auto/v1621528923/DISE%C3%91OS%20Y%20MATERIALES/5.%20LACADOS/COCINAS/Cocilux-Trabajos_Realizados-Cocinas_Madrid-LAC_2.png",
      "https://res.cloudinary.com/sl-cocilux/image/upload/f_auto/v1621528923/DISE%C3%91OS%20Y%20MATERIALES/5.%20LACADOS/COCINAS/Cocilux-Trabajos_Realizados-Cocinas_Madrid-LAC_3.png",
      "https://res.cloudinary.com/sl-cocilux/image/upload/f_auto/v1621528923/DISE%C3%91OS%20Y%20MATERIALES/5.%20LACADOS/COCINAS/Cocilux-Trabajos_Realizados-Cocinas_Madrid-LAC_4.png",
      "https://res.cloudinary.com/sl-cocilux/image/upload/f_auto/v1621528924/DISE%C3%91OS%20Y%20MATERIALES/5.%20LACADOS/COCINAS/Cocilux-Trabajos_Realizados-Cocinas_Madrid-LAC_5.png",
      "https://res.cloudinary.com/sl-cocilux/image/upload/f_auto/v1621528923/DISE%C3%91OS%20Y%20MATERIALES/5.%20LACADOS/COCINAS/Cocilux-Trabajos_Realizados-Cocinas_Madrid-LAC_6.png",
      "https://res.cloudinary.com/sl-cocilux/image/upload/f_auto/v1621528926/DISE%C3%91OS%20Y%20MATERIALES/5.%20LACADOS/COCINAS/Cocilux-Trabajos_Realizados-Cocinas_Madrid-LAC_7.png",
      "https://res.cloudinary.com/sl-cocilux/image/upload/f_auto/v1621528925/DISE%C3%91OS%20Y%20MATERIALES/5.%20LACADOS/COCINAS/Cocilux-Trabajos_Realizados-Cocinas_Madrid-LAC_8.png",
      "https://res.cloudinary.com/sl-cocilux/image/upload/f_auto/v1621528925/DISE%C3%91OS%20Y%20MATERIALES/5.%20LACADOS/COCINAS/Cocilux-Trabajos_Realizados-Cocinas_Madrid-LAC_9.png",
      "https://res.cloudinary.com/sl-cocilux/image/upload/f_auto/v1621528926/DISE%C3%91OS%20Y%20MATERIALES/5.%20LACADOS/COCINAS/Cocilux-Trabajos_Realizados-Cocinas_Madrid-LAC_10.png",
      "https://res.cloudinary.com/sl-cocilux/image/upload/f_auto/v1621528926/DISE%C3%91OS%20Y%20MATERIALES/5.%20LACADOS/COCINAS/Cocilux-Trabajos_Realizados-Cocinas_Madrid-LAC_11.png",

      "https://res.cloudinary.com/sl-cocilux/image/upload/f_auto/v1621531393/DISE%C3%91OS%20Y%20MATERIALES/7.%20MADERAS/COCINAS/Cocilux-Trabajos_Realizados-Cocinas_Madrid-MAD_1.png",
      "https://res.cloudinary.com/sl-cocilux/image/upload/f_auto/v1621531393/DISE%C3%91OS%20Y%20MATERIALES/7.%20MADERAS/COCINAS/Cocilux-Trabajos_Realizados-Cocinas_Madrid-MAD_2.png",
      "https://res.cloudinary.com/sl-cocilux/image/upload/f_auto/v1621531392/DISE%C3%91OS%20Y%20MATERIALES/7.%20MADERAS/COCINAS/Cocilux-Trabajos_Realizados-Cocinas_Madrid-MAD_3.png",
      "https://res.cloudinary.com/sl-cocilux/image/upload/f_auto/v1621531392/DISE%C3%91OS%20Y%20MATERIALES/7.%20MADERAS/COCINAS/Cocilux-Trabajos_Realizados-Cocinas_Madrid-MAD_4.png",
      "https://res.cloudinary.com/sl-cocilux/image/upload/f_auto/v1621531393/DISE%C3%91OS%20Y%20MATERIALES/7.%20MADERAS/COCINAS/Cocilux-Trabajos_Realizados-Cocinas_Madrid-MAD_5.png",
      "https://res.cloudinary.com/sl-cocilux/image/upload/f_auto/v1621531393/DISE%C3%91OS%20Y%20MATERIALES/7.%20MADERAS/COCINAS/Cocilux-Trabajos_Realizados-Cocinas_Madrid-MAD_6.png",
    ];

    cacheImages(images);
}, []);

const cacheImages= async(srcArray)=>{
    const promises=await srcArray.map((src)=>{
      return new Promise(function(resolve,reject){
        const img = new Image();

        img.src=src;
        img.onload=resolve();
        img.onerror=reject();
      });
    });

    await Promise.all(promises);

  }

  let [activeBurger,setBurger]=useState(false);
  
  let handleClickBurger=()=>{
    setBurger (activeBurger =!activeBurger)
  };
    
  let handleClickNavbar=()=>{
    setBurger(activeBurger=false)
  };

  let handleClicBackground=()=>{
    setBurger(activeBurger=false)
  };

  return (
    <div className="AppContainer" >
      <WhatsappIcon/>
      <NavBar activeBurger={activeBurger} handleClick={handleClickBurger} handleClickBg={handleClickNavbar}/>
      <Switch>
        <Route exact path="/" render={()=>{
          return <Home onClick={handleClicBackground} activeBurger={activeBurger}/>
        }}/>

        <Route path="/galeria" render={(routeProps)=>{
          return <Catalogo className="Catalago" {...routeProps}/>    
        }}/>
        
        <Route path="/contacto" render={(routeProps)=>{
          return <Contact {...routeProps}/>
        }}/>

        <Route path="/productos" render={(routeProps)=>{
          return <Products {...routeProps}/>
        }}/>

        <Route exact path="/equipamientos" render={(routeProps)=>{
          return <Equipment {...routeProps}/>
        }}/>

        <Route path="/bisagras" render={(routeProps)=>{
          return <Bisagras {...routeProps}/>
        }}/>

        <Route path="/cajones" render={(routeProps)=>{
          return <Cajones {...routeProps}/>
        }}/>

        <Route path="/colgadores" render={(routeProps)=>{
          return <Colgadores {...routeProps}/>
        }}/>

        <Route path="/tiradores" render={(routeProps)=>{
          return <Tiradores {...routeProps}/>
        }}/>

        <Route path="/patas" render={(routeProps)=>{
          return <Patas {...routeProps}/>
        }}/>

        <Route path="/elevadores" render={(routeProps)=>{
          return <Elevadores {...routeProps}/>
        }}/>
        
        <Route path="/diseños&materiales" render={(routeProps)=>{
          return <DiseñoMateriales {...routeProps}/>
        }}/>

        <Route path="/laminado" render={(routeProps)=>{
          return <Laminados {...routeProps}/>
        }}/>

        <Route path="/melamina_lacada" render={(routeProps)=>{
          return <LaminadoLacado {...routeProps}/>
        }}/>

        <Route path="/canteado" render={(routeProps)=>{
          return <Canteados {...routeProps}/>
        }}/>

        <Route path="/polilaminado" render={(routeProps)=>{
          return <Polilaminados {...routeProps}/>
        }}/>

        <Route path="/lacado" render={(routeProps)=>{
          return <Lacados {...routeProps}/>
        }}/>

        <Route path="/madera" render={(routeProps)=>{
          return <Maderas {...routeProps}/>
        }}/>

        <Route path="/encimera" render={(routeProps)=>{
          return <Encimeras {...routeProps}/>
        }}/>

        <Route path="/distribucion" render={(routeProps)=>{
          return <Distribucion {...routeProps}/>
        }}/>

        <Route path="/ejemplos" render={(routeProps)=>{
          return <TrabajosRealizados {...routeProps}/>
        }}/>

        <Route path="*" render={(routeProps)=>{
          return <Error404 {...routeProps}/>
        }}/>

      
        
      </Switch>
     
    </div>
  );
}

export default  withRouter(App);
