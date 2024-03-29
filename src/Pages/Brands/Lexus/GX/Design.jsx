import React, { useState, useRef, useLayoutEffect, useEffect } from "react";

// Design
import comfort from "../../../../Images/LEXUS/GX/INTERIOR/Lexus-GX-UltimateComfort-Design-1440x811-LEX-GXG-MY22-0052.jpg";
import tempcontrol from "../../../../Images/LEXUS/GX/INTERIOR/Lexus-GX-PersonalizedTemperature-Design-1440x800-LEX-GXG-MY22-0006-05.jpg";
import heatedsteering from "../../../../Images/LEXUS/GX/INTERIOR/Lexus-GX-13-Gallery-1440x811-LEX-GXG-MY22-0070.jpg";
import { useGlobalContext } from "../../../../Global Conext/GlobalContext";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import DesignAside from "./Aside/DesignAside";
const Design = () => {
  const design = [
    {
      Images: comfort,
      heading: "The ultimate comfort",
      body: "Seating six or seven, the GX SUV provides a first-class experience with available second-row captain's chairs* and standard fold-flat 50/50-split third-row seats. While drivers can enjoy the comfort of an ergonomic steering wheel crafted to fit the contours of their hands, wherever they’re placed.",
    },
    {
      Images: tempcontrol,
      heading: "Personalized temperature controls",
      body: "Enjoy premium comfort for all, courtesy of an available three-zone automatic climate control with interior air filter, smog sensor and recirculation mode. For luxury that's personalized, find heated and ventilated front seats and heated second-row outboard seats.",
    },
    {
      Images: heatedsteering,
      heading: "Heated steering wheel",
      body: "Combining craftsmanship with comfort, the Lexus GX interior features a leather-trimmed shift knob and a steering wheel trimmed in hand-selected wood and leather. The steering wheel's available heating function monitors and adjusts to maintain a set temperature.",
    },
  ];
  const { showMore1, setShowMore1 } = useGlobalContext();

  const [isVisible, setIsvisible] = useState(0);

  // client height of design-image-container class
  const [slidecoverHeight, setSlideCoverHeight] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const heightRef = document.querySelector(".design-image");

      //   const heights = Array.from(heightRef).map(
      //     (element) => element.clientHeight
      //   );
      // const maxHeight = Math.max(...heights);
      // setSlideCoverHeight(maxHeight);
      if (heightRef) {
        setSlideCoverHeight(heightRef.clientHeight);
      }
    };

    handleResize(); // Call it initially to set the height on component mount

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [design]);

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
                // ref={heightRef}
              >
                <img src={Images} alt="" />
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
