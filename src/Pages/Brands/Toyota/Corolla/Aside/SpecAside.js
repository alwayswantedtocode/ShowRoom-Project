import React from "react";
import fourthImage from "../../../../../Images/TOYOTAL/corolla/COH_MY23_0027_V001_QDMWE6V3NYVlrcfJ.webp";
import fifthImage from "../../../../../Images/TOYOTAL/corolla/Corolla-3.png";
import sixthImage from "../../../../../Images/TOYOTAL/corolla/interior/COR_MY21_0005_V01.png";
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
          <h4>Electronic On-Demand AWD</h4>
          <p>
            The power of an intelligent grip. Corolla Hybrid’s available
            Electronic On-Demand All-Wheel Drive (AWD) provides all-weather
            capability and confident on-road driving dynamics. The system uses a
            dedicated electric drive motor to automatically supply power to the
            rear wheels for instant improvement in traction.
          </p>
        </div>
      </div>

      <div className="Followup-Spec-containers">
        <div className="Followup-Spec-container">
          <div className="Followup-Image">
            <img src={fifthImage} alt="" />
          </div>{" "}
          <div className="content">
            <h4>Hybrid Performance</h4>
            <p>
              Corolla Hybrid’s engine features performance you can feel. With
              138 horsepower, it’ll reveal itself in every drive. And with a
              manufacturer-estimated up to 50 combined mpg,* you can go farther
              in everything you do.
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
