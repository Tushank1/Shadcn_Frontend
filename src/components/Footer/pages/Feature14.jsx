import React from "react";
import "../pages_style/Feature14.css";
import Header from "../../Header/Header";
import { MdOutlineShoppingBag } from "react-icons/md";
import { GiHangingSpider } from "react-icons/gi";
import { RiComputerLine } from "react-icons/ri";
import { IoMdTabletPortrait } from "react-icons/io";
import { AiOutlineMobile } from "react-icons/ai";
import { MdOutlineFitScreen } from "react-icons/md";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";

const Feature14 = () => {
  return (
    <>
      <Header />
      <div className="feature14_main_outer_container">
        <div className="feature14_main_inner_container">
          <div className="feature14_main_inner_container_top">
            <div className="feature14_main_inner_container_top_left">
              <div className="feature14_main_inner_container_top_left_left">
                <div className="feature14_main_inner_container_top_left_left_text">
                  <h2>Feature14</h2>
                  <span>Pro</span>
                </div>
              </div>
              <div className="feature14_main_inner_container_top_left_right">
                <div className="feature14_main_inner_container_top_left_right_text">
                  <span className="feature14_main_inner_container_top_left_right_text_preview">
                    Preview
                  </span>
                  <span className="feature14_main_inner_container_top_left_right_text_code">
                    Code
                  </span>
                </div>
              </div>
            </div>
            <div className="feature14_main_inner_container_top_right">
              <div className="feature14_main_inner_container_top_right_center">
                <div className="feature14_main_inner_container_top_right_center_left">
                  <div className="feature14_main_inner_container_top_right_center_left_content">
                    <div className="feature14_main_inner_container_top_right_center_left_content_left">
                      <GiHangingSpider />
                    </div>
                    <div className="feature14_main_inner_container_top_right_center_left_content_right">
                      <div className="feature14_main_inner_container_top_right_center_left_content_right_left">
                        <div className="feature14_main_inner_container_top_right_center_left_content_right_left_first">
                          <RiComputerLine />
                        </div>
                        <div className="feature14_main_inner_container_top_right_center_left_content_right_left_second">
                          <IoMdTabletPortrait />
                        </div>
                        <div className="feature14_main_inner_container_top_right_center_left_content_right_left_third">
                          <AiOutlineMobile />
                        </div>
                      </div>
                      <div className="feature14_main_inner_container_top_right_center_left_content_right_right">
                        <MdOutlineFitScreen />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="feature14_main_inner_container_top_right_center_right">
                  <div className="feature14_main_inner_container_top_right_center_right_content">
                    <div className="feature14_main_inner_container_top_right_center_right_content_left">
                      <MdOutlineShoppingBag />
                    </div>
                    <div className="feature14_main_inner_container_top_right_center_right_content_right">
                      <span>Copy Code</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="feature14_main_inner_container_bottom">
            <div className="feature14_main_inner_container_bottom_outer">
              <div className="feature14_main_inner_container_bottom_outer_inner">
                <div className="feature14_main_inner_container_bottom_outer_inner_top">
                  <div className="feature14_main_inner_container_bottom_outer_inner_top_left">
                    <div className="feature14_main_inner_container_bottom_outer_inner_top_left_top">
                      <div className="feature14_main_inner_container_bottom_outer_inner_top_left_top_top">
                        <span>Secure Payments</span>
                      </div>
                      <div className="feature14_main_inner_container_bottom_outer_inner_top_left_top_bottom">
                        <span>
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Pariatur modi et recusandae ducimus eligendi
                          eveniet soluta reprehenderit nostrum expedita omnis.
                        </span>
                      </div>
                    </div>
                    <div className="feature14_main_inner_container_bottom_outer_inner_top_left_bottom">
                      <div className="feature14_main_inner_container_bottom_outer_inner_top_left_bottom_top">
                        <IoCheckmarkDoneCircleOutline />
                        <span>
                          Secure payment gateway integration with Stripe
                        </span>
                      </div>
                      <div className="feature14_main_inner_container_bottom_outer_inner_top_left_bottom_bottom">
                        <IoCheckmarkDoneCircleOutline />
                        <span>SSL encryption for secure transactions</span>
                      </div>
                    </div>
                  </div>
                  <div className="feature14_main_inner_container_bottom_outer_inner_top_right">
                    <img
                      src="https://library.shadcnblocks.com/images/block/placeholder-1.svg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="feature14_main_inner_container_bottom_outer_inner_bottom">
                  <div className="feature14_main_inner_container_bottom_outer_inner_bottom_left">
                    <div className="feature14_main_inner_container_bottom_outer_inner_bottom_left_top">
                      <div className="feature14_main_inner_container_bottom_outer_inner_bottom_left_top_top">
                        <span>Automated Invoicing</span>
                      </div>
                      <div className="feature14_main_inner_container_bottom_outer_inner_bottom_left_top_bottom">
                        <span>
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Pariatur modi et recusandae ducimus eligendi
                          eveniet soluta reprehenderit nostrum expedita omnis.
                        </span>
                      </div>
                    </div>
                    <div className="feature14_main_inner_container_bottom_outer_inner_bottom_left_bottom">
                      <div className="feature14_main_inner_container_bottom_outer_inner_bottom_left_bottom_top">
                        <IoCheckmarkDoneCircleOutline />
                        <span>Automated invoicing for easy billing</span>
                      </div>
                    </div>
                  </div>
                  <div className="feature14_main_inner_container_bottom_outer_inner_bottom_right">
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
      </div>
    </>
  );
};

export default Feature14;
