import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/Home';
import GalleryPage from './Pages/Gallery';
import AboutPage from './Pages/About';
import Navigation from './Navbar/Navigation';
import Logo from './Full-Logo.png';
import Footer from './Footer/footer';

function App() {
  return (
    <>
    <div className='heading-container'>
      <img src={Logo} className='Logo' alt='my-company-logo'/>
    <Navigation />
    </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/GalleryPage" element={<GalleryPage />} />
        <Route path="/AboutPage" element={<AboutPage />} />
      </Routes>
      <Footer />
      </>
  )
}

export default App;
