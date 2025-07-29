// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "./components/SignIn";
import Callback from "./components/Callback";
import Home from "./components/Home";
import Features from "./components/Features";
import Meetups from "./components/Meetups";
import Navbar from "./components/Navbar";
import TermsandServices from "./components/TermsandServices";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/" element={<Home />} />
        <Route path="/callback" element={<Callback />} />
        
        <Route path="/meetups" element={<Meetups />} />
        <Route path="/privacy-policy" element={<TermsandServices />} />
        <Route path="/terms-of-service" element={<TermsandServices />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
