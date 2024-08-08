import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter, Routes, Route } from "react-router-dom";

import App from './App.jsx'

import "bootstrap/dist/css/bootstrap.min.css";
import './sass/main.scss'

import ScrollToTop from './components/ScrollToTop.js';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Application from './pages/Application.jsx';
import StudentTransfer from './pages/StudentTransfer.jsx';
import ExpertTransfer from './pages/ExpertTransfer.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <HashRouter>
    <Navbar />
    <ScrollToTop/>
    <Routes>
      <Route path="/" exact element={<App />} />
      <Route path="/application" exact element={<Application />} />
      <Route path="/student-transfer" exact element={<StudentTransfer />} />
      <Route path="/expert-transfer" exact element={<ExpertTransfer />} />
    </Routes>
    <Footer />
    {/* <Up /> */}
  </HashRouter>
);
