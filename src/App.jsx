import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import HeroPage from './components/HeroPage';
import About from './components/About';
import Resume from './components/Resume';
import Portfo from './components/Portfo';
import Contact from './components/Contact';
import Blog from './components/Blog';

function App() {
  return (
    <Router>
      <div className='flex'>
        <NavBar />
        <div className='ml-[17%] w-[83%] h-screen overflow-y-auto'>
          <Routes>
            <Route path="/" element={<HeroPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/portfolio" element={<Portfo />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
