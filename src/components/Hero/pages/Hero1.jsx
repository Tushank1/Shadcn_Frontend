import React from "react";
import "../pages_style/Hero1.css";
import Header from "../../Header/Header";
import { MdOutlineShoppingBag } from "react-icons/md";
import { GiHangingSpider } from "react-icons/gi";
import { RiComputerLine } from "react-icons/ri";
import { IoMdTabletPortrait } from "react-icons/io";
import { AiOutlineMobile } from "react-icons/ai";
import { MdOutlineFitScreen } from "react-icons/md";

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
              <div className="hero1_main_inner_container_top_right_center">
                <div className="hero1_main_inner_container_top_right_center_left">
                  <div className="hero1_main_inner_container_top_right_center_left_content">
                    <div className="hero1_main_inner_container_top_right_center_left_content_left">
                      <GiHangingSpider />
                    </div>
                    <div className="hero1_main_inner_container_top_right_center_left_content_right">
                      <div className="hero1_main_inner_container_top_right_center_left_content_right_left">
                        <div className="hero1_main_inner_container_top_right_center_left_content_right_left_first">
                          <RiComputerLine />
                        </div>
                        <div className="hero1_main_inner_container_top_right_center_left_content_right_left_second">
                          <IoMdTabletPortrait />
                        </div>
                        <div className="hero1_main_inner_container_top_right_center_left_content_right_left_third">
                          <AiOutlineMobile />
                        </div>
                      </div>
                      <div className="hero1_main_inner_container_top_right_center_left_content_right_right">
                        <MdOutlineFitScreen />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hero1_main_inner_container_top_right_center_right">
                  <div className="hero1_main_inner_container_top_right_center_right_content">
                    <div className="hero1_main_inner_container_top_right_center_right_content_left">
                      <MdOutlineShoppingBag />
                    </div>
                    <div className="hero1_main_inner_container_top_right_center_right_content_right">
                      <span>Copy Code</span>
                    </div>
                  </div>
                </div>
              </div>
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
