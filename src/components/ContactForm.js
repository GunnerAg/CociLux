import React, {useState} from 'react'
import emailjs from 'emailjs-com';
import '../styles/ContactForm.css'
require('dotenv').config();



export default function ContactForm({ env }) {

  const [sendStatus,setFormStatus]=useState(false)
  const [formInputs,setFormValues]=useState({})

  const{
    REACT_APP_EMAILJS_USERID: userId,
    REACT_APP_EMAILJS_TEMPLATEID: templateId,
    REACT_APP_EMAILJS_SERVICEID:serviceId,
    REACT_APP_EMAILJS_RECEIVER: email,
  }=process.env


  let handleChange=(e)=>{
    const{user_email,user_name,user_phone,message}=e.currentTarget;
    setFormValues({name:user_name.value,email:user_email.value,phone:user_phone.value,message:message.value})
    console.log(formInputs)
  }

  function validateEmail(mail) 
    {
      if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail))
        {
          return (true)
        }
          alert("El formato del email no parece valido!")
          return (false)
    }

  function validateNotEmpty(input) 
    {
      if (input.length>0)
        {
          return (true)
        }
          alert("Rellena todos los campos antes de enviar!")
          console.log('here',input.length)
          return (false)
    }

  function validatePhone(phone) 
    {
      if (/^[9|6|7]{1}([\d]{2}[-]*){3}[\d]{2}$/.test(phone) )
        {
          return (true)
        }
          alert("El formato del telefono no parece valido!")
          return (false)
    }

  function sendEmail(e) {
    e.preventDefault();
    const{user_email,user_name,user_phone,message}=e.target;
    if(
      validateNotEmpty(formInputs['name'])&&
      validateEmail(formInputs['email'])&&
      validatePhone(formInputs['phone'])&&
      validateNotEmpty(formInputs['message'])
    ){
      emailjs.sendForm(serviceId, templateId, e.target, userId)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      setFormStatus(true);
    }
  }

  return (
    <form className="contact-form" onSubmit={sendEmail} onChange={handleChange}>
      <label>Nombre</label>
      <input type="text" name="user_name" className="inputField"/>
      <label>Email</label>
      <input type="email" name="user_email" className="inputField"/>
      <label>Teléfono</label>
      <input type="text" name="user_phone" className="inputField"/>
      <label>A tener en cuenta:</label>
      <textarea name="message" rows="6" className="textArea"/>
      {sendStatus? 
        <button type="submit" value="Send" className="btnSubmitDisable" disabled={true}> Enviado! </button>:
        <button type="submit" value="Send" className="btnSubmit"> Enviar </button>
      }
    </form>
  );
}