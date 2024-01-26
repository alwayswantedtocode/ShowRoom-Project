import SixtyDegreeFront from "../../../../../Images/LEXUS/GX/GX-BLACK-1.png";
import ThirtyDegreeFront from "../../../../../Images/LEXUS/GX/GX-BLACK-2.png";
import OneEightyDegree from "../../../../../Images/LEXUS/GX/GX-BLACK-3-3.png";
import FifteenDegreeBack from "../../../../../Images/LEXUS/GX/GX-BLACK-4.png";
import NinetyDegree from "../../../../../Images/LEXUS/GX/GX-BLACK-5.png";

import SixtyDegreeFrontW from "../../../../../Images/LEXUS/GX/GX-WHITE-1.png";
import ThirtyDegreeFrontW from "../../../../../Images/LEXUS/GX/GX-WHITE-2.png";
import OneEightyDegreeW from "../../../../../Images/LEXUS/GX/GX-WHITE-3-3.png";
import FifteenDegreeBackW from "../../../../../Images/LEXUS/GX/GX-WHITE-4.png";
import NinetyDegreeW from "../../../../../Images/LEXUS/GX/GX-WHITE-5.png";

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
