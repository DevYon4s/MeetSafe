// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import SignIn from './components/SignIn';
// import Callback from './components/Callback';
// import Welcome from './components/Welcome';
import EventsList from './components/Events/EventsList';
import EventDetail from './components/Events/EventDetail';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/events" element={<EventsList />} />
        <Route path="/events/:eventId" element={<EventDetail />} />
    {/* //     <Route path="/" element={<SignIn />} />
    //     <Route path="/callback" element={<Callback />} />
    //     <Route path="/welcome" element={<Welcome />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
