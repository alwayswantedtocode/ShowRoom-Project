import React, { useState, useRef, useLayoutEffect, useEffect } from "react";
// Design
import Pureluxury from "../../../../Images/BENZ/EQS-SUV/Interior/MBCAN-2023-EQS-SUV-HWL-2-2-01-XL.png";
import space from "../../../../Images/BENZ/EQS-SUV/2023-EQS-SUV-Gallery_035-XL.jpg";
import surroundingsound from "../../../../Images/BENZ/EQS-SUV/Interior/2023-EQS-SUV-Gallery_031-XL.png";
import { useGlobalContext } from "../../../../GlobalContext";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import DesignAside from "./Aside/DesignAside";
const Design = () => {
  const design = [
    {
      Images: Pureluxury,
      heading: "Pure luxury, made purer",
      body: "The drive for a freer-breathing future starts inside the EQS SUV. Beyond up to five available climate zones, you can enjoy HEPA filtration or a symphony of seat comfort, sound, aroma and ambient light. You can even pre-purify the cabin while the car charges.",
    },
    {
      Images: space,
      heading: "Three rows, more accommodating",
      body: "The ES welcomes you into a spacious and inviting cabin with class-leading rear legroom.* Other interior comforts include an available power rear sunshade and supple semi-aniline leather–trimmed seats.",
    },
    {
      Images: surroundingsound,
      heading: "Surround sound, more enveloping",
      body: "The quiet comfort of electric motoring provides an ideal state for the EQ Sound Experience, which makes the most of the Burmester® 3D Surround Sound. Soundscapes can be personalized, and respond to drive mode and your driving style.",
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
