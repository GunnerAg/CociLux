import React,{useState} from 'react'
import ContactForm from './ContactForm';
import '../styles/Contacto.scss'

export default function Contact() {

    const [sendStatus,setFormStatus]=useState(false)

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
                    <li className="contact__details-list--element">
                        <a href="https://wa.me/34722630050">
                            <img className="contact__details-logo bounce-ico2" src="/whatsapp.png" alt="whatsapp"/>
                        </a>
                         &nbsp;
                        <div className="contact__details-list--bold">722 63 00 50</div>
                    </li>
                    <li className="contact__details-list--element">
                        <a href="https://instagram.com/sl.cociluxdesign?utm_medium=copy_link">
                            <img className="contact__details-logo bounce-ico" src="/instagram.png" alt="instagram"/>
                        </a>
                        &nbsp;
                        <div className="contact__details-list--bold">@sl.cociluxdesign</div>
                    </li>
                    <li className="contact__details-list--element">
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=info@slcocilux.com">
                            <img className="contact__details-logo bounce-ico" src="/gmail.png" alt="gmail"/>
                        </a>
                        &nbsp;
                        <div className="contact__details-list--bold">info@slcocilux.com</div>
                    </li>
                </ul>
                <p className="contact__details-paragraph--two">Al momento de contactar con nosotros se ofrece al cliente concertar una visita a domicilio sin compromiso, en el horario que mejor se adapte a sus necesidades. <br></br> Seguidamente medimos y realizamos un estudio previo sobre la superficie para la realización de un plano y proyecto en 3D.</p>
                <p className="contact__details-paragraph--three">
                Calidad del servicio garantizado con un asesoramiento experto, tanto estético como funcional, de la mano de un fabricante de muebles experimentado.
                </p>
            
            </div>
            <div className="contact__form-container">
                {sendStatus? 
                        <div className="contact__details--sent"> 
                        Mensaje enviado con éxito,<br/>
                        En breve responderemos a su solicitud! 
                        </div>
                        :
                        <ContactForm sendStatus={sendStatus} setFormStatus={setFormStatus}/>
                }
            </div>
        </div>
        </div>
    )
}
