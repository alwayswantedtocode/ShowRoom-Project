import React, { useState, useRef, useLayoutEffect, useEffect } from "react";
// Design
import Headlights from "../../../../Images/TOYOTAL/SEQUOIA/SEQ_MY23_0028_V001_POmdin55nkdWJnnqHcbJiBFLLg0.png";
import Ventilated from "../../../../Images/TOYOTAL/SEQUOIA/INTERIOR/2023-toyota-sequoia-dashboard-carbuzz-947047-1600.png";
import Cabin from "../../../../Images/TOYOTAL/SEQUOIA/SEQ_MY23_0004_V001_gallery_dNT23VP69zrOpJ83iV_aewurk6W.png";
import { useGlobalContext } from "../../../../GlobalContext";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import DesignAside from "./Aside/DesignAside";
const Design = () => {
  const design = [
    {
      Images: Headlights,
      heading: "LED Auto-Leveling Headlights With Sequential Turn Signals",
      body: "See the road more clearly with available LED auto-leveling headlights. These high-grade headlights look stylish and are designed for increased visibility when you’re driving through the night. Sequoia’s sequential turn signals also enhance clarity for other drivers, so everyone may share the road safely.",
    },
    {
      Images: Ventilated,
      heading: "Leather-Trimmed Seating With Heated and Ventilated Seats",
      body: "Sequoia brings comfort year-round. Standard heated front seats and available heated and ventilated first- and second-row seats warm you up on cold winter nights and cool you off on hot summer days. Available semi-aniline leather-trimmed seats with contrast stitching also highlight the quality dedicated to every drive.",
    },
    {
      Images: Cabin,
      heading: "Impressive Cabin Size",
      body: "Whether you’re doing a family trip or your daily commute, Sequoia’s modernized interior gives everyone extra room to settle in.",
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
