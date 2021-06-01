import React,{useState} from 'react';
import '../styles/SectionBox.scss';

export default function SectionBox(props) {

    let {handleClicked, content, withDescription, description, redirection, } = props

    const[hoverOn,setHover]=useState(false)

    let handleClick=()=>{
        setHover(true)
        handleClicked(redirection)
    }

    let handleHoverOn=()=>{
        setHover(true)
    }

    let handleHoverOff =()=>{
        setHover(false)
    }

    return (
        <div className="mainBoxContainer">
                <div className="containerInner" onClick={handleClick} onMouseEnter={handleHoverOn} onMouseLeave={handleHoverOff}> 
                    <div className="contentInner" > {content} <div className={hoverOn? "underLineBoxIn":"underLineBoxOut" }/></div>
                </div>
                {withDescription?
                    (<div className={hoverOn? "descriptionIn":"descriptionOut" }>{description}</div>):null
                }

        </div>
    )
}

