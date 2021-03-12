import React,{useRef,useState} from 'react';
import {motion, useMotionValue} from 'framer-motion';
import '../styles/Error404.css'

export default function Error404() {

    const[clicked,setClicked]=useState(false)
    const constrainsRef = useRef(null);

    const handleClickedOn=()=>{
        setClicked(true)
    }

    const handleClickedOff=()=>{
        setClicked(false) 
    }

    return (
        <>
        <div className="backgroundImg" ref={constrainsRef}>
            <div className="flexBox">
                <div className="contentContainer" >
                    <div className="errorMsg">4</div>
                    <div className="errorMsg2">0</div>
                    <div className="errorMsg">4</div>
                </div>
            </div>
            <div className="innerMsg">Vaya! por aqui no se cuece nada...</div>
            <div className="animatedContainer">
                    <motion.div className="cutleryContainer" drag={true} dragConstraints={constrainsRef} onDrag={handleClickedOn} onDragEnd={handleClickedOff}>
                        <div className="forkPng rotate"></div>
                    </motion.div>
                    <motion.div className="cutleryContainer" drag={true} dragConstraints={constrainsRef} onDrag={handleClickedOn} onDragEnd={handleClickedOff}>
                        <div className="spoonPng rotate1"></div>
                    </motion.div>
                    <motion.div className="cutleryContainer" drag={true} dragConstraints={constrainsRef} onDrag={handleClickedOn} onDragEnd={handleClickedOff}>
                        <div className="knifePng rotate2"></div>
                    </motion.div>
                </div>
        </div>
        </>
    )
}
