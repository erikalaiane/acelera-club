import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-black/95 backdrop-blur-sm z-50 border-b border-gray-800">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-red-600">🏎️ ACELERA CLUB</div>
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          <li><a href="#home" className="hover:text-red-600 transition">Home</a></li>
          <li><a href="#espaco" className="hover:text-red-600 transition">O Espaço</a></li>
          <li><a href="#planos" className="hover:text-red-600 transition">Planos</a></li>
          <li><a href="#eventos" className="hover:text-red-600 transition">Eventos</a></li>
          <li><a href="#loja" className="hover:text-red-600 transition">Loja</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-800">
          <ul className="flex flex-col space-y-4 p-4">
            <li><a href="#home" onClick={() => setMenuOpen(false)} className="block hover:text-red-600">Home</a></li>
            <li><a href="#espaco" onClick={() => setMenuOpen(false)} className="block hover:text-red-600">O Espaço</a></li>
            <li><a href="#planos" onClick={() => setMenuOpen(false)} className="block hover:text-red-600">Planos</a></li>
            <li><a href="#eventos" onClick={() => setMenuOpen(false)} className="block hover:text-red-600">Eventos</a></li>
            <li><a href="#loja" onClick={() => setMenuOpen(false)} className="block hover:text-red-600">Loja</a></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;