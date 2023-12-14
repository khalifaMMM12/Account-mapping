import React from 'react'; 
import {  Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar.js';
import Login from './Pages/login.js';
import Officer from './Pages/accountOfficer';
import Sidebar from './components/sidebar.js';
import CreateAgent from './Pages/createAgent.js'


function App() {
  return (
    <div className="container-fluid">
    <div className="row flex-nowrap">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0" style={{backgroundColor: 'navy'}}>
            <Sidebar/>
        </div>
        <div className="col" style={{padding: '0 0'}}>
            <Navbar/>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/officer" element={<Officer />} />
              <Route path="/sidebar" element={<Sidebar />} />
              <Route path="/agent" element={<CreateAgent />} />
            </Routes>
        </div>
    </div>
</div>

  )
}

export default App;