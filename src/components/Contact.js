import React from 'react'
import FlipCard from './FlipCard';
import ContactForm from './ContactForm';
import '../styles/contacto.css'

export default function () {
    return (
        <>
        <div className="middleBar"></div>
        <div className="contactBg">
        <div className="contactHeader">
            <h5 className="contactHeaderContent">Contacto</h5>
        </div>
        <div className="contactInnerContent">
            <div className="dataContainer">
                <p className="paragraphOne">Puede contactar con nosotros por teléfono, vía email o rellenando el formulario y nos pondremos en contacto con usted en la mayor brevedad posible.</p>
                <ul className="contactList">
                    <li className="elementList">Móvil: &nbsp;<div className="boldText"> 605 574 283 & 616 964 999</div></li>
                    <li className="elementList">Email: &nbsp;<div className="boldText"> slopezkitchen@gmail.com</div></li>
                    <li className="elementList">Instagram: &nbsp;<div className="boldText"> @sl.cociluxdiseños</div></li>
                </ul>
                <p className="paragraphOne">Al momento de contactar con nosotros se ofrece al cliente concertar una visita a domicilio sin compromiso, en el horariom que mejor se adapte a sus necesidades. <br></br> Seguidamente medimos y realizamos un estudio previo sobre la superficie para la realización de un plano y proyecto en 3D.</p>
                <p className="paragraphThree">
                Calidad del servicio garantizado con un asesoramiento experto, tanto estético como funcional, de la mano de un fabricante de muebles experimentado.
                </p>
            
            </div>
            <div className="contactFormContainer">
               <ContactForm/>
            </div>
        </div>
        </div>
        </>
    )
}
