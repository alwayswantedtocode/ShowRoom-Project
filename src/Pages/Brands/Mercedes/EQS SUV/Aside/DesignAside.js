import React from "react";
import aero from "../../../../../Images/BENZ/EQS-SUV/2023-EQS-SUV-MP-029.jpg";
import seemless from "../../../../../Images/BENZ/EQS-SUV/2023-EQS-SUV-MP-027.jpg";
import kicksensor from "../../../../../Images/BENZ/EQS-SUV/Interior/2023-EQS-SUV-Gallery_022-XL.jpg";
import { useGlobalContext } from "../../../../../GlobalContext";

const DesignAside = () => {
  const design = [
    {
      Image: aero,
      heading: "Advanced aerodynamics",
      Description:
        "An additional benefit of the purpose-built design of the EQS is the achievement of aerodynamics that can inspire the entire industry, not just the luxury SUV segment. Streamlining, seam sealing and minimization, mirror location, flush door handles, wheel designs, tire spoilers ahead of each wheel, highly smooth underbody paneling, a standard rear roof spoiler, and self-lowering air suspension all add up to enhance quiet comfort, stable handling, driving range and efficiency..",
    },

    {
      Image: seemless,
      heading: "Seamless design",
      Description:
        "The sensual purity of the EQS SUV design is rooted in its all-electric architecture, but comes to life on every surface. Cab-forward proportions, a long wheelbase with 4-wheel steering pair luxurious room with nimble handling. Black wheel arches and side sills pair with flowing yet muscular sculpting to express strength with a sleek, sporty and agile poise. The Black Panel front and full-width front and rear light bars are symbolic of the futuristic elegance within.",
    },
    {
      Image: kicksensor,
      heading: "Nappa leather steering wheel",
      Description:
        "The steering wheel's thick, padded rim is hand-stitched in supple Nappa leather.",
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
