// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "./components/SignIn";
import Callback from "./components/Callback";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Meetups from "./components/Meetups";
import TermsandServices from "./components/TermsandServices";
import Footer from "./components/Footer";
import EventsList from "./components/Events/EventsList";
import EventDetail from "./components/Events/EventDetail";

import Welcome from "./components/Welcome";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/" element={<Home />} />
        <Route path="/callback" element={<Callback />} />
        <Route path="/welcome" element={<Welcome />} />

        <Route path="/meetups" element={<Meetups />} />
        <Route path="/privacy-policy" element={<TermsandServices />} />
        <Route path="/terms-of-service" element={<TermsandServices />} />
        
        <Route path="/events" element={<EventsList/>} />
        <Route path="/events/:eventId" element={<EventDetail />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
