import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="header_main_container">
        <div className="header_main_container_left">
          <div className="header_main_container_left_img">
            <img
              src="https://www.shadcnblocks.com/images/block/block-1.svg"
              alt=""
            />
          </div>
          <div className="header_main_container_left_center">
            <span>Shadcnblocks</span>
          </div>
          <div className="header_main_container_left_right">
            <span>.com</span>
          </div>
        </div>
        <div className="header_main_container_center">
          <div className="header_main_container_center_left">
            <span>Blocks</span>
          </div>
          <div className="header_main_container_center_center">
            <span>Templates</span>
          </div>
          <div className="header_main_container_center_right">
            <span>Pricing</span>
          </div>
        </div>
        <div className="header_main_container_right">
          <div className="header_main_container_right_left">
            <span>Login</span>
          </div>
          <div className="header_main_container_right_right">
            <span>All Access</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
