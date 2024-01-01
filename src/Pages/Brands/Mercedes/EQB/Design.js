import React, { useState, useRef, useLayoutEffect, useEffect } from "react";
// Design
import Wireless from "../../../../Images/BENZ/EQB-SUV/INTERIOR/asset.MQ6.0.20211110132123.jpg";
import electricmotoring from "../../../../Images/BENZ/EQB-SUV/INTERIOR/2022-EQB-SUV-GAL-020-XL.jpg";
import foldflat from "../../../../Images/BENZ/EQB-SUV/INTERIOR/2023-mercedes-benz-eqb-suv-seat-folded-carbuzz-834602.jpg";
import { useGlobalContext } from "../../../../Global Conext/GlobalContext";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import DesignAside from "./Aside/DesignAside";
const Design = () => {
  const design = [
    {
      Images: Wireless,
      heading: "Wireless charging system",
      body: "Driving time becomes charging time – just drop your smartphone into its allotted place in the oddments tray for wireless charging. Irrespective of the model and brand, compatible smartphones are charged wirelessly.",
    },
    {
      Images: electricmotoring,
      heading: "electric motoring experience.",
      body: "EQB luxuries help energize your spirit while you enjoy electric motoring. The power/memory front seats and steering wheel are heatable. Dual-zone climate control filters cabin air for dust, pollen and odours. And a giant panoramic sunroof is available for stargazing.",
    },
    {
      Images: foldflat,
      heading: "FOLD-FLAT SEAT",
      body: "Strikingly styled from the ground up, the ES F SPORT Design and ES F SPORT Handling models feature exclusive 19-inch wheels with a daring Gloss Black finish. Signature upper and lower grille inserts, a distinctive front bumper and unique F SPORT badging add even more edge.",
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
