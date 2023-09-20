import React from "react";
import fourthImage from "../../../../../Images/TOYOTAL/VENZA-HYBRID/VEN_MY22_0007_V001.png";
import fifthImage from "../../../../../Images/TOYOTAL/VENZA-HYBRID/INTERIOR/2022-Toyota-Venza-Hybrid-drive-modes.jpg";
import sixthImage from "../../../../../Images/TOYOTAL/VENZA-HYBRID/INTERIOR/maxresdefault.jpg";
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
          <h4>Electronic On-Demand All-Wheel Drive</h4>
          <p>
            Advanced capability, standard. When you're driving through uncertain
            conditions, Venza’s sophisticated Electronic On-Demand All-Wheel
            Drive (AWD) system automatically supplies power to the rear wheels
            to help improve traction.
          </p>
        </div>
      </div>

      <div className="Followup-Spec-containers">
        <div className="Followup-Spec-container">
          <div className="Followup-Image">
            <img src={fifthImage} alt="" />
          </div>{" "}
          <div className="content">
            <h4>DRIVE MODE SELECT</h4>
            <p>
              With the simple twist of a dial, you can tailor Venza’s
              performance personality. SPORT mode sharpens throttle response for
              more high-spirited performance. ECO helps to maximize mileage from
              the fuel and battery. EV mode allows electric-only driving at low
              speeds for short distances. While NORMAL is ideal for everyday
              driving.
            </p>
          </div>
        </div>
        <div className="Followup-Spec-container">
          <div className="Followup-Image">
            <img src={sixthImage} alt="" />
          </div>
          <div className="content">
            <h4>sound-absorbing insulation</h4>
            <p>
              From sound-absorbing insulation around the engine compartment, to
              strategic use of sound-blocking and sound-absorbing material
              throughout the vehicle, Toyota engineers have fashioned a cabin of
              exceptional quiet, all so that you can better enjoy the journey.
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SpecAside;
