import React from "react";
import Header from "../../Header/Header";
import "../pages_style/Feature9.css";
import { MdOutlineShoppingBag } from "react-icons/md";
import { GiHangingSpider } from "react-icons/gi";
import { RiComputerLine } from "react-icons/ri";
import { IoMdTabletPortrait } from "react-icons/io";
import { AiOutlineMobile } from "react-icons/ai";
import { MdOutlineFitScreen } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

const Feature9 = () => {
  return (
    <>
      <Header />
      <div className="feature9_main_outer_container">
        <div className="feature9_main_inner_container">
          <div className="feature9_main_inner_container_top">
            <div className="feature9_main_inner_container_top_left">
              <div className="feature9_main_inner_container_top_left_left">
                <div className="feature9_main_inner_container_top_left_left_text">
                  <h2>Feature9</h2>
                  <span>Pro</span>
                </div>
              </div>
              <div className="feature9_main_inner_container_top_left_right">
                <div className="feature9_main_inner_container_top_left_right_text">
                  <span className="feature9_main_inner_container_top_left_right_text_preview">
                    Preview
                  </span>
                  <span className="feature9_main_inner_container_top_left_right_text_code">
                    Code
                  </span>
                </div>
              </div>
            </div>
            <div className="feature9_main_inner_container_top_right">
              <div className="feature9_main_inner_container_top_right_center">
                <div className="feature9_main_inner_container_top_right_center_left">
                  <div className="feature9_main_inner_container_top_right_center_left_content">
                    <div className="feature9_main_inner_container_top_right_center_left_content_left">
                      <GiHangingSpider />
                    </div>
                    <div className="feature9_main_inner_container_top_right_center_left_content_right">
                      <div className="feature9_main_inner_container_top_right_center_left_content_right_left">
                        <div className="feature9_main_inner_container_top_right_center_left_content_right_left_first">
                          <RiComputerLine />
                        </div>
                        <div className="feature9_main_inner_container_top_right_center_left_content_right_left_second">
                          <IoMdTabletPortrait />
                        </div>
                        <div className="feature9_main_inner_container_top_right_center_left_content_right_left_third">
                          <AiOutlineMobile />
                        </div>
                      </div>
                      <div className="feature9_main_inner_container_top_right_center_left_content_right_right">
                        <MdOutlineFitScreen />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="feature9_main_inner_container_top_right_center_right">
                  <div className="feature9_main_inner_container_top_right_center_right_content">
                    <div className="feature9_main_inner_container_top_right_center_right_content_left">
                      <MdOutlineShoppingBag />
                    </div>
                    <div className="feature9_main_inner_container_top_right_center_right_content_right">
                      <span>Copy Code</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="feature9_main_inner_container_bottom">
            <div className="feature9_main_inner_container_bottom_outer">
              <div className="feature9_main_inner_container_bottom_outer_top">
                <div className="feature9_main_inner_container_bottom_outer_top_top">
                  <div className="feature9_main_inner_container_bottom_outer_top_top_inner">
                    <span>Badge</span>
                  </div>
                </div>
                <div className="feature9_main_inner_container_bottom_outer_top_mid">
                  <div className="feature9_main_inner_container_bottom_outer_top_mid_inner">
                    <span>This is where your feature goes</span>
                  </div>
                </div>
                <div className="feature9_main_inner_container_bottom_outer_top_bottom">
                  <div className="feature9_main_inner_container_bottom_outer_top_bottom_inner">
                    <span>Lorem ipsum dolor sit amet consectetur.</span>
                  </div>
                </div>
              </div>
              <div className="feature9_main_inner_container_bottom_outer_bottom">
                <div className="feature9_main_inner_container_bottom_outer_bottom_left">
                  <div className="feature9_main_inner_container_bottom_outer_bottom_left_top">
                    <div className="feature9_main_inner_container_bottom_outer_bottom_left_top_inner">
                      <span>Badge</span>
                    </div>
                  </div>
                  <div className="feature9_main_inner_container_bottom_outer_bottom_left_bottom">
                    <div className="feature9_main_inner_container_bottom_outer_bottom_left_bottom_top">
                      <span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        In, nostrum ullam. Voluptatibus.
                      </span>
                    </div>
                    <div className="feature9_main_inner_container_bottom_outer_bottom_left_bottom_bottom">
                      <div className="feature9_main_inner_container_bottom_outer_bottom_left_bottom_bottom_left">
                        <span>Read more</span>
                        <MdKeyboardArrowRight />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="feature9_main_inner_container_bottom_outer_bottom_mid">
                  <img
                    src="https://library.shadcnblocks.com/images/block/placeholder-1.svg"
                    alt=""
                  />
                </div>
                <div className="feature9_main_inner_container_bottom_outer_bottom_right">
                  <div className="feature9_main_inner_container_bottom_outer_bottom_right_top">
                    <div className="feature9_main_inner_container_bottom_outer_bottom_right_top_inner">
                      <span>Badge</span>
                    </div>
                  </div>
                  <div className="feature9_main_inner_container_bottom_outer_bottom_right_bottom">
                    <div className="feature9_main_inner_container_bottom_outer_bottom_right_bottom_top">
                      <span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        In, nostrum ullam. Voluptatibus.
                      </span>
                    </div>
                    <div className="feature9_main_inner_container_bottom_outer_bottom_right_bottom_bottom">
                      <div className="feature9_main_inner_container_bottom_outer_bottom_right_bottom_bottom_left">
                        <span>Read more</span>
                        <MdKeyboardArrowRight />
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

export default Feature9;
