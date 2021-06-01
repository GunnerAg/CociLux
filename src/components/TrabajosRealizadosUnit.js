import React, {useState} from 'react';
import '../styles/TrabajosRealizadosUnit.scss'

export default function TrabajosRealizadosUnit(props) {

    let {data}=props;
    let [index, setIndex] = useState(0)
    let [fadeOn, setFade] = useState('original')
    let inlineStyles={
        backgroundImage:`url(${data[index]})`,
        backgroundSize: 'cover',
    }
    
    const handleClick=(mouseClickEvent)=>{

        const halfWidth = (mouseClickEvent.target.offsetWidth)/2;
        const offsetX = (mouseClickEvent.nativeEvent.offsetX)

        if(offsetX>halfWidth*1.5){
            setFade('fade')
            setTimeout(() => {
                setIndex(index===data.length-1? index=0:index=index+1)
            }, 250);
        }

        if(offsetX<halfWidth*0.5){
            setFade('fade')
            setTimeout(() => {
                setIndex(index===0? index=data.length-1:index=index-1)
            }, 250);
        }
    }

    const onAnimationEnd=()=>{
       setFade('')
    }

    return (
        <div className="trabajos__realizados--unit-container">
                <div className="trabajos__realizados--unit">
                {   data.map((d, i)=>{
                        return (<div key={`TrabajosRealizados${i}`} className={index===i? `trabajos__realizados--index active`:`trabajos__realizados--index`}>
                        </div>)
                })}
                </div>

                {
                    data.length>1? 
                    <div
                onClick={(mouseClickEvent)=>handleClick(mouseClickEvent)}
                style={inlineStyles}
                className={`trabajos__realizados--image ${fadeOn}`}
                onAnimationEnd={onAnimationEnd}
                >
                </div>:
                <div 
                style={inlineStyles}
                className={`trabajos__realizados--image`}>
                </div>

                }
              
        </div>
    )
}
