import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './index.css'; // make sure this includes Tailwind directives

import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import Menu from './Menu'
import About from './About'


function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}



export default App
