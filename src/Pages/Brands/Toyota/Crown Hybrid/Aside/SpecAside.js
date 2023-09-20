import React from "react";
import fourthImage from "../../../../../Images/TOYOTAL/crown/2023_Crown_Limited_HeavyMetal_034-scaled.jpg";
import fifthImage from "../../../../../Images/TOYOTAL/crown/toyota_crown_033.jpg";
import sixthImage from "../../../../../Images/TOYOTAL/crown/2023_Crown_XLE_OxygenWhite_030-2048x1206.jpg";
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
          <h4>DYNAMIC TORQUE CONTROL AWD</h4>
          <p>
            The Dynamic Torque Control all-wheel drive system in the ES 250 AWD
            models doesn't just handle the road—it reacts to it. Monitoring road
            conditions in real time, it automatically shifts engine power
            between front and rear axles. And during normal driving conditions,
            100% of the power goes to the front wheels for enhanced efficiency.
          </p>
        </div>
      </div>

      <div className="Followup-Spec-containers">
        <div className="Followup-Spec-container">
          <div className="Followup-Image">
            <img src={fifthImage} alt="" />
          </div>{" "}
          <div className="content">
            <h4>turbocharged 2.4-litre petrol engine</h4>
            <p>
              Toyota’s new 2.4-litre hybrid system features a pair of electric
              motors – a small one mounted up front to assist the petrol engine
              and a large one at the rear, giving the Crown four-wheel drive.
              The Toyota Crown also have a setting in the drive mode selector
              that can send up to 80 percent of the system’s power to the rear
              axle.
            </p>
          </div>
        </div>
        <div className="Followup-Spec-container">
          <div className="Followup-Image">
            <img src={sixthImage} alt="" />
          </div>
          <div className="content">
            <h4>PLATINUM REAR eAXLE</h4>
            <p>
              On the Platinum grade the Full-time Electronic AWD adds a rear
              wheel eAxle with a high-output water cooled motor. This rear motor
              makes it possible to distribute more torque to the rear wheels
              than the conventional E-Four system. The result is a sense of
              linear acceleration that grows rapidly with every press on the
              throttle.
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SpecAside;
