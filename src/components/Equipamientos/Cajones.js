import React from 'react'
import '../../styles/Cajones.scss';

export default function Cajones() {
    return (
        <div>
            <section className="cajones__header">

                <div className="cajones__header--image"></div>
                <div className="cajones__header--content-container">
                    <div className="cajones__header--text">Cajones</div>
                    <div className="cajones__separation-bar"></div>
                </div>   

            </section>
            <section className="cajones__content">

                <div className="cajones__content--left-image"></div>

                <div className="cajones__content--right-info">
                    <div className="cajones__content--right-info-container">
                        <div className="cajones__content--right-info-header"> Sistema de cajones de primera clase</div>
                            <div className="cajones__content--right-info-content">
                            Con el sistema de cajones Innotech de Hettich se pueden hacer realidad los deseos y las exigencias personales de manera versátil. 
                            <br/>
                            Este cajón destaca por su diseño, fiabilidad y su gran calidad de fabricación. Es un cajón perfecto y funcional para los muebles de cocina.
                            <br/><br/>
                            El sistema <div className="cajones__content--right-info-content--italic-bold">silent system</div> proporciona un deslizamiento suave, un cierre amortiguado y silencioso a nustro cajón.
                          
                        </div>
                    </div>
                </div>

            </section>

        </div>
    )
}
