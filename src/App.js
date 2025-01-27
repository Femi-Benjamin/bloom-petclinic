import React from "react";
import HomeNav from "./NavBar/HomeNav";
import Home from "./Pages/Home";
import Owners from "./Pages/Owners";
import Veterniarians from "./Pages/Veterniarians";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <HomeNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Owners" element={<Owners />} />
        <Route path="/Veterniarians" element={<Veterniarians />} />
      </Routes>
    </Router>
  );
};

export default App;
