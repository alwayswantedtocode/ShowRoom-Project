import { useEffect } from "react";

import AccDropDown from "./AccDropDown";
import { useGlobalContext } from "../Global Conext/GlobalContext";

const Account = ({  }) => {
  const { showAside, setShowAside, AccountRef } = useGlobalContext();

  // Click in anywhere to remove Account dropdown//
  const handleAccount = (event) => {
    if (!AccountRef.current.contains(event.target)) {
      setShowAside(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleAccount);

    return () => {
      document.removeEventListener("mousedown", handleAccount);
    };
  }, []);

  return (
    <aside
      className={showAside ? "dropdownaside active" : "dropdownaside"}
      id="dropdown"
      ref={AccountRef}
    >
      <AccDropDown />
    </aside>
    // </div>
  );
};
export default Account;
