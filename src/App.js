// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserLayout from './pages/user/UserLayout';
import AdminLayout from './pages/admin/AdminLayout';
import Login from './pages/admin/Login';
import Signup from './pages/admin/Signup';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin/signup" element={<Signup />} />
        <Route path="/admin/*" element={<AdminLayout />} />
        <Route path="/*" element={<UserLayout />} />
      </Routes>
    </Router>
  );
}

export default App;
