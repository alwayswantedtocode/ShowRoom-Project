import React from "react";
import Taillights from "../../../../../Images/TOYOTAL/camry/CAM_MY21_0008_V001-1.png";
import Details from "../../../../../Images/TOYOTAL/camry/interior/CAM_MY23_0007_V001_K0TIt5c6W57iZxqOv0nrQ4SQ4r_.png";
import Style from "../../../../../Images/TOYOTAL/camry/CAM_MY21_0005_V002.png";
import { useGlobalContext } from "../../../../../GlobalContext";

const DesignAside = () => {
  const design = [
    {
      Image: Taillights,
      heading: "LED Taillights",
      Description:
        "Camry’s available LED taillights feature an eye-catching organic shape that flows seamlessly into the rear bumper. These distinctive lights ensure you're always seen.",
    },

    {
      Image: Details,
      heading: "Seat Details",
      Description:
        "Step inside to experience a bold look available on Camry XLE. This unique interior features a herringbone seat pattern that adds the finishing touch to your ride. Such finely crafted details ensure your style never takes a back seat.",
    },
    {
      Image: Style,
      heading: "Standout Style",
      Description:
        "Let the aggressive lines of the available metallic front grille with chrome accents draw you in. The available sport-mesh insert projects a finely machined appearance. Standard Bi-LED combination headlights add a stylish touch, stretching outwardly from the thin upper grille.",
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
