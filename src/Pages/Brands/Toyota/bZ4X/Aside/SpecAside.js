import React from "react";
import fourthImage from "../../../../../Images/TOYOTAL/bZ4X/interior/BZ4_MY23_0043_V004.jpg";
import fifthImage from "../../../../../Images/TOYOTAL/bZ4X/BZ4_MY23_0058_V001.webp";
import sixthImage from "../../../../../Images/TOYOTAL/bZ4X/interior/BZ4_MY23_0040_V001.webp";
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
          <h4>ELECTRONICALLY ASSISTED POWER STEERING</h4>
          <p>
            Adding further refinement to the driving experience is the LX’s
            Electronic Power-Assisted Steering, which replaces a hydraulic power
            system, for a more finely tuned steering response. With this system,
            steering is less sensitive at high speeds and more responsive at low
            speeds. This helps provide easier maneuverability and more
            confidence across a wider variety of driving conditions both on- and
            off-road. Interior of the Lexus LX with Multi-Terrain Select button.
          </p>
        </div>
      </div>

      <div className="Followup-Spec-containers">
        <div className="Followup-Spec-container">
          <div className="Followup-Image">
            <img src={fifthImage} alt="" />
          </div>{" "}
          <div className="content">
            <h4>Battery Performance</h4>
            <p>
              With an EPA-estimated driving range of up to 252 miles for
              front-wheel-drive models and up to 228 miles for all-wheel-drive
              models, * you can enjoy the fun of electric driving with the
              confidence of knowing that it’s a Toyota.
            </p>
          </div>
        </div>
        <div className="Followup-Spec-container">
          <div className="Followup-Image">
            <img src={sixthImage} alt="" />
          </div>
          <div className="content">
            <h4>Regenerative Braking With Boost Mode</h4>
            <p>
              The unique driving experience of bZ4X comes from the way it
              harnesses and delivers electric power. By optimizing the force
              used on the acceleration pedal, you can easily tap into bZ4X’s
              power. When you’re not on the accelerator, regenerative braking
              will recapture lost energy while coasting and help slow you down.
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SpecAside;
