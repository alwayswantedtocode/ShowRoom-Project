import React, { useState } from "react";
import SpecAside from "./Aside/SpecAside";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import firstImage from "../../../../Images/TOYOTAL/camry/CAM_MY18_0035_V006-3.png";
import secondImage from "../../../../Images/TOYOTAL/camry/CAM_MY18_0036_V002_2BECI69ymKdBNqBcQ3_i.webp";
import thirdImage from "../../../../Images/TOYOTAL/camry/CAH_MY22_0004_V001.webp";

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
            <h4>All-Wheel Drive</h4>
          </span>

          <p>
            Available All-Wheel Drive (AWD) performance gives you peace of mind
            for days that are less than perfect. When sensing slippage at the
            front wheels, Camry AWD can send up to 50% of the torque to the rear
            wheels for more grip in gravel, rain or snow.
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
              <h4>Suspension</h4>
            </span>

            <p>
              With Camry’s sophisticated sport-tuned suspension, standard on SE
              and XSE grades, you can enjoy the perfect harmony of relaxation
              and confidence while driving. It helps deliver a smooth ride and
              sharp handling so you can take on any trip from crosstown to
              cross-country.
            </p>
          </div>
        </div>
        <div className="Followup-Spec-container">
          <div className="Followup-Image">
            <img src={thirdImage} alt="" />
          </div>
          <div className="content">
            <span>
              <h4>mpressive 4-Cylinder and V6 Engines</h4>
            </span>

            <p>
              Camry offers a compelling choice of gasoline engines: a proficient
              2.5-liter Dynamic Force 4-cylinder and a robust 3.5-liter V6, each
              delivering a quality blend of performance and efficiency.
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
