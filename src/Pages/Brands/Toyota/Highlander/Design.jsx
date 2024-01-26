import React, { useState, useRef, useLayoutEffect, useEffect } from "react";
import design from "./Data/ModelData";
// Design
import CargoArea from "../../../../Images/TOYOTAL/HIGHLANDER/INTERIOR/HLH_MY20_0029_V001.png";
import Exterior from "../../../../Images/TOYOTAL/HIGHLANDER/MUL_MY23_0011_V001.png";
import DRIVER from "../../../../Images/TOYOTAL/HIGHLANDER/INTERIOR/HLH_MY23_0009_V001.png";
import { useGlobalContext } from "../../../../Global Conext/GlobalContext";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import DesignAside from "./Aside/DesignAside";
const Design = () => {
  const design = [
    {
      Images: CargoArea,
      heading: "Versatile Cargo Area",
      body: "Express yourself in the low, wide and aggressively sculpted 2023 Highlander. This vehicle features a powerful stance fused with a sophisticated attitude. While its design will turn heads, it also delivers greater aerodynamic efficiency for enhanced vehicle stability.",
    },
    {
      Images: Exterior,
      heading: "Exterior Design",
      body: "Enjoy premium comfort for all, courtesy of an available three-zone automatic climate control with interior air filter, smog sensor and recirculation mode. For luxury that's personalized, find heated and ventilated front seats and heated second-row outboard seats.",
    },
    {
      Images: DRIVER,
      heading: "DRIVER FOCUSED",
      body: "A modern realm filled with luxurious touches, like standard 8-way power adjustable and heated driver’s seat, Highlander is your command centre. The intuitive central console puts controls close at hand. Available features, like a heated steering wheel (standard on Limited models), Qi wireless charging, 10” head up display, and LED ambient lighting put you in charge while making you wish the journey would never end.",
    },
  ];
  const { showMore1, setShowMore1 } = useGlobalContext();

  const [isVisible, setIsvisible] = useState(0);

  // client height of design-image-container class
  const [slidecoverHeight, setSlideCoverHeight] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const heightRef = document.querySelector(".design-image");

      //   const heights = Array.from(heightRef).map(
      //     (element) => element.clientHeight
      //   );
      // const maxHeight = Math.max(...heights);
      // setSlideCoverHeight(maxHeight);
      if (heightRef) {
        setSlideCoverHeight(heightRef.clientHeight);
      }
    };

    handleResize(); // Call it initially to set the height on component mount

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [design]);

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
                // ref={heightRef}
              >
                <img src={Images} alt="" />
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
