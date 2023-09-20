import React, { useState } from "react";
import SpecAside from "./Aside/SpecAside";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import firstImage from "../../../../Images/BENZ/GLS-SUV/2023-AMG-GLS-SUV-HERO-DR.webp";
import secondImage from "../../../../Images/BENZ/GLS-SUV/2022-GLS-SUV-GAL-007-F-TE-FE-DR.jpg";
import thirdImage from "../../../../Images/BENZ/GLS-SUV/19C0481_011.jpg";

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
            <h4>Massive power with a modern twist</h4>
          </span>

          <p>
            Biturbo V8 strength delivers 550 hp along with copious, electrically
            assisted torque. Swiftness comes with new sensibility.
          </p>
        </div>
      </div>

      <div className="Followup-Spec-containers">
        <div className="Followup-Spec-container">
          <div className="Followup-Image">
            <img src={secondImage} alt="" />
          </div>

          <div className="content">
            <span>
              <h4>Light on its feet, sure in its step</h4>
            </span>

            <p>
              Agile 4MATIC® apportions the engine's torque intelligently to all
              four 22-inch or 23-inch wheels, to take changing surfaces and
              seasons in stride.
            </p>
          </div>
        </div>
        <div className="Followup-Spec-container">
          <div className="Followup-Image">
            <img src={thirdImage} alt="" />
          </div>
          <div className="content">
            <span>
              <h4>Light on its feet, sure in its step</h4>
            </span>

            <p>
              Agile 4MATIC® apportions the engine's torque intelligently to all
              four 22-inch or 23-inch wheels, to take changing surfaces and
              seasons in stride.
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
