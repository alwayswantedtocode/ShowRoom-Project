import React, { useState } from "react";
import SpecAside from "./Aside/SpecAside";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import firstImage from "../../../../Images/BENZ/A-Class-Sedan/236.jpg";
import secondImage from "../../../../Images/BENZ/A-Class-Sedan/INTERIOR/2022-A-SEDAN-MP-002.webp";
import thirdImage from "../../../../Images/BENZ/A-Class-Sedan/2022-A-SEDAN-MP-004.webp";

import { useGlobalContext } from "../../../../GlobalContext";

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
            <h4>2.0L inline-4 turbo engine</h4>
          </span>

          <p>
            The 188-hp 2.0L inline-4 engine combines turbocharging with numerous
            advances to deliver more power from less fuel. Its rapid-multispark
            ignition and high-pressure Direct Injection can fine-tune themselves
            in milliseconds. Its twin-scroll turbo and CAMTRONIC variable valve
            lift help keep all 221 lb-ft of torque on tap from just 1,600 rpm.
            Clever CONICSHAPE cylinders slash friction to help reduce wear and
            fuel consumption.
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
              instantly restarts, for immediate acceleration response. The ECO
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
              <h4>Front-wheel drive</h4>
            </span>

            <p>
              The A-Class front-wheel drive system is an ideal match for its
              nimble handling and efficient packaging. Impeccable calibration of
              the Electronic Stability Program (ESP) and Electronic Traction
              System (ETS) enhances tire bite under hard acceleration, while
              equal-length driveshafts virtually eliminate undesirable torque
              steer.
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
