import React, { useState } from "react";
import Data from "./Data/ModelData";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

const Exterior = () => {
 
  const [exterior] = useState(Data);
  const [activeColor, setActiveColor] = useState(0);
  const [activeExterior, setActiveExterior] = useState(0);
  // const [exteriormenu, setExteriorMenu] = useState([0, 1]);

  const nestedArray = exterior[0].Color;

  // let exteriorColorHeight = heightRef.current?.clientHeight;

  const Slideleft = (index) => {
    const handleSlide =
      activeColor > 0 ? activeColor - 1 : nestedArray.length - 1;
    setActiveColor(handleSlide);
  };
  const SlideRight = () => {
    const handleSlide =
      activeColor < nestedArray.length - 1 ? activeColor + 1 : 0;
    setActiveColor(handleSlide);
  };

  const handleTabClick = (index) => {
    setActiveExterior(index);
  };

  const handleSlideIndicators = (index) => {
    setActiveColor(index);
  };
  return (
    <article className="Exterior-wrapper">
      <div
        className="Exterior"
        onTouchStart={(e) => {
          const touch = e.touches[0];
          let xStart = touch.clientX;
          let yStart = touch.clientY;

          e.target.addEventListener("touchmove", (e) => {
            const touchMove = e.touches[0];
            let xDiff = touchMove.clientX - xStart;
            let yDiff = touchMove.clientY - yStart;

            if (Math.abs(xDiff) > Math.abs(yDiff)) {
              if (xDiff > 0) {
                Slideleft();
              } else {
                SlideRight();
              }
            }
          });

          e.target.addEventListener("touchend", () => {
            e.target.removeEventListener("touchmove", null);
          });
        }}
      >
        {exterior.map((slide, index) => {
          const { id, Color } = slide;
          return (
            <div
              className={`Exterior-Color-slide-container ${
                activeExterior === index ? "active" : ""
              }`}
              key={index}
              // style={{ height: exteriorColorHeight }}
            >
              <div className="Exterior-Color-image-containter">
                {Color &&
                  Color.map((carcolor, index) => {
                    const { Image, Name } = carcolor;
                    return (
                      <div
                        className={`Exterior-Color-Image ${
                          activeColor === index ? "active" : ""
                        }`}
                        key={index}
                      >
                        <img src={Image} alt={Name} />
                      </div>
                    );
                  })}
                <div className="indication-container">
                  {Color &&
                    Color.map((indicator, index) => {
                      return (
                        <div
                          className={`indicator ${
                            activeColor === index ? "active" : ""
                          }`}
                          key={index}
                          onClick={() => handleSlideIndicators(index)}
                        ></div>
                      );
                    })}
                </div>
              </div>
            </div>
          );
        })}
        {exterior.map((btn, index) => {
          return (
            <div className="Nav-btn" key={index}>
              <button className="Btn-Direction" onClick={Slideleft}>
                <FaChevronLeft />
              </button>
              <button className="Btn-Direction" onClick={SlideRight}>
                <FaChevronRight />
              </button>
            </div>
          );
        })}
      </div>
      <div className="exterior-menu">
        <div className="menu-btn-container">
          {" "}
          {exterior.map((menu, index) => {
            return (
              <button
                className={`Menu-Btn-color ${
                  activeExterior === index ? "active" : ""
                }`}
                key={index}
                onClick={() => handleTabClick(index)}
              ></button>
            );
          })}
        </div>
        <div className="Menu-Name-Container">
          {exterior.map((Slidename, index) => {
            const { Title } = Slidename;
            return (
              <span
                className={`Menu-Name ${
                  activeExterior === index ? "active" : ""
                }`}
                key={index}
              >
                {Title}
              </span>
            );
          })}
        </div>
      </div>
    </article>
  );
};

export default Exterior;
