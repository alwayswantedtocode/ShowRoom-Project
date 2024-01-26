import React from "react";
import SEATING from "../../../../../Images/TOYOTAL/HIGHLANDER/INTERIOR/HLH_MY22_0009_V001.png";
import Exhaust from "../../../../../Images/TOYOTAL/HIGHLANDER/HLD_MY23_0004_V001.png";
import BRONZE from "../../../../../Images/TOYOTAL/HIGHLANDER/HLD_MY23_0003_V001.png";
import { useGlobalContext } from "../../../../../Global Conext/GlobalContext";

const DesignAside = () => {
  const design = [
    {
      Image: BRONZE,
      heading: "BRONZE EDITION",
      Description:
        "Loading cargo has never been easier than with available power 50/50-split third-row seats that fold flat into the cargo area floor. Enabling the seats to be folded flat manually or, when equipped, with the press of a button, the GX offers fast access to class-leading cargo space.",
    },

    {
      Image: SEATING,
      heading: "SEATING FOR 7 OR 8",
      Description:
        "The 2023 Highlander is as flexible as you need it to be. XSE, Limited and Platinum models offer seating for 7 with 2nd row Captain’s Chairs – heated on the Platinum. All other models comfortably seat 8 courtesy of a 2nd row bench. Large rear doors provide easy access to the 3rd row. Three-zone climate control lets everyone set their own comfort zone. New for 2023, XLE models and up are available with 8-way Power Adjustable Front Passenger Seat.",
    },
    {
      Image: Exhaust,
      heading: "Dual Exhaust With Chrome-Finished Tips",
      Description:
        "The available dual exhaust with quad chrome-finished tips dishes out a powerful look, matched only by the sporty sound. It’s sure to leave a lasting impression.",
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
