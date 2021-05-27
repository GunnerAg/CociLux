import React from 'react';
import {useHistory} from 'react-router-dom'
import '../styles/Equipment.scss';
import MainMenu from '../components/Diseña_tu_cocina/MainMenu';


export default function Equipment() {

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

    let data =[
        'BISAGRA',
        'CAJONES',
        'COLGADORES',
        'TIRADORES',
        'PATAS',
        'ELEVADORES',
    ];

    let redirections =[
        "bisagras",
        "cajones",
        "colgadores",
        "tiradores",
        "patas",
        "elevadores",
    ];

    return (
        <div>
                <div className="equipamientos__header"></div>
                <div className="equipamientos__content-container">
                    <div className="equipamientos__main-menu">
                        <div className="equipamientos__main-menu__header">Equipamientos</div>
                            <MainMenu data={data} links={redirections} withLinks={true} clear={true}/>
                    </div>
                </div>
        </div>
    )
}

