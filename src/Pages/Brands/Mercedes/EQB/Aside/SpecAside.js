import React from "react";
import fourthImage from "../../../../../Images/BENZ/EQB-SUV/2023-Mercedes-Benz-EQB300-5.jpg";
import fifthImage from "../../../../../Images/BENZ/EQB-SUV/INTERIOR/2023-EQB-SUV-MP-005.webp";
import sixthImage from "../../../../../Images/BENZ/EQB-SUV/Mercedes_EQB-01@2x.jpg";
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
          <h4>TORQUE VECTORING BRAKE</h4>
          <p>
            The EQB comes with the Torque Vectoring feature that corrects
            understeer during spirited driving or motorsports competition. When
            understeer or "plowing" is sensed during cornering, brief braking
            pulses at the inside rear wheel reduces understeer and improves
            active handling stability.
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
              The EQB DYNAMIC SELECT® is a drive program selector that lets you
              alter the character of your vehicle based on the drive mode you
              select. Each mode will change your vehicle’s throttle response,
              steering effort, shift points, and more!
            </p>
          </div>
        </div>
        <div className="Followup-Spec-container">
          <div className="Followup-Image">
            <img src={sixthImage} alt="" />
          </div>
          <div className="content">
            <h4>4-WHEEL INDEPENDENT SUSPENSION</h4>
            <p>
              Individual front and rear electric motors and a four-wheel thrust
              of the 4-MATIC® all-wheel drive give a power-packed performance of
              up to 288 hp and seamless response. Battery capacity is 70.5 kWh
              providing a range of 410 kilometers. The Independent 4-wheel
              multilink suspension technology of Mercedes-Benz continues to do
              wonders for the new EQB, balancing sporty response with refined
              comfort.
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SpecAside;
