import React from "react";
import steering from "../../../../../Images/BENZ/EQB-SUV/INTERIOR/2022-EQB-SUV-GAL-027-XL.jpg";
import futuristic from "../../../../../Images/BENZ/EQB-SUV/INTERIOR/585634-mercedes-benz-eqb-2024-deja-plusieurs-changements.jpeg";
import panorama from "../../../../../Images/BENZ/EQB-SUV/2022-EQB-SUV-2.jpg";
import { useGlobalContext } from "../../../../../GlobalContext";

const DesignAside = () => {
  const design = [
    {
      Image: steering,
      heading: "Sport steering wheel",
      Description:
        "The multifunction sports steering wheel in nappa leather with control panels in chrome and grip area in DINAMICA microfibre sits perfectly in the hand. It is a dream partner for dynamic driving when the direction changes fast.",
    },

    {
      Image: futuristic,
      heading: "Flexible, futuristic cabin",
      Description:
        "Versatile seating, cutting-edge technology and modern style team up to create a cabin that works well and looks great.",
    },
    {
      Image: panorama,
      heading: "Panorama roof",
      Description:
        "Offering sweeping skyward views to both 1st- and 2nd-row passengers, this giant, fully functional glass sunroof features a large panel that can tilt up for ventilation or slide back for an open-air feeling. A power interior shade lets occupants vary the amount of sunlight entering the cabin, and you can even open and close it using the car's advanced voice control system.",
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
