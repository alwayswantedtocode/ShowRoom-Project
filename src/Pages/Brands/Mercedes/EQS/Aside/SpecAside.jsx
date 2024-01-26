import React from "react";
import fourthImage from "../../../../../Images/BENZ/EQS-SEDAN/2023-EQS-SEDAN-MP-001.png";
import fifthImage from "../../../../../Images/BENZ/EQS-SEDAN/interior/2023-EQS-SEDAN-MP-004.webp";
import sixthImage from "../../../../../Images/BENZ/EQS-SEDAN/interior/2023-EQS-SEDAN-MP-005.webp";
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
          <h4>Rear 245kW permanently synchronous electric motor</h4>
          <p>
            Smooth, quiet and rich in torque, the EQS 450+ is powered by an
            advanced 245kW electric motor that can send up to 329 hp and 417
            lb-ft of torque to the rear wheels. The "permanently excited
            synchronous motor" (PSM) features permanent magnets to generate AC
            current with high power density and efficiency. An advanced cooling
            system helps maintain its high-performance consistency during
            spirited driving and a wide range of climates.
          </p>
        </div>
      </div>

      <div className="Followup-Spec-containers">
        <div className="Followup-Spec-container">
          <div className="Followup-Image">
            <img src={fifthImage} alt="" />
          </div>{" "}
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
        <div className="Followup-Spec-container">
          <div className="Followup-Image">
            <img src={sixthImage} alt="" />
          </div>
          <div className="content">
            <h4>ECO Assist feature</h4>
            <p>
              ECO Assist can intelligently process data from the vehicle's
              driving assistance and navigation systems to help you maximize
              your efficiency and energy recuperation from braking or coasting.
              Using GPS and map data, topography, traffic, and the detection of
              nearby vehicles via radar and the stereo camera, ECO Assist can
              optimize energy recovery to the situation, and also allow pure
              one-pedal driving in some conditions.
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SpecAside;
