import React, { useRef }  from "react";
import "./Contact.css";
import emailjs from "emailjs-com";
import { LinkedIn,Twitter,Instagram, GitHub } from "@mui/icons-material";
import contact from "../Images/contactme.svg"


export const Contact = () => {

  const form = useRef();

  const sendEmail = (e) =>{
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_fua60be', form.current, 'user_mCye4BlXApUxNsPlBtfQA')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      form.current.reset()
  }
  return (
    <div className="contactcontainer">
      <h1 className="contattle">Contact Me</h1>
      <div className="contain">
        <div className="topcontainer">
          <div className="formwrapper">
            <form onSubmit={sendEmail}>
              <label className="label">Name</label>
              <input type="text" name="user_name" />
              <label className="label">Email</label>
              <input type="email" name="useremail" />
              <label>Message</label>
              <textarea name="message" />
              <button className="sms">Send Message</button>
            </form>
          </div>
        </div>
        <div className="bottomcontainer">
          <div className="contactimg">
            <img src={contact} alt="" className="contme"/>
          </div>
          <div className="socialconatiner">
            <div className="conticons" ><a href="https://www.linkedin.com/in/kerry-philip-3872b8201/"><LinkedIn/></a></div>
            <div className="conticons"><a href="https://twitter.com/KerryPhilip2"><Twitter/></a></div>
            <div className="conticons"><a href="https://www.instagram.com/dark_k.n.g.h.t/"><Instagram/></a></div>
            <div className="conticons"><a href="https://github.com/Darkknight123"><GitHub/></a></div>
            </div>
        </div>
      </div>
    </div>
  );
}


