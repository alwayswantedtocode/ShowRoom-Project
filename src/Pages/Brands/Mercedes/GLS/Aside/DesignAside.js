import React from "react";
import headlamp from "../../../../../Images/BENZ/GLS-SUV/INTERIOR/2023-GLS-SUV-MP-038.webp";
import interior from "../../../../../Images/BENZ/GLS-SUV/INTERIOR/2023-GLS-SUV-MP-162.webp";
import kicksensor from "../../../../../Images/BENZ/GLS-SUV/INTERIOR/2023-GLS-SUV-MP-043.webp";
import { useGlobalContext } from "../../../../../GlobalContext";

const DesignAside = () => {
  const design = [
    {
      Image: headlamp,
      heading: "64-color LED ambient lighting/illuminated door sills",
      Description:
        "A network of LEDs let you create cabin ambience to suit your mood. Edge-lighting outlines the dash/door trim and console grips, and casts a glow in the footwells, door handles and door pockets. Along with 64 selectable colors and adjustable brightness, numerous programs let you enjoy two colors at once, or slowly changing hues. The dash lighting briefly acknowledges your climate-control adjustments.",
    },

    {
      Image: interior,
      heading: "Sport steering wheel",
      Description:
        "Featuring hand-stitched Nappa leather with matte silver trim on its spokes and switch bezels, the standard steering wheel offers a pleasing grip and sporty appearance. The racing-inspired flat-bottom design brings out the enthusiast in any driver. Contoured, perforated side grips invite your hands into the ideal position to enjoy the standard shift paddles.",
    },
    {
      Image: kicksensor,
      heading: "MANUFAKTUR Natural Grain Black Flamed Ash wood",
      Description:
        "A distinctive and elegantly sporty trim option, MANUFAKTUR Ash wood features a black flame-etched color and a satin finish that celebrates its natural, linear grain.",
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
