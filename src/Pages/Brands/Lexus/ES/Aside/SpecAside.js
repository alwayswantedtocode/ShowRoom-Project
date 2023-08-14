import React from "react";
import fourthImage from "../../../../../Images/LEXUS/ES/1051605.jpg";
import fifthImage from "../../../../../Images/LEXUS/ES/Used-2019-Lexus-ES-350-F-SPORT-35L-SEDAN-8-SPD-NAV-SUNROOF-REARVIEW.jpg";
import sixthImage from "../../../../../Images/LEXUS/ES/Interior/2020-Lexus-ES-Front-Interior-and-Dashboard.jpg";
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
            <h4>IN-LINE 4 ENGINE</h4>
            <p>
              Pave your path with more confidence with the ES 250 AWD and ES 250
              F SPORT Design AWD. Both models feature a potent 2.5-liter in-line
              four-cylinder engine for an impressive manufacturer-estimated
              34-MPG highway rating.*
            </p>
          </div>
        </div>
        <div className="Followup-Spec-container">
          <div className="Followup-Image">
            <img src={sixthImage} alt="" />
          </div>
          <div className="content">
            <h4>8-SPEED TRANSMISSION WITH PADDLE SHIFTERS</h4>
            <p>
              Further amplifying the breathtaking performance of the ES, an
              eight-speed automatic transmission delivers intuitive handling and
              acceleration. And lightning-fast paddle shifters deliver faster
              and smoother gear changes for greater agility when you are coming
              out of corners.
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SpecAside;
