import React from "react";
import "../pages_style/Feature5.css";
import Header from "../../Header/Header";
import { MdOutlineShoppingBag } from "react-icons/md";
import { GiHangingSpider } from "react-icons/gi";
import { RiComputerLine } from "react-icons/ri";
import { IoMdTabletPortrait } from "react-icons/io";
import { AiOutlineMobile } from "react-icons/ai";
import { MdOutlineFitScreen } from "react-icons/md";
import { FaPager } from "react-icons/fa";
import { PiLightning } from "react-icons/pi";

const Feature5 = () => {
  return (
    <>
      <Header />
      <div className="feature5_main_outer_container">
        <div className="feature5_main_inner_container">
          <div className="feature5_main_inner_container_top">
            <div className="feature5_main_inner_container_top_left">
              <div className="feature5_main_inner_container_top_left_left">
                <div className="feature5_main_inner_container_top_left_left_text">
                  <h2>Feature5</h2>
                  <span>Pro</span>
                </div>
              </div>
              <div className="feature5_main_inner_container_top_left_right">
                <div className="feature5_main_inner_container_top_left_right_text">
                  <span className="feature5_main_inner_container_top_left_right_text_preview">
                    Preview
                  </span>
                  <span className="feature5_main_inner_container_top_left_right_text_code">
                    Code
                  </span>
                </div>
              </div>
            </div>
            <div className="feature5_main_inner_container_top_right">
              <div className="feature5_main_inner_container_top_right_center">
                <div className="feature5_main_inner_container_top_right_center_left">
                  <div className="feature5_main_inner_container_top_right_center_left_content">
                    <div className="feature5_main_inner_container_top_right_center_left_content_left">
                      <GiHangingSpider />
                    </div>
                    <div className="feature5_main_inner_container_top_right_center_left_content_right">
                      <div className="feature5_main_inner_container_top_right_center_left_content_right_left">
                        <div className="feature5_main_inner_container_top_right_center_left_content_right_left_first">
                          <RiComputerLine />
                        </div>
                        <div className="feature5_main_inner_container_top_right_center_left_content_right_left_second">
                          <IoMdTabletPortrait />
                        </div>
                        <div className="feature5_main_inner_container_top_right_center_left_content_right_left_third">
                          <AiOutlineMobile />
                        </div>
                      </div>
                      <div className="feature5_main_inner_container_top_right_center_left_content_right_right">
                        <MdOutlineFitScreen />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="feature5_main_inner_container_top_right_center_right">
                  <div className="feature5_main_inner_container_top_right_center_right_content">
                    <div className="feature5_main_inner_container_top_right_center_right_content_left">
                      <MdOutlineShoppingBag />
                    </div>
                    <div className="feature5_main_inner_container_top_right_center_right_content_right">
                      <span>Copy Code</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="feature5_main_inner_container_bottom">
            <div className="feature5_main_inner_container_bottom_outer_container">
              <div className="feature5_main_inner_container_bottom_outer_container_left">
                <div className="feature5_main_inner_container_bottom_outer_container_left_top">
                  <FaPager className="feature5_main_inner_container_bottom_outer_container_left_top_icon" />
                </div>
                <div className="feature5_main_inner_container_bottom_outer_container_left_mid">
                  <div className="feature5_main_inner_container_bottom_outer_container_left_mid_top">
                    <span>Get your team on the same page.</span>
                  </div>
                  <div className="feature5_main_inner_container_bottom_outer_container_left_mid_bottom">
                    <span>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Aut odit pariatur, ullam delectus modi excepturi ea
                      dignissimos mollitia minima unde animi qui omnis.
                    </span>
                  </div>
                </div>
                <div className="feature5_main_inner_container_bottom_outer_container_left_bottom">
                  <img
                    src="https://library.shadcnblocks.com/images/block/placeholder-1.svg"
                    alt=""
                  />
                </div>
              </div>
              <div className="feature5_main_inner_container_bottom_outer_container_right">
                <div className="feature5_main_inner_container_bottom_outer_container_right_top">
                  <PiLightning className="feature5_main_inner_container_bottom_outer_container_right_top_icon" />
                </div>
                <div className="feature5_main_inner_container_bottom_outer_container_right_mid">
                  <div className="feature5_main_inner_container_bottom_outer_container_right_mid_top">
                    <span>Fast and easy to use.</span>
                  </div>
                  <div className="feature5_main_inner_container_bottom_outer_container_right_mid_bottom">
                    <span>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Neque corrupti sed.
                    </span>
                  </div>
                </div>
                <div className="feature5_main_inner_container_bottom_outer_container_right_bottom">
                  <img
                    src="https://library.shadcnblocks.com/images/block/placeholder-2.svg"
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

export default Feature5;
