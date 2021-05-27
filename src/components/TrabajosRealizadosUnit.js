import React, {useState} from 'react';
import '../styles/TrabajosRealizadosUnit.scss'

export default function TrabajosRealizadosUnit(props) {

    let {data}=props;
    let [touchOrigin, setTouchOrigin] = useState({x:0,y:0})
    let [touchEnding, setTouchEnding] = useState({x:0,y:0})
    let [index, setIndex] = useState(0)
    let [swipper, setSide] = useState('original')
    let [currentX,setX] = useState(0)
    let inlineStyles={
        backgroundImage:`url(${data[index]})`,
        transform:`translateX(${currentX})`,
        backgroundSize: 'cover',
    }


    //SWIPE ON TOUCH
    const handleTouchStart =(touchStartEvent)=>{
        setTouchOrigin(touchOrigin={x:touchStartEvent.changedTouches[0].screenX,y:touchStartEvent.changedTouches[0].screenY})
    }

    const handleTouchEnd =(touchEndEvent)=>{
        setTouchEnding(touchEnding={x:touchEndEvent.changedTouches[0].screenX,y:touchEndEvent.changedTouches[0].screenY})
        let xOffset=(touchEnding['x']-touchOrigin['x']);
        if (xOffset>75){setIndex(index===data.length-1? index=0:index=index+1); setSide('swipperRight')}
        if (xOffset<-75){setIndex(index===0? index=data.length-1:index=index-1); setSide('swipperLeft')}
        setTimeout(() => {setSide('original')}, 1000);
    }
    
    const handleTouchMove =(touchMoveEvent)=>{
        setX(touchMoveEvent.changedTouches[0].screenX)
    }
  
    //SWIPE ON MOUSE DOWN
    const handleMouseDown =(mouseDownEvent)=>{
        setTouchOrigin(touchOrigin={x:mouseDownEvent.clientX,y:mouseDownEvent.clientY})
    }
    
    const handleMouseUp =(mouseUpEvent)=>{
        setTouchEnding(touchEnding={x:mouseUpEvent.clientX,y:mouseUpEvent.clientY})
        let xOffset=(touchEnding['x']-touchOrigin['x']);
        if (xOffset>150){setIndex(index===data.length-1? index=0:index=index+1); setSide('swipperRight')}
        if (xOffset<-150){setIndex(index===0? index=data.length-1:index=index-1); setSide('swipperLeft')}
        setTimeout(() => {setSide('original')}, 1000);
    }

    return (
        <div className="trabajos__realizados--unit-container">
                <div className="trabajos__realizados--unit">
                {   data.map((d, i)=>{
                        return (<div className={index===i? `trabajos__realizados--index active`:`trabajos__realizados--index`}>
                        </div>)
                })}
                </div>

                {
                    data.length>1? 
                    <div
                onTouchStart={touchStartEvent => handleTouchStart(touchStartEvent)}
                onTouchEnd={touchEndEvent => handleTouchEnd(touchEndEvent)}
                onTouchMove={touchMoveEvent => handleTouchMove(touchMoveEvent)}
                onMouseDown={mouseDownEvent => handleMouseDown(mouseDownEvent)}
                onMouseUp={(mouseUpEvent) => handleMouseUp(mouseUpEvent)}
                style={inlineStyles}
                className={`testingSwipeEvents ${swipper}`}
                >
                </div>:
                <div 
                style={inlineStyles}
                className={`testingSwipeEvents ${swipper}`}>
                </div>

                }
              
        </div>
    )
}
