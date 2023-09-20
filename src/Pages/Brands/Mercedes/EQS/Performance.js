import React, { useState } from "react";
import SpecAside from "./Aside/SpecAside";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import firstImage from "../../../../Images/BENZ/EQS-SUV/2023-EQS-SUV-Gallery_005-XL.jpg";
import secondImage from "../../../../Images/BENZ/EQS-SEDAN/interior/2023-EQS-SEDAN-MP-006.webp";
import thirdImage from "../../../../Images/BENZ/EQS-SEDAN/2023-EQS-SEDAN-MP-015.webp";

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
            <h4>The power to advance</h4>
          </span>

          <p>
            Smooth, quiet and rich in torque, the EQS 450+ is powered by an
            advanced 245kW electric motor that can send up to 329 hp and 417
            lb-ft of torque to the rear wheels. The "permanently excited
            synchronous motor" (PSM) features permanent magnets to generate AC
            current with high power density and efficiency. An advanced cooling
            system helps maintain its high-performance consistency during
            spirited driving and a wide range of climates.
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
              <h4>The wisdom to adapt</h4>
            </span>

            <p>
              Agile, self-leveling AIRMATIC air suspension can adapt at each
              wheel to loads, roads, and the driving modes of DYNAMIC SELECT.
              Rear-axle steering enhances stability on the open road,
              manoeuvrability in tight spaces.
            </p>
          </div>
        </div>
        <div className="Followup-Spec-container">
          <div className="Followup-Image">
            <img src={thirdImage} alt="" />
          </div>
          <div className="content">
            <span>
              <h4>Adaptive Damping System Plus (ADS Plus)</h4>
            </span>

            <p>
              Incorporated into the AIRMATIC air suspension, ADS continually
              optimizes ride and handling by automatically selecting one of four
              damping profiles for each spring-strut every time a wheel changes
              its direction of up-down travel. Driver-selectable Comfort and
              Sport modes allow you tailor handling response and ride firmness
              to your present driving style.
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
