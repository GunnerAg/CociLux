import React,{} from 'react';
import {Link} from 'react-router-dom';
import Logo from './Logo'
import '../styles/NavBar.scss'


export default function NavBar(props) {
    
    let {activeBurger,handleClick}=props;

    return (
        
            <div id='NavContainer'>
                <button style={{background: 'none', color: 'none', border: 'none', outline: 'none'}} onClick={handleClick}>
                { activeBurger?
                    <div className="reactivePosition">
                        <div className='navBar__container' >
                            <div className="navBar__expanded1"></div>
                            <div className="navBar__expanded2"></div>
                        </div>
                        <div className="navBar__burgermenu">
                            <Link to='/' className="navBar__link">Inicio</Link>
                            <Link to='/productos' className="navBar__link" >Diseña tu cocina</Link>
                            <Link to='/galeria' className="navBar__link">Galería</Link>
                            <Link to='/contacto' className="navBar__link">Contacto</Link>  
                            <div className="navBar__logo"><Logo white={true} /></div>
                        </div>
                    </div>
                    :               
                    <div className="reactivePosition">
                        <div className='navBar__container' >
                            <div className="navBar__collapsed"></div>
                            <div className="navBar__collapsed"></div>
                        </div>
                        <div className="navBar__burgermenuHide">
                        </div>
                    </div>
                }
                </button>
            </div>
        
    )
}
