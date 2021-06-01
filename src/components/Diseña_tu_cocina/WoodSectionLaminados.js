import React from 'react';
import {LaminadosData} from '../Diseña_tu_cocina/DesignData';

const{stylesWood,namesWood}= LaminadosData;

export default function WoodSectionLaminados() {

    let Woods19Unit=()=>{
        return(
            <>
            { namesWood[1].map((name,i)=>{
                    return(
                    <div key={`Woods19Unit${i}`}  className="laminados__woods--one-unit">
                        <div className={`laminados__woods--one ${stylesWood[1][i]}`}></div>
                        <div className="laminados__woods--one-text">{name}</div>
                    </div>
                    )
                })
            }
            </>
        )
    }

    let Woods22Unit=()=>{
        return(
            <>
            { namesWood[2].map((name,i)=>{
                    return(
                    <div key={`Woods22Unit${i}`} className="laminados__woods--one-unit">
                        <div className={`laminados__woods--one ${stylesWood[2][i]}`}></div>
                        <div className="laminados__woods--one-text">{name}</div>
                    </div>
                    )
                })
            }
            </>
        )
    }

    return (
        <>
        <div className="laminados__wood--container-one">
            <div className="laminados__woods-header"> Maderas - 19 mm </div>
                <div className="laminados__woods--grid-one">
                    <Woods19Unit/>
                </div> 
            <div className="laminados__woods-header"> Maderas - 22 mm </div>
                <div className="laminados__woods--grid-one">
                    <Woods22Unit/>
                </div> 
        </div>
        </>
    )
}
