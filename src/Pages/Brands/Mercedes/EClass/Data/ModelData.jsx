import SixtyDegreeFront from "../../../../../Images/BENZ/E-Class-Sedan/Screenshot__79_-removebg-preview.png";
import ThirtyDegreeFront from "../../../../../Images/BENZ/E-Class-Sedan/Screenshot__101_-removebg-preview.png";
import OneEightyDegree from "../../../../../Images/BENZ/E-Class-Sedan/Screenshot__104_-removebg-preview.png";
import FifteenDegreeBack from "../../../../../Images/BENZ/E-Class-Sedan/Screenshot__105_-removebg-preview.png";
import NinetyDegree from "../../../../../Images/BENZ/E-Class-Sedan/Screenshot__108_-removebg-preview.png";

import SixtyDegreeFrontW from "../../../../../Images/BENZ/E-Class-Sedan/Screenshot__80_-removebg-preview.png";
import ThirtyDegreeFrontW from "../../../../../Images/BENZ/E-Class-Sedan/Screenshot__102_-removebg-preview.png";
import OneEightyDegreeW from "../../../../../Images/BENZ/E-Class-Sedan/Screenshot__103_-removebg-preview.png";
import FifteenDegreeBackW from "../../../../../Images/BENZ/E-Class-Sedan/Screenshot__106_-removebg-preview.png";
import NinetyDegreeW from "../../../../../Images/BENZ/E-Class-Sedan/Screenshot__107_-removebg-preview.png";

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
