import React, { useState, useRef, useLayoutEffect, useEffect } from "react";
// Design
import strikingstyle from "../../../../Images/LEXUS/ES/lexus-2024-es-300h-ultra-luxury-iridium-fr0-l.png";
import legroom from "../../../../Images/LEXUS/ES/Interior/Lexus-ES-classleading-legroom-design-desktop-1440x800-LEX-ESH-MY22-0009.png";
import extrior from "../../../../Images/LEXUS/ES/2022_lexus_es_15_1600x1200.png";
import { useGlobalContext } from "../../../../GlobalContext";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import DesignAside from "./Aside/DesignAside";
const Design = () => {
  const design = [
    {
      Images: strikingstyle,
      heading: "STRIKING STYLE",
      body: "Built on a highly rigid platform, the ES features a dynamic stance and a sleek, coupe-like silhouette. It also features a provocative grille pattern and elegant LED headlamps for striking illumination..",
    },
    {
      Images: legroom,
      heading: "CLASS-LEADING LEGROOM",
      body: "The ES welcomes you into a spacious and inviting cabin with class-leading rear legroom.* Other interior comforts include an available power rear sunshade and supple semi-aniline leather–trimmed seats.",
    },
    {
      Images: extrior,
      heading: "F SPORT EXTERIOR STYLING",
      body: "Strikingly styled from the ground up, the ES F SPORT Design and ES F SPORT Handling models feature exclusive 19-inch wheels with a daring Gloss Black finish. Signature upper and lower grille inserts, a distinctive front bumper and unique F SPORT badging add even more edge.",
    },
  ];
  const { showMore1, setShowMore1 } = useGlobalContext();

  const [isVisible, setIsvisible] = useState(0);

  // client height of design-image-container class
  const [slidecoverHeight, setSlideCoverHeight] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const heightRef = document.querySelector(".design-image");
      if (heightRef) {
        setSlideCoverHeight(heightRef.clientHeight);
      }
    };

    handleResize(); // Call it initially to set the height on component mount

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [slidecoverHeight, design]);

  const handleTabClick = (index) => {
    setIsvisible(index);
  };
  return (
    <article className="Design-wrapper">
      <div className="design">
        <div
          className="design-image-container"
          style={{ height: slidecoverHeight }}
        >
          {design.map((images, index) => {
            const { Images, heading, body } = images;
            return (
              <div
                className={`design-image ${
                  isVisible === index ? "active" : ""
                }`}
                key={index}
              >
                <img src={Images} alt="" className="img" />
              </div>
            );
          })}
        </div>
        <div className="design-info-menu">
          <div className="design-info">
            {design.map((info, index) => {
              const { heading, body } = info;
              return (
                <div
                  className={`info ${isVisible === index ? "active" : ""}`}
                  key={index}
                >
                  <span>
                    <h4>{heading}</h4>
                  </span>
                  <span>
                    <p>{body}</p>
                  </span>
                </div>
              );
            })}
          </div>
          <div className="design-menu-container">
            {design.map((menu, index) => {
              const { heading } = menu;
              return (
                <span
                  className={`design-menu ${
                    isVisible === index ? "active" : ""
                  }`}
                  key={index}
                  onClick={() => handleTabClick(index)}
                >
                  {heading}
                </span>
              );
            })}
          </div>
        </div>
      </div>
      <div className="Click-showmore" onClick={() => setShowMore1(!showMore1)}>
        MORE
        <button className="Click-showmore-btn">
          {showMore1 ? <FaChevronUp /> : <FaChevronDown />}
        </button>
      </div>
      <DesignAside />
    </article>
  );
};

export default Design;
