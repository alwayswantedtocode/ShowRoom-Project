import SixtyDegreeFront from "../../../../../Images/BENZ/GLS-SUV/Screenshot__87_-removebg-preview.png";
import ThirtyDegreeFront from "../../../../../Images/BENZ/GLS-SUV/Screenshot__57_-removebg-preview.png";
import OneEightyDegree from "../../../../../Images/BENZ/GLS-SUV/Screenshot__55_-removebg-preview.png";
import FifteenDegreeBack from "../../../../../Images/BENZ/GLS-SUV/Screenshot__59_-removebg-preview.png";
import NinetyDegree from "../../../../../Images/BENZ/GLS-SUV/Screenshot__58_-removebg-preview.png";

import SixtyDegreeFrontW from "../../../../../Images/BENZ/GLS-SUV/Screenshot__88_-removebg-preview.png";
import ThirtyDegreeFrontW from "../../../../../Images/BENZ/GLS-SUV/Screenshot__63_-removebg-preview.png";
import OneEightyDegreeW from "../../../../../Images/BENZ/GLS-SUV/Screenshot__47_-removebg-preview.png";
import FifteenDegreeBackW from "../../../../../Images/BENZ/GLS-SUV/Screenshot__60_-removebg-preview.png";
import NinetyDegreeW from "../../../../../Images/BENZ/GLS-SUV/Screenshot__49_-removebg-preview.png";

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
