import React from 'react'
import '../styles/Logo.scss'

export default function Logo() {
    return (
        <div>
            <div className= "logoAnimation logo" >
                <div className="barOne _width "></div>
                <div className="barTwo _height"></div>
                    <div className="lettering">
                        <div className="letterS">S</div>
                        <div className="letterL">L</div>
                    </div>
                <div className="barThree _width "></div>
                <div className="barFour _height"></div>
            </div>
        </div>
    )
}
