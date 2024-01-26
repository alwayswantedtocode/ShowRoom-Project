import React, { useState, useRef, useLayoutEffect, useEffect } from "react";
// Design
import ColdWeather from "../../../../Images/TOYOTAL/camry/interior/CAM_MY21_0034_V001.png";
import SmartKey from "../../../../Images/TOYOTAL/camry/interior/2023-toyota-camry-infotainment-system-carbuzz-854644-1600.png";
import Roofline from "../../../../Images/TOYOTAL/camry/CAH_MY22_0003_V001-3.png";
import { useGlobalContext } from "../../../../Global Conext/GlobalContext";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import DesignAside from "./Aside/DesignAside";
const Design = () => {
  const design = [
    {
      Images: ColdWeather,
      heading: "Cold Weather Package",
      body: "The bold LS captures your attention with its coupe-like profile, striking headlamps and taillamps, and daring front fascia. And commanding every corner, it offers 19- or 20-inch 10-spoke alloy wheels.",
    },
    {
      Images: SmartKey,
      heading: "Smart Key With Push Button Start",
      body: "No need to reach into your pocket or purse with Camry’s available Smart Key System. Lock and unlock the front doors and open the trunk by simply carrying the Smart Key. Once inside, just press Camry’s convenient Push Button Start, and you’re ready to roll.",
    },
    {
      Images: Roofline,
      heading: "Sleek Roofline and Front-End Design",
      body: "Camry XSE’s powerful stance and captivating style announce your arrival with authority. Black accents, from the gloss-black wheels to an available two-tone exterior with Midnight Black Metallic roof, * complement Camry's aggressive, wide stance and low roofline. Styling boundaries are further pushed with an available gloss-black front grille with sport mesh insert.",
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
