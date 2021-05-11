import React from 'react';
import {Link} from 'react-router-dom';
import '../../styles/SideBar.scss';

export default function SideBar(){
    return (
        <div className="design-and-materials__sections">
            <Link to="/laminado" style={{textDecoration:"none"}} className="design-and-materials__section-link">
                <button style={{background: 'none', color: 'none', border: 'none', outline: 'none'}} className="design-and-materials__button">
                    <p className="design-and-materials__content">LAMINADOS</p>
                </button>
            </Link>
            <Link to="/melanina_lacada" style={{textDecoration:"none"}} className="design-and-materials__section-link">
                <button style={{background: 'none', color: 'none', border: 'none', outline: 'none'}}  className="design-and-materials__button" >
                    <p className="design-and-materials__content">MELAMINA</p>
                </button>
            </Link>
            <Link to="/canteado" style={{textDecoration:"none"}} className="design-and-materials__section-link">
                <button style={{background: 'none', color: 'none', border: 'none', outline: 'none'}}  className="design-and-materials__button">
                    <p className="design-and-materials__content">CANTEADO</p>
                </button>
            </Link>
            <Link to="/polilaminado" style={{textDecoration:"none"}} className="design-and-materials__section-link">
                <button style={{background: 'none', color: 'none', border: 'none', outline: 'none'}}  className="design-and-materials__button">
                    <p className="design-and-materials__content">POLILAMINADO</p>
                </button>
            </Link>
            <Link to="/lacado" style={{textDecoration:"none"}} className="design-and-materials__section-link">
                <button style={{background: 'none', color: 'none', border: 'none', outline: 'none'}} className="design-and-materials__button">
                    <p className="design-and-materials__content">LAMINADOS</p>
                </button>
            </Link>
            <Link to="/madera" style={{textDecoration:"none"}} className="design-and-materials__section-link">
                <button style={{background: 'none', color: 'none', border: 'none', outline: 'none'}} className="design-and-materials__button">
                    <p className="design-and-materials__content">MADERA</p>
                </button>
            </Link>
        </div>
    )
}