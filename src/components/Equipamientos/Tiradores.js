import React from 'react'
import '../../styles/Tiradores.scss';

export default function Tiradores() {
    return (
        <div>
            <section className="tiradores__header">

                <div className="tiradores__header--image"></div>
                <div className="tiradores__header--content-container">
                    <div className="tiradores__header--text">Tiradores</div>
                    <div className="tiradores__separation-bar"></div>
                </div>   

            </section>
            <section className="tiradores__content">
                <div className="tiradores__content--efecto-gota">
                    <div className="tiradores__content--efecto-gota-image"></div>
                    <div className="tiradores__content--efecto-gota-text">
                        <div className="tiradores__content--efecto-gota-text--bold">- TIRADOR UÑERO O EFECTO GOLA</div><br/> Se trata de un tirador que va incorporado en la misma puerta, haciendo de este un estético y cómodo diseño.
                    </div>
                </div>
                <div className="tiradores__content--tiradores-general">
                    <div className="tiradores__content--tiradores-general-text">
                        <div className="tiradores__content--efecto-gota-text--bold">- TIRADORES</div><br/> Disponemos de una amplia variedad de tiradores modernos y prácticos. Cada uno de estos modelos guarda un estilo diferente, que le dará un toque personalizado a tu cocina.
                    </div>
                    <div className="tiradores__content--tiradores-general-image"></div>
                </div>
            </section>

        </div>
    )
}