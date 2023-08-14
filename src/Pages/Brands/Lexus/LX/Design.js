import React, { useState, useRef, useLayoutEffect, useEffect } from "react";
// Design
import foldflat from "../../../../Images/LEXUS/LX600/INTERIOR/cl1m4o3f901hu0mrkxp68yjhu-6.desktop.jpg";
import indulgence from "../../../../Images/LEXUS/LX600/INTERIOR/lexus-2023-lx-600-executive-vip-interior-caramel-sunset-adjustable-l.png";
import woodtrim from "../../../../Images/LEXUS/LX600/INTERIOR/Lexus-LX600-01.png";
import { useGlobalContext } from "../../../../GlobalContext";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import DesignAside from "./Aside/DesignAside";
const Design = () => {
  const design = [
    {
      Images: foldflat,
      heading: "Fold-Flat Third Row",
      body: "The LX features available power 50/50-split third-row seats that can be reclined for added comfort when in use and folded flat into the floor when more space is needed.* For faster, more convenient access, simply press the button in the cargo area to automatically fold or unfold the seats.",
    },
    {
      Images: indulgence,
      heading: "Incomparable indulgence",
      body: "Seating six or seven, the GX SUV provides a first-class experience with available second-row captain's chairs* and standard fold-flat 50/50-split third-row seats. While drivers can enjoy the comfort of an ergonomic steering wheel crafted to fit the contours of their hands, wherever they’re placed.",
    },
    {
      Images: woodtrim,
      heading: "Artisan Crafted Wood Trim",
      body: "The interior of the LX indulges with hand-selected premium materials that include our open-pore wood trims. Rich in both texture and beauty, these natural trims are just one more way the LX captivates and inspires at every touchpoint. Interior of the Lexus LX showing woman in reclining rear seats.",
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
        MORE GX PERFORMANCE FEATURES
        <button className="Click-showmore-btn">
          {showMore1 ? <FaChevronUp /> : <FaChevronDown />}
        </button>
      </div>
      <DesignAside />
    </article>
  );
};

export default Design;
