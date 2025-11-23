import React from 'react';
import { Calendar, Clock, Users, ArrowRight } from 'lucide-react';

const Events = () => {
  const events = [
    { 
      date: 'SEG 18/11', 
      time: '19h',
      title: 'Workshop: Mecânica Básica de F1', 
      info: '20 vagas',
      price: 'R$ 50',
      image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600&q=80',
      category: 'Workshop'
    },
    { 
      date: 'QUI 21/11', 
      time: '21h',
      title: 'Acelera Night: GP Las Vegas AO VIVO', 
      info: 'Ilimitado',
      price: 'Grátis',
      image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&q=80',
      category: 'Transmissão'
    },
    { 
      date: 'SÁB 23/11', 
      time: '15h',
      title: 'Campeonato Interno de Simulador', 
      info: '32 vagas',
      price: 'R$ 30',
      image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&q=80',
      category: 'Competição'
    }
  ];

  const categories = {
    'Workshop': 'from-blue-500 to-cyan-500',
    'Transmissão': 'from-red-500 to-orange-500',
    'Competição': 'from-purple-500 to-pink-500'
  };

  return (
    <section id="eventos" className="py-24 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block bg-red-500/10 border border-red-500/30 rounded-full px-4 py-2 mb-4">
            <span className="text-sm font-semibold text-red-400">PRÓXIMOS EVENTOS</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            Agenda desta <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">semana</span>
          </h2>
          <p className="text-gray-400 text-xl">Nunca perca um momento das pistas</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          {/* Imagem à esquerda */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
            <div className="relative rounded-2xl overflow-hidden border-2 border-red-500/30 group-hover:border-red-500/60 transition-colors h-full">
              <img 
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80" 
                alt="Eventos Acelera Club"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            </div>
          </div>

          {/* Cards de eventos à direita */}
          <div className="space-y-6">
            {events.map((event, idx) => (
              <div key={idx} className="group relative bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden border border-gray-800 hover:border-red-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-red-900/30">
                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`bg-gradient-to-r ${categories[event.category]} px-3 py-1 rounded-full text-xs font-bold text-white shadow-lg`}>
                      {event.category}
                    </div>
                    <div className="flex items-center gap-2 text-red-500">
                      <Calendar size={16} />
                      <span className="text-sm font-bold text-white">{event.date}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-3 group-hover:text-red-500 transition-colors">
                    {event.title}
                  </h3>

                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                      <Clock size={16} />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users size={16} />
                      <span>{event.info}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-red-500">{event.price}</div>
                    <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-bold transition-all duration-300 flex items-center gap-2 group">
                      Reservar
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-red-500/0 via-transparent to-transparent opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <a href="#eventos" className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-10 py-4 rounded-xl font-bold transition-all duration-300 shadow-lg shadow-red-900/50 hover:shadow-red-900/80 hover:scale-105 group">
            VER CALENDÁRIO COMPLETO
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Events;