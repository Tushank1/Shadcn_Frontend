import React from "react";
import "../pages_style/Feature28.css";
import Header from "../../Header/Header";
import { MdOutlineShoppingBag } from "react-icons/md";
import { GiHangingSpider } from "react-icons/gi";
import { RiComputerLine } from "react-icons/ri";
import { IoMdTabletPortrait } from "react-icons/io";
import { AiOutlineMobile } from "react-icons/ai";
import { MdOutlineFitScreen } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa6";

const Feature28 = () => {
  return (
    <>
      <Header />
      <div className="feature28_main_outer_container">
        <div className="feature28_main_inner_container">
          <div className="feature28_main_inner_container_top">
            <div className="feature28_main_inner_container_top_left">
              <div className="feature28_main_inner_container_top_left_left">
                <div className="feature28_main_inner_container_top_left_left_text">
                  <h2>Feature28</h2>
                  <span>Pro</span>
                </div>
              </div>
              <div className="feature28_main_inner_container_top_left_right">
                <div className="feature28_main_inner_container_top_left_right_text">
                  <span className="feature28_main_inner_container_top_left_right_text_preview">
                    Preview
                  </span>
                  <span className="feature28_main_inner_container_top_left_right_text_code">
                    Code
                  </span>
                </div>
              </div>
            </div>
            <div className="feature28_main_inner_container_top_right">
              <div className="feature28_main_inner_container_top_right_center">
                <div className="feature28_main_inner_container_top_right_center_left">
                  <div className="feature28_main_inner_container_top_right_center_left_content">
                    <div className="feature28_main_inner_container_top_right_center_left_content_left">
                      <GiHangingSpider />
                    </div>
                    <div className="feature28_main_inner_container_top_right_center_left_content_right">
                      <div className="feature28_main_inner_container_top_right_center_left_content_right_left">
                        <div className="feature28_main_inner_container_top_right_center_left_content_right_left_first">
                          <RiComputerLine />
                        </div>
                        <div className="feature28_main_inner_container_top_right_center_left_content_right_left_second">
                          <IoMdTabletPortrait />
                        </div>
                        <div className="feature28_main_inner_container_top_right_center_left_content_right_left_third">
                          <AiOutlineMobile />
                        </div>
                      </div>
                      <div className="feature28_main_inner_container_top_right_center_left_content_right_right">
                        <MdOutlineFitScreen />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="feature28_main_inner_container_top_right_center_right">
                  <div className="feature28_main_inner_container_top_right_center_right_content">
                    <div className="feature28_main_inner_container_top_right_center_right_content_left">
                      <MdOutlineShoppingBag />
                    </div>
                    <div className="feature28_main_inner_container_top_right_center_right_content_right">
                      <span>Copy Code</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="feature28_main_inner_container_bottom">
            <div className="feature28_main_inner_container_bottom_outer">
              <div className="feature28_main_inner_container_bottom_outer_left">
                <div className="feature28_main_inner_container_bottom_outer_left_top">
                  <img
                    src="https://library.shadcnblocks.com/images/block/placeholder-dark-1.svg"
                    alt=""
                  />
                </div>
                <div className="feature28_main_inner_container_bottom_outer_left_bottom">
                  <div className="feature28_main_inner_container_bottom_outer_left_bottom_top">
                    <span className="feature28_main_inner_container_bottom_outer_left_bottom_top_heading">
                      Copy paste components
                    </span>
                    <span>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Animi laboriosam voluptatibus temporibus doloremque
                      laudantium.
                    </span>
                  </div>
                  <div className="feature28_main_inner_container_bottom_outer_left_bottom_bottom">
                    <span>Learn more</span>
                    <FaAngleRight className="feature28_main_inner_container_bottom_outer_left_bottom_bottom_icon" />
                  </div>
                </div>
              </div>
              <div className="feature28_main_inner_container_bottom_outer_right">
                <div className="feature28_main_inner_container_bottom_outer_right_top">
                  <img
                    src="https://library.shadcnblocks.com/images/block/placeholder-dark-2.svg"
                    alt=""
                  />
                </div>
                <div className="feature28_main_inner_container_bottom_outer_right_bottom">
                  <div className="feature28_main_inner_container_bottom_outer_right_bottom_top">
                    <span className="feature28_main_inner_container_bottom_outer_right_bottom_top_heading">
                      100% customizable
                    </span>
                    <span>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Animi laboriosam voluptatibus temporibus doloremque
                      laudantium.
                    </span>
                  </div>
                  <div className="feature28_main_inner_container_bottom_outer_right_bottom_bottom">
                    <span>Learn more</span>
                    <FaAngleRight className="feature28_main_inner_container_bottom_outer_right_bottom_bottom_icon" />
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

export default Feature28;
