import React, { useState } from "react";
import SpecAside from "./Aside/SpecAside";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import firstImage from "../../../../Images/TOYOTAL/crown/2023_Crown_Platinum_BronzeAgeBiTone_023-2048x1131.jpg";
import secondImage from "../../../../Images/TOYOTAL/crown/CRW_MY23_0003_V001.png";
import thirdImage from "../../../../Images/TOYOTAL/crown/CRW_MY23_0012_V001-1.png";

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
            <h4>Hybrid MAX Powertrain</h4>
          </span>

          <p>
            Underneath Toyota Crown’s cutting-edge design is an available Hybrid
            MAX powertrain. This available powertrain pairs Toyota Crown’s 2.4L
            turbocharged engine with electric motors—generating an exceptional
            340 combined net horsepower with 400 lb.-ft. of torque. The dynamic
            placement of the electric motors between the engine and transmission
            allows for power to be transferred without any lag. The result? 0 to
            60 in 5.7 seconds. * So, whether merging onto the freeway or driving
            down city streets, the second you feel the instantaneous torque
            across the powerband, you’re ready to take on the day.
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
              <h4>Traditional Hybrid Power and Efficiency</h4>
            </span>

            <p>
              Toyota Crown XLE and Limited are equipped with a highly efficient
              hybrid system that features a high-output bipolar nickel-metal
              hydride battery. With an EPA-estimated up to 41 mpg combined
              rating * and 236 combined net horsepower, Toyota Crown’s
              remarkable combination of power and efficiency raises the bar for
              its class.
            </p>
          </div>
        </div>
        <div className="Followup-Spec-container">
          <div className="Followup-Image">
            <img src={thirdImage} alt="" />
          </div>
          <div className="content">
            <span>
              <h4>Driving Confidence</h4>
            </span>

            <p>
              Advanced capability, standard. Toyota Crown’s standard All-Wheel
              Drive (AWD) system automatically supplies power to the rear wheels
              to help improve traction. The Hybrid MAX powertrain with Full-Time
              Electronic All-Wheel Drive adjusts between a 70/30 and 20/80
              front-and rear-wheel power split for more precise control, while
              the traditional hybrid powertrains use Electronic On-Demand
              All-Wheel Drive to send up to 80% of power to the rear wheels for
              more muscle, or automatically operate in FWD mode to optimize fuel
              efficiency.
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
