import React from "react";
import leather from "../../../../../Images/BENZ/EQS-SEDAN/interior/2023-EQS-SEDAN-MP-047.png";
import roof from "../../../../../Images/BENZ/EQS-SEDAN/MBCAN-2023-EQS-SEDAN-GAL-010-XL.png";
import steering from "../../../../../Images/BENZ/EQS-SEDAN/interior/EQS-Gallery_14-XL.jpg";
import { useGlobalContext } from "../../../../../GlobalContext";

const DesignAside = () => {
  const design = [
    {
      Image: leather,
      heading: "Nappa leather steering wheel",
      Description:
        "The steering wheel's thick, padded rim is hand-stitched in supple Nappa leather.",
    },

    {
      Image: roof,
      heading: "Panorama roof",
      Description:
        "Offering both front- and rear-seat passengers sweeping skyward views, this fully functional glass sunroof features a front panel that can either tilt up for ventilation or slide over the rear panel for an open-air feeling. Dual interior power shades with controls allow the driver and each rear passenger to adjust the amount of sunlight entering the cabin.",
    },
    {
      Image: steering,
      heading: "Sport steering wheel",
      Description:
        "Perforated side grips and a racing-inspired flat-bottom design bring out the enthusiast in any driver. The contoured shape of the grip areas invites your hands into the ideal position to enjoy the energy recuperation paddles.",
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
