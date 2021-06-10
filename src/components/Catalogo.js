import React, {useState} from 'react'
import Cocinas from './Cocinas'
import "../styles/Catalogue.scss"
import MainMenu from '../components/Diseña_tu_cocina/MainMenu';


export default function Catalogo() {

    let data = ["LAMINADO", "LAMINADO LACADO", "CANTEADO", "POLILAMINADO", "LACADO", "MADERA"]
    let [currentData, setData] = useState(data[Math.floor(Math.random()*6)]) 
    let initialState={slideIndex: 0}
    const handleClick=(e)=>{
        setData(currentData=e.currentTarget.name)
    }

    return (
            <div style={{height:'100vh'}}>
                <div  className="catalogo__header">
                    <MainMenu data={data} withLink={false} handleClick={handleClick} initialState={initialState}/>
                </div>
                <div className="catalogo__container">
                    <div><Cocinas displaySlides={currentData}/></div>
                </div>
            </div>
    )
}

