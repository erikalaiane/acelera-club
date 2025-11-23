import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=1920&q=80" 
          alt="Racing Car"
          className="w-full h-full object-cover opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 to-transparent"></div>
      </div>

      {/* Animated Grid Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>
      
      <div className="relative z-10 px-4 text-center max-w-6xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/30 rounded-full px-4 py-2 mb-6 backdrop-blur-sm">
          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
          <span className="text-sm font-semibold text-red-400">Primeiro hub de automobilismo do Rio</span>
        </div>

        <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight">
          <span className="bg-gradient-to-r from-white via-red-100 to-red-500 bg-clip-text text-transparent">
            ACELERA CLUB
          </span>
        </h1>
        
        <p className="text-2xl md:text-4xl mb-4 font-light">
          Viva o Automobilismo no <span className="font-bold text-red-500">Rio de Janeiro</span>
        </p>
        
        <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
          Experiências reais, simuladores profissionais e uma comunidade apaixonada por velocidade
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="#espaco" className="group relative bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 flex items-center gap-2 shadow-lg shadow-red-900/50 hover:shadow-red-900/80 hover:scale-105">
            CONHEÇA O ESPAÇO
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </a>
          
          <a href="#planos" className="group relative border-2 border-red-500 hover:bg-red-500/10 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 backdrop-blur-sm flex items-center gap-2 hover:scale-105">
            <Play size={20} />
            SEJA MEMBRO
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-20 max-w-3xl mx-auto">
          <div className="backdrop-blur-sm bg-white/5 rounded-xl p-6 border border-white/10">
            <div className="text-4xl font-bold text-red-500 mb-2">300+</div>
            <div className="text-sm text-gray-400">Membros Ativos</div>
          </div>
          <div className="backdrop-blur-sm bg-white/5 rounded-xl p-6 border border-white/10">
            <div className="text-4xl font-bold text-red-500 mb-2">50+</div>
            <div className="text-sm text-gray-400">Eventos/Mês</div>
          </div>
          <div className="backdrop-blur-sm bg-white/5 rounded-xl p-6 border border-white/10">
            <div className="text-4xl font-bold text-red-500 mb-2">5</div>
            <div className="text-sm text-gray-400">Simuladores Pro</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-red-500 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;