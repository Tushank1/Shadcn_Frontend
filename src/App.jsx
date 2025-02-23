import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import MainPage from "./components/MainPage";
import Hero1 from "./components/Hero/pages/Hero1";
import Hero2 from "./components/Hero/pages/Hero2";
import Hero3 from "./components/Hero/pages/Hero3";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/hero1" element={<Hero1 />} />
          <Route path="/hero2" element={<Hero2 />} />
          <Route path="/hero3" element={<Hero3 />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
