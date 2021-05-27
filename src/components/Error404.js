import React,{useRef} from 'react';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import '../styles/Error404.scss'

export default function Error404() {

    const constrainsRef = useRef(null);

    return (
        <>
        <div className="error404__backgroundImg" ref={constrainsRef}>
            <div className="error404__flexBox">
                <motion.div className="error404__contentContainer" drag={true} dragConstraints={constrainsRef}>
                        <div className="error404__errorMsg">4</div>
                        <div className="error404__errorMsg2">0</div>
                        <div className="error404__errorMsg">4</div>
                </motion.div>
            </div>
            <div className="error404__innerMsg">
                <div >Vaya! por aqui no se cuece nada...</div>
                <button className="error404__link-button"><Link to='/' style={{textDecoration:'none', color:'black'}}>Inicio</Link></button>
            </div>

        </div>
        </>
    )
}
