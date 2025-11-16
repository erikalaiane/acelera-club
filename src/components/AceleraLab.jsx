import React from 'react';

const AceleraLab = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Inovação que vem das universidades</h2>
          <p className="text-gray-400 text-lg">Conectamos estudantes com a indústria</p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center mb-12">
          <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center text-6xl">
            🏎️
          </div>
          <div>
            <h3 className="text-3xl font-bold mb-4 text-red-600">ACELERA LAB</h3>
            <p className="text-lg mb-6">Financiamos projetos automobilísticos de estudantes de engenharia</p>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start"><span className="text-red-600 mr-2">•</span> Réplicas históricas</li>
              <li className="flex items-start"><span className="text-red-600 mr-2">•</span> Protótipos elétricos</li>
              <li className="flex items-start"><span className="text-red-600 mr-2">•</span> Inovação sustentável</li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <a href="#acelera-lab" className="inline-block bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-bold transition">
            CONHEÇA O PROGRAMA ACELERA LAB
          </a>
        </div>
      </div>
    </section>
  );
};

export default AceleraLab;