import React from "react";
import Wheels from "../../../../../Images/TOYOTAL/bZ4X/BZ4_MY23_0037_V001.webp";
import Exceptional from "../../../../../Images/TOYOTAL/bZ4X/BZ4_MY23_0044_V001.png";
import Intelligent from "../../../../../Images/TOYOTAL/bZ4X/interior/BZ4_MY23_0043_V004.png";
import { useGlobalContext } from "../../../../../Global Conext/GlobalContext";

const DesignAside = () => {
  const design = [
    {
      Image: Wheels,
      heading: "20-In. Machine-Finished Alloy Wheels",
      Description:
        "bZ4X’s available 20-in. black machine-finished alloy wheels do more than accentuate its powerful SUV build—they command your attention.",
    },

    {
      Image: Exceptional,
      heading: "Exceptional Ride",
      Description:
        "Experience a ride in tranquility. Thanks to bZ4X’s suspension system, all of its components not only provide a stable drive, but also help reduce vibrations and noise from the road. And with strategically placed sound-insulation and sound-absorbing materials placed throughout the vehicle, you’ll enjoy more you time.",
    },
    {
      Image: Intelligent,
      heading: "Intelligent Convenience",
      Description:
        "From standard rain-sensing wipers that automatically activate when the windshield gets too wet, to an auto-dimming rearview mirror that reduces glare, you’ll feel an ease with every drive. And to raise your comfort efficiently, bZ4X’s Eco function uses less overall energy by adjusting the air temp for front passengers while an available radiant foot-and-leg heater can quickly warm you up.",
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
