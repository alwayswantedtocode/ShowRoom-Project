import React, { useState, useEffect } from "react";
// Design
import dramaticstyling from "../../../../Images/LEXUS/IS/Lexus-IS-dramatic-styling-design-desktop-1440x800-LEX-ISF-MY23-0041.png";
import cockpit from "../../../../Images/LEXUS/IS/INTERIOR/2021_Lexus_IS_F-SPORT_028.png";
import FSPORT from "../../../../Images/LEXUS/IS/Lexus-IS-design-fsport-performance-style-desktop-1440x800-LEX-ISF-MY23-0027.png";
import { useGlobalContext } from "../../../../Global Conext/GlobalContext";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import DesignAside from "./Aside/DesignAside";
const Design = () => {
  const design = [
    {
      Images: dramaticstyling,
      heading: "DRAMATIC STYLING",
      body: "A low, imposing stance. A distinctive singular taillamp that tapers to mere millimeters in the center. Dramatic character lines. The result? A pure sport sedan that looks as aggressive as it feels.",
    },
    {
      Images: cockpit,
      heading: "DRIVER-INSPIRED COCKPIT",
      body: "A convenient touchscreen display. A shift knob and steering wheel trimmed in hand-selected leather. Daring details like accent stitching along the dash and larger, circular air vents reminiscent of jet turbines. Every interior element is centered around you.",
    },
    {
      Images: FSPORT,
      heading: "F SPORT PERFORMANCE STYLE",
      body: "Turn heads with exclusive upgrades. The exterior features an elevated hood, stacked quad exhaust tips and 19-inch Enkei alloy wheels with Dark Metallic finish. Inside, you’ll find a race-inspired cockpit and exclusive F SPORT Performance badging.",
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
