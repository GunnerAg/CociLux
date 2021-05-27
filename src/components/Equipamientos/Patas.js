import React from 'react'
import '../../styles/Patas.scss';

export default function Patas() {
    return (
        <div>
            <section className="patas__header">

                <div className="patas__header--image"></div>
                <div className="patas__header--content-container">
                    <div className="patas__header--text">Patas</div>
                    <div className="patas__separation-bar"></div>
                </div>   

            </section>
            <section className="patas__content">
                <div className="patas__content--image-container">
                    <div>
                        <div className="patas__content--image-one"></div>
                        <div className="patas__content--text-one">
                            <div className="patas__content--description-140mm"> MAX: 140 mm <br/> MIN: 100 mm</div>
                        </div>
                    </div>
                    <div>
                        <div className="patas__content--image-two"></div>
                        <div className="patas__content--text-two">
                            <div className="patas__content--description-190mm">MAX: 190 mm <br/> MIN: 140 mm</div>
                        </div>
                    </div>
                </div>
                <div className="patas__content--description-text-container">
                    <div className="patas__content--description-text">Patas para muebles de cocina de gran resistencia, reformados con tacos automáticos, más pinza para rodapié</div>
                </div>
            </section>
        </div>
    )
}