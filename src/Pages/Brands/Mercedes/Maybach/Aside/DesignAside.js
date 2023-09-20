import React from "react";
import Burmester from "../../../../../Images/BENZ/Mercedes-Maybach/New folder/3x4_Maybach-GLS_Detail1.jpeg";
import recliningseat from "../../../../../Images/BENZ/Mercedes-Maybach/New folder/2022-GLS-MAYBACH-SUV-GAL-010-Q-FI-DR.jpg";
import ambient from "../../../../../Images/BENZ/Mercedes-Maybach/New folder/2024-MAYBACH-GLS-SUV-FMG-011-DR.webp";
import { useGlobalContext } from "../../../../../GlobalContext";

const DesignAside = () => {
  const design = [
    {
      Image: Burmester,
      heading: " 3D Burmester Sound",
      Description:
        " Listening to music becomes a celebration: with the brilliant Burmester High-End 3D Surround Sound System. Truly virtuosic, the pure sound pearls to the travelers via the 26 loudspeakers distributed in an orchestrated manner. Festival halls and concert halls can be experienced, especially thanks to an extended sound reproduction in the height.",
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

  const { showMore1 } = useGlobalContext();

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
