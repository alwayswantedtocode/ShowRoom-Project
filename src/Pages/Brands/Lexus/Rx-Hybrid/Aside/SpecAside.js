import React from "react";
import fourthImage from "../../../../../Images/LEXUS/RX-350-HYBRID/Interior/2023-Lexus-RX-500h-F-Sport-Interior-Wallpaper.jpg";
import fifthImage from "../../../../../Images/LEXUS/RX-350-HYBRID/Lexus-RX-MorePerformance-Dynamic-Rear-Steering-550x411-LEX-RXF-MY23-0030.04.jpg";
import sixthImage from "../../../../../Images/LEXUS/RX-350-HYBRID/Lexus-RX-MorePerformance-AWD-550x411-LEX-RXB-MY23-0005.webp";
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
          <h4>DIRECT4 AWD</h4>
          <p>
            The RX 500h F SPORT Performance AWD features the innovative DIRECT4
            all-wheel drive system and utilizes a high-output electronic axle
            (eAxle) to help drive all four wheels. Highly intelligent, this
            system constantly monitors how each individual wheel is interacting
            with the road, imperceptibly shifting power as needed to optimize
            traction and heighten your feeling of control. Exterior of the 2024
            RX 500h F SPORT Performance shown in Copper Crest.
          </p>
        </div>
      </div>

      <div className="Followup-Spec-containers">
        <div className="Followup-Spec-container">
          <div className="Followup-Image">
            <img src={fifthImage} alt="" />
          </div>{" "}
          <div className="content">
            <h4>DYNAMIC REAR STEERING</h4>
            <p>
              Get more from every turn. Standard on the RX 500h F SPORT
              Performance, Dynamic Rear Steering can add a slight steering angle
              to the rear wheels as needed for easier maneuverability at low
              speeds and more confidence around curves at higher speeds.
              Exterior shot of the 2024 RX Hybrid shown in Nightfall Mica
              driving along a snowy road.
            </p>
          </div>
        </div>
        <div className="Followup-Spec-container">
          <div className="Followup-Image">
            <img src={sixthImage} alt="" />
          </div>
          <div className="content">
            <h4>ALL-WHEEL DRIVE</h4>
            <p>
              Turbocharged RX models offer an all-wheel drive system that can
              automatically shift engine power between the front and rear axles,
              and can send as much as 50% of available power to the rear wheels
              when needed. And on the RX Hybrid and RX Plug-in Hybrid Electric
              Vehicle, the electronic all-wheel drive system features a rear
              electric motor that delivers instantaneous torque to the rear
              wheels when you need it.
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SpecAside;
