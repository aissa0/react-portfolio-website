import React from "react";
import "./About.css";
import aboutImg from "./img/about.jpg";
function About() {

  //Up To Top Btn
  window.addEventListener("scroll", function(){
    const upTotop = document.querySelector("a.bottom__to__top");
    upTotop.classList.toggle("active", window.scrollY > 0)
  });
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
                <a>
                  {" "}
                  <button className="about btn pointer "> Download CVc</button>
                </a>
                <a>
                  {" "}
                  <button className="about btn pointer "> hire Me</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* UP TO TOP BTN */}
      <div className="up__to__top__btn">
        <a href="#" className="bottom__to__top">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-chevron-up white"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
          />
        </svg>
        </a>
      </div>
    </div>
  );
}
export default About;
