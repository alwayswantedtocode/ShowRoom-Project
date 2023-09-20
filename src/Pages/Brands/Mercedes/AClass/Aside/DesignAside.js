import React from "react";
import Panorama from "../../../../../Images/BENZ/A-Class-Sedan/2022-A-SEDAN-MP-016.webp";
import styling from "../../../../../Images/BENZ/A-Class-Sedan/2022-A-SEDAN-MP-017.webp";
import steering from "../../../../../Images/BENZ/A-Class-Sedan/INTERIOR/2022-A-SEDAN-MP-026.webp";
import { useGlobalContext } from "../../../../../GlobalContext";

const DesignAside = () => {
  const design = [
    {
      Image: Panorama,
      heading: "Panorama roof",
      Description:
        "Offering sweeping skyward views to both front- and rear-seat passengers, this giant, fully functional glass sunroof features a large panel that can tilt up for ventilation or slide back for an open-air feeling. A power interior shade lets occupants vary the amount of sunlight entering the cabin, and you can even open and close it using the car's advanced voice control system.",
    },

    {
      Image: styling,
      heading: "AMG body styling",
      Description:
        "An aggressively sculpted front air dam, flared side sills and deep rear valance team with 18-inch AMG wheels for a gripping appearance befitting the car's handling. The front apron's outer air intakes feature a chrome splitter (finished in black with the Night Package) and matte black slats to guide air to the running gear and around to the shapely side sills. ",
    },
    {
      Image: steering,
      heading: "Sport steering wheel",
      Description:
        "The rear seats feature a center armest with convenient cupholders. An integrated control panel lets occupants adjust the audio system, seat recline and other settings, futher enhencing passenger pleeasure.",
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
