import React, { useState, useEffect } from "react";
// Design
import provocativestyle from "../../../../Images/LEXUS/LS/lexus-2023-ls-500-awd-fsport-atomic-silver-talent-l.png";
import craftmanship from "../../../../Images/LEXUS/LS/INTERIOR/dxp-2022-lexus-ls-gallery-04-1920x1080.png";
import interior from "../../../../Images/LEXUS/LS/INTERIOR/Lexus-LS-bold-fsport-interior-design-desktop-1440x800-LEX-LSG-MY23-0005.01.png";
import { useGlobalContext } from "../../../../Global Conext/GlobalContext";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import DesignAside from "./Aside/DesignAside";
const Design = () => {
  const design = [
    {
      Images: provocativestyle,
      heading: "PROVOCATIVE STYLING",
      body: "The bold LS captures your attention with its coupe-like profile, striking headlamps and taillamps, and daring front fascia. And commanding every corner, it offers 19- or 20-inch 10-spoke alloy wheels.",
    },
    {
      Images: craftmanship,
      heading: "WORLD-CLASS CRAFTSMANSHIP",
      body: "Craftsmanship goes beyond inspiring with materials like available Kiriko glass and exclusive Artwood designs. The seat cushions in the LS were enhanced to do more than embrace you. They further reduce vibrations to create an experience like never before",
    },
    {
      Images: interior,
      heading: "BOLD F SPORT INTERIOR",
      body: "Inside, you’ll find a perforated leather–trimmed shift knob and steering wheel, aluminum pedals and more. Engineered to grip you through high-G turns, enhanced bolstered 28-way power front seats feature an exclusive perforated L-motif pattern.",
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
  }, [slidecoverHeight, design, ]);

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
