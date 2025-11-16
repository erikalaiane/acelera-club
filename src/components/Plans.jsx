import React from 'react';

const Plans = () => {
  return (
    <section id="planos" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Escolha sua experiência</h2>
          <p className="text-gray-400 text-lg">Comece grátis, evolua no seu ritmo</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {/* Free Plan */}
          <div className="bg-gray-900 p-8 rounded-lg border border-gray-800">
            <h3 className="text-3xl font-bold mb-2">FREE</h3>
            <p className="text-4xl font-bold mb-6">R$ 0<span className="text-xl text-gray-400">/mês</span></p>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-start"><span className="text-green-500 mr-2">✓</span> Comunidade online</li>
              <li className="flex items-start"><span className="text-green-500 mr-2">✓</span> 1 transmissão/mês</li>
              <li className="flex items-start"><span className="text-green-500 mr-2">✓</span> Acesso a eventos (paga consumação)</li>
              <li className="flex items-start"><span className="text-green-500 mr-2">✓</span> App completo</li>
              <li className="flex items-start"><span className="text-green-500 mr-2">✓</span> 5% desconto na loja</li>
            </ul>

            <button className="w-full border-2 border-gray-600 hover:border-red-600 text-white py-3 rounded-lg font-bold transition">
              CADASTRE-SE
            </button>
          </div>

          {/* Paid Plan */}
          <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-lg border-2 border-yellow-600 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-600 text-black px-4 py-1 rounded-full text-sm font-bold">
              ⭐ POPULAR
            </div>
            
            <h3 className="text-3xl font-bold mb-2">MEMBRO</h3>
            <p className="text-4xl font-bold mb-6 text-red-600">R$ 99<span className="text-xl text-gray-400">/mês</span></p>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-start"><span className="text-green-500 mr-2">✓</span> Tudo do FREE</li>
              <li className="flex items-start"><span className="text-green-500 mr-2">✓</span> 2h simuladores grátis/mês</li>
              <li className="flex items-start"><span className="text-green-500 mr-2">✓</span> Todas transmissões ao vivo</li>
              <li className="flex items-start"><span className="text-green-500 mr-2">✓</span> Workshops inclusos</li>
              <li className="flex items-start"><span className="text-green-500 mr-2">✓</span> 15% desconto na loja</li>
              <li className="flex items-start"><span className="text-green-500 mr-2">✓</span> Prioridade em eventos</li>
            </ul>

            <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-bold transition">
              ASSINE AGORA
            </button>
          </div>
        </div>

        <div className="text-center">
          <a href="#planos" className="inline-block border-2 border-red-600 hover:bg-red-600 text-white px-8 py-3 rounded-lg font-bold transition">
            COMPARE TODOS OS BENEFÍCIOS
          </a>
        </div>
      </div>
    </section>
  );
};

export default Plans;