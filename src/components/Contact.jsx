import React from 'react';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block bg-red-500/10 border border-red-500/30 rounded-full px-4 py-2 mb-4">
            <span className="text-sm font-semibold text-red-400">LOCALIZAÇÃO</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            Pronto para <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">acelerar</span> com a gente?
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Map */}
          <div className="relative h-96 rounded-2xl overflow-hidden mb-12 border-2 border-gray-800">
            <img 
              src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=1200&q=80"
              alt="Mapa"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center animate-pulse shadow-2xl">
                <MapPin size={32} className="text-white" />
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-gray-800">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <MapPin className="text-red-500" />
                Endereço
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Rua XXXX, 123<br />
                Barra da Tijuca<br />
                Rio de Janeiro - RJ<br />
                CEP: 22640-100
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-gray-800">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Clock className="text-red-500" />
                Horário de Funcionamento
              </h3>
              <div className="space-y-2 text-gray-300">
                <p><span className="font-bold text-white">Seg - Sex:</span> 14h - 22h</p>
                <p><span className="font-bold text-white">Sábado:</span> 10h - 00h</p>
                <p><span className="font-bold text-white">Domingo:</span> 10h - 20h</p>
              </div>
            </div>
          </div>

          {/* Contact Buttons */}
          <div className="grid md:grid-cols-3 gap-6">
            <a href="https://wa.me/5521999999999" className="group bg-gradient-to-br from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 p-6 rounded-xl text-center transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-green-900/50">
              <Phone size={32} className="mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <div className="font-bold text-lg mb-1">WhatsApp</div>
              <div className="text-sm text-green-100">(21) 99999-9999</div>
            </a>

            <a href="mailto:contato@acelaraclub.com.br" className="group bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 p-6 rounded-xl text-center transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-900/50">
              <Mail size={32} className="mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <div className="font-bold text-lg mb-1">E-mail</div>
              <div className="text-sm text-blue-100">contato@acelaraclub.com.br</div>
            </a>

            <a href="#agendar" className="group bg-gradient-to-br from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 p-6 rounded-xl text-center transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-red-900/50">
              <MapPin size={32} className="mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <div className="font-bold text-lg mb-1">Agende uma Visita</div>
              <div className="text-sm text-red-100">Conheça nosso espaço</div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;