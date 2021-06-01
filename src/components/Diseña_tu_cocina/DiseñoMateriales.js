import React from 'react';
import '../../styles/DiseñoMateriales.scss';
import MainMenu from './MainMenu';

export default function DiseñoMateriales() {


    let redirections = ["/laminado","/melamina_lacada","/canteado","/polilaminado","/lacado","/madera","/encimera"]
    let data = ["LAMINADO", "LAMINADO LACADO", "CANTEADO", "POLILAMINADO", "LACADO", "MADERA", "ENCIMERAS"]

 
    return (
        <div>
                <div className="design-and-materials__header"></div>
                <div className="design-and-materials__content-container">
                    <div className="design-and-materials__main-menu">
                        <div className="design-and-materials__main-menu__header">Diseños y Materiales</div>
                        <MainMenu data={data} links={redirections} withLinks={true} clear={true}/>
                    </div>
                </div>
        </div>
    )
}
