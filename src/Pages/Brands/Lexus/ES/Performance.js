import React, { useState } from "react";
import SpecAside from "./Aside/SpecAside";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import firstImage from "../../../../Images/LEXUS/ES/Lexus-ES-performance-fsport-tuned-suspension-desktop-1440x490-LEX-ESG-MY22-0001.webp";
import secondImage from "../../../../Images/LEXUS/ES/Lexus-ES-allwheeldrive-thumbnail-desktop-1440x490-LEX-ESG-MY22-0079.webp";
import thirdImage from "../../../../Images/LEXUS/ES/Lexus-ES-exceptionalmpg-thumbnail-desktop-1440x490-LEX-ESH-MY23-0014.webp";

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
            <h4>F SPORT–TUNED SUSPENSION</h4>
          </span>

          <p>
            The ES F SPORT Handling models feature the same next-generation
            Adaptive Variable Suspension found in the LC. As a result, body lean
            is reduced, control is enhanced when cornering, and ride quality is
            improved overall.
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
              <h4>ALL-WHEEL DRIVE</h4>
            </span>

            <p>
              Explore more roads with more confidence with the all-wheel drive
              capability of the ES 250. The system provides enhanced traction by
              automatically allocating torque between the front and rear wheels
              to as much as 50/50.
            </p>
          </div>
        </div>
        <div className="Followup-Spec-container">
          <div className="Followup-Image">
            <img src={thirdImage} alt="" />
          </div>
          <div className="content">
            <span>
              <h4>EXCEPTIONAL MPG</h4>
            </span>

            <p>
              Pairing the powerful performance of a potent 2.5-liter engine with
              a manufacturer-estimated 44-MPG combined,* the ES 300h models
              boast instantaneous acceleration and unprecedented fuel economy.
              They aren’t just the most fuel-efficient Lexus sedans; they are
              the most fuel-efficient among all non-plug-in luxury sedans,
              period.*
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
