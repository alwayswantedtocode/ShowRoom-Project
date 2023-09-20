import React from "react";
import fourthImage from "../../../../../Images/TOYOTAL/SEQUOIA/INTERIOR/SEQ_MY23_0026_V001_xtYKAvJVhLlHSl118.webp";
import fifthImage from "../../../../../Images/TOYOTAL/SEQUOIA/INTERIOR/SEQ_MY23_0023_V001_xs0QDlSJV77PjHzA19bGUIRO2P82t.webp";
import sixthImage from "../../../../../Images/TOYOTAL/SEQUOIA/SEQ_MY23_0087_V002_features_mYnuuGOrlojdIsd9iIOJv3GKg7C_.webp";
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
          <h4>Drive Mode Select</h4>
          <p>
            Enhance every drive the way you see fit. With Drive Mode Select,
            simply press a button to choose between different drive modes
            depending on the situation. Whether that’s traveling on a dirt road
            or an open highway, performance can be optimized.
          </p>
        </div>
      </div>

      <div className="Followup-Spec-containers">
        <div className="Followup-Spec-container">
          <div className="Followup-Image">
            <img src={fifthImage} alt="" />
          </div>{" "}
          <div className="content">
            <h4>TOW/HAUL and Tow+ Mode</h4>
            <p>
              Sequoia is built to bring things along. With TOW/HAUL and Tow+
              Mode, Sequoia adjusts its transmission settings to maximize ideal
              towing parameters, which increases towing capability and
              performance, so you can take control on dirt trails or inclined
              roads.
            </p>
          </div>
        </div>
        <div className="Followup-Spec-container">
          <div className="Followup-Image">
            <img src={sixthImage} alt="" />
          </div>
          <div className="content">
            <h4>Towing Technology</h4>
            <p>
              Equipped with a digital display rearview mirror and Trailer Backup
              Guide with Straight Path Assist, * the available Tow Technology
              Package helps give you peace of mind and make your haul a breeze.
              Pair these with the available trailer Wi-Fi camera * that helps
              provide either a near-field view to help keep your trailer in a
              straight line when you’re backing up, or a long-distance view
              while you’re driving.
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SpecAside;
