import React from "react";
import taillamp from "../../../../../Images/LEXUS/LX600/2022_LX_Feature-Design_5.jpg";
import recliningseat from "../../../../../Images/LEXUS/LX600/INTERIOR/lx-600-vip-comfort-reimagined-vip-seating.jpg";
import ambient from "../../../../../Images/LEXUS/LX600/INTERIOR/lx-600-urban-comfort-ambient-illumination.jpg";
import { useGlobalContext } from "../../../../../GlobalContext";

const DesignAside = () => {
  const design = [
    {
      Image: taillamp,
      heading: "Blade Taillamp",
      Description:
        "Making a statement from every angle, the LX features LED illumination that captivates. Its powerful rear fascia features a sleek full-width Blade Taillamp that remains illuminated at night—drawing further attention to the Lexus rear badging.",
    },

    {
      Image: recliningseat,
      heading: "RECLINING REAR SEATS",
      Description:
        "It doesn’t take a rocket scientist to create the ideal passenger seat, but it helps. Using NASA research on neutral body posture in certain zero-G applications, Lexus crafted the rear captain’s chairs in the four-seat LX to provide the ultimate in comfort. Featuring a 48-degree recline* and adjustable ottoman,* these seats are designed to position and hold passengers in their natural relaxed state.",
    },
    {
      Image: ambient,
      heading: "THEMATIC AMBIENT ILLUMINATION",
      Description:
        "Personalize your environment to suit your mood with available ambient illumination. Designed to evoke the emotions and feelings of nature, pre-selected themes include Rainforest, Waterfall and Sunset.",
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
