import React from "react";
import fourthImage from "../../../../../Images/BENZ/E-Class-Sedan/mercedes-benz-e-class-2024-07.jpg";
import fifthImage from "../../../../../Images/BENZ/E-Class-Sedan/INTERIOR/2023-E-SEDAN-MP-008.webp";
import sixthImage from "../../../../../Images/BENZ/E-Class-Sedan/2023-E-SEDAN-MP-018.webp";
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
          <h4>9G-TRONIC automatic transmission</h4>
          <p>
            With a greater range of ratios and shorter steps between gears, the
            9-speed automatic changes gears more quickly but nearly
            imperceptibly. Along with a more seamless delivery of power, the
            lighter, more versatile transmission enhances quiet riding comfort
            and fuel-efficiency. The electronic selector and shift paddles let
            you control all gear changes with your hands on the steering wheel.
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
              response, shift points and steering effort, ECO Start/Stop, and
              available AIR BODY CONTROL suspension. A fifth "Individual" mode
              allows you to create a mode of your own, even letting you set the
              transmission for manual shifting.
            </p>
          </div>
        </div>
        <div className="Followup-Spec-container">
          <div className="Followup-Image">
            <img src={sixthImage} alt="" />
          </div>
          <div className="content">
            <h4>4-wheel multilink suspension</h4>
            <p>
              The 4-wheel independent suspension features a 4-link front axle
              and further evolution of the standard-setting 5-arm multilink rear
              design. Both employ numerous lightweight, highly rigid forged
              aluminum components.
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SpecAside;
