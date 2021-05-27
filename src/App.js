import {Route, Router, Switch, withRouter} from 'react-router-dom';
import React, {useState} from 'react';
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




function App() {

  let [activeBurger,setBurger]=useState(false)
  
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
      <NavBar activeBurger={activeBurger} handleClick={handleClickBurger} handleClickBg={handleClickNavbar}/>
      <Switch>
        <Route exact path="/" render={()=>{
          return <Home onClick={handleClicBackground} activeBurger={activeBurger}/>
        }}/>

        <Route path="/catalogo" render={(routeProps)=>{
          return <Catalogo className="Catalago" {...routeProps}/>    
        }}/>
        
        <Route path="/contacto" render={(routeProps)=>{
          return <Contact {...routeProps}/>
        }}/>

        <Route path="/diseña_tu_cocina" render={(routeProps)=>{
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
