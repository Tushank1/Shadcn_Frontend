import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import MainPage from "./components/MainPage";
import Hero1 from "./components/Hero/pages/Hero1";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/hero1" element={<Hero1 />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
