import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";
import App from './App.js';
import { BrowserRouter } from 'react-router-dom'
// import Sidebar from './components/sidebar.js';
// import Login from './Pages/login.js';
import "./scss/volt.scss";
import "react-datetime/css/react-datetime.css";
// import Navtest from './components/navtest';
// import Sidetest from './components/sidetest.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    {/* <Login/>   */}
    <App/>
    {/* <Sidetest/> */}
    {/* <Navtest/> */}
  </BrowserRouter>
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
