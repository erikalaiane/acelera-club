import React from 'react';

const About = () => {
  const features = [
    {
      icon: '🎮',
      title: 'Simuladores Profissionais',
      description: 'Cockpits completos como de F1 para você sentir a emoção das pistas'
    },
    {
      icon: '📅',
      title: 'Eventos Toda Semana',
      description: 'Workshops, corridas ao vivo e quiz nights para você se divertir'
    },
    {
      icon: '🛍️',
      title: 'Marketplace Exclusivo',
      description: 'Produtos únicos e curadoria especial para verdadeiros fãs'
    }
  ];

  return (
    <section id="espaco" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Mais que um clube, uma comunidade</h2>
          <p className="text-gray-400 text-lg">Tudo que você precisa em um só lugar</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-black/50 p-6 rounded-lg hover:transform hover:scale-105 transition border border-gray-800">
              <div className="text-6xl mb-4 text-center">{feature.icon}</div>
              <h3 className="text-2xl font-bold mb-3 text-center">{feature.title}</h3>
              <p className="text-gray-400 text-center">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a href="#espaco" className="inline-block bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-bold transition">
            SAIBA MAIS SOBRE O ESPAÇO
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;