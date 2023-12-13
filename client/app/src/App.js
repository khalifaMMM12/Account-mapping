import React from 'react'; 
import {  Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar.js';
import Login from './Pages/login-page.js';
import Officer from './Pages/accountOfficer';
import Sidebar from './components/sidebar.js';


function App() {
  return (
    <div className="body">

    <div className='left'>
      <Sidebar/>
    </div>
    <div className='right'>
    
   <Navbar/>

    <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/officer" element={<Officer />} />
    <Route path="/sidebar" element={<Sidebar />} />
  </Routes>
    </div>
    
    </div>

  )
}

export default App;