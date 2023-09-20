import React from "react";
import headlamp from "../../../../../Images/BENZ/E-Class-Sedan/2023-E-SEDAN-MP-027.webp";
import Panorama from "../../../../../Images/BENZ/E-Class-Sedan/2023-E-SEDAN-MP-028.webp";
import wheels from "../../../../../Images/BENZ/E-Class-Sedan/2023-E-SEDAN-MP-035.webp";
import { useGlobalContext } from "../../../../../GlobalContext";

const DesignAside = () => {
  const design = [
    {
      Image: headlamp,
      heading: "All-LED exterior lighting",
      Description:
        "From its headlamps to its distinctive taillamps, a network of long-lasting and energy-efficient LEDs accomplish every exterior lighting function with distinctive style. The taillamps feature a horizontal design that flows with the shapely trunklid.",
    },

    {
      Image: Panorama,
      heading: "Panorama roof",
      Description:
        "Offering both front- and rear-seat passengers sweeping skyward views, this fully functional glass sunroof features a large panel that can either tilt up for ventilation or slide back for an open-air feeling. An interior power sunshade lets you adjust the amount of sunlight entering the cabin.",
    },
    {
      Image: wheels,
      heading: "18-inch multispoke wheels",
      Description:
        "Sporty yet elegant 18-inch multispoke wheels feature 16 thin spokes for a turbine-style look. The wheels are outfitted with all-season Extended Mobility tires.",
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
