import React from "react";
import fourthImage from "../../../../../Images/LEXUS/GX/Lexus-GX-V18Power-performance.webp";
import fifthImage from "../../../../../Images/LEXUS/GX/LEX-GXG-MY20-0072.jpg";
import sixthImage from "../../../../../Images/LEXUS/GX/Lexus-GX-snow-drift.jpg";
import { useGlobalContext } from "../../../../../GlobalContext";

const SpecAside = () => {
  const { showMore } = useGlobalContext();
  return (
    <aside className={`Brand-showmore ${showMore ? "active" : ""}`}>
      <div className="Lead-Spec-container">
        <div className="lead-image">
          <img src={fourthImage} alt="GX on a dirt road" />
        </div>
        <div className="content">
          <h4>NATURALLY ASPIRATED 4.6-LITER V8 ENGINE</h4>
          <p>
            The only naturally aspirated V8 engine in its class,* this 4.6-liter
            engine delivers an impressive 301 horsepower.* While the Variable
            Valve Timing with intelligence helps to improve low-speed torque and
            high-speed horsepower.
          </p>
        </div>
      </div>

      <div className="Followup-Spec-containers">
        <div className="Followup-Spec-container">
          <div className="Followup-Image">
            <img src={fifthImage} alt="" />
          </div>{" "}
          <div className="content">
            <h4>ADAPTIVE VARIABLE SUSPENSION</h4>
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
            <img src={sixthImage} alt="" />
          </div>
          <div className="content">
            <h4>6,500-LB TOWING CAPACITY</h4>
            <p>
              329 lb-ft of torque* at low rpm enables the GX to tow up to 6,500
              lb.* While Trailer Sway Control*adds peace of mind as part of the
              Vehicle Stability Control*system. To help reduce sway, braking is
              applied independently to each wheel.
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SpecAside;
