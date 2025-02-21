import React from "react";
import "../pages_style/Hero1.css";
import Header from "../../Header/Header";

const Hero1 = () => {
  return (
    <>
      <Header />
      <div className="hero1_main_outer_container">
        <div className="hero1_main_inner_container">
          <div className="hero1_main_inner_container_top">
            <div className="hero1_main_inner_container_top_left">
              <div className="hero1_main_inner_container_top_left_left">
                <div className="hero1_main_inner_container_top_left_left_text">
                  <h2>Hero1</h2>
                  <span>Pro</span>
                </div>
              </div>
              <div className="hero1_main_inner_container_top_left_right">
                <div className="hero1_main_inner_container_top_left_right_text">
                  <span className="hero1_main_inner_container_top_left_right_text_preview">
                    Preview
                  </span>
                  <span className="hero1_main_inner_container_top_left_right_text_code">
                    Code
                  </span>
                </div>
              </div>
            </div>
            <div className="hero1_main_inner_container_top_right">
              <span>right</span>
            </div>
          </div>
          <div className="hero1_main_inner_container_bottom">
            <span>detail</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero1;
