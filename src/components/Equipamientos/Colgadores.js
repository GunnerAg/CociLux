import React from 'react'
import '../../styles/Colgadores.scss';

export default function Colgadores() {
    return (
        <div style={{maxWidth:'100vw',overflow:'hidden'}}>
            <section className="colgadores__header">

                <div className="colgadores__header--image"></div>
                <div className="colgadores__header--content-container">
                    <div className="colgadores__header--text">Colgadores</div>
                    <div className="colgadores__separation-bar"></div>
                </div>   

            </section>
            <section className="colgadores__content">

                <div className="colgadores__content--left-image"></div>

                <div className="colgadores__content--right-info">
                    <div className="colgadores__content--right-info-container">
                        <div className="colgadores__content--right-info-header"> Colgadores que cumplen todas las normativas de calidad</div>
                            <div className="colgadores__content--right-info-content">
                            Hoy en día es transcendental contar con un colgador que soporte una gran capacidad de carga y que además cuente con los sistemas de elevación y ajuste para hacer frente a estas nuevas exigencias.
                            <br/><br/>
                            Para ello el colgador <div className="colgadores__content--right-info-content--italic-bold">Camar</div> es fabricado en acero con un gran acabado en aluminio
                            </div>
                    </div>
                </div>

            </section>

        </div>
    )
}
