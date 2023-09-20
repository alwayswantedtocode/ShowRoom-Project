import SixtyDegreeFront from "../../../../../Images/BENZ/Mercedes-Maybach/Screenshot__89_-removebg-preview.png";
import ThirtyDegreeFront from "../../../../../Images/BENZ/Mercedes-Maybach/Screenshot__64_-removebg-preview.png";
import OneEightyDegree from "../../../../../Images/BENZ/Mercedes-Maybach/Screenshot__67_-removebg-preview.png";
import FifteenDegreeBack from "../../../../../Images/BENZ/Mercedes-Maybach/Screenshot__110_-removebg-preview (1).png";
import NinetyDegree from "../../../../../Images/BENZ/Mercedes-Maybach/Screenshot__72_-removebg-preview.png";

import SixtyDegreeFrontW from "../../../../../Images/BENZ/Mercedes-Maybach/Screenshot__90_-removebg-preview.png";
import ThirtyDegreeFrontW from "../../../../../Images/BENZ/Mercedes-Maybach/Screenshot__65_-removebg-preview.png";
import OneEightyDegreeW from "../../../../../Images/BENZ/Mercedes-Maybach/Screenshot__66_-removebg-preview.png";
import FifteenDegreeBackW from "../../../../../Images/BENZ/Mercedes-Maybach/Screenshot__111_-removebg-preview.png";
import NinetyDegreeW from "../../../../../Images/BENZ/Mercedes-Maybach/Screenshot__70_-removebg-preview.png";

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
