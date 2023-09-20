import React, { useState, useRef, useLayoutEffect, useEffect } from "react";
// Design
import Sensual from "../../../../Images/BENZ/E-Class-Sedan/INTERIOR/2023-AMG-E-SEDAN-GAL-015-N-FE-DR.png";
import intelligence from "../../../../Images/BENZ/E-Class-Sedan/mercedes-benz-e-class-2024-16.png";
import Topstitched from "../../../../Images/BENZ/E-Class-Sedan/INTERIOR/2022-E-SEDAN-GAL-016-P-FI-DR.jpg";
import { useGlobalContext } from "../../../../GlobalContext";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import DesignAside from "./Aside/DesignAside";
const Design = () => {
  const design = [
    {
      Images: Sensual,
      heading: "Sensual, sculptural cabin design",
      body: "The three-dimensional flow of the E-Class cockpit is more than a visual achievement. Every aspect of the cabin experience is equally fluid, from the natural feel of the controls to the clarity with which information and entertainment reach the driver and passengers. A single floating panel houses the digital instruments and multimedia touchscreen, seamlessly united to form a widescreen cockpit.",
    },
    {
      Images: intelligence,
      heading: "The emotion of intelligence",
      body: "Aggressively athletic style defines the iconic E-Class from every angle. The expressive LED headlamps, vertical-bar AMG grille, and a deep front apron with aggressive air intakes add up to a commanding presence. The rear is dramatically sleek as well, with horizontally oriented LED taillamps adding sporty distinction.",
    },
    {
      Images: Topstitched,
      heading: "Topstitched MB-Tex upper dash and door trim",
      body: "The elegantly sculpted dash and upper doors are impeccably topstitched in MB-Tex.",
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
