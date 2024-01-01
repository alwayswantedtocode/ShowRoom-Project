import React, { useState, useRef, useLayoutEffect, useEffect } from "react";
// Design
import exteriorlighting from "../../../../Images/BENZ/S-Class-Sedan/2023-S-SEDAN-MP-021.png";
import interiorlighting from "../../../../Images/BENZ/S-Class-Sedan/INTERIOR/2023-S-SEDAN-MP-022.png";
import night from "../../../../Images/BENZ/S-Class-Sedan/2023-S-SEDAN-MP-020.png";
import { useGlobalContext } from "../../../../Global Conext/GlobalContext";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import DesignAside from "./Aside/DesignAside";
const Design = () => {
  const design = [
    {
      Images: exteriorlighting,
      heading: "All-LED exterior lighting",
      body: " From the ambient lighting system that offers a variety of colors and themes, to the subtle yet crisp lighting of the storage areas, footwells and even the instrument displays, the advanced lighting concept promotes safer, less stressful driving and a sense of well-being for all aboard.",
    },
    {
      Images: interiorlighting,
      heading: "All-LED interior lighting",
      body: " From the ambient lighting system that offers a variety of colors and themes, to the subtle yet crisp lighting of the storage areas, footwells and even the instrument displays, the advanced lighting concept promotes safer, less stressful driving and a sense of well-being for all aboard.",
    },
    {
      Images: night,
      heading: "Night Package",
      body: "The Night Package adds jet-black accents to the AMG Line's sporty styling. The front splitter and air-intake fins, as well as the rear valance insert, side-window trim and side mirror housings, are all finished in deep gloss black.",
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
