import React, { useState } from "react";
import SpecAside from "./Aside/SpecAside";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import firstImage from "../../../../Images/LEXUS/UX-HYBRID/Leuxs-UXh-class-leading-efficiency-performance-thumbnail-desktop-1440x490-LEX-UXG-MY23-0004.webp";
import secondImage from "../../../../Images/LEXUS/UX-HYBRID/Interior/Lexus-UXh-first-predictive-efficient-moreperformance-tile-550x411-LEX-UXH-MY23-0005.webp";
import thirdImage from "../../../../Images/LEXUS/UX-HYBRID/Lexus-UXh-nimble-handling-performance-thumbnail-desktop-1440x490-LEX-UXS-MY23-0001.webp";

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
            <h4>17.1-FT TURNING RADIUS</h4>
          </span>

          <p>
            Purposefully crafted for city driving, the UX Hybrid boasts a
            17.1-foot turning radius. By tilting the wheels inward during tight
            maneuvers, it makes three-point turns a thing of the past.
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
              <h4>PADDLE SHIFTERS</h4>
            </span>

            <p>
              Lightning-fast paddle shifters placed intuitively on the steering
              wheel deliver faster and smoother gear changes for greater agility
              when coming out of corners.
            </p>
          </div>
        </div>
        <div className="Followup-Spec-container">
          <div className="Followup-Image">
            <img src={thirdImage} alt="" />
          </div>
          <div className="content">
            <span>
              <h4>NIMBLE HANDLING</h4>
            </span>

            <p>
              With its extremely lightweight and rigid platform, the UX Hybrid
              delivers sharp handling. It uses structural adhesives and laser
              screw welds, which significantly reduce the need for weighty
              screws and fasteners while enhancing agility and ride quality.
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
