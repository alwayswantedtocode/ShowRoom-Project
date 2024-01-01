import React, { useState, useRef, useLayoutEffect, useEffect } from "react";
// Design
import INTERIOR from "../../../../Images/LEXUS/UX-HYBRID/Interior/test-drive-1920x1080-1.png";
import CRAFTSMANSHIP from "../../../../Images/LEXUS/UX-HYBRID/Interior/lexus-ux-hybrid-review-joe-harding-goodwood-15081905.jpg";
import STYLE from "../../../../Images/LEXUS/UX-HYBRID/2023_UXH_Daring_Style.jpg";
import { useGlobalContext } from "../../../../Global Conext/GlobalContext";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import DesignAside from "./Aside/DesignAside";
const Design = () => {
  const design = [
    {
      Images: INTERIOR,
      heading: "DRIVER-INSPIRED INTERIOR",
      body: "Ergonomic controls. A dashboard that appears to flow seamlessly into the hood to help optimize visibility. Crafted to anticipate your every need, every aspect of the UX Hybrid interior was designed with the driver in mind.",
    },
    {
      Images: CRAFTSMANSHIP,
      heading: "CONTEMPORARY CRAFTSMANSHIP",
      body: "Merging traditional Japanese aesthetics with contemporary luxury, washi ornamentation mimics the soft grain of Japanese paper. Further elevating the interior, you’ll find available heated and ventilated NuLuxe®-trimmed front seats",
    },
    {
      Images: STYLE,
      heading: "Artisan Crafted Wood Trim",
      body: "Exclusive F SPORT exterior styling features include color-keyed overfenders, a contrast black roof, and a distinctive front fascia with signature upper and lower grille inserts. Adding even more edge, its expressive LED cornering lamps and foglamps, and standard 18-inch F SPORT wheels, deliver unmistakable F SPORT style.",
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
