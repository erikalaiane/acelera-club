import React from 'react';
import { Instagram, Youtube, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-900 py-16">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-800 rounded-xl flex items-center justify-center font-bold text-xl">
                AC
              </div>
              <div className="text-xl font-bold bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
                ACELERA CLUB
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              O primeiro hub de automobilismo do Rio de Janeiro. Viva sua paixão por corridas!
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Institucional</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-red-500 transition-colors text-sm">Sobre Nós</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-500 transition-colors text-sm">Nossa Equipe</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-500 transition-colors text-sm">Acelera Lab</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-500 transition-colors text-sm">Parceiros</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-500 transition-colors text-sm">Trabalhe Conosco</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Experiência</h4>
            <ul className="space-y-2">
              <li><a href="#espaco" className="text-gray-400 hover:text-red-500 transition-colors text-sm">O Espaço</a></li>
              <li><a href="#planos" className="text-gray-400 hover:text-red-500 transition-colors text-sm">Planos</a></li>
              <li><a href="#eventos" className="text-gray-400 hover:text-red-500 transition-colors text-sm">Eventos</a></li>
              <li><a href="#loja" className="text-gray-400 hover:text-red-500 transition-colors text-sm">Loja</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-500 transition-colors text-sm">Comunidade</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Contato</h4>
            <ul className="space-y-2">
              <li><a href="https://wa.me/5521999999999" className="text-gray-400 hover:text-red-500 transition-colors text-sm">WhatsApp</a></li>
              <li><a href="mailto:contato@acelaraclub.com.br" className="text-gray-400 hover:text-red-500 transition-colors text-sm">E-mail</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-500 transition-colors text-sm">FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-500 transition-colors text-sm">Suporte</a></li>
            </ul>
          </div>
        </div>

        {/* Social Media */}
        <div className="flex justify-center gap-4 mb-8">
          <a href="https://instagram.com" className="w-12 h-12 bg-gray-900 hover:bg-gradient-to-br hover:from-pink-600 hover:to-purple-600 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110">
            <Instagram size={20} />
          </a>
          <a href="https://youtube.com" className="w-12 h-12 bg-gray-900 hover:bg-red-600 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110">
            <Youtube size={20} />
          </a>
          <a href="https://facebook.com" className="w-12 h-12 bg-gray-900 hover:bg-blue-600 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110">
            <Facebook size={20} />
          </a>
          <a href="https://twitter.com" className="w-12 h-12 bg-gray-900 hover:bg-sky-600 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110">
            <Twitter size={20} />
          </a>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-900 pt-8 text-center">
          <p className="text-gray-500 text-sm mb-3">
            © 2024 Acelera Club RJ - Todos os direitos reservados
          </p>
          <div className="flex justify-center gap-6 text-xs text-gray-600">
            <a href="#" className="hover:text-red-500 transition-colors">Política de Privacidade</a>
            <span>|</span>
            <a href="#" className="hover:text-red-500 transition-colors">Termos de Uso</a>
            <span>|</span>
            <a href="#" className="hover:text-red-500 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;