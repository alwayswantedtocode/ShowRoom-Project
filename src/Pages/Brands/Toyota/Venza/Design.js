import React, { useState, useRef, useLayoutEffect, useEffect } from "react";
// Design
import PremiumInterior from "../../../../Images/TOYOTAL/VENZA-HYBRID/INTERIOR/VEN_MY23_0042_V002_ZHR_rUHFoDMzhHnpOU.png";
import Headlights from "../../../../Images/TOYOTAL/VENZA-HYBRID/VEN_MY22_0010_V001.png";
import Ventilated from "../../../../Images/TOYOTAL/VENZA-HYBRID/INTERIOR/0ce20968cd966438035201c1db67115fx.png";
import { useGlobalContext } from "../../../../GlobalContext";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import DesignAside from "./Aside/DesignAside";
const Design = () => {
  const design = [
    {
      Images: PremiumInterior,
      heading: "Premium Interior with Ambient Lighting",
      body: "Quality-crafted seats, soft-touch materials and an available heated, leather-trimmed steering wheel—every distinct detail inside Venza elevates your comfort, and ambient lighting to to set the mood. After the sun sets, Venza’s ambient lighting creates a refined atmosphere on late-night rides. Now featuring a cool-white color on the front console buttons.",
    },
    {
      Images: Headlights,
      heading: "LED Headlights and LED Fog Lights",
      body: "Standard LED projector headlights and dual LED Daytime Running Lights (DRL) give Venza a captivating presence, day or night and its Driver confidence in harsh weather conditions with higher visibility.",
    },
    {
      Images: Ventilated,
      heading: "Heated and Ventilated Front Seats",
      body: "Heat up on winter mornings or cool down on your way home from the golf course. No matter the season, you can use Venza’s available heated and ventilated front seats to make every drive feel just right.",
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
