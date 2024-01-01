import React from "react";
import fourthImage from "../../../../../Images/TOYOTAL/HIGHLANDER/HLD_MY20_0047_V002.png";
import fifthImage from "../../../../../Images/TOYOTAL/HIGHLANDER/HLH_MY22_0011_V001.png";
import sixthImage from "../../../../../Images/TOYOTAL/HIGHLANDER/HLD_MY23_0014_V001.png";
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
          <h4>MULTI-TERRAIN SELECT</h4>
          <p>
            Go with confidence. Available Multi-Terrain Select lets you choose
            between four modes – Mud & Sand, Rock & Dirt, Snow, and Normal –
            helping to maximize traction when the roads or the weather take a
            turn for the worse.
          </p>
        </div>
      </div>

      <div className="Followup-Spec-containers">
        <div className="Followup-Spec-container">
          <div className="Followup-Image">
            <img src={fifthImage} alt="" />
          </div>{" "}
          <div className="content">
            <h4>
              DYNAMIC TORQUE VECTORING AWD (DTV-AWD) WITH REAR DRIVELINE
              DISCONNECT
            </h4>
            <p>
              Think of it as the ultimate multi-tasker. A Toyota-first, DTV-AWD
              can send up to 50 percent of engine torque to the rear wheels,
              then distributes power to the wheel that needs it most – enhancing
              stability, responsiveness and control. When it isn’t needed, the
              system sends all driving force to the front wheels to improve fuel
              economy and deliver a smoother ride.
            </p>
          </div>
        </div>
        <div className="Followup-Spec-container">
          <div className="Followup-Image">
            <img src={sixthImage} alt="" />
          </div>
          <div className="content">
            <h4>ELECTRONIC ON-DEMAND ALL WHEEL DRIVE (AWD)</h4>
            <p>
              With a dedicated electric motor for the rear wheels, Hybrid models
              adapt based on driving conditions – from 100 percent to the front
              wheels, to an even 50:50 split between front and rear. It all
              happens seamlessly and automatically to give you better traction
              when the going gets tough, and performance that brings a smile
              when accelerating and cornering.
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SpecAside;
