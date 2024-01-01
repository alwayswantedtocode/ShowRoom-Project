import React from "react";
import fourthImage from "../../../../../Images/LEXUS/IS/gallery-ext-03-d.jpg";
import fifthImage from "../../../../../Images/LEXUS/IS/IS-performance-eight-speed-tile-550x411-LEX-ISG-MY21-0008.webp"; 
import sixthImage from "../../../../../Images/LEXUS/IS/2021-lexus-is-500-f-sport-performance-v.jpg"; 
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
          <h4>NATURALLY ASPIRATED 5.0-LITER V8</h4>
          <p>
            Experience the ferocious roar of a naturally aspirated 5.0-liter V8
            engine amplified by stacked quad exhaust tips. The IS 500 F SPORT
            Performance boasts a full 472 horsepower* at 7,100 rpm and 395 lb-ft
            of peak torque* at 4,800 rpm. And a blistering 0-to-60 time of just
            4.4 seconds*. The result? A pure performance sport sedan unlike
            anything you’ve heard. Or felt. Exterior of the Lexus IS 350 F SPORT
            shown in Iridium.
          </p>
        </div>
      </div>

      <div className="Followup-Spec-containers">
        <div className="Followup-Spec-container">
          <div className="Followup-Image">
            <img src={fifthImage} alt="" />
          </div>{" "}
          <div className="content">
            <h4>EIGHT-SPEED SPORT DIRECT-SHIFT TRANSMISSION</h4>
            <p>
              Own the road in a way that's totally your own with an eight-speed
              transmission (RWD only). It touts paddle shifters that deliver
              lightning-fast upshifts and heart-racing split-second downshifts
              with rev-matching. Interior of the Lexus IS showing Drive Mode
              Select.
            </p>
          </div>
        </div>
        <div className="Followup-Spec-container">
          <div className="Followup-Image">
            <img src={sixthImage} alt="" />
          </div>
          <div className="content">
            <h4>TORSEN® LIMITED-SLIP DIFFERENTIAL</h4>
            <p>
              An available Torsen®* limited-slip rear differential shifts power
              to the rear wheel with the most grip. This helps enhance traction
              while delivering greater command during acceleration and
              cornering. Exterior of the Lexus IS F SPORT showing the F SPORT
              19-inch wheels.
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SpecAside;
