import { useState } from 'react';
import './index.css'; 

import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import Menu from './Menu'
import About from './About'
import Contact from './Contact';


function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}



export default App
