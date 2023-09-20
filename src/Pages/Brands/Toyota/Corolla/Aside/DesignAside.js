import React from "react";
import headlamp from "../../../../../Images/TOYOTAL/corolla/COR_MY20_0028_V01.png";
import Moonroof from "../../../../../Images/TOYOTAL/corolla/interior/COR_MY23_0039_V001_GvFlY4EQiPdYze9.png";
import PianoBlack from "../../../../../Images/TOYOTAL/corolla/interior/COR_MY23_0011_V001_ny6jnixSqA7xHltFd.webp";
import { useGlobalContext } from "../../../../../GlobalContext";

const DesignAside = () => {
  const design = [
    {
      Image: headlamp,
      heading: "LED Headlights With DRL",
      Description:
        "Distinctive lights. Enhanced efficiency. Corolla’s headlights feature LED Daytime Running Lights (DRL) that light up with an iconic look.",
    },

    {
      Image: Moonroof,
      heading: "Moonroof",
      Description:
        "With the touch of a button, open Corolla's available moonroof to let some sunshine in or to gaze at the stars above.",
    },
    {
      Image: PianoBlack,
      heading: "Soft-Touch Interior and Piano-Black Accents",
      Description:
        "Available piano-black accents and available soft-touch materials on the dash and doors surround you and your passengers with premium comfort and polish that are unexpected on a compact sedan.",
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
