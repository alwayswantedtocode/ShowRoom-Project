import SixtyDegreeFront from "../../../../../Images/BENZ/A-Class-Sedan/Screenshot__77_-removebg-preview.png";
import ThirtyDegreeFront from "../../../../../Images/BENZ/A-Class-Sedan/Screenshot__93_-removebg-preview.png";
import OneEightyDegree from "../../../../../Images/BENZ/A-Class-Sedan/Screenshot__96_-removebg-preview.png";
import FifteenDegreeBack from "../../../../../Images/BENZ/A-Class-Sedan/Screenshot__97_-removebg-preview.png";
import NinetyDegree from "../../../../../Images/BENZ/A-Class-Sedan/Screenshot__100_-removebg-preview.png";

import SixtyDegreeFrontW from "../../../../../Images/BENZ/A-Class-Sedan/Screenshot__78_-removebg-preview.png";
import ThirtyDegreeFrontW from "../../../../../Images/BENZ/A-Class-Sedan/Screenshot__94_-removebg-preview.png";
import OneEightyDegreeW from "../../../../../Images/BENZ/A-Class-Sedan/Screenshot__95_-removebg-preview.png";
import FifteenDegreeBackW from "../../../../../Images/BENZ/A-Class-Sedan/Screenshot__98_-removebg-preview.png";
import NinetyDegreeW from "../../../../../Images/BENZ/A-Class-Sedan/Screenshot__99_-removebg-preview.png";

const exteriorheading = "EXTERIOR OPTIONS";
const performanceheading = "PERFORMANCE";
const designheading = "DESIGN";
const galleryheading = "GALLERY";
const techheading = "TECHNOLOGY";
const paragraph =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo lacinia lectus ut vulputate.";
const slide = [
  {
    Title: "Black",
    Color: [
      { Image: SixtyDegreeFront, Name: "Black" },
      { Image: ThirtyDegreeFront, Name: "Black" },
      { Image: OneEightyDegree, Name: "Black" },
      { Image: FifteenDegreeBack, Name: "Black" },
      { Image: NinetyDegree, Name: "Black" },
    ],
  },
  {
    Title: "White",
    Color: [
      { Image: SixtyDegreeFrontW, Name: "White" },
      { Image: ThirtyDegreeFrontW, Name: "White" },
      { Image: OneEightyDegreeW, Name: "White" },
      { Image: FifteenDegreeBackW, Name: "White" },
      { Image: NinetyDegreeW, Name: "White" },
    ],
  },
];

export {
  exteriorheading,
  performanceheading,
  designheading,
  galleryheading,
  techheading,
  slide as default,
};
