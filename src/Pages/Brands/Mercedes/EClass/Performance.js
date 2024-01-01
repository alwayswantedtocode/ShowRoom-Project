import React, { useState } from "react";
import SpecAside from "./Aside/SpecAside";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import firstImage from "../../../../Images/BENZ/E-Class-Sedan/mercedes-benz-e-class-2024-17.jpg";
import secondImage from "../../../../Images/BENZ/E-Class-Sedan/INTERIOR/2023-E-SEDAN-MP-005.webp";
import thirdImage from "../../../../Images/BENZ/E-Class-Sedan/2023-E-SEDAN-MP-006.webp";

import { useGlobalContext } from "../../../../Global Conext/GlobalContext";

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
            <h4>3.0L inline-6 turbo engine with mild hybrid drive</h4>
          </span>

          <p>
            The seamless power and natural balance of an inline-6 have returned
            to the Three-Pointed Star with another Mercedes-Benz tradition: a
            technological leap forward. The lightweight, fully beltless engine
            is also electrified, with an Integrated Starter-Generator that can
            supply up to 21 hp, allows gas-free coasting, and can recapture
            energy during deceleration.
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
              <h4>ECO Start/Stop system</h4>
            </span>

            <p>
              An ECO Start/Stop system automatically shuts off the engine at
              stoplights and other idle situations, to save fuel and reduce
              emissions. As soon as the driver lifts off the brake, the engine
              instantly restarts, for immediate acceleration response. The ECO
              Start/Stop system can also be shut off by the driver at any time.
            </p>
          </div>
        </div>
        <div className="Followup-Spec-container">
          <div className="Followup-Image">
            <img src={thirdImage} alt="" />
          </div>
          <div className="content">
            <span>
              <h4>4MATIC all-wheel drive</h4>
            </span>

            <p>
              In any season, on any road, 4MATIC® all-wheel drive adds to your
              confidence and control. Always engaged and optimizing torque to
              every wheel, 4MATIC integrates with ESP®, our standard Electronic
              Stability Program, for maximum effectiveness in corners and
              slippery conditions.
            </p>
          </div>
        </div>
      </div>
      <div className="Click-showmore" onClick={() => setShowMore(!showMore)}>
        MORE GX PERFORMANCE FEATURES
        <button className="Click-showmore-btn">
          {showMore ? <FaChevronUp /> : <FaChevronDown />}
        </button>
      </div>
      <SpecAside />
    </article>
  );
};

export default Performance;
