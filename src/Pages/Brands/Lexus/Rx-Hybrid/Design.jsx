import React, { useState, useRef, useLayoutEffect, useEffect } from "react";
// Design
import FSPORT from "../../../../Images/LEXUS/RX-350-HYBRID/Lexus-RX-Design-FSPORTstyle.png";
import FOCUSED from "../../../../Images/LEXUS/RX-350-HYBRID/Interior/Lexus-RX-Design-cockpit.png";
import DESIGN from "../../../../Images/LEXUS/RX-350-HYBRID/Lexus-RX-Design.png";
import { useGlobalContext } from "../../../../Global Conext/GlobalContext";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import DesignAside from "./Aside/DesignAside";
const Design = () => {
  const design = [
    {
      Images: FSPORT,
      heading: "F SPORT STYLING",
      body: "Exclusive F SPORT styling cues include a distinctive front bumper and grille design that boldly reflect its athletic spirit. Details including F SPORT badging and an aggressive rear valance further punctuate the F SPORT lineup’s commitment to performance.",
    },
    {
      Images: FOCUSED,
      heading: "DRIVER-FOCUSED COCKPIT",
      body: "Experience an interior meticulously designed to connect the driver to the vehicle. Where features are placed right where you'd expect them to be and artfully arranged to help keep your focus on the road ahead. It's an interior experience crafted to the highest standard of all: yours.",
    },
    {
      Images: DESIGN,
      heading: "RESOLUTE DESIGN",
      body: "Stunning in every detail, the 2024 RX showcases the next generation of Lexus. Up front, its expressive spindle grille is flanked by a pair of exquisite, jewel-like headlamps. Its body is elegantly shaped to evoke power and grace. And in the rear, Lexus badging and a distinct LED Blade Taillamp will ensure that this",
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
