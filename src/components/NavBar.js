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
                        <div className='container' >
                            <div className="expanded1"></div>
                            <div className="expanded2"></div>
                        </div>
                        <div className="burgermenu">
                            <Link to='/' className="link">Inicio</Link>
                            <Link to='/productos' className="link">Catalogo</Link>
                            <Link to='/diseña_tu_cocina' className="link">Diseña tu cocina</Link>
                            <Link to='/contacto' className="link">Contacto</Link>  
                            <Logo/>
                        </div>
                    </div>
                    :               
                    <div className="reactivePosition">
                        <div className='container' >
                            <div className="collapsed"></div>
                            <div className="collapsed"></div>
                        </div>
                        <div className="burgermenuHide">
                        </div>
                    </div>
                }
                </button>
            </div>
        
    )
}
