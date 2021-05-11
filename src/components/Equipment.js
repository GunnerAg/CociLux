import React,{useState,useEffect} from 'react';
import {useHistory} from 'react-router-dom'
import '../styles/Equipment.scss';
import SectionBox from './SectionBox';


export default function Equipment() {

    //We redirect with history to use timer in touchscreens, this allows me to play the animation on mobile and wait before redirect
    //And at the same time avoid desktop user to wait 0.5 extra seconds.
    let history = useHistory();
    let isTouchScreen = (('ontouchstart' in window) ||(navigator.MaxTouchPoints > 0) ||(navigator.msMaxTouchPoints > 0))

    let handleClick=(redirection)=>{
        console.log(isTouchScreen)
        isTouchScreen? 
        (
            setTimeout(() => {
                history.push(`/${redirection}`)
            }, 500)
        ):
        (history.push(`/${redirection}`))
    }

    //This holds the content passed to the box components as props.
    let contents =[
        'BISAGRA',
        'CAJONES',
        'COLGADORES',
        'TIRADORES',
        'PATAS',
        'MUESTRARIO',
        'PRODUCTOS/PUERTAS',
        'VITRINAS',
        'PUSH'
    ];

    let redirections =[
        "bisagras",
        "cajones",
        "colgadores",
        "tiradores",
        "patas",
        "muestrario",
        "productos/puertas",
        "vitrinas",
        "push",
    ];
    return (
        <div >
        <div className="boxContainer2">
            <div className="sectionContainer">
                <SectionBox content={contents[0]} handleClicked={handleClick} withDescription={false} redirection={redirections[0]}/>
            </div>
            <div className="sectionContainer">
                <SectionBox content={contents[1]} handleClicked={handleClick} withDescription={false} redirection={redirections[1]}/>
            </div>
            <div className="sectionContainer">
                <SectionBox content={contents[2]} handleClicked={handleClick} withDescription={false} redirection={redirections[2]}/>
            </div>
            <div className="sectionContainer">
                <SectionBox content={contents[3]} handleClicked={handleClick} withDescription={false} redirection={redirections[3]}/>
            </div>
            <div className="sectionContainer">
                <SectionBox content={contents[4]} handleClicked={handleClick} withDescription={false} redirection={redirections[4]}/>
            </div>
            <div className="sectionContainer">
                <SectionBox content={contents[5]} handleClicked={handleClick} withDescription={false} redirection={redirections[5]}/>
            </div>
            <div className="sectionContainer">
                <SectionBox content={contents[6]} handleClicked={handleClick} withDescription={false} redirection={redirections[6]}/>
            </div>
            <div className="sectionContainer">
                <SectionBox content={contents[7]} handleClicked={handleClick} withDescription={false} redirection={redirections[7]}/>
            </div>
            <div className="sectionContainer">
                <SectionBox content={contents[8]} handleClicked={handleClick} withDescription={false} redirection={redirections[8]}/>
            </div>
        </div>
    </div>
    )
}

