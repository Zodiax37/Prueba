import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Nav } from './components/Nav';
import { Form } from './components/Form';
import { Home } from './components/Home';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
