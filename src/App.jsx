import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ApplyScholarship from './pages/ApplyScholarship';
import Donor from './pages/Donor';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apply" element={<ApplyScholarship />} />
        <Route path="/donor" element={<Donor />} />
      </Routes>
    </Router>
  );
}

export default App;
