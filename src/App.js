import {Route, Switch, withRouter} from 'react-router-dom';
import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Catalogo from './components/Catalogo';
import Contact from './components/Contact';
import Designs from './components/Designs';
import Equipment from './components/Equipment';
import Error404 from './components/Error404';
import './components/App.css'



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
      <NavBar className="NavBar" activeBurger={activeBurger} handleClick={handleClickBurger} handleClickBg={handleClickNavbar}/>
      <Switch>
        <Route exact path="/" render={()=>{
          return <Home onClick={handleClicBackground} activeBurger={activeBurger}/>
        }}/>

        <Route path="/productos" render={(routeProps)=>{
          return <Catalogo className="Catalago" {...routeProps}/>
        }}/>

        <Route path="/contacto" render={(routeProps)=>{
          return <Contact {...routeProps}/>
        }}/>

        <Route path="/diseña_tu_cocina" render={(routeProps)=>{
          return <Designs {...routeProps}/>
        }}/>

        <Route exact path="/equipamientos" render={(routeProps)=>{
          return <Equipment {...routeProps}/>
        }}/>

        <Route path="/equipamientos/bisagras" render={(routeProps)=>{
          return <Equipment {...routeProps}/>
        }}/>
        <Route path="*" render={(routeProps)=>{
          return <Error404 {...routeProps}/>
        }}/>

      </Switch>
    </div>
  );
}

export default  withRouter(App);
