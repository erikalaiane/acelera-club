import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    { 
      text: 'Finalmente um lugar no Rio onde posso viver minha paixão por F1! Os simuladores são sensacionais e a comunidade é incrível.', 
      author: 'João Silva', 
      role: 'Membro há 6 meses',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80'
    },
    { 
      text: 'A comunidade é incrível! Fiz vários amigos que compartilham o mesmo amor por automobilismo. Os eventos são sempre fantásticos.', 
      author: 'Maria Santos', 
      role: 'Membro há 1 ano',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80'
    },
    { 
      text: 'Os workshops são muito didáticos e os eventos ao vivo são uma experiência única. Vale cada centavo da assinatura!', 
      author: 'Carlos Oliveira', 
      role: 'Membro há 3 meses',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&q=80'
    }
  ];

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-500/10 border border-blue-500/30 rounded-full px-4 py-2 mb-4">
            <span className="text-sm font-semibold text-blue-400">DEPOIMENTOS</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            O que nossos <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">membros</span> dizem
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-br from-gray-900 to-black p-10 md:p-12 rounded-2xl border border-gray-800 mb-8">
            {/* Quote Icon */}
            <div className="absolute top-6 left-6 text-blue-500/20">
              <Quote size={48} />
            </div>

            <div className="relative z-10">
              <p className="text-xl md:text-2xl mb-8 italic text-gray-200 leading-relaxed">
                "{testimonials[currentIndex].text}"
              </p>
              
              <div className="flex items-center gap-4">
                <img 
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].author}
                  className="w-16 h-16 rounded-full object-cover border-2 border-blue-500"
                />
                <div>
                  <p className="font-bold text-lg">{testimonials[currentIndex].author}</p>
                  <p className="text-gray-400 text-sm">{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center gap-6">
            <button 
              onClick={prev} 
              className="w-12 h-12 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft size={24} />
            </button>
            
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === currentIndex ? 'w-8 bg-blue-500' : 'w-2 bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
            
            <button 
              onClick={next} 
              className="w-12 h-12 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          <div className="text-center mt-12">
            <a href="#depoimentos" className="inline-block border-2 border-blue-500 hover:bg-blue-500/10 text-white px-8 py-3 rounded-xl font-bold transition-all duration-300">
              LEIA MAIS DEPOIMENTOS
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;