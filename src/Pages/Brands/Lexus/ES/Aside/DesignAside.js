import React from "react";
import headlamp from "../../../../../Images/LEXUS/ES/2022_lexus_es_33_1600x1200.jpg";
import interior from "../../../../../Images/LEXUS/ES/Interior/lexus-2024-es-350-fsport-circuit-red-hadori-aluminum-trim-l.jpg";
import kicksensor from "../../../../../Images/LEXUS/ES/Interior/385dd7de_360e_4955_b257_62827edbb02c_e98151ef4a.jpg";
import { useGlobalContext } from "../../../../../GlobalContext";

const DesignAside = () => {
  const design = [
    {
      Image: headlamp,
      heading: "PREMIUM TRIPLE-BEAM LED HEADLAMPS",
      Description:
        "Making a statement before you even arrive, striking available full-LED headlamps feature a three-projector design that creates an eye-catching L shape.",
    },

    {
      Image: interior,
      heading: "F SPORT HANDLING INTERIOR UPGRADES",
      Description:
        "Circuit Red–trimmed sport seats with enhanced bolsters. Hadori Aluminum trim inspired by a traditional Japanese sword-making technique. These are just two of the thrilling upgrades you'll find in the ES F SPORT Handling models.",
    },
    {
      Image: kicksensor,
      heading: "REAR ARMREST AND MULTI-OPERATION PANEL",
      Description:
        "The rear seats feature a center armest with convenient cupholders. An integrated control panel lets occupants adjust the audio system, seat recline and other settings, futher enhencing passenger pleeasure.",
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
