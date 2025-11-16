import React from 'react';

const Events = () => {
  const events = [
    { date: 'SEG 18/11 - 19h', title: 'Workshop: Mecânica Básica de F1', info: '20 vagas | R$ 50' },
    { date: 'QUI 21/11 - 21h', title: 'Acelera Night: GP Las Vegas AO VIVO', info: 'Entrada gratuita' },
    { date: 'SÁB 23/11 - 15h', title: 'Campeonato Interno de Simulador', info: 'Inscrições abertas' }
  ];

  return (
    <section id="eventos" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Agenda desta semana</h2>
          <p className="text-gray-400 text-lg">Nunca perca um momento das pistas</p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4 mb-12">
          {events.map((event, idx) => (
            <div key={idx} className="bg-black/50 p-6 rounded-lg border border-gray-800 hover:border-red-600 transition">
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div>
                  <p className="text-red-600 font-bold mb-2">📅 {event.date}</p>
                  <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                  <p className="text-gray-400">{event.info}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a href="#eventos" className="inline-block bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-bold transition">
            VER CALENDÁRIO COMPLETO
          </a>
        </div>
      </div>
    </section>
  );
};

export default Events;