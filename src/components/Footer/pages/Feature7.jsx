import React from "react";
import Header from "../../Header/Header";
import "../pages_style/Feature7.css";
import { MdOutlineShoppingBag } from "react-icons/md";
import { GiHangingSpider } from "react-icons/gi";
import { RiComputerLine } from "react-icons/ri";
import { IoMdTabletPortrait } from "react-icons/io";
import { AiOutlineMobile } from "react-icons/ai";
import { MdOutlineFitScreen } from "react-icons/md";
import { PiLightning } from "react-icons/pi";

const Feature7 = () => {
  return (
    <>
      <Header />
      <div className="feature7_main_outer_container">
        <div className="feature7_main_inner_container">
          <div className="feature7_main_inner_container_top">
            <div className="feature7_main_inner_container_top_left">
              <div className="feature7_main_inner_container_top_left_left">
                <div className="feature7_main_inner_container_top_left_left_text">
                  <h2>Feature7</h2>
                  <span>Pro</span>
                </div>
              </div>
              <div className="feature7_main_inner_container_top_left_right">
                <div className="feature7_main_inner_container_top_left_right_text">
                  <span className="feature7_main_inner_container_top_left_right_text_preview">
                    Preview
                  </span>
                  <span className="feature7_main_inner_container_top_left_right_text_code">
                    Code
                  </span>
                </div>
              </div>
            </div>
            <div className="feature7_main_inner_container_top_right">
              <div className="feature7_main_inner_container_top_right_center">
                <div className="feature7_main_inner_container_top_right_center_left">
                  <div className="feature7_main_inner_container_top_right_center_left_content">
                    <div className="feature7_main_inner_container_top_right_center_left_content_left">
                      <GiHangingSpider />
                    </div>
                    <div className="feature7_main_inner_container_top_right_center_left_content_right">
                      <div className="feature7_main_inner_container_top_right_center_left_content_right_left">
                        <div className="feature7_main_inner_container_top_right_center_left_content_right_left_first">
                          <RiComputerLine />
                        </div>
                        <div className="feature7_main_inner_container_top_right_center_left_content_right_left_second">
                          <IoMdTabletPortrait />
                        </div>
                        <div className="feature7_main_inner_container_top_right_center_left_content_right_left_third">
                          <AiOutlineMobile />
                        </div>
                      </div>
                      <div className="feature7_main_inner_container_top_right_center_left_content_right_right">
                        <MdOutlineFitScreen />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="feature7_main_inner_container_top_right_center_right">
                  <div className="feature7_main_inner_container_top_right_center_right_content">
                    <div className="feature7_main_inner_container_top_right_center_right_content_left">
                      <MdOutlineShoppingBag />
                    </div>
                    <div className="feature7_main_inner_container_top_right_center_right_content_right">
                      <span>Copy Code</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="feature7_main_inner_container_bottom">
            <div className="feature7_main_inner_container_bottom_right">
              <div className="feature7_main_inner_container_bottom_right_img">
                <img
                  src="https://www.shadcnblocks.com/images/block/placeholder-1.svg"
                  alt=""
                />
              </div>
            </div>
            <div className="feature7_main_inner_container_bottom_left">
              <div className="feature7_main_inner_container_bottom_left_outer">
                <div className="feature7_main_inner_container_bottom_left_outer_top">
                  <div className="feature7_main_inner_container_bottom_left_outer_top">
                    <PiLightning className="feature7_main_inner_container_bottom_left_outer_top_icon" />
                  </div>
                </div>
                <div className="feature7_main_inner_container_bottom_left_outer_mid">
                  <div className="feature7_main_inner_container_bottom_left_outer_mid_top">
                    <span>Build your website with Shadcnblocks.com</span>
                  </div>
                  <div className="feature7_main_inner_container_bottom_left_outer_mid_bottom">
                    <span>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Elig doloremque mollitia fugiat omnis! Porro facilis quo
                      animi consequatur.
                    </span>
                  </div>
                </div>
                <div className="feature7_main_inner_container_bottom_left_outer_bottom">
                  <ul>
                    <li>✓ Lorem ipsum dolor sit amet.</li>
                    <li>✓ Lorem ipsum dolor sit amet consectetur.</li>
                    <li>
                      ✓ Lorem, ipsum dolor sit amet consectetur adipisicing.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feature7;
