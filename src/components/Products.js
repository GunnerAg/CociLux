import React from 'react';
import {useHistory} from 'react-router-dom'
import '../styles/Products.scss';
import SectionBox from './SectionBox';

export default function Products() {

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
        'DISEÑOS Y MATERIALES',
        'EQUIPAMIENTOS',
        'TRABAJOS REALIZADOS',
        'TIPOS DE DISTRIBUCION',
    ];

    let descriptions=[
        'Encontramos una variedad de opciones para establecer una base sobre el estilo que podría tener nuestra cocina',
        'Contiene un amplio abanico de muebles y complementos con los que podrá completar el diseño de su cocina',
        'Galería de imágenes donde se muestran los resultados finales',
        'En esta sección se exponen los diferentes tipos de organización que puede tener una cocina según su espacio y utilidad.'
    ];

    let redirections =[
        "diseños&materiales",
        "equipamientos",
        "ejemplos",
        "distribucion"
    ];

    return (
        <div className="products">
            <div className="products__box-container">
                <SectionBox content={contents[0]} handleClicked={handleClick} withDescription={isTouchScreen? false:true} description={descriptions[0]} redirection={redirections[0]}/>
                <SectionBox content={contents[1]} handleClicked={handleClick} withDescription={isTouchScreen? false:true} description={descriptions[1]} redirection={redirections[1]}/>
                <SectionBox content={contents[3]} handleClicked={handleClick} withDescription={isTouchScreen? false:true} description={descriptions[3]} redirection={redirections[3]}/>
                <SectionBox content={contents[2]} handleClicked={handleClick} withDescription={isTouchScreen? false:true} description={descriptions[2]} redirection={redirections[2]}/>  
            </div>
        </div>
    )
}


