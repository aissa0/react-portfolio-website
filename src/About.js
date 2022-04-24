import React from "react";
import "./About.css";
import aboutImg from "./img/about.jpg";
function About() {
  return (
    <div className="about component__space">
      <div className="container">
        <div className="row">
          <div className="col__2">
            <img src={aboutImg} alt="" className="about__img" />
          </div>
          <div className="col__2">
            <h1 className="about__heading">About Me</h1>
            <div className="col__meta">
              <p className="about__text p__color">
                There are many variation of passages of loren Ipsun available,
                but the majority have suffered in some form, by injected humour
                , or ramdimised words which words look even slightly believable.
                If you are going to use a passage of Lorem Ipsum,
              </p>
              <p className="about__text p__color">
                There are many variation of passages of loren Ipsun available,
                but the majority have suffered in some form, by injected humour
                , or ramdimised words which words look even slightly believable.
                If you are going to use a passage of Lorem Ipsum,
              </p>
              <p className="about__text p__color">
                There are many variation of passages of loren Ipsun available,
                but the majority have suffered in some form,
              </p>
              <div className="about__buttom d__flex align__items__center">
                  <a > <button className="about btn pointer " > Download CVc</button></a>
                  <a > <button className="about btn pointer " > hire Me</button></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
