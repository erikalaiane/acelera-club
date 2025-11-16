import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-center pt-16 bg-gradient-to-b from-gray-900 to-black">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
      
      <div className="relative z-10 px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-red-600">ACELERA CLUB</h1>
        <p className="text-xl md:text-3xl mb-2">Viva o Automobilismo no Rio de Janeiro</p>
        <p className="text-lg md:text-xl text-gray-400 mb-8">Experiências reais para fãs de verdade</p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#espaco" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-bold transition">
            CONHEÇA O ESPAÇO
          </a>
          <a href="#planos" className="border-2 border-red-600 hover:bg-red-600 text-white px-8 py-3 rounded-lg font-bold transition">
            SEJA MEMBRO
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;