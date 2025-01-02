import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import Components
import Navbar from './components/navbar';
import Footer from './components/footer';

// Import Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Media from './pages/Media';
import Contact from './pages/Contact';
import Login from './pages/Login';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-galaxy-dark text-white">
      <Navbar />
      
      <main className="flex-grow">
        <Routes>
        <Route path= {`${process.env.PUBLIC_URL}`} element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/media" element={<Media />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;