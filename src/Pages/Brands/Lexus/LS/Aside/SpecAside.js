import React from "react";
import fourthImage from "../../../../../Images/LEXUS/LS/LEX-LSG-MY21-0059.webp";
import fifthImage from "../../../../../Images/LEXUS/LS/INTERIOR/2018-lexus-ls-gallery-interior-003-1920x1080tcm-3154-1191225.webp";
import sixthImage from "../../../../../Images/LEXUS/LS/INTERIOR/lexus-LS500-features-perf-drive-mode.jpg"; 
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
          <h4>TWIN-TURBO V6 ENGINE</h4>
          <p>
            Lexus researched, tested and crafted the turbochargers in the LS 500
            in-house—something almost unheard of in the industry. They deliver a
            thrilling 416 horsepower,* a zero-to-60 time of 4.6 seconds,* and
            442 lb-ft of torque.* The engine leverages Formula One® technology
            such as straight intake ports, and it also has a longer stroke and
            laser-clad intake valve seats. Exterior of the Lexus LS F SPORT
            shown in Atomic Silver.
          </p>
        </div>
      </div>

      <div className="Followup-Spec-containers">
        <div className="Followup-Spec-container">
          <div className="Followup-Image">
            <img src={fifthImage} alt="" />
          </div>{" "}
          <div className="content">
            <h4>10-SPEED DIRECT-SHIFT AUTOMATIC TRANSMISSION</h4>
            <p>
              Exclusive to LS gas models, the 10-speed Direct-Shift automatic
              transmission delivers the optimal gear for a wide variety of
              driving conditions. It also offers paddle shifters for when you
              want control at your fingertips. Exterior of the Lexus LS F SPORT
              shown in Atomic Silver.
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
              The LS features unique performance driving modes for added agility
              or efficiency. Sport S+ mode tightens the suspension to reduce
              body lean and maximize responsiveness. While Custom drive mode
              enables you to create a unique profile of a combination of drive
              mode settings for a more personalized driving experience. Interior
              of the Lexus LS showing the paddle shifters.
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SpecAside;
