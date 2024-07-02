import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBarComponent from './components/NavBarComponent';
import HeroSlider from './components/HeroSlider';
import './App.scss';
import LandscapeGallery from './components/LandscapeGallery';

function App() {
  return (
    <div className="App">
      <NavBarComponent />
      <Routes>
        <Route path="/" element={<HeroSlider />} />
        <Route path="/landscape" element={
          <div className='landscape-page-elements'>
            <h1 className='gallery-header'>Landscape</h1>
            <LandscapeGallery />
          </div>
        } />
        <Route path="/nature" element={<h1 className='gallery-header'>Nature</h1>} />
        <Route path="/pets" element={<h1 className='gallery-header'>Pets</h1>} />
        <Route path="/ruins" element={<h1 className='gallery-header'>Ruins</h1>} />
        <Route path="/about" element={<h1 className='about-header'>About</h1>} />
        <Route path="/contact" element={<h1 className='contact-header'>Contact</h1>} />
      </Routes>
    </div>
  );
}

export default App;
