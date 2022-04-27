import React from "react";
import "./Contact.css";
import Contactimg from "./img/about-9.jpg";

function Contact() {
  return (
    <div className="contact component__space">
      <div className="row">
        <div className="col__2">
          <div className="contact__box">
            <div className="contact__meta">
              <h1 className="hire__text">Hire Me.</h1>
              <p className="hire__text white">
                I am available for freelance work connent with me via phone:
              </p>
              <p className="hire__text white">
                <strong>+961 70123451</strong>or email{" "}
                <strong>admin@example.com</strong>
              </p>
            </div>
            <div className="input__box">
              <input
                type="text"
                className="contact name"
                placeholder="your name *"
              />
              <input
                type="text"
                className="contact email"
                placeholder="your Email *"
              />
              <input
                type="text"
                className="contact subject"
                placeholder="Write a subject *"
              />
              <textarea
                name="message"
                id="message"
                placeholder="write Your message"
              ></textarea>
              <button className="btn contact pointer" type="submit">
                Submit
              </button>
            </div>
          </div>
        </div>
        <div className="col__2">
          <img src={Contactimg} alt="" className="contact__img"></img>
        </div>
      </div>
    </div>
  );
}

export default Contact;
