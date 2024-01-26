import React, { useState, useRef, useLayoutEffect, useEffect } from "react";
// Design
import Premium from "../../../../Images/TOYOTAL/bZ4X/interior/BZ4_MY23_0019_V008_KD8K9F_e_pNqdMR_.png";
import Striking from "../../../../Images/TOYOTAL/bZ4X/BZ4_MY23_0030_V001_v2.png";
import Aerodynamic from "../../../../Images/TOYOTAL/bZ4X/BZ4_MY23_0035_V001.png";
import { useGlobalContext } from "../../../../Global Conext/GlobalContext";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import DesignAside from "./Aside/DesignAside";
const Design = () => {
  const design = [
    {
      Images: Premium,
      heading: "Premium Interior",
      body: "Gain a sense of luxury every time you enter bZ4X. From the standard leather-wrapped steering wheel to the personalized comfort of available heated and ventilated front seats, you’ll feel the dedication in every detail.",
    },
    {
      Images: Striking,
      heading: "Striking Design",
      body: "Smooth lines and an athletic SUV stance give bZ4X a look that’s unmistakable. With a long wheelbase, the wheels have been sent further into the corners to emphasize its confidence on any road. And as sleek character lines continue to flow to the back, you are left with a silhouette that’s ready to take on tomorrow.",
    },
    {
      Images: Aerodynamic,
      heading: "Aerodynamic Performance",
      body: "bZ4X’s sharp looks come with purpose. Lower front bumper vents and a fully covered underbody help air flow around the front and under the vehicle. The aerodynamic design finishes off with a streamlined rear that features a rear ducktail spoiler and an available split roof rear spoiler.",
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
