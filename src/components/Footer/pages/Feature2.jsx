import React from "react";
import "../pages_style/feature2.css";
import Header from "../../Header/Header";
import { MdOutlineShoppingBag } from "react-icons/md";
import { GiHangingSpider } from "react-icons/gi";
import { RiComputerLine } from "react-icons/ri";
import { IoMdTabletPortrait } from "react-icons/io";
import { AiOutlineMobile } from "react-icons/ai";
import { MdOutlineFitScreen } from "react-icons/md";

const Feature2 = () => {
  return (
    <>
      <Header />
      <div className="feature2_main_outer_container">
        <div className="feature2_main_inner_container">
          <div className="feature2_main_inner_container_top">
            <div className="feature2_main_inner_container_top_left">
              <div className="feature2_main_inner_container_top_left_left">
                <div className="feature2_main_inner_container_top_left_left_text">
                  <h2>Feature2</h2>
                  <span>Pro</span>
                </div>
              </div>
              <div className="feature2_main_inner_container_top_left_right">
                <div className="feature2_main_inner_container_top_left_right_text">
                  <span className="feature2_main_inner_container_top_left_right_text_preview">
                    Preview
                  </span>
                  <span className="feature2_main_inner_container_top_left_right_text_code">
                    Code
                  </span>
                </div>
              </div>
            </div>
            <div className="feature2_main_inner_container_top_right">
              <div className="feature2_main_inner_container_top_right_center">
                <div className="feature2_main_inner_container_top_right_center_left">
                  <div className="feature2_main_inner_container_top_right_center_left_content">
                    <div className="feature2_main_inner_container_top_right_center_left_content_left">
                      <GiHangingSpider />
                    </div>
                    <div className="feature2_main_inner_container_top_right_center_left_content_right">
                      <div className="feature2_main_inner_container_top_right_center_left_content_right_left">
                        <div className="feature2_main_inner_container_top_right_center_left_content_right_left_first">
                          <RiComputerLine />
                        </div>
                        <div className="feature2_main_inner_container_top_right_center_left_content_right_left_second">
                          <IoMdTabletPortrait />
                        </div>
                        <div className="feature2_main_inner_container_top_right_center_left_content_right_left_third">
                          <AiOutlineMobile />
                        </div>
                      </div>
                      <div className="feature2_main_inner_container_top_right_center_left_content_right_right">
                        <MdOutlineFitScreen />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="feature2_main_inner_container_top_right_center_right">
                  <div className="feature2_main_inner_container_top_right_center_right_content">
                    <div className="feature2_main_inner_container_top_right_center_right_content_left">
                      <MdOutlineShoppingBag />
                    </div>
                    <div className="feature2_main_inner_container_top_right_center_right_content_right">
                      <span>Copy Code</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="feature2_main_inner_container_bottom">
            <div className="feature2_main_inner_container_bottom_right">
              <div className="feature2_main_inner_container_bottom_right_img">
                <img
                  src="https://www.shadcnblocks.com/images/block/placeholder-1.svg"
                  alt=""
                />
              </div>
            </div>
            <div className="feature2_main_inner_container_bottom_left">
              <div className="feature2_main_inner_container_bottom_left_outer">
                {/* <div className="feature2_main_inner_container_bottom_left_outer_top">
                  <div className="feature2_main_inner_container_bottom_left_outer_top_content">
                    <span>✨ Your Website Builder</span>
                  </div>
                  <div className="feature2_main_inner_container_bottom_left_outer_top_icon">
                    <MdOutlineArrowOutward />
                  </div>
                </div> */}
                <div className="feature2_main_inner_container_bottom_left_outer_heading">
                  <span>Build your website with Shadcnblocks</span>
                </div>
                <div className="feature2_main_inner_container_bottom_left_outer_content">
                  <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Elig doloremque mollitia fugiat omnis! Porro facilis quo
                    animi consequatur.
                  </span>
                </div>
                <div className="feature2_main_inner_container_bottom_left_outer_bottom">
                  <div className="feature2_main_inner_container_bottom_left_outer_bottom_left">
                    <button>Buy Now</button>
                  </div>
                  <div className="feature2_main_inner_container_bottom_left_outer_bottom_right">
                    <div className="feature2_main_inner_container_bottom_left_outer_bottom_right_content">
                      <button>Learn More</button>
                    </div>
                    {/* <div className="feature2_main_inner_container_bottom_left_outer_bottom_right_icon">
                      <IoMdArrowRoundForward />
                    </div> */}
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

export default Feature2;
