import React from "react";
import fourthImage from "../../../../../Images/TOYOTAL/camry/CAM_MY21_0185_V001-2.png";
import fifthImage from "../../../../../Images/TOYOTAL/camry/interior/CAM_MY21_0186_V001.png";
import sixthImage from "../../../../../Images/TOYOTAL/camry/interior/CAM_MY18_0054_V001_wFwn93x6xPMT4Cr9wpis3Q9qGl.webp"; 
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
          <h4>Hybrid Performance</h4>
          <p>
            Get the best of both worlds. Camry Hybrid’s Dynamic Force 4-cylinder
            engine, along with a proven electric motor and smooth-shifting ECVT,
            produces ample torque and has a manufacturer-estimated rating of 46
            mpg combined. * And with available 19-in. wheels, Camry Hybrid
            proves it doesn’t sacrifice style.
          </p>
        </div>
      </div>

      <div className="Followup-Spec-containers">
        <div className="Followup-Spec-container">
          <div className="Followup-Image">
            <img src={fifthImage} alt="" />
          </div>{" "}
          <div className="content">
            <h4>Direct Shift 8-Speed Automatic Transmission</h4>
            <p>
              Camry’s refined Direct Shift 8-speed Automatic Transmission
              enhances every drive. Its low center of gravity paired with its
              use of lightweight materials improves driving stability, provides
              a smooth ride at highway speeds, and even helps improve fuel
              efficiency. *
            </p>
          </div>
        </div>
        <div className="Followup-Spec-container">
          <div className="Followup-Image">
            <img src={sixthImage} alt="" />
          </div>
          <div className="content">
            <h4>3-Mode Drive Switch (Eco/Normal/Sport)</h4>
            <p>
              Three distinct available drive modes give you even more control.
              Sport Mode indulges your spirited side with a sharper acceleration
              feel, while Eco Mode adjusts throttle input to help maximize your
              efficiency. Normal Mode blends fuel economy with performance. With
              these choices, you can instantly tailor your drive to suit your
              whim, just by pressing a button.
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SpecAside;
