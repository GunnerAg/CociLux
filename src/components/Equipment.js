import React from 'react';
import '../styles/Equipment.scss';
import MainMenu from '../components/Diseña_tu_cocina/MainMenu';


export default function Equipment() {

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
                            <MainMenu data={data} links={redirections} withLinks={true} clear={false}/>
                    </div>
                </div>
        </div>
    )
}

