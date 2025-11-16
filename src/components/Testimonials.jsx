import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    { text: 'Finalmente um lugar no Rio onde posso viver minha paixão por F1! Os simuladores são sensacionais.', author: 'João Silva', time: 'Membro há 6 meses' },
    { text: 'A comunidade é incrível! Fiz vários amigos que compartilham o mesmo amor por automobilismo.', author: 'Maria Santos', time: 'Membro há 1 ano' },
    { text: 'Os workshops são muito didáticos e os eventos ao vivo são uma experiência única.', author: 'Carlos Oliveira', time: 'Membro há 3 meses' }
  ];

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">O que nossos membros dizem</h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-900 p-8 rounded-lg border border-gray-800 mb-8">
            <p className="text-xl mb-6 italic">"{testimonials[currentIndex].text}"</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-2xl">
                👤
              </div>
              <div>
                <p className="font-bold">{testimonials[currentIndex].author}</p>
                <p className="text-gray-400 text-sm">{testimonials[currentIndex].time}</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center gap-4">
            <button onClick={prev} className="p-2 hover:bg-gray-800 rounded-full transition">
              <ChevronLeft />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <div key={idx} className={`w-3 h-3 rounded-full ${idx === currentIndex ? 'bg-red-600' : 'bg-gray-600'}`} />
              ))}
            </div>
            <button onClick={next} className="p-2 hover:bg-gray-800 rounded-full transition">
              <ChevronRight />
            </button>
          </div>

          <div className="text-center mt-8">
            <a href="#depoimentos" className="inline-block border-2 border-red-600 hover:bg-red-600 text-white px-8 py-3 rounded-lg font-bold transition">
              LEIA MAIS DEPOIMENTOS
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;