import React from 'react'
import '../../styles/Elevadores.scss';

export default function Elevadores() {
    return (
        <div>
            <section className="elevadores__header">

                <div className="elevadores__header--image"></div>
                <div className="elevadores__header--content-container">
                    <div className="elevadores__header--text">Elevadores</div>
                    <div className="elevadores__separation-bar"></div>
                </div>   

            </section>
            <section className="elevadores__content">

                <div className="elevadores__content--left-image"></div>

                <div className="elevadores__content--right-info">
                    <div className="elevadores__content--right-info-container">
                        <div className="elevadores__content--right-info-header">Apertura sencilla y cierre agradable</div>
                        <div className="elevadores__content--right-info-content--mobile">
                            <div className="elevadores__content--right-info-content--background-mobile"></div>
                            <div className="elevadores__content--right-info-content">
                            El sistema de compases abatibles o trampones ofrecen una gran comodidad de movimientos en armarios elevados, incluso armarios grandes y pesados. 
                            <br/><br/>
                            Este elevador ofrece una experiencia nueva y altamente gratificante en la apertura y cierre de los compases abatibles. Se garantiza en todo momento la libertad de movimiento ya que las puertas permanecerán abiertas sin obstáculos.
                            </div>
                        </div>
                    </div>
                </div>

            </section>

        </div>
    )
}
