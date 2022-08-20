import React from "react";
import './Contact.css'
import con from '../../images/contact.png'

// import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';

export default function ContactUs() {
  //   const form = useRef();

  //   const sendEmail = (e) => {
  //     e.preventDefault();

  //     emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
  //       .then((result) => {
  //           console.log(result.text);
  //       }, (error) => {
  //           console.log(error.text);
  //       });
  //   };

  return (
    // <form ref={form} onSubmit={sendEmail}>
    <div className="container contact row" id="contact">

      <div className="col m-auto con-addr">
      <h1 className="mb-5">Contact Us</h1>
      
      <h5> Our Registered Address :</h5>
      <address>
          Plot No. 1/1,<br></br> Mullai Nagar,<br></br> Suramangalam, Salem - 636005
      </address>

      <h5>Our Office Address :</h5>
      <address>
          Technology Business Incubator, Kongu Engineering College, Perundurai, Erode - 638 060. 
      </address> 


      <a href="mailto:official@skewess.com"><i className="fa fa-envelope" aria-hidden="true"></i></a>

                        
                        
    <a href="tel:+918825875342"><i className="fa fa-phone" aria-hidden="true"></i></a>

    <a href="https://goo.gl/maps/uLUoHmd4kQwDcTV97" target="_blank"><i className="fa fa-map-marker" aria-hidden="true"></i></a>                  

      </div>


      <div className="col">
        <br></br>
          <form>
            
            <input type="text" name="user_name"  placeholder="Enter your Name" />
            
            <input type="email" name="user_email" placeholder="Email"/>
            
            <textarea name="message " cols='23' rows='4' placeholder="Message"/>
            
            <button type="submit">Send</button>
          </form>
        </div>
    </div>
  );
};