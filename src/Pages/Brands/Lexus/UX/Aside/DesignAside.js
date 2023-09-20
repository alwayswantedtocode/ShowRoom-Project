import React from "react";
import taillamp from "../../../../../Images/LEXUS/UX-HYBRID/Lexus-UXh-gallery-desktop-1440x811-LEX-UXH-MY23-0068.png";
import KICKSENSOR from "../../../../../Images/LEXUS/UX-HYBRID/Lexus-UXh-power-rear-door-moredesign-tile-550x411-LEX-UXH-MY23-0080.webp";
import SEATING from "../../../../../Images/LEXUS/UX-HYBRID/Interior/Lexus-UXh-heated-ventilated-tile-550x411-LEX-UXG-MY23-0006.webp";
import { useGlobalContext } from "../../../../../GlobalContext";

const DesignAside = () => {
  const design = [
    {
      Image: taillamp,
      heading: "AERODYNAMIC TAILLAMPS",
      Description:
        "Striking from every angle, the UX Hybrid features captivating rear lighting. Its aerodynamic taillamps blend 120 LEDs into one continuous line that tapers to a mere three millimeters in the center.",
    },

    {
      Image: KICKSENSOR,
      heading: "POWER REAR DOOR WITH KICK SENSOR",
      Description:
        "There are numerous ways to open and close the available power rear door of the UX Hybrid. You can press a button either on the key fob, on the door lid or next to the steering wheel. For added convenience when your hands are full, a kick sensor enables the open/close function to be performed by waving your foot under the rear bumper.",
    },
    {
      Image: SEATING,
      heading: "HEATED AND VENTILATED SEATING",
      Description:
        "Available heating and ventilation take the comfort of the front seats even further. Featuring separate heaters and fans in the seat cushions, they provide optimum comfort, regardless of the weather.",
    },
  ];

  const { showMore1} = useGlobalContext();

  return (
    <aside className={`DesignAside ${showMore1 ? "active" : ""}`}>
      <div className="design-card-wrapper">
        {design.map((cards, index) => {
          const { Image, heading, Description } = cards;
          return (
            <div className="design-card" key={index}>
              <div className="card-image">
                <img src={Image} alt="" />
              </div>
              
                <div className="card-info">
                  <h4>{heading}</h4>
                  <p>{Description}</p>
                </div>
             
            </div>
          );
        })}
      </div>
    </aside>
  );
};

export default DesignAside;
