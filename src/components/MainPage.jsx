import React, { useState } from "react";
import "./MainPage.css";
import Header from "./Header/Header";

const MainPage = () => {
  var [filterSubpart, setFilterSubpparts] = useState([
    "hero",
    "feature",
    "footer",
    "content",
    "testimonial",
    "pricing",
    "login",
    "logos",
    "about",
    "banner",
    "blog",
    "careers",
    "casestudy",
    "changelog",
    "compare",
    "contact",
    "cta",
    "faq",
    "gallery",
    "list",
    "navbar",
    "product",
    "signup",
    "stats",
    "team",
    "timeline",
    "basic",
    "free",
    "pro",
  ]);
  const [hero, setHero] = useState({
    HERO1: "https://www.shadcnblocks.com/screenshots/block/hero1.jpg",
    HERO2: "https://www.shadcnblocks.com/screenshots/block/hero2.jpg",
    HERO3: "https://www.shadcnblocks.com/screenshots/block/hero3.jpg",
    HERO4: "https://www.shadcnblocks.com/screenshots/block/hero4.jpg",
    HERO5: "https://www.shadcnblocks.com/screenshots/block/hero5.jpg",
    HERO6: "https://www.shadcnblocks.com/screenshots/block/hero6.jpg",
    HERO9: "https://www.shadcnblocks.com/screenshots/block/hero9.jpg",
    HERO10: "https://www.shadcnblocks.com/screenshots/block/hero10.jpg",
    HERO11: "https://www.shadcnblocks.com/screenshots/block/hero11.jpg",
    HERO13: "https://www.shadcnblocks.com/screenshots/block/hero13.jpg",
    HERO14: "https://www.shadcnblocks.com/screenshots/block/hero14.jpg",
    HERO15: "https://www.shadcnblocks.com/screenshots/block/hero15.jpg",
    HERO16: "https://www.shadcnblocks.com/screenshots/block/hero16.jpg",
    HERO18: "https://www.shadcnblocks.com/screenshots/block/hero18.jpg",
    HERO20: "https://www.shadcnblocks.com/screenshots/block/hero20.jpg",
    HERO21: "https://www.shadcnblocks.com/screenshots/block/hero21.jpg",
    HERO24: "https://www.shadcnblocks.com/screenshots/block/hero24.jpg",
    HERO25: "https://www.shadcnblocks.com/screenshots/block/hero25.jpg",
    HERO26: "https://www.shadcnblocks.com/screenshots/block/hero26.jpg",
    HERO27: "https://www.shadcnblocks.com/screenshots/block/hero27.jpg",
    HERO28: "https://www.shadcnblocks.com/screenshots/block/hero28.jpg",
    HERO29: "https://www.shadcnblocks.com/screenshots/block/hero29.jpg",
    HERO30: "https://www.shadcnblocks.com/screenshots/block/hero30.jpg",
    HERO31: "https://www.shadcnblocks.com/screenshots/block/hero31.jpg",
  });
  return (
    <>
      <Header />
      <div className="mainpage_outer_container">
        <div className="mainpage_outer_container_top_headings">
          <div className="mainpage_outer_container_top_headings_top">
            <h1>410 Shadcn UI blocks</h1>
            <h3>Ready to copy/paste</h3>
          </div>
          <div className="mainpage_outer_container_top_headings_top_down">
            <div className="mainpage_outer_container_top_headings_top_down_inner">
              <span className="mainpage_outer_container_top_headings_top_down_inner_filter">
                Filter
              </span>
              <span>|</span>
              {filterSubpart.map((sub) => (
                <div className="mainpage_outer_container_top_headings_top_down_inner_filter_subparts">
                  <span>{sub}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mainpage_outer_container_components">
          {Object.keys(hero).map((item, index) => (
            <div
              className="mainpage_outer_container_components_subparts"
              key={index}
            >
              <img src={hero[item]} alt="" />
              <div className="mainpage_outer_container_components_subparts_text">
                <span>{item}</span>
                <span className="mainpage_outer_container_components_subparts_text_color"></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MainPage;
