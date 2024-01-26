import React from "react";
import fourthImage from "../../../../../Images/BENZ/Mercedes-Maybach/Polar White.jpg";
import fifthImage from "../../../../../Images/BENZ/Mercedes-Maybach/2023-GLS-MAYBACH-SUV-MP-136.webp";
import sixthImage from "../../../../../Images/BENZ/Mercedes-Maybach/New folder/2023-GLS-MAYBACH-SUV-MP-007.webp";
import { useGlobalContext } from "../../../../../Global Conext/GlobalContext";

const SpecAside = () => {
  const { showMore } = useGlobalContext();
  return (
    <aside className={`Brand-showmore ${showMore ? "active" : ""}`}>
      <div className="Lead-Spec-container">
        <div className="lead-image">
          <img src={fourthImage} alt="GX on a dirt road" />
        </div>
        <div className="content">
          <h4>9G-TRONIC automatic transmission with shift paddles</h4>
          <p>
            With a greater range of ratios and shorter steps between gears, the
            9-speed automatic changes gears more quickly yet more smoothly.
            Along with a more seamless delivery of power, the lighter, more
            versatile transmission enhances quiet riding comfort and
            fuel-efficiency. The electronic selector and shift paddles let you
            control all gear changes with your hands on the steering wheel. And
            drivers can vary the shift modes via the innovative DYNAMIC SELECT
            system.
          </p>
        </div>
      </div>

      <div className="Followup-Spec-containers">
        <div className="Followup-Spec-container">
          <div className="Followup-Image">
            <img src={fifthImage} alt="" />
          </div>{" "}
          <div className="content">
            <h4>E-ACTIVE BODY CONTROL</h4>
            <p>
              An innovative suspension combines enhanced capabilities with
              uncanny comfort. E-ACTIVE BODY CONTROL can scan the road surface
              ahead via a stereo camera and adapt the spring rate, damping and
              leveling at each wheel. Benefiting from the vehicle's 48-volt
              electronics, the system can quickly counteract lean, pitch and
              dive, and even tilt into curves, to quell uneven surfaces and
              reduce the forces felt by passengers. It can even help rock the
              vehicle free in sand by rapidly "pumping" the suspension.
            </p>
          </div>
        </div>
        <div className="Followup-Spec-container">
          <div className="Followup-Image">
            <img src={sixthImage} alt="" />
          </div>
          <div className="content">
            <h4>DYNAMIC SELECT</h4>
            <p>
              A selector on the console lets you vary the vehicle's performance
              character to suit driver and passengers. DYNAMIC SELECT offers
              four preset modes: Comfort, Sport, Off-Road, and an exclusive
              Maybach mode. Each adapts the suspension, throttle response, shift
              points, and more. Maybach mode emphasizes comfort for the rear
              passengers by minimizing body motion and gearshifts, making the
              throttle response more gentle, and disabling ECO Start/Stop.
              There's also an Individual mode you can personalize.
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SpecAside;
