import React from "react";
import WheelDesign from "../../../../../Images/TOYOTAL/SEQUOIA/SEQ_MY23_0005_V001_OWGaRoCcrgxdTaXW7TCWhKf3.png";
import PowerExtending from "../../../../../Images/TOYOTAL/SEQUOIA/SEQ_MY23_0040_V001_kCUwpOOZd_cOI0ZlUNqT4.webp";
import Design from "../../../../../Images/TOYOTAL/SEQUOIA/SEQ_MY23_0015_V001_zQEIHWfZeZ.png";
import { useGlobalContext } from "../../../../../GlobalContext";

const DesignAside = () => {
  const design = [
    {
      Image: WheelDesign,
      heading: "Wheel Design",
      Description:
        "Look good wherever you are. The sleek design of the large, available 22-in. alloy wheels enhances Sequoia’s sizable presence while capturing luxury from another angle.",
    },

    {
      Image: PowerExtending,
      heading: "Power-Extending Tow Mirrors",
      Description:
        "Put your mind at ease by feeling good about what you’re towing. Available power-folding, -extending and -retracting tow mirrors increase your ability to see, and make towing easier and safer for starting your adventure. *",
    },
    {
      Image: Design,
      heading: "Sophisticated Design",
      Description:
        "The rugged yet sophisticated design of Sequoia commands attention. Its bold character is accentuated by its sizable presence and adds unique details that help it stand out on its own. With modern styling enhanced by premium touches, Sequoia lets you experience comfort with every drive.",
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
