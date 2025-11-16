import React from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx/index.js';
import About from './components/About.jsx/index.js';
import Plans from './components/Plans.jsx/index.js';
import Events from './components/Events.jsx/index.js';
import Marketplace from './components/Marketplace.jsx/index.js';
import Instagram from './components/Instagram.jsx/index.js';
import Testimonials from './components/Testimonials.jsx/index.js';
import AceleraLab from './components/AceleraLab.jsx/index.js';
import Contact from './components/Contact.jsx/index.js';
import Footer from './components/Footer.jsx/index.js';

const App = () => {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <Header />
      <Hero />
      <About />
      <Plans />
      <Events />
      <Marketplace />
      <Instagram />
      <Testimonials />
      <AceleraLab />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;