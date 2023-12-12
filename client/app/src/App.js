import React from 'react'; 
import {  Routes, Route } from 'react-router-dom'
import Login from './Pages/login-page.js';
import Officer from './Pages/accountOfficer';
import Sidebar from './components/sidebar.js';

function App() {
  return (
  <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/officer" element={<Officer />} />
    <Route path="/sidebar" element={<Sidebar />} />
  </Routes>
  )
}

export default App;