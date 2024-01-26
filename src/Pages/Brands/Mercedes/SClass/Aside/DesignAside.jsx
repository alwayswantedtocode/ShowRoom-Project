import React from "react";
import Metallic from "../../../../../Images/BENZ/S-Class-Sedan/INTERIOR/2023-S-SEDAN-MP-039.webp";
import floor from "../../../../../Images/BENZ/S-Class-Sedan/INTERIOR/2023-S-SEDAN-MP-040.webp";
import Nappa from "../../../../../Images/BENZ/S-Class-Sedan/INTERIOR/2023-S-SEDAN-MP-042.webp";
import { useGlobalContext } from "../../../../../Global Conext/GlobalContext";

const DesignAside = () => {
  const design = [
    {
      Image: Metallic,
      heading: "Black/Silver Metallic Mixed Look console trim",
      Description:
        "Console trim in a sporty, high-tech design complements the Black/Silver Blended Stainless Steel dash trim that's available with the AMG Line.",
    },

    {
      Image: floor,
      heading: "AMG floor mats",
      Description:
        "Plush, carpeted floor mats feature leather-look borders and embroidered AMG logos.",
    },
    {
      Image: Nappa,
      heading: "Nappa leather steering wheel",
      Description:
        "Included with some cabin trim choices is a steering wheel whose rim is entirely stitched in supple Nappa leather. For drivers who prefer it, can be specified with the other trims in lieu of the standard wood/leather wheel at no charge.",
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
