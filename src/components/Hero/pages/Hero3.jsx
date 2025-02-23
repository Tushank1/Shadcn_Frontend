import React from "react";
import Header from "../../Header/Header";
import "../pages_style/Hero3.css";
import { MdOutlineShoppingBag } from "react-icons/md";
import { GiHangingSpider } from "react-icons/gi";
import { RiComputerLine } from "react-icons/ri";
import { IoMdTabletPortrait } from "react-icons/io";
import { AiOutlineMobile } from "react-icons/ai";
import { MdOutlineFitScreen } from "react-icons/md";
import { GoArrowDownRight } from "react-icons/go";
import { BiStar } from "react-icons/bi";

const Hero3 = () => {
  return (
    <>
      <Header />
      <div className="hero3_main_outer_container">
        <div className="hero3_main_inner_container">
          <div className="hero3_main_inner_container_top">
            <div className="hero3_main_inner_container_top_left">
              <div className="hero3_main_inner_container_top_left_left">
                <div className="hero3_main_inner_container_top_left_left_text">
                  <h2>Hero3</h2>
                  <span>Pro</span>
                </div>
              </div>
              <div className="hero3_main_inner_container_top_left_right">
                <div className="hero3_main_inner_container_top_left_right_text">
                  <span className="hero3_main_inner_container_top_left_right_text_preview">
                    Preview
                  </span>
                  <span className="hero3_main_inner_container_top_left_right_text_code">
                    Code
                  </span>
                </div>
              </div>
            </div>
            <div className="hero3_main_inner_container_top_right">
              <div className="hero3_main_inner_container_top_right_center">
                <div className="hero3_main_inner_container_top_right_center_left">
                  <div className="hero3_main_inner_container_top_right_center_left_content">
                    <div className="hero3_main_inner_container_top_right_center_left_content_left">
                      <GiHangingSpider />
                    </div>
                    <div className="hero3_main_inner_container_top_right_center_left_content_right">
                      <div className="hero3_main_inner_container_top_right_center_left_content_right_left">
                        <div className="hero3_main_inner_container_top_right_center_left_content_right_left_first">
                          <RiComputerLine />
                        </div>
                        <div className="hero3_main_inner_container_top_right_center_left_content_right_left_second">
                          <IoMdTabletPortrait />
                        </div>
                        <div className="hero3_main_inner_container_top_right_center_left_content_right_left_third">
                          <AiOutlineMobile />
                        </div>
                      </div>
                      <div className="hero3_main_inner_container_top_right_center_left_content_right_right">
                        <MdOutlineFitScreen />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hero3_main_inner_container_top_right_center_right">
                  <div className="hero3_main_inner_container_top_right_center_right_content">
                    <div className="hero3_main_inner_container_top_right_center_right_content_left">
                      <MdOutlineShoppingBag />
                    </div>
                    <div className="hero3_main_inner_container_top_right_center_right_content_right">
                      <span>Copy Code</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hero3_main_inner_container_bottom">
            <div className="hero3_main_inner_container_bottom_left">
              <div className="hero3_main_inner_container_bottom_left_outer">
                <div className="hero3_main_inner_container_bottom_left_outer_heading">
                  <span>Blocks Built With Shadcn & Tailwind</span>
                </div>
                <div className="hero3_main_inner_container_bottom_left_outer_content">
                  <span>
                    Finely crafted components built with React, Tailwind and
                    Shadcn UI. Developers can copy and paste these blocks
                    directly into their project.
                  </span>
                </div>
                <div className="hero3_main_inner_container_bottom_left_outer_review_container">
                  <div className="hero3_main_inner_container_bottom_left_outer_review_container_left">
                    <div className="hero3_main_inner_container_bottom_left_outer_review_container_left_first">
                      <img
                        src="https://www.shadcnblocks.com/images/block/avatar-1.webp"
                        alt=""
                      />
                    </div>
                    <div className="hero3_main_inner_container_bottom_left_outer_review_container_left_second">
                      <img
                        src="https://www.shadcnblocks.com/images/block/avatar-2.webp"
                        alt=""
                      />
                    </div>
                    <div className="hero3_main_inner_container_bottom_left_outer_review_container_left_third">
                      <img
                        src="https://www.shadcnblocks.com/images/block/avatar-3.webp"
                        alt=""
                      />
                    </div>
                    <div className="hero3_main_inner_container_bottom_left_outer_review_container_left_fourth">
                      <img
                        src="https://www.shadcnblocks.com/images/block/avatar-4.webp"
                        alt=""
                      />
                    </div>
                    <div className="hero3_main_inner_container_bottom_left_outer_review_container_left_five">
                      <img
                        src="https://www.shadcnblocks.com/images/block/avatar-5.webp"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="hero3_main_inner_container_bottom_left_outer_review_container_right">
                    <div className="hero3_main_inner_container_bottom_left_outer_review_container_right_top">
                      {[...Array(5)].map((_, i) => (
                        <BiStar
                          key={i}
                          className="hero3_main_inner_container_bottom_left_outer_review_container_right_top_icon"
                        />
                      ))}
                    </div>
                    <div className="hero3_main_inner_container_bottom_left_outer_review_container_right_bottom">
                      <span>from 200+ reviews</span>
                    </div>
                  </div>
                </div>
                <div className="hero3_main_inner_container_bottom_left_outer_bottom">
                  <div className="hero3_main_inner_container_bottom_left_outer_bottom_left">
                    <button>Sign Up</button>
                  </div>
                  <div className="hero3_main_inner_container_bottom_left_outer_bottom_right">
                    <div className="hero3_main_inner_container_bottom_left_outer_bottom_right_content">
                      <button>Get Started</button>
                    </div>
                    <div className="hero3_main_inner_container_bottom_left_outer_bottom_right_icon">
                      <GoArrowDownRight />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="hero3_main_inner_container_bottom_right">
              <div className="hero3_main_inner_container_bottom_right_img">
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

export default Hero3;
