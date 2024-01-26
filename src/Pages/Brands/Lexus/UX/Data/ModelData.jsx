import SixtyDegreeFront from "../../../../../Images/LEXUS/UX-HYBRID/UX-BLACK-1-removebg-preview.png";
import ThirtyDegreeFront from "../../../../../Images/LEXUS/UX-HYBRID/UX-BLACK-4-removebg-preview.png";
import OneEightyDegree from "../../../../../Images/LEXUS/UX-HYBRID/UX-BLACK-2-removebg-preview.png";
import FifteenDegreeBack from "../../../../../Images/LEXUS/UX-HYBRID/UX-BLACK-3-removebg-preview.png";
import NinetyDegree from "../../../../../Images/LEXUS/UX-HYBRID/UX-BLACK-5-removebg-preview.png";

import SixtyDegreeFrontW from "../../../../../Images/LEXUS/LX600/LX-WHITE-1-1.png";
import ThirtyDegreeFrontW from "../../../../../Images/LEXUS/LX600/LX-WHITE-2.png";
import OneEightyDegreeW from "../../../../../Images/LEXUS/LX600/LX-WHITE-3.png";
import FifteenDegreeBackW from "../../../../../Images/LEXUS/LX600/LX-WHITE-4.png";
import NinetyDegreeW from "../../../../../Images/LEXUS/LX600/LX-WHITE-5.png";

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
