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
    HERO1: "https://www.shadcnblocks.com/screenshots/block/hero10.jpg",
    HERO2: "https://www.shadcnblocks.com/screenshots/block/hero10.jpg",
    HERO3: "https://www.shadcnblocks.com/screenshots/block/hero10.jpg",
    HERO4: "https://www.shadcnblocks.com/screenshots/block/hero10.jpg",
    HERO5: "https://www.shadcnblocks.com/screenshots/block/hero10.jpg",
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
          <>
            {Object.keys(hero).map((item, index) => {
              <div className="mainpage_outer_container_components_subparts">
                <img src={hero[item]} alt="" />
                <div className="mainpage_outer_container_components_subparts_text">
                  <span>{item}</span>
                  <span className="mainpage_outer_container_components_subparts_text_color"></span>
                </div>
              </div>;
              console.log(item, hero[item]);
            })}
          </>
        </div>
      </div>
    </>
  );
};

export default MainPage;
