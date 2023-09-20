import React, { useState } from "react";
import SpecAside from "./Aside/SpecAside";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import firstImage from "../../../../Images/LEXUS/GX/Lexus-GX-SuspensionSystemDesktop-Preformance.jpg";
import secondImage from "../../../../Images/LEXUS/GX/Lexus-GX-OffRoadCapabilityDesktop-Preformance.jpg";
import thirdImage from "../../../../Images/LEXUS/GX/overland-suv-of-the-year-lexus.jpg";

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
            <h4>CLASS-EXCLUSIVE KINETIC DYNAMIC SUSPENSION SYSTEM</h4>
          </span>

          <p>
            This class-exclusive system* can adjust the stabilizer bars
            depending on terrain. This reduces body roll and improves ride
            comfort on-road and allows for greater suspension travel off-road*so
            the GX remains level.
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
              <h4>OFF-ROAD CAPABILITY</h4>
            </span>

            <p>
              In addition to the only body-on-frame construction in its class,*
              the GX offers an Off-Road* Package to make the adventure more
              civilized even when the road isn’t. It tackles multiple terrains,
              including snow-covered roads, dirt trails, and rock with features
              like Crawl Control,* Multi-Terrain Select and more.
            </p>
          </div>
        </div>
        <div className="Followup-Spec-container">
          <div className="Followup-Image">
            <img src={thirdImage} alt="" />
          </div>
          <div className="content">
            <span>
              <h4>MULTI-TERRAIN SELECT</h4>
            </span>

            <p>
              The available Multi-Terrain Select system helps optimize
              drivability, no matter the landscape. Adjust the amount of
              traction and response by choosing from five different types of
              terrain (Rock, Rock & Dirt, Mogul, Loose Rock, or Mud & Sand).
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
