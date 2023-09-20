import React, { useState, useRef, useLayoutEffect, useEffect } from "react";
// Design
import Elegance from "../../../../Images/BENZ/A-Class-Sedan/Mercedes-Benz-A-Class_Sedan-2023-hd.jpg";
import hightech from "../../../../Images/BENZ/A-Class-Sedan/INTERIOR/new-entry-level-mercedes-benz-concept-going-to-iaa-2023-is-that-an-a-class-sedan_19.jpg";
import wheels from "../../../../Images/BENZ/A-Class-Sedan/2023-mercedes-benz-a-class-29.jpg";
import { useGlobalContext } from "../../../../GlobalContext";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import DesignAside from "./Aside/DesignAside";
const Design = () => {
  const design = [
    {
      Images: Elegance,
      heading: "Elegance and eagerness in perfect proportion",
      body: "The A-Class Sedan speaks its design language with a confidence that stands out in an overstyled world. Its lines are clean and flowing, designed to pair class-leading aerodynamics with a spacious cabin. The hood is wide and low, with crisp shoulders sweeping from the Star-centered grille and LED headlamps. ",
    },
    {
      Images: hightech,
      heading: "High-style, high-tech cabin",
      body: "Fine materials, forward-thinking technology and freshly reimagined design unite in a cabin that's a cut above and steps ahead of ordinary small cars. Digital instruments and displays, touchpads on the steering wheel and console, and an industry-advancing voice interface enhance ease of use. Aircraft-inspired round vents and luxuriously contoured seats add to the premium feel. ",
    },
    {
      Images: wheels,
      heading: "17-inch 10-spoke wheels",
      body: "Each of 10 thin, flat spokes tapers inward toward the center of these sporty 17-inch wheels. Finished in shimmering silver, they're equipped with all-season Extended Mobility tires.",
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
