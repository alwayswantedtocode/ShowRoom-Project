import React, { useState } from "react";
import SpecAside from "./Aside/SpecAside";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import firstImage from "../../../../Images/TOYOTAL/corolla/Corolla-6.png";
import secondImage from "../../../../Images/TOYOTAL/corolla/interior/COR_MY20_0038_V001_CjQd1r9Kal1z8An.webp";
import thirdImage from "../../../../Images/TOYOTAL/corolla/interior/COR_MY24_0003_V001_nU1X8cSeZ_wq6UbVNV4XF3bHc.png";

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
            <h4>2.0L Dynamic Force Engine</h4>
          </span>

          <p>
            Corolla ups its performance numbers with 169 horsepower and
            151-lb.-ft. of torque and gets up to speed from 0-60 mph in under 9
            seconds. * Its efficient, available 2.0L Dynamic Force Engine can be
            paired with an available Dynamic-Shift CVT, which combines the
            immediate response of a traditional fixed first gear with the
            efficiency of a Continuously Variable Transmission (CVT).
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
              <h4>Mounted Paddle Shifters</h4>
            </span>

            <p>
              Corolla's mounted paddle shifters let you shift gears without
              letting go of the wheel. A light touch on either lever gives you
              lightning-fast gear changes for a more engaged drive.
            </p>
          </div>
        </div>
        <div className="Followup-Spec-container">
          <div className="Followup-Image">
            <img src={thirdImage} alt="" />
          </div>
          <div className="content">
            <span>
              <h4>Drive Modes</h4>
            </span>

            <p>
              Three distinct available drive modes give you even more control.
              Sport Mode indulges your spirited side with a sharper acceleration
              feel, while Eco Mode adjusts throttle input to help maximize your
              efficiency. Normal Mode blends fuel economy with performance. With
              these choices, you can instantly tailor your drive with a flip of
              a switch.
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
