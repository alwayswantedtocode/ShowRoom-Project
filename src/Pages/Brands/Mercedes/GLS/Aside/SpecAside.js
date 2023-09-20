import React from "react";
import fourthImage from "../../../../../Images/BENZ/GLS-SUV/2023-GLS-SUV-MP-005.webp";
import fifthImage from "../../../../../Images/BENZ/GLS-SUV/INTERIOR/2023-GLS-SUV-MP-007.webp";
import sixthImage from "../../../../../Images/BENZ/GLS-SUV/INTERIOR/2023-GLS-SUV-MP-004.webp";
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
          <h4>4MATIC fully variable all-wheel drive</h4>
          <p>
            A specially engineered version of 4MATIC® can automatically send
            from zero to 100% of the engine's torque to either axle, front or
            rear. A transfer case with a multi-disc clutch can vary the torque
            distribution based on the driving conditions in the moment. While
            this allows for precise response to varying surfaces and
            individual-wheel traction off-road and in inclement weather, it can
            also enhance handling in any season by favorably influencing the
            vehicle's rotation.
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
              A selector on the console lets you vary the vehicle's performance
              character to suit your needs or your mood. DYNAMIC SELECT offers
              four preset modes: ECO, Comfort, Sport and Off-Road, plus an
              Individual mode you can personalize. Each mode adapts throttle
              response, shift points, ESP and more, with Off-Road tailored for
              dirt, gravel and sand. The AIRMATIC® suspension also adapts the
              damping rate in the various modes.
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
              An ECO Start/Stop system automatically shuts off the engine at
              stoplights and other idle situations, to save fuel and reduce
              emissions. As soon as the driver lifts off the brake, the engine
              instantly restarts, for quick acceleration response. An added
              benefit of the Integrated Starter-Generator is how it can make the
              restart process more seamlessly smooth than ever before. The ECO
              Start/Stop system can also be shut off by the driver at any time.
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SpecAside;
