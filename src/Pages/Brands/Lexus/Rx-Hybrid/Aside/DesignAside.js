import React from "react";
import AMBIENT from "../../../../../Images/LEXUS/RX-350-HYBRID/Interior/Lexus-RX-MoreDesign-Illumination-550x411-LEX-RXG-MY23-0056.webp";
import PANORAMA from "../../../../../Images/LEXUS/RX-350-HYBRID/Interior/Lexus-RX-MoreDesign-PanoramaRoof-550x411-LEX-RXB-MY23-0007.webp";
import SENSOR from "../../../../../Images/LEXUS/RX-350-HYBRID/Lexus-RX-MoreDesign-KickSensor-550x411-LEX-RXF-MY23-0018.webp";
import { useGlobalContext } from "../../../../../GlobalContext";

const DesignAside = () => {
  const design = [
    {
      Image: AMBIENT,
      heading: "INTERIOR AMBIENT ILLUMINATION",
      Description:
        "Adding intrigue to the interior, available thematic ambient LED lighting can be tailored to suit one’s mood with 14 preset themes or your own personalized selection, and can brighten and dim in a coordinated series to welcome the driver into the RX. Soft lighting also illuminates the area surrounding the vehicle the moment you approach, for added visibility and peace of mind.",
    },

    {
      Image: PANORAMA,
      heading: "PANORAMA GLASS ROOF",
      Description:
        "An available retractable panorama roof is seamless on the outside and larger than a conventional moonroof on the inside. While the entire cabin experience is elevated with more natural light.",
    },
    {
      Image: SENSOR,
      heading: "POWER REAR DOOR WITH KICK SENSOR",
      Description:
        "The available Power Rear Door with Kick Sensor* can be opened and closed using a button on the key fob, on the door lid, or next to the steering wheel. For added convenience when your hands are full, the integrated kick sensor allows you to open the door by simply kicking your foot under the rear bumper.",
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
