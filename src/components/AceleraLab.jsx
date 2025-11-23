import React from 'react';
import { Lightbulb, Users, Zap, ArrowRight } from 'lucide-react';

const AceleraLab = () => {
  const benefits = [
    { icon: Lightbulb, title: 'Réplicas Históricas', description: 'Recrie carros icônicos da história do automobilismo' },
    { icon: Zap, title: 'Protótipos Elétricos', description: 'Desenvolva tecnologias sustentáveis para o futuro' },
    { icon: Users, title: 'Inovação Sustentável', description: 'Contribua com soluções para um automobilismo mais verde' }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 via-black to-gray-900 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block bg-purple-500/10 border border-red-500/30 rounded-full px-4 py-2 mb-4">
            <span className="text-sm font-semibold text-red-400">PROGRAMA ACADÊMICO</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            Inovação que vem das <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">universidades</span>
          </h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Conectamos estudantes de engenharia com a indústria automobilística
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
            <div className="relative rounded-2xl overflow-hidden border-2 border-red-500/30 group-hover:border-purple-500/60 transition-colors aspect-video">
              <img 
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80" 
                alt="Projeto Acelera Lab"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              
              {/* Floating badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-black/90 backdrop-blur-sm rounded-xl p-4 border border-purple-500/30">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-800 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Lightbulb size={24} className="text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-white">Projeto F1 Réplica</div>
                    <div className="text-sm text-gray-400">UFRRJ - Engenharia Mecânica</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-orange-600 text-white px-4 py-2 rounded-full font-bold mb-6">
              <Zap size={16} />
              ACELERA LAB
            </div>
            
            <h3 className="text-3xl md:text-4xl font-black mb-6">
              Financiamos projetos <span className="text-red-500">automobilísticos</span> de estudantes
            </h3>
            
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Conectamos estudantes de engenharia com recursos, mentoria e espaço para transformar ideias em protótipos reais. Seu projeto pode ser o próximo a revolucionar o automobilismo.
            </p>

            <div className="space-y-4 mb-8">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-4 group cursor-pointer">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 group-hover:from-purple-500/40 group-hover:to-pink-500/40 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors border border-purple-500/30">
                    <benefit.icon size={20} className="text-red-400" />
                  </div>
                  <div>
                    <div className="font-bold text-white mb-1 group-hover:text-orange-400 transition-colors">{benefit.title}</div>
                    <div className="text-sm text-gray-400">{benefit.description}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#acelera-lab" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-500 to-red-800 hover:from-red-700 hover:to-orange-700 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 shadow-lg shadow-purple-900/50 hover:shadow-purple-900/80 hover:scale-105 group">
                INSCREVA SEU PROJETO
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </a>
              
              <a href="#acelera-lab" className="inline-flex items-center justify-center gap-2 border-2 border-red-500 hover:bg-red-500/10 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300">
                SAIBA MAIS
              </a>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 border border-red-500/30 text-center">
            <div className="text-4xl font-black text-red-500 mb-2">12</div>
            <div className="text-sm text-gray-400">Projetos Ativos</div>
          </div>
          <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 border border-red-500/30 text-center">
            <div className="text-4xl font-black text-red-500 mb-2">5</div>
            <div className="text-sm text-gray-400">Universidades</div>
          </div>
          <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 border border-red-500/30 text-center">
            <div className="text-4xl font-black text-red-500 mb-2">R$ 150k</div>
            <div className="text-sm text-gray-400">Investimento</div>
          </div>
          <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 border border-red-500/30 text-center">
            <div className="text-4xl font-black text-red-500 mb-2">80+</div>
            <div className="text-sm text-gray-400">Estudantes</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AceleraLab;