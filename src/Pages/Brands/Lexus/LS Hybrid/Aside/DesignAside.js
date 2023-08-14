import React from "react";
import kicksensor from "../../../../../Images/LEXUS/LS/Whats_App_Image_2022_08_22_at_15_29_14_3_dc9c165384.jpeg";
import platedtrim from "../../../../../Images/LEXUS/LS/INTERIOR/lexus-2023-ls-500-awd-luxury-black-cut-glass-trim-l.jpg";
import massage from "../../../../../Images/LEXUS/LS/INTERIOR/Lexus-LS-massaging-seats-moredesign-tile-550x411-LEX-LSG-MY23-0002.webp";
import { useGlobalContext } from "../../../../../GlobalContext";

const DesignAside = () => {
  const design = [
    {
      Image: kicksensor,
      heading: "POWER OPEN/CLOSE TRUNK WITH KICK SENSOR",
      Description:
        "This available feature can be operated in a number of ways. You can utilize buttons on the key fob, the trunk lid or next to the steering wheel. For added convenience when your hands are full, the open/close function can be performed by waving your foot under the rear bumper.Exterior of the Lexus LS showing the 20-inch wheels with Gloss Black accents and machined finish.",
    },

    {
      Image: platedtrim,
      heading: "HAND-PLEATED TRIM",
      Description:
        "Inspired by the warm glow of traditional Japanese andon lanterns, soft LED illumination warmly invites the driver and passengers into the cabin. And light sources behind the armrest and door trim give the impression that the armrest is elegantly floating, adding to the serene atmosphere.",
    },
    {
      Image: massage,
      heading: "28-WAY POWER FRONT SEATS WITH MULTIFUNCTION MASSAGE",
      Description:
        "Created from a single piece of cloth, the available hand-pleated interior trim is a tribute to the art of origami. Simple yet painstakingly crafted, this masterful trim started as true origami and took four years to develop. The final expression is so complex and precise that it can only be folded by human hands.",
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
