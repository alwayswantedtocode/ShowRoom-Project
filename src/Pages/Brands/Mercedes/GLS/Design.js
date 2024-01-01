import React, { useState, useRef, useLayoutEffect, useEffect } from "react";
// Design
import firstclass from "../../../../Images/BENZ/GLS-SUV/2022-GLS-SUV-GAL-010-C-TI-FI-DR.png";
import cockpit from "../../../../Images/BENZ/GLS-SUV/INTERIOR/2022-GLS-SUV-GAL-012-C-FI-DR.png";
import roll from "../../../../Images/BENZ/GLS-SUV/568200-the-2024-mercedes-benz-gls-gets-refreshed-with-several-updates.png";
import { useGlobalContext } from "../../../../Global Conext/GlobalContext";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import DesignAside from "./Aside/DesignAside";
const Design = () => {
  const design = [
    {
      Images: firstclass,
      heading: "First class amenities.",
      body: "With a giant sunroof, 64-color ambient lighting and power 2nd-row seats, the GLS offers everyone the Star treatment. Available luxuries include four ventilated and massaging seats, heated 2nd-row seats, and 5-zone climate control.",
    },
    {
      Images: cockpit,
      heading: "A digital cockpit with a human touch",
      body: "The ES welcomes you into a spacious and inviting cabin with class-leading rear legroom.* Other interior comforts include an available power rear sunshade and supple semi-aniline leather–trimmed seats.",
    },
    {
      Images: roll,
      heading: "Show how you roll.",
      body: "GLS 450 wheels start at a sizable 20 inches and can go up to a staggering 23 with the AMG Line and Night Package options. GLS 580 wheels start at 21 inches. The Night Package adds gloss black styling elements to either model.",
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
