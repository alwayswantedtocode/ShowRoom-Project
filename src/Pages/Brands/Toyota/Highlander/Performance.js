import React, { useState } from "react";
import SpecAside from "./Aside/SpecAside";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import firstImage from "../../../../Images/TOYOTAL/HIGHLANDER/HLD_MY23_0009_V001.png";
import secondImage from "../../../../Images/TOYOTAL/HIGHLANDER/HLD_MY22_0002_V001.png";
import thirdImage from "../../../../Images/TOYOTAL/HIGHLANDER/HLD_MY22_0009_V001.png";

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
            <h4>Powerful & Efficient Gas Engine</h4>
          </span>

          <p>
            The available 265-horsepower, 2.4-litre turbocharged four-cylinder
            engine serves up an ideal blend of power and efficiency. Backed by
            next-generation technology, like Dual Variable Valve Timing-with
            intelligence (Dual VVT-i), and mated to an 8-speed direct shift
            automatic transmission – putting power and responsiveness at your
            fingertips, while helping to make the most of every litre.
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
              <h4>UP TO 5000-LB TOWING CAPACITY*</h4>
            </span>

            <p>
              Turns out you can take it with you. On Highlander Hybrid models,
              you can tow up to 3,500 lbs of cargo. On gas models, the available
              towing package allows you to take 5,000 lbs along for the ride.
              Features include: a heavy-duty radiator, engine oil cooler, and
              Trailer Sway Control (TSC) to restrict unwanted trailer movement.
            </p>
          </div>
        </div>
        <div className="Followup-Spec-container">
          <div className="Followup-Image">
            <img src={thirdImage} alt="" />
          </div>
          <div className="content">
            <span>
              <h4>START-STOP ENGINE</h4>
            </span>

            <p>
              Whenever you come to a full stop – like at a stop light –
              Highlander’s engine automatically shuts off to save fuel and
              reduce emissions. Lift your foot from the brake pedal, and the
              engine instantly restarts, to get you effortlessly on your way.
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
