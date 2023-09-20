import React, { useState } from "react";
import SpecAside from "./Aside/SpecAside";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import firstImage from "../../../../Images/TOYOTAL/SEQUOIA/2023_Sequoia_SR5_TRDSportPackage_LunarRock_011-1500x1000.jpg";
import secondImage from "../../../../Images/TOYOTAL/SEQUOIA/TUN_MY22_0069_V002_ultnzSmZcnrladOIK8uqMDzX16mxQ.webp";
import thirdImage from "../../../../Images/TOYOTAL/SEQUOIA/SEQ_MY23_0022_V001_F_jL1OleDS7tRHhg9XJ.png";

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
            <h4>Efficiency</h4>
          </span>

          <p>
            Spend less time at the fuel pump and more time on the road. With an
            i-FORCE MAX Twin-Turbo V6 Hybrid engine, Sequoia has up to an
            EPA-estimated 22 combined mpg rating.
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
              <h4>i-FORCE MAX Twin-Turbo V6 Hybrid Powertrain</h4>
            </span>

            <p>
              Whether you’re towing a boat or driving up a hill, the technology
              of the i-FORCE MAX Twin-Turbo V6 Hybrid engine elevates
              performance with every drive. Paired with an electric motor, this
              engine packs an amazing 437 horsepower and a remarkable 583
              lb.-ft. of torque, for outstanding acceleration. Its unique
              placement between the engine and transmission efficiently
              transfers power for instant response, while the 10-speed automatic
              transmission provides excellent shifting feel. And with a
              Nickel-Metal Hydride (Ni-MH) battery that’s designed to last the
              life of your Sequoia, * you’ve got yourself a drivetrain you can
              count on.
            </p>
          </div>
        </div>
        <div className="Followup-Spec-container">
          <div className="Followup-Image">
            <img src={thirdImage} alt="" />
          </div>
          <div className="content">
            <span>
              <h4>
                Max Towing Capacity of Up to 9520 Lbs. With Integrated Trailer
                Brake Controller
              </h4>
            </span>

            <p>
              Elevate your adventures with a max towing capacity of up to 9520
              lbs. * A standard multi-link rear suspension delivers smooth ride
              comfort and towing stability, while the available Load-leveling
              Rear Height Control Air Suspension can help level the vehicle by
              lowering or raising the vehicle height according to driving
              conditions. Add Adaptive Variable Suspension (AVS), and you’ve got
              one capable towing machine. So whether you’re taking a camping
              trailer or a boat out to the lake, Sequoia helps give you peace of
              mind when towing. *
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
