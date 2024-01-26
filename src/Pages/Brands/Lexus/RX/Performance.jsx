import React, { useState } from "react";
import SpecAside from "./Aside/SpecAside";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import firstImage from "../../../../Images/LEXUS/RX-350-HYBRID/Lexus-RX-Performance-FSPORTperformance-desktop-1440x490-LEX-RXF-MY23-0029.webp";
import secondImage from "../../../../Images/LEXUS/RX-350-HYBRID/Lexus-RX-Performance-PHEV-desktop-1440x490-LEX-RXH-MY24-0028.webp";
import thirdImage from "../../../../Images/LEXUS/RX-350-HYBRID/Lexus-RX-Performance-powertrains-desktop-1440x490-LEX-FLN-MY23-0004.webp";

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
            <h4>"Lexuspage/EV-SUV/RX"</h4>
          </span>

          <p>
            Crafted for those who refuse to settle, the 2024 RX has been
            designed to offer an uncompromising vision of luxury. And the RX F
            SPORT Performance is engineered to take exhilaration to even greater
            heights. Its unique electrified powertrain boasts an astonishing 366
            net combined horsepower,* and makes this our quickest RX ever with
            an impressive 0-to-60 time of 5.9 seconds.* And with its rigid
            chassis, revised Adaptive Variable Suspension, and advanced DIRECT4
            all-wheel drive system, this SUV can deliver thrills like no other.
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
              <h4>FIRST-EVER RX PLUG-IN HYBRID ELECTRIC VEHICLE</h4>
            </span>

            <p>
              Based on the generously equipped Luxury grade, the RX 450h+*
              features a proven 2.5-liter in-line 4-cylinder gasoline engine, a
              high-density lithium-ion battery pack and an advanced all-wheel
              drive system. With a full charge, the RX 450h+ has a
              manufacturer-estimated 37 miles of all-electric driving range* and
              a manufacturer-estimated 83 MPGe.* And for those journeys that go
              beyond the plug, the RX 450h+ can seamlessly continue to operate
              in hybrid mode with a manufacturer-estimated 35 combined mpg.*
            </p>
          </div>
        </div>
        <div className="Followup-Spec-container">
          <div className="Followup-Image">
            <img src={thirdImage} alt="" />
          </div>
          <div className="content">
            <span>
              <h4>PROVEN POWERTRAINS</h4>
            </span>

            <p>
              The 2024 RX offers powertrains that have been finely tuned to
              deliver the dynamic performance you desire. A turbocharged
              2.4-liter in-line 4 is rated at 275 horsepower* and utilizes a
              flat torque curve to help you more easily access its 317 lb-ft of
              torque.* Or opt for the 2.5-liter electrified hybrid powertrain,
              which pairs 246 net combined horsepower* and 233 lb-ft of torque*
              with undeniable fuel efficiency.
            </p>
          </div>
        </div>
      </div>
      <div className="Click-showmore" onClick={() => setShowMore(!showMore)}>
        MORE
        <button className="Click-showmore-btn">
          {showMore ? <FaChevronUp /> : <FaChevronDown />}
        </button>
      </div>
      <SpecAside />
    </article>
  );
};

export default Performance;
