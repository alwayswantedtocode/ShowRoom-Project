import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./Footer/footer.css";

// import "./Pages/Brands/BrandPages.css";
import App from "./APP/App";
import { AppProvider } from "./Global Conext/GlobalContext";
// import dotenv from "dotenv";

// dotenv.config();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
