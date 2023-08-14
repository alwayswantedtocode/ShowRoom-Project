import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
//Layouts
import SharedLayout from "../Layout/SharedLayout";

//Brand pages
import Mercedes from "../Pages/Brands/Mercedes/MercedesPage";
import Lexus from "../Pages/Brands/Lexus/LexusPage";
import Toyota from "../Pages/Brands/Toyota/ToyotaPage";

import Dealers from "../Pages/Dealers/Dealers";
import Supports from "../Pages/Supports/Support";
import LandingPage from "../Pages/LandingPage/LandingPage";
import GXMain from "../Pages/Brands/Lexus/GX/GXMain";
import LXMain from "../Pages/Brands/Lexus/LX/LxMain";
import ESMain from "../Pages/Brands/Lexus/ES/ESMain"
import LSMain from "../Pages/Brands/Lexus/LS/LSMain";
import LSHYBRID from "../Pages/Brands/Lexus/LS Hybrid/LSHMain"
import React from "react";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<SharedLayout />}>
      <Route index element={<LandingPage />} />

      <Route path="Mercedespage" element={<Mercedes />} />
      <Route path="Lexuspage" element={<Lexus />} />
      <Route path="Toyotapage" element={<Toyota />} />

      <Route path="Dealers" element={<Dealers />} />
      <Route path="Support" element={<Supports />} />
      <Route path="Lexuspage/GX" element={<GXMain />} />
      <Route path="Lexuspage/LX" element={<LXMain />} />
      <Route path="Lexuspage/ES" element={<ESMain />} />
      <Route path="Lexuspage/LS" element={<LSMain />} />
      <Route path="Lexuspage/LS-Hybrid" element={<LSHYBRID />} />
    </Route>
  )
);
const App = () => {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
};

export default App;
