import React,{useState} from 'react';
import '../../styles/DiseñoMateriales.scss';
import SideBar from './SideBar';
import Laminados from './Laminados';
import MainMenu from './MainMenu';

export default function DiseñoMateriales() {

    let [sectionSelected,setSection]=useState("")

    let contents =[
        'LAMINADO',
        'MELANINA',
        'CANTEADO',
        'POLILAMINADO',
        'LACADO',
        'MADERA',
    ];

    let redirections =[
        "laminados",
        "cajones",
        "colgadores",
        "tiradores",
        "patas",
        "muestrario",
        "productos/puertas",
        "vitrinas",
        "push",
    ];

    const handleSectionSelected=()=>{
        setSection(sectionSelected="laminados")
    }
 
    return (
        <div className="design-and-materials">
                <div className="design-and-materials__header"></div>
                <div className="design-and-materials__content-container">
                <MainMenu handleSectionSelected={handleSectionSelected}/>
                </div>
        </div>
    )
}

// <div className="boxContainerDiseños">
// <div className="sectionContainer">
//     <SectionBox content={contents[0]} handleClicked={handleClick} withDescription={false} redirection={redirections[0]}/>
// </div>
// <div className="sectionContainer">
//     <SectionBox content={contents[1]} handleClicked={handleClick} withDescription={false} redirection={redirections[1]}/>
// </div>
// <div className="sectionContainer">
//     <SectionBox content={contents[2]} handleClicked={handleClick} withDescription={false} redirection={redirections[2]}/>
// </div>
// <div className="sectionContainer">
//     <SectionBox content={contents[3]} handleClicked={handleClick} withDescription={false} redirection={redirections[3]}/>
// </div>
// <div className="sectionContainer">
//     <SectionBox content={contents[4]} handleClicked={handleClick} withDescription={false} redirection={redirections[4]}/>
// </div>
// <div className="sectionContainer">
//     <SectionBox content={contents[5]} handleClicked={handleClick} withDescription={false} redirection={redirections[5]}/>
// </div>
// </div>
