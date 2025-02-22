import React from "react";
import "../pages_style/Hero1.css";
import Header from "../../Header/Header";
import { MdOutlineShoppingBag } from "react-icons/md";
import { GiHangingSpider } from "react-icons/gi";
import { RiComputerLine } from "react-icons/ri";
import { IoMdTabletPortrait } from "react-icons/io";
import { AiOutlineMobile } from "react-icons/ai";
import { MdOutlineFitScreen } from "react-icons/md";
import { MdOutlineArrowOutward } from "react-icons/md";
import { IoMdArrowRoundForward } from "react-icons/io";

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
            <div className="hero1_main_inner_container_bottom_left">
              <div className="hero1_main_inner_container_bottom_left_outer">
                <div className="hero1_main_inner_container_bottom_left_outer_top">
                  <div className="hero1_main_inner_container_bottom_left_outer_top_content">
                    <span>✨ Your Website Builder</span>
                  </div>
                  <div className="hero1_main_inner_container_bottom_left_outer_top_icon">
                    <MdOutlineArrowOutward />
                  </div>
                </div>
                <div className="hero1_main_inner_container_bottom_left_outer_heading">
                  <span>Blocks Built With Shadcn & Tailwind</span>
                </div>
                <div className="hero1_main_inner_container_bottom_left_outer_content">
                  <span>
                    Finely crafted components built with React, Tailwind and
                    Shadcn UI. Developers can copy and paste these blocks
                    directly into their project.
                  </span>
                </div>
                <div className="hero1_main_inner_container_bottom_left_outer_bottom">
                  <div className="hero1_main_inner_container_bottom_left_outer_bottom_left">
                    <button>Discover all Components</button>
                  </div>
                  <div className="hero1_main_inner_container_bottom_left_outer_bottom_right">
                    <div className="hero1_main_inner_container_bottom_left_outer_bottom_right_content">
                      <button>View on Github</button>
                    </div>
                    <div className="hero1_main_inner_container_bottom_left_outer_bottom_right_icon">
                      <IoMdArrowRoundForward />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="hero1_main_inner_container_bottom_right">
              <div className="hero1_main_inner_container_bottom_right_img">
                <img
                  src="https://www.shadcnblocks.com/images/block/placeholder-1.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero1;
