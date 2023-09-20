import React, { useState } from "react";
import SpecAside from "./Aside/SpecAside";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import firstImage from "../../../../Images/BENZ/EQB-SUV/MBCAN-2023-EQB-SUV-HWL-3-2-XL.webp";
import secondImage from "../../../../Images/BENZ/EQB-SUV/mercedes-benz-eqb-350-5-jpg-641dcef97342c.jpg";
import thirdImage from "../../../../Images/BENZ/EQB-SUV/EQB2充电3296x1620.jpg";

import { useGlobalContext } from "../../../../GlobalContext";

const Performance = () => {
  const { showMore, setShowMore } = useGlobalContext();

  return (
    <article className="Performance-wrapper">
      <div className="Lead-Spec-container">
        <div className="lead-image">
          <img src={firstImage} alt="GX on a dirt road" />
        </div>
        <div className="content">
          <span>
            <h4>DUAL MOTORS, FOUR-WHEEL THRUST.</h4>
          </span>

          <p>
            Individual front and rear electric motors team up for 288 hp in the
            EQB 350. Together they offer instant torque and swift, seamless
            response, along with 4MATIC all-wheel drive that can adapt in
            fractions of a second to optimize grip and handling.
          </p>
        </div>
      </div>

      <div className="Followup-Spec-containers">
        <div className="Followup-Spec-container">
          <div className="Followup-Image">
            <img src={secondImage} alt="" />
          </div>{" "}
          <div className="content">
            <span>
              <h4>Agility, for all-road ability.</h4>
            </span>

            <p>
              Like its gas-powered relatives, the EQB balances sporty response
              with refined comfort thanks in large part to its 4-wheel
              independent suspension. Its multilink design was pioneered by
              Mercedes-Benz. Adaptive damping is a new multimode option.
            </p>
          </div>
        </div>
        <div className="Followup-Spec-container">
          <div className="Followup-Image">
            <img src={thirdImage} alt="" />
          </div>
          <div className="content">
            <span>
              <h4>Electric made easy.</h4>
            </span>

            <p>
              Beyond up to 356 km of driving range and brisk response, the EQB
              aims to deliver new rewards in EV convenience, from easy charging
              access to making the most of its range. Intelligent navigation
              sets a new standard for electric motoring simplicity
            </p>
          </div>
        </div>
      </div>
      <div className="Click-showmore" onClick={() => setShowMore(!showMore)}>
        MORE 
        <button className="Click-showmore-btn">
          {showMore ? <FaChevronUp /> : <FaChevronDown />}
        </button>
      </div>
      <SpecAside />
    </article>
  );
};

export default Performance;
