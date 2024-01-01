import React, { useState } from "react";
import SpecAside from "./Aside/SpecAside";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import firstImage from "../../../../Images/LEXUS/LX600/2022-lexus-lx-experience-exterior-front-new-back-lock-differential-1920x1080.png";
import secondImage from "../../../../Images/LEXUS/LX600/Lexus-lx-performance-thumbnail-2-advanced-capablity-desktop-1440x490-LEX-LXG-MY22-0010.webp";
import thirdImage from "../../../../Images/LEXUS/LX600/2022-lexus-lx-600-f-sport-16.webp";

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
            <h4>TWIN-TURBO POWER</h4>
          </span>

          <p>
            Elevating performance on every road, the LX features a
            twin-turbocharged V6 that produces 409 horsepower* and 479 lb-ft of
            torque,* making it the most powerful engine ever fitted to an LX.
            Paired with a standard 10-speed Direct-Shift automatic transmission,
            this powertrain achieves incredible performance and the refinement
            worthy of this Lexus flagship.
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
              <h4>ADVANCED CAPABILITY</h4>
            </span>

            <p>
              With a suite of available enhanced off-road technologies that
              include Active Height Control, Multi-Terrain Select and Crawl
              Control with Turn Assist,* the LX pushes the boundaries of
              capability. The only question is: Where will you go first?
            </p>
          </div>
        </div>
        <div className="Followup-Spec-container">
          <div className="Followup-Image">
            <img src={thirdImage} alt="" />
          </div>
          <div className="content">
            <span>
              <h4>FULL-TIME 4WD</h4>
            </span>

            <p>
              The Torsen®* torque-sensing limited-slip center differential
              efficiently distributes engine power between the front and rear
              axles, helping to optimize traction in a wide variety of
              conditions. Four-wheel Active Traction Control helps keep you on
              the road and feeling secure by using sensors to detect the onset
              of wheel slippage, automatically applying the brake to the
              slipping wheel and shifting power to the wheels with the most
              traction. Interior of the Lexus LX with steering wheel and
              assisted power steering.
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
