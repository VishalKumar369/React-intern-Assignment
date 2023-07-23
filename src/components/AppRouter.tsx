import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from '../view/LoginPage';
import SecondPage from '../view/SecondPage';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage/>} />
        <Route path="/second-page" element={<SecondPage/>} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
