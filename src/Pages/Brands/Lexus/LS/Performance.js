import React, { useState } from "react";
import SpecAside from "./Aside/SpecAside";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import firstImage from "../../../../Images/LEXUS/LS/lexus-mlp-ls-gallery-ext-01-d.jpg";
import secondImage from "../../../../Images/LEXUS/LS/d7.jpg";
import thirdImage from "../../../../Images/LEXUS/LS/dxp-2022-lexus-ls-gallery-01-1920x1080.webp";

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
            <h4>REFINED PERFORMANCE</h4>
          </span>

          <p>
            Impressively smooth 0–60 acceleration. A sophisticated suspension
            system. And everything from engine components to the composition of
            the tires has been perfected to achieve a quiet, refined ride.
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
              <h4>F SPORT AGILITY</h4>
            </span>

            <p>
              Experience the razor-sharp handling of the LS F SPORT. It features
              a specially tuned suspension system engineered by the same team
              behind the iconic LFA supercar. Craving more exhilaration? Amplify
              performance with the available LS Dynamic Handling Package.
            </p>
          </div>
        </div>
        <div className="Followup-Spec-container">
          <div className="Followup-Image">
            <img src={thirdImage} alt="" />
          </div>
          <div className="content">
            <span>
              <h4>ALL-WHEEL DRIVE</h4>
            </span>

            <p>
              Available on every LS model, full-time all-wheel drive delivers
              engine power to all four wheels. And a Torsen®* limited-slip
              center differential efficiently distributes it between the front
              and rear axles. This helps optimize traction, handling and control
              in a variety of driving conditions.
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
