import React from "react";
import fourthImage from "../../../../../Images/BENZ/A-Class-Sedan/18c0485_062.png";
import fifthImage from "../../../../../Images/BENZ/A-Class-Sedan/INTERIOR/2022-A-SEDAN-MP-005.webp";
import sixthImage from "../../../../../Images/BENZ/A-Class-Sedan/INTERIOR/2022-A-SEDAN-MP-011.webp";
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
          <h4>7G-DCT 7-speed dual-clutch automatic transmission</h4>
          <p>
            The racing-inspired 7-speed transmission combines the sporty
            response of a manual, the smooth refinement of an automatic, and
            better efficiency than either. Dual clutches offer quicker gear
            changes than a human can shift a traditional manual gearbox, while
            three overdrive ratios boost highway efficiency. Selectable ECO,
            Sport and Comfort modes let you favor fully automatic efficiency and
            comfort, intensified response, or shift-for-yourself excitement via
            the steering wheel-mounted shift paddles.
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
              transform the car's character with the touch of a button. Three
              modes (ECO, Comfort and Sport) alter the throttle response, shift
              points and steering effort, and ECO Start/Stop. A fourth
              "Individual" mode allows you to create a mode of your own, even
              letting you set the transmission for purely manual shifting.
            </p>
          </div>
        </div>
        <div className="Followup-Spec-container">
          <div className="Followup-Image">
            <img src={sixthImage} alt="" />
          </div>
          <div className="content">
            <h4>Electromechanical power steering</h4>
            <p>
              Advanced electromechanical power steering delivers quicker
              response in corners, easier maneuvering at low speeds, along with
              precise on-center feel and straight-line stability.
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SpecAside;
