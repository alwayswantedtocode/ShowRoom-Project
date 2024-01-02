import { useState, useRef, useEffect } from "react";

import AccDropDown from "./AccDropDown";
import { useGlobalContext } from "../Global Conext/GlobalContext";

const Account = ({  }) => {
  const{showAside}=useGlobalContext()

  return (
      <aside
        className={showAside ? "dropdownaside active" : "dropdownaside"}
        id="dropdown"
      >
        <AccDropDown />
      </aside>
    // </div>
  );
};
export default Account;
