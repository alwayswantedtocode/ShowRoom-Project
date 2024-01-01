import React, { useState } from "react";
import SpecAside from "./Aside/SpecAside";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import firstImage from "../../../../Images/BENZ/Mercedes-Maybach/maybach-gls-600.jpg";
import secondImage from "../../../../Images/BENZ/Mercedes-Maybach/New folder/2023-GLS-MAYBACH-SUV-MP-003.webp";
import thirdImage from "../../../../Images/BENZ/Mercedes-Maybach/2023-GLS-MAYBACH-SUV-MP-004.webp";

import { useGlobalContext } from "../../../../Global Conext/GlobalContext";

const Performance = () => {
  const { showMore, setShowMore } = useGlobalContext();

  return (
    <article className="Performance-wrapper">
      <div className="Lead-Spec-container">
        <div className="lead-image">
          <img src={firstImage} alt="GX on a dirt road" />
        </div>
        <div className="content">
          <span>
            <h4>4.0L V8 biturbo engine with mild hybrid drive</h4>
          </span>

          <p>
            Advanced performance comes from a high-output yet compact 4.0L
            biturbo V8 with hybrid electric assist.. Exceptional output of 550
            hp and 538 lb-ft of peak torque moves the Mercedes-Maybach GLS with
            confidence, grace, and a sense of urgency evidenced by a 4.8-second
            0-60 time. Racing-derived technology ranges from its turbocharger
            layout to its low-friction NANOSLIDE cylinder walls. And its
            high-pressure Direct Injection and rapid-multispark ignition can
            self-tune on the fly with millisecond speed and molecular precision.
          </p>
        </div>
      </div>

      <div className="Followup-Spec-containers">
        <div className="Followup-Spec-container">
          <div className="Followup-Image">
            <img src={secondImage} alt="" />
          </div>{" "}
          <div className="content">
            <span>
              <h4>ECO Start/Stop system</h4>
            </span>

            <p>
              An ECO Start/Stop system automatically shuts off the engine at
              stoplights and other idle situations, to save fuel and reduce
              emissions. As soon as the driver lifts off the brake, the engine
              instantly restarts, for quick acceleration response. An added
              benefit of the Integrated Starter-Generator is how it can makethe
              restart process more seamlessly smooth than ever before. The ECO
              Start/Stop system can also be shut off by the driver at any time.
            </p>
          </div>
        </div>
        <div className="Followup-Spec-container">
          <div className="Followup-Image">
            <img src={thirdImage} alt="" />
          </div>
          <div className="content">
            <span>
              <h4>4MATIC fully variable all-wheel drive</h4>
            </span>

            <p>
              An advanced version of 4MATIC® can automatically send from zero to
              100% of the engine's torque to either axle, front or rear. A
              transfer case with a multi-disc clutch can vary the torque
              distribution based on the driving conditions in the moment. While
              this allows for precise response to varying surfaces and
              individual-wheel traction off-road and in inclement weather, it
              can also enhance cornering in any season by favorably influencing
              the vehicle's handling.
            </p>
          </div>
        </div>
      </div>
      <div className="Click-showmore" onClick={() => setShowMore(!showMore)}>
        MORE GX PERFORMANCE FEATURES
        <button className="Click-showmore-btn">
          {showMore ? <FaChevronUp /> : <FaChevronDown />}
        </button>
      </div>
      <SpecAside />
    </article>
  );
};

export default Performance;
