import { useState, useRef, useEffect } from "react";

import AccDropDown from "./AccDropDown";

const Account = ({ showAside, setShowAside }) => {
  // const [showAside, setShowAside] = useState(false);

  const handleAccountIcon = () => {
    const clickOnIcon = showAside;

    if (clickOnIcon) {
      const iconElement = document.getElementById("user-icon");
      const iconRect = iconElement.getBoundingClientRect();

      const asideElement = document.getElementById("dropdown");
      const asideRect = asideElement.getBoundingClientRect();

      const center =
        (iconRect.left + iconRect.right) / 2.15 - asideRect.width / 2;

      const bottom = iconRect.bottom - asideRect.height;

      asideElement.style.left = `${center}px`;
      asideElement.style.bottom = `${bottom}px`;
    }
    setShowAside(clickOnIcon);
    setShowAside(!showAside);
  };

  // Click in anywhere to remove Account dropdown//
  const AccountRef = useRef();

  const handleAccount = (event) => {
    if (!AccountRef.current.contains(event.target)) {
      setShowAside(showAside);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleAccount);

    return () => {
      document.removeEventListener("mousedown", handleAccount);
    };
  }, [handleAccount]);

  return (
    <div className="UserIcon-DropDown">
      <aside
        className="dropdown-aside"
        id="dropdown"
        style={{
          transform: showAside ? "translateY(0)" : "translateY(-30rem)",
        }}
      >
        <div className="aside-content"></div>
        <AccDropDown />
      </aside>
    </div>
  );
};
export default Account;
