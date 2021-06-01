import React from 'react'
import '../styles/Logo.scss'

export default function Logo({black,white}) {
    if(white===true){
        return (
            <div >
                <div className= "logoAnimation logo" >
                    <div className="barOne _width white"></div>
                    <div className="barTwo _height white"></div>
                        <div className="lettering">
                            <div className="letterS">S</div>
                            <div className="letterL">L</div>
                        </div>
                    <div className="barThree _width white"></div>
                    <div className="barFour _height white"></div>
                </div>
            </div>
        )
    }
    if(black===true){
        return (
            <div className="animation__logo--container">
                <div className= "logoAnimation logo" >
                    <div className="barOne _width black"></div>
                    <div className="barTwo _height black"></div>
                        <div className="lettering">
                            <div className="letterS">S</div>
                            <div className="letterL">L</div>
                        </div>
                    <div className="barThree _width black"></div>
                    <div className="barFour _height black"></div>
                </div>
            </div>
        )
    }

}
