import React from "react";
import fourthImage from "../../../../../Images/LEXUS/LX600/INTERIOR/2022-lexus-lx-experience-interior-front-steering-wheel-1920x1080.webp";
import fifthImage from "../../../../../Images/LEXUS/LX600/INTERIOR/lx-600-vip-comfort-wireless-charging.png";
import sixthImage from "../../../../../Images/LEXUS/LX600/2022-Lexus-LX600-Ultra-Luxury_HERO-16x9-1-1.jpg";
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
            <h4>MULTI-TERRAIN SELECT</h4>
            <p>
              An innovative Multi-Terrain Select system further enhances
              off-road capability and control over varied landscapes. The
              operating range of controls is optimized for use on a wider
              variety of terrains, from snow-covered roads to intensive off-road
              driving.* And the Lexus-first Auto mode can select the optimum
              mode using sensors combined with the driver’s inputs. Exterior of
              the Lexus LX in mountainous terrain.
            </p>
          </div>
        </div>
        <div className="Followup-Spec-container">
          <div className="Followup-Image">
            <img src={sixthImage} alt="" />
          </div>
          <div className="content">
            <h4>CRAWL CONTROL WITH TURN ASSIST</h4>
            <p>
              Conquer a mountain using only a finger. Activated with just the
              press of a button, Crawl Control* is designed to automatically
              maintain an optimal slow and steady pace over challenging terrain.
              Turn Assist can also tighten your turning circle by adding brake
              force to the inside rear wheel.
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SpecAside;
