import React from "react";
import fourthImage from "../../../../../Images/LEXUS/UX-HYBRID/Lexus-UXh-best-in-class-performance-thumbnail-desktop-1440x490-LEX-UXH-MY23-0058.webp";
import fifthImage from "../../../../../Images/LEXUS/UX-HYBRID/c709f795-9b34-4361-8497-b79fa885d022_Lexus_UX_Front_¾_moving.jpg";
import sixthImage from "../../../../../Images/LEXUS/UX-HYBRID/Interior/Lexus-UX-drive-mode-select-moreperformance-tile-550x411-LEX-UXH-MY23-0067.webp";
import { useGlobalContext } from "../../../../../Global Conext/GlobalContext";

const SpecAside = () => {
  const { showMore } = useGlobalContext();
  return (
    <aside className={`Brand-showmore ${showMore ? "active" : ""}`}>
      <div className="Lead-Spec-container">
        <div className="lead-image">
          <img src={fourthImage} alt="GX on a dirt road" />
        </div>
        <div className="content">
          <h4>IMPRESSIVE EFFICIENCY</h4>
          <p>
            An impressive 42-MPG combined EPA estimate (FWD).* On-demand torque
            off the line. Available all-wheel drive* capability. The UX Hybrid
            not only offers ample power, it proves that efficiency can be
            exhilarating.
          </p>
        </div>
      </div>

      <div className="Followup-Spec-containers">
        <div className="Followup-Spec-container">
          <div className="Followup-Image">
            <img src={fifthImage} alt="" />
          </div>{" "}
          <div className="content">
            <h4>ALL-WHEEL DRIVE</h4>
            <p>
              Explore even further with the available electronic all-wheel
              drive* system of the UX 250 Hybrid. This exclusive system is the
              lightest and smallest ever in a Lexus. It optimizes fuel
              efficiency by powering the rear wheels when the system detects
              that additional traction is needed.
            </p>
          </div>
        </div>
        <div className="Followup-Spec-container">
          <div className="Followup-Image">
            <img src={sixthImage} alt="" />
          </div>
          <div className="content">
            <h4>DRIVE MODE SELECT</h4>
            <p>
              The UX Hybrid offers up to five unique performance drive modes for
              added agility or efficiency. Available Sport S+ mode tightens the
              suspension to reduce body lean and maximize responsiveness. While
              Custom drive mode enables you to create a unique profile of a
              combination of drive mode settings for a more personalized driving
              experience.
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SpecAside;
