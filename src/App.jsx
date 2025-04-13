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
        </Routes>
      </Router>
    </>
  );
}

export default App;
