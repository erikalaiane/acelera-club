// App.jsx
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Plans from './components/Plans';
import Events from './components/Events';
import Marketplace from './components/Marketplace';
import Instagram from './components/Instagram';
import Testimonials from './components/Testimonials';
import AceleraLab from './components/AceleraLab';
import Contact from './components/Contact';
import Footer from './components/Footer';

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