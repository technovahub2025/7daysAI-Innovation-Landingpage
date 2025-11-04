import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Landingpage from "./pages/Landingpage";

import WhatsAppButton from "./components/WhatsAppButton";

// Wrapper to handle conditional Navbar
const AppContent = () => {
  const location = useLocation();

  // Hide Navbar only on '/welcome'
  const hideNavbar = location.pathname === "/";

  return (
    <>
     {!hideNavbar && (
  <>
   
    <WhatsAppButton fixed />
  </>
)}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/welcome" element={<Landingpage />} />
      </Routes>
    </>
  );
};

const App = () => {
  return (
    <div className=" bg-gradient-to-br from-blue-50 via-white to-cyan-50 min-h-screen">
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </div>
  );
};

export default App;
