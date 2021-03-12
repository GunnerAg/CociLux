import React from 'react'
import '../styles/Logo.css'

export default function Logo() {
    return (
        <div>
            <div className= "logoAnimation logo" >
                <div className="barOne width"></div>
                <div className="barTwo height"></div>
                    <div className="lettering">
                        <div className="letterS">S</div>
                        <div className="letterL">L</div>
                    </div>
                <div className="barThree width"></div>
                <div className="barFour height"></div>
            </div>
        </div>
    )
}
