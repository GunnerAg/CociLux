import React from 'react'
import ContactForm from './ContactForm';
import '../styles/Contacto.scss'

export default function Contact() {
    return (
        <div className="contact">
        <div className="contact__middle-bar"></div>
        <div className="contact__header"> 
            <h5 className="contact__header-content">Contacto</h5>
        </div>
        <div className="contact__inner-content">
            <div className="contact__details">
                <p className="contact__details-paragraph--one">Puede contactar con nosotros por teléfono, vía email o rellenando el formulario y nos pondremos en contacto con usted en la mayor brevedad posible.</p>
                <ul className="contact__details-list">
                    <li className="contact__details-list--element">Móvil: &nbsp;<div className="contact__details-list--bold"> 605 574 283 & 616 964 999</div></li>
                    <li className="contact__details-list--element">Email: &nbsp;<div className="contact__details-list--bold"> slopezkitchen@gmail.com</div></li>
                    <li className="contact__details-list--element">Instagram: &nbsp;<div className="contact__details-list--bold"> @sl.cociluxdesign</div></li>
                </ul>
                <p className="contact__details-paragraph--two">Al momento de contactar con nosotros se ofrece al cliente concertar una visita a domicilio sin compromiso, en el horariom que mejor se adapte a sus necesidades. <br></br> Seguidamente medimos y realizamos un estudio previo sobre la superficie para la realización de un plano y proyecto en 3D.</p>
                <p className="contact__details-paragraph--three">
                Calidad del servicio garantizado con un asesoramiento experto, tanto estético como funcional, de la mano de un fabricante de muebles experimentado.
                </p>
            
            </div>
            <div className="contact__form-container">
               <ContactForm/>
            </div>
        </div>
        </div>
    )
}
