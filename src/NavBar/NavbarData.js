import AClass from "../Images/BENZ/A-Class-Sedan/2022-A-SEDAN-8.jpg";
import EClass from "../Images/BENZ/E-Class-Sedan/2022-E-SEDAN.jpg";
import SClass from "../Images/BENZ/S-Class-Sedan/2022-S-SEDAN.jpg";
import EQS from "../Images/BENZ/EQS-SEDAN/EQS-Gallery_4-XL.jpg";
import GLS from "../Images/BENZ/GLS-SUV/2022-GLS-SUV.jpg";
import Maybach from "../Images/BENZ/Mercedes-Maybach/Emerald-Green.jpg";
import EQB from "../Images/BENZ/EQB-SUV/Rose Gold.jpg";
import EQSSUV from "../Images/BENZ/EQS-SUV/iris (1).jpg";
import ES from "../Images/LEXUS/ES/2022_lexus_es_5_1600x1200.jpg";
import LS from "../Images/LEXUS/LS/dxp-2022-lexus-ls-gallery-07.png";
import IS from "../Images/LEXUS/IS/lexus-2023-is-300.jpg";
import LSHybrid from "../Images/LEXUS/LS/lexus-2023-ls-500-awd-fsport-atomic-silver-front-l.jpg";
import GX from "../Images/LEXUS/GX/Lexus-GX-15-Gallery.png";
import LX from "../Images/LEXUS/LX600/Lexus-lx-gallery-thumbnail-12-desktop.png";
import RX from "../Images/LEXUS/RX-350-HYBRID/lexus-2023-rx-500h-f-sport-performance-copper-crest-l.jpg";
import UX from "../Images/LEXUS/UX-HYBRID/UX-HYBRID.png";
import corolla from "../Images/TOYOTAL/corolla/Corolla-13.png";
import camry from "../Images/TOYOTAL/camry/Camry-one.png";
import crown from "../Images/TOYOTAL/crown/Crown-one.png";
import crownhybrid from "../Images/TOYOTAL/crown/toyota-crown-2023-voici-les-prix.jpeg";
import highlander from "../Images/TOYOTAL/HIGHLANDER/HLD_MY23_0009_V001.png";
import sequoira from "../Images/TOYOTAL/SEQUOIA/Sequoira-one.png";
import venza from "../Images/TOYOTAL/VENZA-HYBRID/VENZER-HYBRID-9.png";
import bz4x from "../Images/TOYOTAL/bZ4X/BZ4_MY23_0065_V001.webp";
// import bz4x from "../Images/TOYOTAL/bZ4X/BZ4_MY23_0065_V001.png";
const SubMenuLinks = [
  {
    page: "Brands",

    Links: [
      {
        // id: 1,
        names: "Mercedes-Benz",
        path: "Mercedespage",
        subLinks: [
          {
            Description: "A-CLASS SEDAN",
            image: AClass,
            url: "Mercedes/Sedan/A-Class",
          },
          {
            Description: "E-CLASS SEDAN",
            image: EClass,
            url: "Mercedes/Sedan/E-Class",
          },
          {
            Description: "S-CLASS SEDAN",
            image: SClass,
            url: "Mercedes/Sedan/S-Class",
          },
          {
            Description: "EQS SEDAN",
            image: EQS,
            url: "Mercedes/EV-Sedan/EQS",
          },
          {
            Description: "GLS SUV",
            image: GLS,
            url: "Mercedes/SUV/GLS",
          },
          {
            Description: "MAYBACH GLS SUV",
            image: Maybach,
            url: "Mercedes/SUV/MayBach",
          },
          {
            Description: "EQB SUV",
            image: EQB,
            url: "Mercedes/EV-SUV/EQB",
          },
          {
            Description: "EQS SUV",
            image: EQSSUV,
            url: "Mercedes/EV-SUV/EQS",
          },
        ],
      },
      //LEXUS
      {
        // id: 1,
        names: "Lexus",
        path: "/Lexuspage",
        subLinks: [
          {
            Description: "LEXUS ES",
            image: ES,
            url: "Lexus/Sedan/ES",
          },
          {
            Description: "LEXUS LS",
            image: LS,
            url: "Lexus/Sedan/LS",
          },

          {
            Description: "LEXUS IS",
            image: IS,
            url: "Lexus/Sedan/IS",
          },
          {
            Description: "LEXUS LS-HYBRID",
            image: LSHybrid,
            url: "Lexus/EV-Sedan/LS",
          },
          {
            Description: "LEXUS GX",
            image: GX,
            url: "Lexus/SUV/GX",
          },
          {
            Description: "LEXUS LX",
            image: LX,
            url: "Lexus/SUV/LX",
          },
          {
            Description: "LEXUS RX-HYBRID",
            image: RX,
            url: "Lexus/EV-SUV/RX",
          },
          {
            Description: "LEXUS UX-HYBRID",
            image: UX,
            url: "Lexus/EV-SUV/UX",
          },
        ],
      },

      //TOYOTA
      {
        // id: 1,
        names: "Toyota",
        path: "/Toyotapage",
        subLinks: [
          {
            Description: "COROLLA",
            image: corolla,
            url: "Toyota/Sedan/Corolla",
          },
          {
            Description: "CAMRY",
            image: camry,
            url: "Toyota/Sedan/Camry",
          },

          {
            Description: "CROWN",
            image: crown,
            url: "Toyota/Sedan/Crown",
          },
          {
            Description: "CROWN-HYBRID",
            image: crownhybrid,
            url: "Toyota/EV-Sedan/Crown",
          },

          {
            Description: "HIGHLANDER",
            image: highlander,
            url: "Toyota/SUV/Highlander",
          },

          {
            Description: "SEQUOIRA",
            image: sequoira,
            url: "Toyota/SUV/Sequiora",
          },
          {
            Description: "VENZA-HYBRID",
            image: venza,
            url: "Toyota/EV-SUV/Venza",
          },
          {
            Description: "bZ4X",
            image: bz4x,
            url: "Toyota/EV-SUV/BZ4X",
          },
        ],
      },
    ],
  },
];
export default SubMenuLinks;
