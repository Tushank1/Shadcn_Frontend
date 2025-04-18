import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import MainPage from "./components/MainPage";
import Hero1 from "./components/Hero/pages/Hero1";
import Hero2 from "./components/Hero/pages/Hero2";
import Hero3 from "./components/Hero/pages/Hero3";
import Feature1 from "./components/Footer/pages/Feature1";
import Feature2 from "./components/Footer/pages/Feature2";
import Feature4 from "./components/Footer/pages/Feature4";
import Feature5 from "./components/Footer/pages/Feature5";
import Feature6 from "./components/Footer/pages/Feature6";
import Feature7 from "./components/Footer/pages/Feature7";
import Feature8 from "./components/Footer/pages/Feature8";
import Feature9 from "./components/Footer/pages/Feature9";
import Feature10 from "./components/Footer/pages/Feature10";
import Feature11 from "./components/Footer/pages/Feature11";
import Feature12 from "./components/Footer/pages/Feature12";
import Feature14 from "./components/Footer/pages/Feature14";
import Feature18 from "./components/Footer/pages/Feature18";
import Feature19 from "./components/Footer/pages/Feature19";
import Feature20 from "./components/Footer/pages/Feature20";
import Feature21 from "./components/Footer/pages/Feature21";
import Feature22 from "./components/Footer/pages/Feature22";
import Feature23 from "./components/Footer/pages/Feature23";
import Feature24 from "./components/Footer/pages/Feature24";
import Feature25 from "./components/Footer/pages/Feature25";
import Feature26 from "./components/Footer/pages/Feature26";
import Feature27 from "./components/Footer/pages/Feature27";
import Feature28 from "./components/Footer/pages/Feature28";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/hero1" element={<Hero1 />} />
          <Route path="/hero2" element={<Hero2 />} />
          <Route path="/hero3" element={<Hero3 />} />
          <Route path="/feature1" element={<Feature1 />} />
          <Route path="/feature2" element={<Feature2 />} />
          <Route path="/feature4" element={<Feature4 />} />
          <Route path="/feature5" element={<Feature5 />} />
          <Route path="/feature6" element={<Feature6 />} />
          <Route path="/feature7" element={<Feature7 />} />
          <Route path="/feature8" element={<Feature8 />} />
          <Route path="/feature9" element={<Feature9 />} />
          <Route path="/feature10" element={<Feature10 />} />
          <Route path="/feature11" element={<Feature11 />} />
          <Route path="/feature12" element={<Feature12 />} />
          <Route path="/feature14" element={<Feature14 />} />
          <Route path="/feature18" element={<Feature18 />} />
          <Route path="/feature19" element={<Feature19 />} />
          <Route path="/feature20" element={<Feature20 />} />
          <Route path="/feature21" element={<Feature21 />} />
          <Route path="/feature22" element={<Feature22 />} />
          <Route path="/feature23" element={<Feature23 />} />
          <Route path="/feature24" element={<Feature24 />} />
          <Route path="/feature25" element={<Feature25 />} />
          <Route path="/feature26" element={<Feature26 />} />
          <Route path="/feature27" element={<Feature27 />} />
          <Route path="/feature28" element={<Feature28 />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
