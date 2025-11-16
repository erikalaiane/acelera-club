import React from 'react';
import { Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <div className="text-3xl font-bold text-red-600 mb-4">🏎️ ACELERA CLUB</div>
          <p className="text-gray-400">O primeiro hub de automobilismo do Rio</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h4 className="font-bold mb-4">Institucional</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-red-600">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-red-600">Nossa Equipe</a></li>
              <li><a href="#" className="hover:text-red-600">Acelera Lab</a></li>
              <li><a href="#" className="hover:text-red-600">Parceiros</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Experiência</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#espaco" className="hover:text-red-600">O Espaço</a></li>
              <li><a href="#planos" className="hover:text-red-600">Planos</a></li>
              <li><a href="#eventos" className="hover:text-red-600">Eventos</a></li>
              <li><a href="#loja" className="hover:text-red-600">Loja</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contato</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="https://wa.me/5521999999999" className="hover:text-red-600">WhatsApp</a></li>
              <li><a href="mailto:contato@acelaraclub.com.br" className="hover:text-red-600">Email</a></li>
              <li><a href="https://instagram.com" className="hover:text-red-600">Instagram</a></li>
              <li><a href="https://youtube.com" className="hover:text-red-600">YouTube</a></li>
            </ul>
          </div>
        </div>

        <div className="flex justify-center gap-6 mb-8">
          <a href="https://instagram.com" className="text-2xl hover:text-red-600 transition"><Instagram /></a>
          <a href="https://youtube.com" className="text-2xl hover:text-red-600 transition"><Youtube /></a>
        </div>

        <div className="text-center text-gray-500 text-sm">
          <p className="mb-2">© 2024 Acelera Club RJ - Todos os direitos reservados</p>
          <p>
            <a href="#" className="hover:text-red-600">Política de Privacidade</a> | 
            <a href="#" className="hover:text-red-600 ml-2">Termos de Uso</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;