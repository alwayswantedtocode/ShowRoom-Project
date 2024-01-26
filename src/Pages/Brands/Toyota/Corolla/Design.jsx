import React, { useState, useRef, useLayoutEffect, useEffect } from "react";
// Design
import Interior from "../../../../Images/TOYOTAL/corolla/interior/COH_MY23_0014_V002_xCEjLb0ZemRIA.png";
import TrimmedSeats from "../../../../Images/TOYOTAL/corolla/interior/COR_MY23_0010_V002.png";
import Nightshade from "../../../../Images/TOYOTAL/corolla/COH_MY24_0003_V001_Uw1nkPsNyu2C3WXj5rEwqA7kQt5D_z5.png";
import { useGlobalContext } from "../../../../Global Conext/GlobalContext";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import DesignAside from "./Aside/DesignAside";
const Design = () => {
  const design = [
    {
      Images: Interior,
      heading: "Spacious Interior",
      body: "Built on a highly rigid platform, the ES features a dynamic stance and a sleek, coupe-like silhouette. It also features a provocative grille pattern and elegant LED headlamps for striking illumination..",
    },
    {
      Images: TrimmedSeats,
      heading: "SofTex®-Trimmed Seats",
      body: "Thoughtfully designed from top to bottom, the available SofTex®-trimmed * seats help make you feel comfortable and in control behind the wheel.",
    },
    {
      Images: Nightshade,
      heading: "Corolla Nightshade",
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
        MORE ES DESIGN FEATURES
        <button className="Click-showmore-btn">
          {showMore1 ? <FaChevronUp /> : <FaChevronDown />}
        </button>
      </div>
      <DesignAside />
    </article>
  );
};

export default Design;
