import React, { useState, useRef, useLayoutEffect, useEffect } from "react";
// Design
import bespoke from "../../../../Images/BENZ/EQS-SEDAN/interior/EQS-Gallery_26-XL.jpg";
import blackpanel from "../../../../Images/BENZ/EQS-SEDAN/2023-EQS-SEDAN-MP-027.png";
import interior from "../../../../Images/BENZ/EQS-SEDAN/interior/EQS-Gallery_16-XL.jpg";
import { useGlobalContext } from "../../../../GlobalContext";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import DesignAside from "./Aside/DesignAside";
const Design = () => {
  const design = [
    {
      Images: bespoke,
      heading: "Bespoke interior design",
      body: "From the seat stitching to the flowing surfaces and rose gold vent strip spanning the dash, luxury reaches a new forefront of style. And with its intuitive touch interfaces and a voice assistant backed by artificial intelligence, the cabin is a new model of user-friendliness that continues to advance over time.",
    },
    {
      Images: blackpanel,
      heading: "Black Panel with Star pattern",
      body: "The Black Panel front end design advances the legendary and widely recognized Star-centered grille to a new aesthetic. An intriguing Star pattern radiates from the large central emblem in a three-dimensional display of brilliant chrome against the gloss-black background.",
    },
    {
      Images: interior,
      heading: "All-LED interior lighting",
      body: "Hundreds of LEDs bring extraordinary lighting effectiveness and a unique sense of environment to the cabin, again without employing a single conventional lightbulb. From the ambient lighting system, offering a variety of colors and themes.",
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
