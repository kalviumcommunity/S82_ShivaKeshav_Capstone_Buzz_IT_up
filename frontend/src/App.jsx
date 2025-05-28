import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css'

// Importing Pages
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import OTPPage from "../pages/OTPPage";
import ErrorPage from "./pages/ErrorPage";
import SavedNewsPage from "./pages/SavedNewsPage";

// Importing Components
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
   
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/otp" element={<OTPPage />} />
          <Route path="/saved" element={<SavedNewsPage />} />
          <Route path="*" element={<ErrorPage />} /> {/* Catch-all for undefined routes */}
        </Routes>
     
   
    </>
  );
};

export default App;
