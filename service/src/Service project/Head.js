import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './head.css';
import Home from './Home';
import About from './About';
import Career from './Career';
import Services from './Services';
import Serve from './Serve';
import Connect from './connect';

 const Head = () => {
    return (
        <Router>
            <div className='head'>
                
                <nav className='navbar'>
                  
                    <ul>
                        <li><Link to="/" style={{ color: 'rgba(255, 255, 255, 0.6)'}}>Home</Link></li>
                        <li><Link to="/about" style={{ color: 'rgba(255, 255, 255, 0.6)'}}>About</Link></li>
                        <li><Link to="/career" style={{ color: 'rgba(255, 255, 255, 0.6)'}}>Career</Link></li>
                        <li><Link to="/services" style={{ color: 'rgba(255, 255, 255, 0.6)'}}>Services</Link></li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/career" element={<Career />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/serve" element={<Serve />} />
                    <Route path="/connect" element={<Connect />} />
                </Routes>
            </div>
        </Router>
    );
}

export default Head;
