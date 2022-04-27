import React from "react";
import "./Project.css";
import projects1 from "./img/portfolio-1.jpg";
import projects2 from "./img/portfolio-2.jpg";
import projects3 from "./img/portfolio-3.jpg";
import projects4 from "./img/portfolio-4.jpg";
import projects5 from "./img/portfolio-2.jpg";
import projects6 from "./img/portfolio-2.jpg";


function Project() {
  return (
    <div className="project component__space">
      <div className=" heading">
        <h2 className="heading">My Lastest Projest</h2>
        <p className="heading p__color">
          There are many varialions of Passages of Lorem lprum available, but
          the majority have suffered alteration.
        </p>
        <p className="heading p__color ">
          but the majority have suffered alteration.
        </p>
      </div>
      <div className="row">
            <div className="col__3">
              <div className="project__box pointer relative">
                <div className="project__box__img pointer relative">
                  <div className="project__img__box">
                    <img src={projects1} alt="" className="project__img" />
                  </div>
                  <div className="mask__effect"></div>
                </div>
                <div className="project__meta absolute">
                  <h5 className="project__text">Development</h5>
                  <h4 className="project__text">
                    Getting tickets to the big show
                  </h4>
                  <a href="#" className="project__btn">
                    view Details
                  </a>
                </div>
              </div>
            </div>
        

        
            <div className="col__3">
              <div className="project__box pointer relative">
                <div className="project__box__img pointer relative">
                  <div className="project__img__box">
                    <img src={projects2} alt="" className="project__img" />
                  </div>
                  <div className="mask__effect"></div>
                </div>
                <div className="project__meta absolute">
                  <h5 className="project__text">Development</h5>
                  <h4 className="project__text">
                    Getting tickets to the big show
                  </h4>
                  <a href="#" className="project__btn">
                    view Details
                  </a>
                </div>
              </div>
            </div>
        

      
            <div className="col__3">
              <div className="project__box pointer relative">
                <div className="project__box__img pointer relative">
                  <div className="project__img__box">
                    <img src={projects3} alt="" className="project__img" />
                  </div>
                  <div className="mask__effect"></div>
                </div>
                <div className="project__meta absolute">
                  <h5 className="project__text">Development</h5>
                  <h4 className="project__text">
                    Getting tickets to the big show
                  </h4>
                  <a href="#" className="project__btn">
                    view Details
                  </a>
                </div>
              </div>
            </div>
        

       
            <div className="col__3">
              <div className="project__box pointer relative">
                <div className="project__box__img pointer relative">
                  <div className="project__img__box">
                    <img src={projects4} alt="" className="project__img" />
                  </div>
                  <div className="mask__effect"></div>
                </div>
                <div className="project__meta absolute">
                  <h5 className="project__text">Development</h5>
                  <h4 className="project__text">
                    Getting tickets to the big show
                  </h4>
                  <a href="#" className="project__btn">
                    view Details
                  </a>
                </div>
              </div>
            </div>
        

        
            <div className="col__3">
              <div className="project__box pointer relative">
                <div className="project__box__img pointer relative">
                  <div className="project__img__box">
                    <img src={projects5} alt="" className="project__img" />
                  </div>
                  <div className="mask__effect"></div>
                </div>
                <div className="project__meta absolute">
                  <h5 className="project__text">Development</h5>
                  <h4 className="project__text">
                    Getting tickets to the big show
                  </h4>
                  <a href="#" className="project__btn">
                    view Details
                  </a>
                </div>
              </div>
            </div>
        

        
            <div className="col__3">
              <div className="project__box pointer relative">
                <div className="project__box__img pointer relative">
                  <div className="project__img__box">
                    <img src={projects6} alt="" className="project__img" />
                  </div>
                  <div className="mask__effect"></div>
                
                <div className="project__meta absolute">
                  <h5 className="project__text">Development</h5>
                  <h4 className="project__text">
                    Getting tickets to the big show
                  </h4>
                  <a href="#" className="project__btn">
                    view Details
                  </a>
                </div>
              </div>
            </div>
        </div>
        <div className="view__more__btn d__flex align__items__center justify__content__center pxy__30">
            <button className="view__more pointer btn">view more</button>
          </div>
       
        </div>
          </div>
  );
}

export default Project;
