import React, { useState } from "react";
import SpecAside from "./Aside/SpecAside";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import firstImage from "../../../../Images/TOYOTAL/bZ4X/BZ4_MY23_0032_V001_1.webp";
import secondImage from "../../../../Images/TOYOTAL/bZ4X/BZ4_MY23_0039_V001_1.png";
import thirdImage from "../../../../Images/TOYOTAL/bZ4X/BZ4_MY23_0035_V001.png";

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
            <h4>e-TNGA Platform</h4>
          </span>

          <p>
            This all-new battery electric structure provides a solid foundation
            for enhanced driving performance, ride comfort and stability for the
            road ahead.
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
              <h4>All-Wheel Drive With X-MODE</h4>
            </span>

            <p>
              Available All-Wheel Drive capability helps you stay the course,
              while X-MODE helps give you more confidence in tougher conditions.
            </p>
          </div>
        </div>
        <div className="Followup-Spec-container">
          <div className="Followup-Image">
            <img src={thirdImage} alt="" />
          </div>
          <div className="content">
            <span>
              <h4>Powerful Electric Motor</h4>
            </span>

            <p>
              Whether front-wheel-drive or all-wheel-drive, an electric
              powertrain delivers almost instantaneous torque to a drive that
              comes naturally.
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
