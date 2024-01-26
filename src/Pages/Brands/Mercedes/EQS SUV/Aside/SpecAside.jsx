import React from "react";
import fourthImage from "../../../../../Images/BENZ/EQS-SUV/2023-EQS-SUV-Gallery_011-XL.jpg";
import fifthImage from "../../../../../Images/BENZ/EQS-SUV/Interior/2023-EQS-SUV-MP-009.jpg";
import sixthImage from "../../../../../Images/BENZ/EQS-SUV/Interior/2023-EQS-SUV-Gallery_022-XL.jpg";
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
          <h4>10-degree rear axle steering</h4>
          <p>
            For enhanced agility, stability and maneuverability,
            electromechanical actuators can steer the rear wheels up to 10
            degrees based on driving speed and dynamics. Above 37 mph, the rear
            wheels can steer up to 3 degrees in either direction, to boost
            rear-wheel grip, cornering response, and control in evasive moves.
            At lower speeds and when parking, steering up to 10 degrees opposite
            the front wheels can cut the turning circle by some 36 inches, for
            compact-car maneuverability in a large and spacious SUV.
          </p>
        </div>
      </div>

      <div className="Followup-Spec-containers">
        <div className="Followup-Spec-container">
          <div className="Followup-Image">
            <img src={fifthImage} alt="" />
          </div>{" "}
          <div className="content">
            <h4>DYNAMIC SELECT</h4>
            <p>
              A multimode drive program selector on the console lets you
              transform the car's character with the flip of a switch. Three
              modes (ECO, Comfort and Sport) alter the drivetrain response,
              steering effort, and AIRMATIC® suspension. A fourth "Individual"
              mode allows you to create a mode of your own.
            </p>
          </div>
        </div>
        <div className="Followup-Spec-container">
          <div className="Followup-Image">
            <img src={sixthImage} alt="" />
          </div>
          <div className="content">
            <h4>Intelligent Energy Recovery with paddles</h4>
            <p>
              Paddles on the steering wheel let you vary the intensity of energy
              recuperated by deceleration and braking during normal driving.
              Three levels of recuperation are selectable: normal, increased
              (which can allow one-pedal driving), and none (effectively
              coasting when you let off the driving pedal). A "D Auto" setting
              can activate the intelligent ECO Assist feature.
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SpecAside;
