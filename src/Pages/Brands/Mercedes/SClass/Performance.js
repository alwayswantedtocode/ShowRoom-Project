import React, { useState } from "react";
import SpecAside from "./Aside/SpecAside";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import firstImage from "../../../../Images/BENZ/S-Class-Sedan/870295.jpg";
import secondImage from "../../../../Images/BENZ/S-Class-Sedan/INTERIOR/2023-S-SEDAN-MP-011.webp";
import thirdImage from "../../../../Images/BENZ/S-Class-Sedan/2023-S-SEDAN-MP-009.webp";

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
            is also electrified: An Integrated Starter-Generator can supply up
            to 20 hp, allow fuel-free coasting, and recapture energy during
            deceleration.
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
              <h4>Electromechanical power steering</h4>
            </span>

            <p>
              Advanced electromechanical power steering delivers quicker
              response in corners, easier maneuvering at low speeds, along with
              precise on-center feel and straight-line stability.
            </p>
          </div>
        </div>
        <div className="Followup-Spec-container">
          <div className="Followup-Image">
            <img src={thirdImage} alt="" />
          </div>
          <div className="content">
            <span>
              <h4>AIRMATIC suspension</h4>
            </span>

            <p>
              For a balanced, comfortable ride, the AIRMATIC® semi-active
              suspension employs electronically controlled air springs that
              adjust to changing driving conditions. Reengineered components
              offer quicker response with lighter system weight. AIRMATIC's
              automatic 4-wheel level control helps compensate for additional
              cargo or passengers.
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
