// components/Header.jsx
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/95 backdrop-blur-lg shadow-lg shadow-red-900/20' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-800 rounded-lg flex items-center justify-center font-bold text-xl">
            AC
          </div>
          <div className="text-2xl font-bold bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
            ACELERA CLUB 
          </div>
        </div>
        
        <ul className="hidden md:flex space-x-8">
          <li><a href="#home" className="hover:text-red-500 transition-colors relative group">
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all duration-300"></span>
          </a></li>
          <li><a href="#espaco" className="hover:text-red-500 transition-colors relative group">
            O Espaço
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all duration-300"></span>
          </a></li>
          <li><a href="#planos" className="hover:text-red-500 transition-colors relative group">
            Planos
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all duration-300"></span>
          </a></li>
          <li><a href="#eventos" className="hover:text-red-500 transition-colors relative group">
            Eventos
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all duration-300"></span>
          </a></li>
          <li><a href="#loja" className="hover:text-red-500 transition-colors relative group">
            Loja
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all duration-300"></span>
          </a></li>
        </ul>

        <button className="md:hidden text-red-500" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-black/98 backdrop-blur-xl border-t border-red-900/30">
          <ul className="flex flex-col space-y-1 p-4">
            <li><a href="#home" onClick={() => setMenuOpen(false)} className="block py-3 px-4 hover:bg-red-900/20 rounded-lg transition-colors">Home</a></li>
            <li><a href="#espaco" onClick={() => setMenuOpen(false)} className="block py-3 px-4 hover:bg-red-900/20 rounded-lg transition-colors">O Espaço</a></li>
            <li><a href="#planos" onClick={() => setMenuOpen(false)} className="block py-3 px-4 hover:bg-red-900/20 rounded-lg transition-colors">Planos</a></li>
            <li><a href="#eventos" onClick={() => setMenuOpen(false)} className="block py-3 px-4 hover:bg-red-900/20 rounded-lg transition-colors">Eventos</a></li>
            <li><a href="#loja" onClick={() => setMenuOpen(false)} className="block py-3 px-4 hover:bg-red-900/20 rounded-lg transition-colors">Loja</a></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;