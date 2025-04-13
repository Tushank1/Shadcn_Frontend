import React from "react";
import "../pages_style/Feature4.css";
import Header from "../../Header/Header";
import { MdOutlineShoppingBag } from "react-icons/md";
import { GiHangingSpider } from "react-icons/gi";
import { RiComputerLine } from "react-icons/ri";
import { IoMdTabletPortrait } from "react-icons/io";
import { AiOutlineMobile } from "react-icons/ai";
import { MdOutlineFitScreen } from "react-icons/md";

const Feature4 = () => {
  return (
    <>
      <Header />
      <div className="feature4_main_outer_container">
        <div className="feature4_main_inner_container">
          <div className="feature4_main_inner_container_top">
            <div className="feature4_main_inner_container_top_left">
              <div className="feature4_main_inner_container_top_left_left">
                <div className="feature4_main_inner_container_top_left_left_text">
                  <h2>Feature4</h2>
                  <span>Pro</span>
                </div>
              </div>
              <div className="feature4_main_inner_container_top_left_right">
                <div className="feature4_main_inner_container_top_left_right_text">
                  <span className="feature4_main_inner_container_top_left_right_text_preview">
                    Preview
                  </span>
                  <span className="feature4_main_inner_container_top_left_right_text_code">
                    Code
                  </span>
                </div>
              </div>
            </div>
            <div className="feature4_main_inner_container_top_right">
              <div className="feature4_main_inner_container_top_right_center">
                <div className="feature4_main_inner_container_top_right_center_left">
                  <div className="feature4_main_inner_container_top_right_center_left_content">
                    <div className="feature4_main_inner_container_top_right_center_left_content_left">
                      <GiHangingSpider />
                    </div>
                    <div className="feature4_main_inner_container_top_right_center_left_content_right">
                      <div className="feature4_main_inner_container_top_right_center_left_content_right_left">
                        <div className="feature4_main_inner_container_top_right_center_left_content_right_left_first">
                          <RiComputerLine />
                        </div>
                        <div className="feature4_main_inner_container_top_right_center_left_content_right_left_second">
                          <IoMdTabletPortrait />
                        </div>
                        <div className="feature4_main_inner_container_top_right_center_left_content_right_left_third">
                          <AiOutlineMobile />
                        </div>
                      </div>
                      <div className="feature4_main_inner_container_top_right_center_left_content_right_right">
                        <MdOutlineFitScreen />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="feature4_main_inner_container_top_right_center_right">
                  <div className="feature4_main_inner_container_top_right_center_right_content">
                    <div className="feature4_main_inner_container_top_right_center_right_content_left">
                      <MdOutlineShoppingBag />
                    </div>
                    <div className="feature4_main_inner_container_top_right_center_right_content_right">
                      <span>Copy Code</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="feature4_main_inner_container_bottom">
            <div className="feature4_main_inner_container_bottom_outer_container">
              <div className="feature4_main_inner_container_bottom_outer_container_main_heading">
                <span>Get your team on the same page, literally</span>
              </div>
              <div className="feature4_main_inner_container_bottom_outer_container_first_container">
                <div className="feature4_main_inner_container_bottom_outer_container_first_container_top">
                  <span>&lt;&gt;</span>
                </div>
                <div className="feature4_main_inner_container_bottom_outer_container_first_container_mid">
                  <div className="feature4_main_inner_container_bottom_outer_container_first_container_mid_top">
                    <span>Collaborate or co-edit together</span>
                  </div>
                  <div className="feature4_main_inner_container_bottom_outer_container_first_container_mid_bottom">
                    <span>
                      Allow others to comment or suggest edits. Just type the @
                      key to get their attention.
                    </span>
                  </div>
                </div>
                <div className="feature4_main_inner_container_bottom_outer_container_first_container_bottom">
                  <img
                    src="https://library.shadcnblocks.com/images/block/placeholder-1.svg"
                    alt=""
                  />
                </div>
              </div>
              <div className="feature4_main_inner_container_bottom_outer_container_second_container">
                <div className="feature4_main_inner_container_bottom_outer_container_second_container_left">
                  <div className="feature4_main_inner_container_bottom_outer_container_second_container_left_top">
                    <span>&lt;&gt;</span>
                  </div>
                  <div className="feature4_main_inner_container_bottom_outer_container_second_container_left_mid">
                    <div className="feature4_main_inner_container_bottom_outer_container_second_container_left_mid_top">
                      <span>Card Title</span>
                    </div>
                    <div className="feature4_main_inner_container_bottom_outer_container_second_container_left_mid_bottom">
                      <span>Lorem ipsum dolor sit amet consectetur.</span>
                    </div>
                  </div>
                  <div className="feature4_main_inner_container_bottom_outer_container_second_container_left_bottom">
                    <img
                      src="https://library.shadcnblocks.com/images/block/placeholder-1.svg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="feature4_main_inner_container_bottom_outer_container_second_container_right">
                  <div className="feature4_main_inner_container_bottom_outer_container_second_container_right_top">
                    <img
                      src="https://library.shadcnblocks.com/images/block/logos/shadcn-ui-wordmark.svg"
                      alt=""
                    />
                  </div>
                  <div className="feature4_main_inner_container_bottom_outer_container_second_container_right_mid">
                    <span>
                      {`Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      A sint, porro consequatur illo itaque rem dolor.`}
                    </span>
                  </div>
                  <div className="feature4_main_inner_container_bottom_outer_container_second_container_right_bottom">
                    <div className="feature4_main_inner_container_bottom_outer_container_second_container_right_bottom_top">
                      <span>John Doe</span>
                    </div>
                    <div className="feature4_main_inner_container_bottom_outer_container_second_container_right_bottom_bottom">
                      <span>CET, Company Example</span>
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

export default Feature4;
