import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import data from "../newVehicles/vehiclesData";
import { BiCaretLeft, BiCaretRight } from "react-icons/bi";

const VehiclesSlide = () => {
  const [vehicleslide] = useState(data);
  const [index, setIndex] = useState(0);

  const vechicleRef = useRef();
  let vehicleSlidewidth = vechicleRef.current?.clientWidth;

  const colorRef = useRef();

  const nextBtn = () => {
    const indexSlide =
      index < vehicleslide.length - 1 ? index + 1 : vehicleslide.length - 1;
    setIndex(indexSlide);
  };
  const prevBtn = () => {
    const indexSlide = index > 0 ? index - 1 : 0;
    setIndex(indexSlide);
  };
  const handleSlideCounter = (index) => {
    setIndex(index);
  };
  return (
    <section className="second-Section">
      <h2 className="new-vehicle-heading">New Vehicle</h2>

      <div
        className="new-vechicle-slide-container"
        style={{
          transform: "translateX(-" + vehicleSlidewidth * index + "px",
        }}
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
                prevBtn();
              } else {
                nextBtn();
              }
            }
          });

          e.target.addEventListener("touchend", () => {
            e.target.removeEventListener("touchmove", null);
          });
        }}
      >
        {vehicleslide.map((carslides, carIndex) => {
          const { id, image, Brand, Type, Year, link, amount, button } =
            carslides;

          //create active slide

          return (
            <div
              className={`vehicle-slide ${carIndex === index ? "active" : ""}`}
              key={id}
              ref={vechicleRef}
            >
              <div className="vehicleImage">
                <NavLink to={link} key={link}>
                  <img src={image} alt={Brand} />
                </NavLink>
              </div>
              <div className="new-vehicle-details">
                <div className="year-type-cover">
                  <div className="year">
                    <h5>{Year}</h5>
                  </div>

                  <h5 className="line">|</h5>

                  <div className="type">
                    <h5>{Type}</h5>
                  </div>
                </div>
                <div className="brand-features-amount-cover">
                  <div className="brand">
                    <h4>{Brand}</h4>
                  </div>
                  <div className="features">
                    <h5>features</h5>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Facilis illo autem quis minima dignissimos dolorem
                      corrupti sed nisi necessitatibus commodi, quidem ipsum
                      iure nam modi ducimus eveniet. Necessitatibus, adipisci
                      commodi.
                    </p>
                  </div>
                  <div className="amount-explore-cover">
                    <div className="amount">${amount}</div>
                    <h5 className="line-two">|</h5>
                    <NavLink>
                      {" "}
                      <button className="explore-btn">explore</button>
                    </NavLink>

                    {/* </div> */}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="slide-counter-container">
        <div className="sec-two-prev-btn" onClick={prevBtn}>
          <BiCaretLeft />
        </div>
        <div className="counter">
          {vehicleslide.map((counter, countIndex) => {
            const { id } = counter;

            return (
              <div
                className={`slide-counter ${
                  countIndex === index ? "active" : ""
                }`}
                key={id}
                ref={colorRef}
                onClick={() => handleSlideCounter(countIndex)}
              ></div>
            );
          })}
        </div>
        <div className="sec-two-next-btn" onClick={nextBtn}>
          <BiCaretRight />
        </div>
      </div>
    </section>
  );
};

export default VehiclesSlide;
