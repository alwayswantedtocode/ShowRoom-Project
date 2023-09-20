import React, { useState, useRef, useLayoutEffect, useEffect } from "react";
// Design
import bespoke from "../../../../Images/BENZ/Mercedes-Maybach/New folder/2022-GLS-MAYBACH-SUV-GAL-013-Q-FI-DR.png";
import Sensations from "../../../../Images/BENZ/Mercedes-Maybach/New folder/maybach-design-slideshow-1.png";
import Bountiful from "../../../../Images/BENZ/Mercedes-Maybach/New folder/maybach-design-slideshow-4.png";
import { useGlobalContext } from "../../../../GlobalContext";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import DesignAside from "./Aside/DesignAside";
const Design = () => {
  const design = [
    {
      Images: Sensations,
      heading: "Sensations for your senses",
      body: "The GLS 600 delivers an experience from first glance to full immersion in its lavish luxuries. Power seats front and rear offer lounge-like adjustment, a spa-like menu of massages.",
    },
    {
      Images: bespoke,
      heading: "Bespoke in the detailsE",
      body: "A refrigerated compartment, one of few options, can be further accessorized by silver champagne flutes handcrafted by Robbe & Berking, German silversmiths for five generations.",
    },

    {
      Images: Bountiful,
      heading: "Bountiful in every dimension",
      body: "A grand power sunroof welcomes the sun and stars. Twenty-seven speakers immerse you in Burmester® High-End 3D sound, fine-tunable to each seat.",
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
