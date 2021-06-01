import React from 'react'
import '../../styles/Bisagras.scss';

export default function Bisagras() {
    return (
        <div style={{maxWidth:'100vw',overflow:'hidden'}}>

            <section className="bisagras__header">

                <div className="bisagras__header--image"></div>
                <div className="bisagras__header--content-container">
                    <div className="bisagras__header--text">Bisagras</div>
                    <div className="bisagras__separation-bar"></div>
                </div>   
                
            </section>

            <section className="bisagras__content">

                <div className="bisagras__content--left-info">
                    <div className="bisagras__content--left-info-container">
                        <div className="bisagras__content--left-info-header"> Siempre la perfecta conexión entre la puerta y el módulo</div>
                        <div className="bisagras__content--left-info-content--mobile">
                            <div className="bisagras__content--left-info-content--background-mobile"></div>
                            <div className="bisagras__content--left-info-content">
                            La tecnología de bisagra con amortiguación integrada para un mayor confort al cerrar las puertas. Gracias al cierre automático esta bisagra se encarga del cierre casi por sí solo. <div className="bisagras__content--left-info-content--italic">Innovador, ligero, suave y silencioso.</div>
                            <br/><br/>
                            Un salto de confort en un diseño premiado de <div className="bisagras__content--left-info-content--italic">Hettich</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bisagras__content--right-image"></div>

            </section>

        </div>
    )
}
