import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import AboutPage from "./pages/About";
import Dashboard from "./pages/Dashboard";
import TermsOfService from "./pages/TermsOfService";

function App() {
  return (
    //font awesome cdn
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/TermsOfService" element={<TermsOfService />} />
      </Routes>
    </Router>
  );
}

export default App;
 