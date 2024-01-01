import {
  Route,
  RouterProvider,
  Routes,
  BrowserRouter as Router,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
//Layouts
import SharedLayout from "../Layout/SharedLayout";

import { AuthProvider } from "../Global Conext/AuthenticationContext";

//Brand pages

import Dealers from "../Pages/Dealers/Dealers";
import Supports from "../Pages/Supports/Support";
import LandingPage from "../Pages/LandingPage/LandingPage";
import AClass from "../Pages/Brands/Mercedes/AClass/A-ClassMain";
import EClass from "../Pages/Brands/Mercedes/EClass/E-ClassMain";
import SClass from "../Pages/Brands/Mercedes/SClass/S-ClassMain";
import EQB from "../Pages/Brands/Mercedes/EQB/EQBMain";
import EQS from "../Pages/Brands/Mercedes/EQS/EQSMain";
import EQSSUV from "../Pages/Brands/Mercedes/EQS SUV/EQS-SUVMain";
import MayBach from "../Pages/Brands/Mercedes/Maybach/MayBachMain";
import GLS from "../Pages/Brands/Mercedes/GLS/GLSMain";

import GXMain from "../Pages/Brands/Lexus/GX/GXMain";
import LXMain from "../Pages/Brands/Lexus/LX/LxMain";
import ESMain from "../Pages/Brands/Lexus/ES/ESMain";
import LSMain from "../Pages/Brands/Lexus/LS/LSMain";
import LSHYBRID from "../Pages/Brands/Lexus/LS Hybrid/LSHMain";
import ISMain from "../Pages/Brands/Lexus/IS/ISMain";
import RXMain from "../Pages/Brands/Lexus/RX/RXMain";
import UXMain from "../Pages/Brands/Lexus/UX/UXMain";

import BZ4X from "../Pages/Brands/Toyota/bZ4X/bZ4XMain";
import CAMRY from "../Pages/Brands/Toyota/Camry/CamryMain";
import COROLLA from "../Pages/Brands/Toyota/Corolla/CorollaMain";
import CROWN from "../Pages/Brands/Toyota/Crown/CrownMain";
import HYBIDCROWN from "../Pages/Brands/Toyota/Crown Hybrid/CrownMain";
import HIGHLAND from "../Pages/Brands/Toyota/Highlander/HighlanderMain";
import SEQUIORA from "../Pages/Brands/Toyota/Sequiora/SequioraMain";
import VENZA from "../Pages/Brands/Toyota/Venza/VenzaMain";

import Signup from "../Pages/UserAuthentication/Rgistration";
import SignIn from "../Pages/UserAuthentication/SignIn";
// import PrivateRoute from "../PrivateRoute/PrivateRoute"

import React from "react";

// const routes = createRoutesFromElements(

// );

// const router = createBrowserRouter(routes);

const App = () => {
  return (
    <>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<SharedLayout />}>
              <Route index element={<LandingPage />} />

              <Route path="Dealers" element={<Dealers />} />
              <Route path="Support" element={<Supports />} />
              <Route path="SignUp" element={<Signup />} />
              <Route path="SignIn" element={<SignIn />} />
              {/* <PrivateRoute path="" element={""} /> */}

              <Route path="Mercedes/Sedan/A-Class" element={<AClass />} />
              <Route path="Mercedes/Sedan/E-Class" element={<EClass />} />
              <Route path="Mercedes/Sedan/S-Class" element={<SClass />} />
              <Route path="Mercedes/EV-Sedan/EQS" element={<EQS />} />
              <Route path="Mercedes/EV-SUV/EQS" element={<EQSSUV />} />
              <Route path="Mercedes/EV-SUV/EQB" element={<EQB />} />
              <Route path="Mercedes/SUV/MayBach" element={<MayBach />} />
              <Route path="Mercedes/SUV/GLS" element={<GLS />} />

              <Route path="Lexus/SUV/GX" element={<GXMain />} />
              <Route path="Lexus/SUV/LX" element={<LXMain />} />
              <Route path="Lexus/EV-SUV/RX" element={<RXMain />} />
              <Route path="Lexus/Sedan/ES" element={<ESMain />} />
              <Route path="Lexus/Sedan/LS" element={<LSMain />} />
              <Route path="Lexus/Sedan/IS" element={<ISMain />} />
              <Route path="Lexus/EV-Sedan/LS" element={<LSHYBRID />} />
              <Route path="Lexus/EV-SUV/UX" element={<UXMain />} />

              <Route path="Toyota/SUV/Sequiora" element={<SEQUIORA />} />
              <Route path="Toyota/SUV/Highlander" element={<HIGHLAND />} />
              <Route path="Toyota/EV-SUV/BZ4X" element={<BZ4X />} />
              <Route path="Toyota/Sedan/Corolla" element={<COROLLA />} />
              <Route path="Toyota/Sedan/Camry" element={<CAMRY />} />
              <Route path="Toyota/Sedan/Crown" element={<CROWN />} />
              <Route path="Toyota/EV-Sedan/Crown" element={<HYBIDCROWN />} />
              <Route path="Toyota/EV-SUV/Venza" element={<VENZA />} />
            </Route>
          </Routes>
        </AuthProvider>
      </Router>
    </>
  );
};

export default App;

