import React from 'react';
import {Link} from 'react-router-dom';

export default function MainMenu(props) {

    let {handleSectionSelected}=props;

    return (
        <div className="main-menu">
                <div className="main-menu__header">Diseños y Materiales</div>
                <div className="main-menu__container">
                    <Link to="/laminado"><button className="main-menu__button" onClick={handleSectionSelected}>LAMINADO</button></Link>
                    <Link to="/melanina_lacada"><button className="main-menu__button" onClick={handleSectionSelected}>MELANINA</button></Link>
                    <Link to="/canteado"><button className="main-menu__button" onClick={handleSectionSelected}>CANTEADO</button></Link>
                    <Link to="/polilaminado"><button className="main-menu__button" onClick={handleSectionSelected}>POLILAMINADO</button></Link>
                    <Link to="/lacado"><button className="main-menu__button" onClick={handleSectionSelected}>LACADO</button></Link>
                    <Link to="/madera"><button className="main-menu__button" onClick={handleSectionSelected}>MADERA</button></Link>
                </div>
        </div>
    )
}
