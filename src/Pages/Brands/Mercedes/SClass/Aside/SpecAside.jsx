import React from "react";
import fourthImage from "../../../../../Images/BENZ/S-Class-Sedan/s63amg_100.jpg";
import fifthImage from "../../../../../Images/BENZ/S-Class-Sedan/INTERIOR/2023-S-SEDAN-MP-008.webp";
import sixthImage from "../../../../../Images/BENZ/S-Class-Sedan/INTERIOR/2023-S-SEDAN-MP-005.webp";
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
          <h4>Hybrid Integrated Starter-Generator</h4>
          <p>
            Electrifying the inline-6 gasoline engine is an innovative
            Integrated Starter-Generator. It teams with a 48-volt lithium-ion
            battery to supply power for formerly belt-driven components like the
            water pump and air-conditioning compressor, reducing weight and
            enhancing underhood packaging.
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
              transform the car's character with the flip of a switch. Four
              modes (ECO, Comfort, Sport and Sport+) alter the throttle
              response, shift points and steering effort, and AIRMATIC®
              suspension. A fifth "Individual" mode allows you to create a mode
              of your own, even letting you set the transmission for manual
              shifting.
            </p>
          </div>
        </div>
        <div className="Followup-Spec-container">
          <div className="Followup-Image">
            <img src={sixthImage} alt="" />
          </div>
          <div className="content">
            <h4>ECO Start/Stop system</h4>
            <p>
              A fuel-saving ECO Start/Stop system automatically shuts off the
              engine at stoplights and other idle situations. As soon as the
              driver lifts off the brake, the engine instantly restarts, for
              immediate acceleration response. The ECO Start/Stop system can
              also be shut off by the driver at any time.
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SpecAside;
