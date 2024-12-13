// src/App.jsx
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './router/AppRoutes'; // Updated import

const App = () => {
  return (
    <Router>
      <AppRoutes /> {/* Updated component */}
    </Router>
  );
};

export default App;
