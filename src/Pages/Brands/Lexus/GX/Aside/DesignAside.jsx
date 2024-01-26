import React from "react";
import presence from "../../../../../Images/LEXUS/GX/lexus-2023-gx-460-side-atomic-silver-l.jpg";
import leather from "../../../../../Images/LEXUS/GX/INTERIOR/lexus-2023-gx-460-features-design-genuine-leather-upholstery-l.jpg";
import versatility from "../../../../../Images/LEXUS/GX/INTERIOR/lexus-2023-gx-460-features-design-ample-cargo-space-l.jpg";
import { useGlobalContext } from "../../../../../Global Conext/GlobalContext";

const DesignAside = () => {
  const design = [
    {
      Image: versatility,
      heading: "BUILT IN VERSATILITY",
      Description:
        "Loading cargo has never been easier than with available power 50/50-split third-row seats that fold flat into the cargo area floor. Enabling the seats to be folded flat manually or, when equipped, with the press of a button, the GX offers fast access to class-leading cargo space.",
    },

    {
      Image: presence,
      heading: "REFINED INTERIOR",
      Description:
        "GX amplifies its commanding presence with aggressive front grille flanked by triple LED headlights with a pronounced ‘L’ motif. Large 18” or available 19” alloy wheels anchor the corners. Front and rear spoilers add a dimension of dynamism. All set off by striking colours including Nori Green.",
    },
    {
      Image: leather,
      heading: "REFINED INTERIOR",
      Description:
        "Lexus GX’s interior is intentionally sturdy in design and then polished to an elegant finish. Strength and prestige are exemplified by an instrument panel seemingly forged from a single block of steel, encasing a 10.3” touchscreen display, and perfectly juxtaposed to the softness of leather and warmth of finishes like Grey Sapele wood with aluminum trim.",
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
