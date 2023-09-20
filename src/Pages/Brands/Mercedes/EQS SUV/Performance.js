import React, { useState } from "react";
import SpecAside from "./Aside/SpecAside";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import firstImage from "../../../../Images/BENZ/EQS-SUV/2023-EQS-SUV-Gallery_005-XL.jpg";
import secondImage from "../../../../Images/BENZ/EQS-SUV/22C0126_001.jpg";
import thirdImage from "../../../../Images/BENZ/EQS-SUV/2-11.webp";

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
            Advanced dual electric motors generate swift, seamless torque, and
            send it expertly to all four wheels. With 355 total hp, the EQS 450
            4MATIC can rush to 100 km/h in 5.8 seconds. The motors in the EQS
            580 4MATIC add up to 536 total hp and 0-100 in 4.7 seconds.
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
              <h4>The confidence to roam</h4>
            </span>

            <p>
              Advancing a rich SUV heritage, the EQS features a dedicated
              OFFROAD mode that can raise the ride height, optimize the
              powertrain, and offer useful graphic displays in the dash and
              available Head-Up Display.
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
