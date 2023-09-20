import SixtyDegreeFront from "../../../../../Images/LEXUS/IS/large-1__2_-removebg-preview.png";
import ThirtyDegreeFront from "../../../../../Images/LEXUS/IS/IS-Black-removebg-preview.png";
import OneEightyDegree from "../../../../../Images/LEXUS/IS/large-2__2_-removebg-preview (1).png";
import FifteenDegreeBack from "../../../../../Images/LEXUS/IS/large-3__1_-removebg-preview.png";
import NinetyDegree from "../../../../../Images/LEXUS/IS/large-5__1_-removebg-preview.png";

import SixtyDegreeFrontW from "../../../../../Images/LEXUS/IS/large-1__1.png";
import ThirtyDegreeFrontW from "../../../../../Images/LEXUS/IS/large-4-removebg-preview.png";
import OneEightyDegreeW from "../../../../../Images/LEXUS/IS/large-2__1_-removebg-preview.png";
import FifteenDegreeBackW from "../../../../../Images/LEXUS/IS/large-3-removebg-preview (1).png";
import NinetyDegreeW from "../../../../../Images/LEXUS/IS/large-5-removebg-preview.png";

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
