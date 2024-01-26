import React from "react";
import STEERING from "../../../../../Images/TOYOTAL/crown/interior/2023_Toyota_Crown_Steering_Wheel_1.jpg";
import interior from "../../../../../Images/TOYOTAL/crown/interior/toyota-2023-crown-platinum-interior-softex-black-back-seats-l.jpg";
import CABIN from "../../../../../Images/TOYOTAL/crown/interior/1.jpg";
import { useGlobalContext } from "../../../../../Global Conext/GlobalContext";

const DesignAside = () => {
  const design = [
    {
      Image: STEERING,
      heading: "NEW STEERING WHEEL DESIGN",
      Description:
        "Balanced with intuitive controls, the new universal design fits comfortably in any hand and any grip. Leather wrapped with available heating in the Limited and Platinum.",
    },

    {
      Image: interior,
      heading: "SPACIOUS SEATING",
      Description:
        "Offering comfort and style, Toyota Crown comes with standard heated front seats with lumbar support for the driver as well as 8-way power adjustments for both driver and front passenger. Limited and Platinum add standard ventilated front seats and heated rear seats, with mixed leather covering.",
    },
    {
      Image: CABIN,
      heading: "FIRST CLASS CABIN",
      Description:
        "Exemplary comfort comes standard on the Crown with an attention to detail inside that pairs perfectly with stylish exterior. The island architecture appeals to the eye with rich, ample space while putting everything within easy reach for high functionality without distracting sight lines.",
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
