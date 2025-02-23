import React from "react";
import "../pages_style/Hero2.css";
import Header from "../../Header/Header";
import { MdOutlineShoppingBag } from "react-icons/md";
import { GiHangingSpider } from "react-icons/gi";
import { RiComputerLine } from "react-icons/ri";
import { IoMdTabletPortrait } from "react-icons/io";
import { AiOutlineMobile } from "react-icons/ai";
import { MdOutlineFitScreen } from "react-icons/md";
import { GoArrowDownRight } from "react-icons/go";

const Hero2 = () => {
  return (
    <>
      <Header />
      <div className="hero2_main_outer_container">
        <div className="hero2_main_inner_container">
          <div className="hero2_main_inner_container_top">
            <div className="hero2_main_inner_container_top_left">
              <div className="hero2_main_inner_container_top_left_left">
                <div className="hero2_main_inner_container_top_left_left_text">
                  <h2>Hero2</h2>
                  <span>Pro</span>
                </div>
              </div>
              <div className="hero2_main_inner_container_top_left_right">
                <div className="hero2_main_inner_container_top_left_right_text">
                  <span className="hero2_main_inner_container_top_left_right_text_preview">
                    Preview
                  </span>
                  <span className="hero2_main_inner_container_top_left_right_text_code">
                    Code
                  </span>
                </div>
              </div>
            </div>
            <div className="hero2_main_inner_container_top_right">
              <div className="hero2_main_inner_container_top_right_center">
                <div className="hero2_main_inner_container_top_right_center_left">
                  <div className="hero2_main_inner_container_top_right_center_left_content">
                    <div className="hero2_main_inner_container_top_right_center_left_content_left">
                      <GiHangingSpider />
                    </div>
                    <div className="hero2_main_inner_container_top_right_center_left_content_right">
                      <div className="hero2_main_inner_container_top_right_center_left_content_right_left">
                        <div className="hero2_main_inner_container_top_right_center_left_content_right_left_first">
                          <RiComputerLine />
                        </div>
                        <div className="hero2_main_inner_container_top_right_center_left_content_right_left_second">
                          <IoMdTabletPortrait />
                        </div>
                        <div className="hero2_main_inner_container_top_right_center_left_content_right_left_third">
                          <AiOutlineMobile />
                        </div>
                      </div>
                      <div className="hero2_main_inner_container_top_right_center_left_content_right_right">
                        <MdOutlineFitScreen />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hero2_main_inner_container_top_right_center_right">
                  <div className="hero2_main_inner_container_top_right_center_right_content">
                    <div className="hero2_main_inner_container_top_right_center_right_content_left">
                      <MdOutlineShoppingBag />
                    </div>
                    <div className="hero2_main_inner_container_top_right_center_right_content_right">
                      <span>Copy Code</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hero2_main_inner_container_bottom">
            <div className="hero2_main_inner_container_bottom_inner">
              <div className="hero2_main_inner_container_bottom_inner_left">
                <div className="hero2_main_inner_container_bottom_inner_left_img">
                  <img
                    src="https://library.shadcnblocks.com/images/block/placeholder-1.svg"
                    alt=""
                  />
                </div>
              </div>
              <div className="hero2_main_inner_container_bottom_inner_right">
                <div className="hero2_main_inner_container_bottom_inner_right_content">
                  <div className="hero2_main_inner_container_bottom_inner_right_content_top">
                    <div className="hero2_main_inner_container_bottom_inner_right_content_top_left">
                      <span>New Release</span>
                    </div>
                    <div className="hero2_main_inner_container_bottom_inner_right_content_top_right">
                      <GoArrowDownRight />
                    </div>
                  </div>
                  <div className="hero2_main_inner_container_bottom_inner_right_content_heading">
                    <span>Blocks built with Shadcn & Tailwind</span>
                  </div>
                  <div className="hero2_main_inner_container_bottom_inner_right_content_para">
                    <span>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Elig doloremque mollitia fugiat omnis! Porro facilis quo
                      animi consequatur. Explicabo.
                    </span>
                  </div>
                  <div className="hero2_main_inner_container_bottom_inner_right_content_bottom">
                    <div className="hero2_main_inner_container_bottom_inner_right_content_bottom_left">
                      <button>Primary Button</button>
                    </div>
                    <div className="hero2_main_inner_container_bottom_inner_right_content_bottom_right">
                      <div className="hero2_main_inner_container_bottom_inner_right_content_bottom_right_left">
                        <button>Secondary Button</button>
                      </div>
                      <div className="hero2_main_inner_container_bottom_inner_right_content_bottom_right_right">
                        <GoArrowDownRight />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero2;
