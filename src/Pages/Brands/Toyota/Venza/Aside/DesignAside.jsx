import React from "react";
import Stitching from "../../../../../Images/TOYOTAL/VENZA-HYBRID/INTERIOR/VEN_MY21_0003_V001.png";
import Seats from "../../../../../Images/TOYOTAL/VENZA-HYBRID/INTERIOR/VEN_MY21_0022_V001.png";
import Wheels from "../../../../../Images/TOYOTAL/VENZA-HYBRID/VEN_MY21_0005_V003.webp";
import { useGlobalContext } from "../../../../../Global Conext/GlobalContext";

const DesignAside = () => {
  const design = [
    {
      Image: Stitching,
      heading: "Premium Seats With Contrast Stitching",
      Description:
        "Venza’s available SofTex®-trimmed * seats with color-keyed contrast stitching are as easy to sink into as they are to admire. And when you’re behind the wheel, its 8-way power driver’s seat with lumbar support lets you customize your seat of command. Comfortable and in control, you’ll be ready for whatever the day brings.",
    },

    {
      Image: Seats,
      heading: "60/40 Rear Seats",
      Description:
        "Whether you’re picking up a vintage coffee table from the boutique downtown or packing for a weekend getaway, Venza’s 60/40 split rear seats easily fold down so you can create the space you need—with room to spare.",
    },
    {
      Image: Wheels,
      heading: "Alloy Wheels",
      Description:
        "Choose from standard 18-in. multi-spoke two-tone alloy wheels, available 19-in. multi-spoke metallic-finished alloy wheels, or blacked-out 19-in. Nightshade Edition wheels to match your sense of style.",
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
