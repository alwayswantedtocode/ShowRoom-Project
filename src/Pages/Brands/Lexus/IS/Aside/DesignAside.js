import React from "react";
import BBSWHEELS from "../../../../../Images/LEXUS/IS/Lexus-IS-19instaggeredwidth-matteblack-bbs-wheels-moredesign-tile-550x411-LEX-ISG-MY21-0099-03.webp";
import QUADEXHAUST from "../../../../../Images/LEXUS/IS/IS-gallery-15-desktop.webp";
import EXTRIORSTYLING from "../../../../../Images/LEXUS/IS/2022-lexus-is-500-v8-blue-07_header.jpg";
import { useGlobalContext } from "../../../../../Global Conext/GlobalContext";

const DesignAside = () => {
  const design = [
    {
      Image: BBSWHEELS,
      heading: "19-INCH STAGGERED-WIDTH MATTE BLACK BBS WHEELS",
      Description:
        "Exclusive for the IS 500 F SPORT Performance, a throaty quad exhaust with stacked tailpipes reduces back pressure for enhanced high-rpm output, and amplifies the powerful V8. It produces a menacing sound you have to hear to believe. Exterior of the Lexus IS showing the singular taillamp design.",
    },

    {
      Image: QUADEXHAUST,
      heading: "STACKED QUAD EXHAUST TIPS",
      Description:
        "Inspired by the warm glow of traditional Japanese andon lanterns, soft LED illumination warmly invites the driver and passengers into the cabin. And light sources behind the armrest and door trim give the impression that the armrest is elegantly floating, adding to the serene atmosphere.",
    },
    {
      Image: EXTRIORSTYLING,
      heading: "F SPORT EXTERIOR STYLING",
      Description:
        "Unmistakable style meets exhilarating performance with the IS F SPORT and IS F SPORT Design. Both boast bold 19-inch wheels, as well as Gloss Black accents around the grille, lower rocker and rear lip spoiler.",
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
