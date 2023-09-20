import React, { useState } from "react";
import SpecAside from "./Aside/SpecAside";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import firstImage from "../../../../Images/LEXUS/IS/masthead-d.jpg";
import secondImage from "../../../../Images/LEXUS/IS/2022-lexus-is-500-v8-blue-07_header.jpg";
import thirdImage from "../../../../Images/LEXUS/IS/LEX-ISF-MY23-0040_tanhxq.png";

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
            <h4>A DIFFERENT BREED OF F SPORT</h4>
          </span>

          <p>
            In addition to a larger, naturally aspirated 5.0-liter V8 engine,
            the IS 500 F SPORT Performance further sets itself apart from the
            standard IS F SPORT models with an even more heart-racing sound,
            stacked quad exhaust tips, dynamic performance instrumentation and
            more.
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
              <h4>ALL-WEATHER PERFORMANCE</h4>
            </span>

            <p>
              With all-wheel drive, the IS 300 AWD and IS 350 F SPORT AWD
              automatically allocate engine power between the front and rear
              axles from 30/70 to as much as 50/50. The system can help provide
              enhanced traction on a wide range of road surfaces and conditions.
            </p>
          </div>
        </div>
        <div className="Followup-Spec-container">
          <div className="Followup-Image">
            <img src={thirdImage} alt="" />
          </div>
          <div className="content">
            <span>
              <h4>ADAPTIVE VARIABLE SUSPENSION</h4>
            </span>

            <p>
              Experience thrilling responsiveness with the sport-tuned
              suspension of the IS F SPORT and IS F SPORT Design. Looking to go
              all in on exhilaration? An optimized Adaptive Variable Suspension,
              available on the IS F SPORT and standard on the IS 500 F SPORT
              Performance, delivers enhanced cornering and stability at every
              turn.
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
