import React, {useState} from 'react'
import emailjs from 'emailjs-com';
import '../styles/ContactForm.css'
require('dotenv').config();



export default function ContactForm({ env }) {

  const{
    REACT_APP_EMAILJS_USERID: userId,
    REACT_APP_EMAILJS_TEMPLATEID: templateId,
    REACT_APP_EMAILJS_RECEIVER: serviceId,
  }=process.env

  function sendEmail(e) {
    e.preventDefault();
    console.log(serviceId, templateId, userId)
    emailjs.sendForm('service_ifh344m', 'template_4r9ckfh', e.target, 'user_Gn4tdQnhX6LB7jNFPPglj')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <input type="hidden" name="contact_number" className="inputField"/>
      <label>Nombre</label>
      <input type="text" name="user_name" className="inputField"/>
      <label>Email</label>
      <input type="email" name="user_email" className="inputField"/>
      <label>Teléfono</label>
      <input type="text" name="user_phone" className="inputField"/>
      <label>A tener en cuenta:</label>
      <textarea name="message" rows="6" className="textArea"/>
      <button type="submit" value="Send" className="btnSubmit" > Enviar </button>
    </form>
  );
}