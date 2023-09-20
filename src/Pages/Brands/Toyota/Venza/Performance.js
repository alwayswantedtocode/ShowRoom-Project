import React, { useState } from "react";
import SpecAside from "./Aside/SpecAside";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import firstImage from "../../../../Images/TOYOTAL/VENZA-HYBRID/VEN_MY22_0006_V001.png";
import secondImage from "../../../../Images/TOYOTAL/VENZA-HYBRID/VEN_MY22_0015_V001.png";
import thirdImage from "../../../../Images/TOYOTAL/VENZA-HYBRID/VEN_MY23_0038_V001.png";

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
            <h4>All-Hybrid Powertrain</h4>
          </span>

          <p>
            Modern design meets modern muscle. With an all-hybrid powertrain
            delivering 219 combined net horsepower, Venza’s refined power and
            advanced efficiency set it apart from the pack.
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
              <h4>Class-Leading Fuel Economy</h4>
            </span>

            <p>
              Whether you’re checking out a new shop in the city or making your
              weekend escape, Venza’s EPA-estimated 39 combined mpg rating *
              helps you enjoy the extra miles. *
            </p>
          </div>
        </div>
        <div className="Followup-Spec-container">
          <div className="Followup-Image">
            <img src={thirdImage} alt="" />
          </div>
          <div className="content">
            <span>
              <h4>Intuitive Performance</h4>
            </span>

            <p>
              Venza’s advanced hybrid powertrain and specially tuned suspension
              offer smooth acceleration and balanced turns for a refined drive
              every time you get behind the wheel. And Venza features four
              distinct drive modes to match your mood: EV, * Eco, Sport and
              Normal.
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
