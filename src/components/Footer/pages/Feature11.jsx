import React from "react";
import "../pages_style/Feature11.css";
import Header from "../../Header/Header";
import { MdOutlineShoppingBag } from "react-icons/md";
import { GiHangingSpider } from "react-icons/gi";
import { RiComputerLine } from "react-icons/ri";
import { IoMdTabletPortrait } from "react-icons/io";
import { AiOutlineMobile } from "react-icons/ai";
import { MdOutlineFitScreen } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";

const Feature11 = () => {
  return (
    <>
      <Header />
      <div className="feature11_main_outer_container">
        <div className="feature11_main_inner_container">
          <div className="feature11_main_inner_container_top">
            <div className="feature11_main_inner_container_top_left">
              <div className="feature11_main_inner_container_top_left_left">
                <div className="feature11_main_inner_container_top_left_left_text">
                  <h2>Feature11</h2>
                  <span>Pro</span>
                </div>
              </div>
              <div className="feature11_main_inner_container_top_left_right">
                <div className="feature11_main_inner_container_top_left_right_text">
                  <span className="feature11_main_inner_container_top_left_right_text_preview">
                    Preview
                  </span>
                  <span className="feature11_main_inner_container_top_left_right_text_code">
                    Code
                  </span>
                </div>
              </div>
            </div>
            <div className="feature11_main_inner_container_top_right">
              <div className="feature11_main_inner_container_top_right_center">
                <div className="feature11_main_inner_container_top_right_center_left">
                  <div className="feature11_main_inner_container_top_right_center_left_content">
                    <div className="feature11_main_inner_container_top_right_center_left_content_left">
                      <GiHangingSpider />
                    </div>
                    <div className="feature11_main_inner_container_top_right_center_left_content_right">
                      <div className="feature11_main_inner_container_top_right_center_left_content_right_left">
                        <div className="feature11_main_inner_container_top_right_center_left_content_right_left_first">
                          <RiComputerLine />
                        </div>
                        <div className="feature11_main_inner_container_top_right_center_left_content_right_left_second">
                          <IoMdTabletPortrait />
                        </div>
                        <div className="feature11_main_inner_container_top_right_center_left_content_right_left_third">
                          <AiOutlineMobile />
                        </div>
                      </div>
                      <div className="feature11_main_inner_container_top_right_center_left_content_right_right">
                        <MdOutlineFitScreen />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="feature11_main_inner_container_top_right_center_right">
                  <div className="feature11_main_inner_container_top_right_center_right_content">
                    <div className="feature11_main_inner_container_top_right_center_right_content_left">
                      <MdOutlineShoppingBag />
                    </div>
                    <div className="feature11_main_inner_container_top_right_center_right_content_right">
                      <span>Copy Code</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="feature11_main_inner_container_bottom">
            <div className="feature11_main_inner_container_bottom_outer">
              <div className="feature11_main_inner_container_bottom_outer_left">
                <img
                  src="https://library.shadcnblocks.com/images/block/placeholder-1.svg"
                  alt=""
                />
              </div>
              <div className="feature11_main_inner_container_bottom_outer_right">
                <div className="feature11_main_inner_container_bottom_outer_right_top">
                  <span>Built with the latest technology stack</span>
                </div>
                <div className="feature11_main_inner_container_bottom_outer_right_mid">
                  <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Rerum alias unde et doloremque dignissimos error temporibus
                    quisquam porro ducimus esse quod, a officiis.
                  </span>
                </div>
                <div className="feature11_main_inner_container_bottom_outer_right_bottom">
                  <div className="feature11_main_inner_container_bottom_outer_right_bottom_top">
                    <span>Learn more</span>
                    <MdKeyboardArrowRight />
                  </div>
                  <div className="feature11_main_inner_container_bottom_outer_right_bottom_bottom">
                    <div className="feature11_main_inner_container_bottom_outer_right_bottom_bottom_first">
                      <IoCheckmarkDoneCircleOutline />
                      <span>Quality</span>
                    </div>
                    <div className="feature11_main_inner_container_bottom_outer_right_bottom_bottom_second">
                      <IoCheckmarkDoneCircleOutline />
                      <span>Multi-purpose</span>
                    </div>
                    <div className="feature11_main_inner_container_bottom_outer_right_bottom_bottom_third">
                      <IoCheckmarkDoneCircleOutline />
                      <span>Easy to use</span>
                    </div>
                    <div className="feature11_main_inner_container_bottom_outer_right_bottom_bottom_fourth">
                      <IoCheckmarkDoneCircleOutline />
                      <span>Fast</span>
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

export default Feature11;
