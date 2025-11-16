import React from 'react';
import { MapPin, Clock, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Pronto para acelerar com a gente?</h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="aspect-video bg-gray-800 rounded-lg mb-8 flex items-center justify-center text-6xl">
            🗺️
          </div>

          <div className="text-center space-y-4 mb-8">
            <p className="flex items-center justify-center gap-2 text-lg">
              <MapPin className="text-red-600" /> Rua XXXX, Barra da Tijuca - Rio de Janeiro
            </p>
            <p className="flex items-center justify-center gap-2 text-lg">
              <Clock className="text-red-600" /> Seg-Sex: 14h-22h | Sáb-Dom: 10h-20h
            </p>
            <p className="flex items-center justify-center gap-2 text-lg">
              <Phone className="text-red-600" /> (21) 99999-9999
            </p>
          </div>

          <div className="text-center">
            <a href="https://wa.me/5521999999999" className="inline-block bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition">
              AGENDE SUA VISITA GRATUITA
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;