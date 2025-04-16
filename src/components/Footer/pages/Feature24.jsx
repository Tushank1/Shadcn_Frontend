import React from "react";
import Header from "../../Header/Header";
import "../pages_style/Feature24.css";
import { MdOutlineShoppingBag } from "react-icons/md";
import { GiHangingSpider } from "react-icons/gi";
import { RiComputerLine } from "react-icons/ri";
import { IoMdTabletPortrait } from "react-icons/io";
import { AiOutlineMobile } from "react-icons/ai";
import { MdOutlineFitScreen } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { PiSelectionAll } from "react-icons/pi";

const Feature24 = () => {
  return (
    <>
      <Header />
      <div className="feature24_main_outer_container">
        <div className="feature24_main_inner_container">
          <div className="feature24_main_inner_container_top">
            <div className="feature24_main_inner_container_top_left">
              <div className="feature24_main_inner_container_top_left_left">
                <div className="feature24_main_inner_container_top_left_left_text">
                  <h2>Feature24</h2>
                  <span>Pro</span>
                </div>
              </div>
              <div className="feature24_main_inner_container_top_left_right">
                <div className="feature24_main_inner_container_top_left_right_text">
                  <span className="feature24_main_inner_container_top_left_right_text_preview">
                    Preview
                  </span>
                  <span className="feature24_main_inner_container_top_left_right_text_code">
                    Code
                  </span>
                </div>
              </div>
            </div>
            <div className="feature24_main_inner_container_top_right">
              <div className="feature24_main_inner_container_top_right_center">
                <div className="feature24_main_inner_container_top_right_center_left">
                  <div className="feature24_main_inner_container_top_right_center_left_content">
                    <div className="feature24_main_inner_container_top_right_center_left_content_left">
                      <GiHangingSpider />
                    </div>
                    <div className="feature24_main_inner_container_top_right_center_left_content_right">
                      <div className="feature24_main_inner_container_top_right_center_left_content_right_left">
                        <div className="feature24_main_inner_container_top_right_center_left_content_right_left_first">
                          <RiComputerLine />
                        </div>
                        <div className="feature24_main_inner_container_top_right_center_left_content_right_left_second">
                          <IoMdTabletPortrait />
                        </div>
                        <div className="feature24_main_inner_container_top_right_center_left_content_right_left_third">
                          <AiOutlineMobile />
                        </div>
                      </div>
                      <div className="feature24_main_inner_container_top_right_center_left_content_right_right">
                        <MdOutlineFitScreen />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="feature24_main_inner_container_top_right_center_right">
                  <div className="feature24_main_inner_container_top_right_center_right_content">
                    <div className="feature24_main_inner_container_top_right_center_right_content_left">
                      <MdOutlineShoppingBag />
                    </div>
                    <div className="feature24_main_inner_container_top_right_center_right_content_right">
                      <span>Copy Code</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="feature24_main_inner_container_bottom">
            <div className="feature24_main_inner_container_bottom_outer">
              <div className="feature24_main_inner_container_bottom_outer_top">
                <div className="feature24_main_inner_container_bottom_outer_top_left">
                  <PiSelectionAll className="feature24_main_inner_container_bottom_outer_top_left_icon" />
                  <span>Utilities</span>
                </div>
                <div className="feature24_main_inner_container_bottom_outer_top_right">
                  <span>Learn more</span>
                  <MdKeyboardArrowRight className="feature24_main_inner_container_bottom_outer_top_right_icon" />
                </div>
              </div>
              <div className="feature24_main_inner_container_bottom_outer_bottom">
                <div className="feature24_main_inner_container_bottom_outer_bottom_top">
                  <div className="feature24_main_inner_container_bottom_outer_bottom_top_left">
                    <span>
                      Use our UI components to build your website faster
                    </span>
                  </div>
                  <div className="feature24_main_inner_container_bottom_outer_bottom_top_right">
                    <span>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Molestiae praesent, ad ullam quis cupiditate atque maxime
                      alias eaque repellendus perferendis, nemo repudiandae.
                    </span>
                  </div>
                </div>
                <div className="feature24_main_inner_container_bottom_outer_bottom_bottom">
                  <img
                    src="https://library.shadcnblocks.com/images/block/placeholder-8-wide.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feature24;
