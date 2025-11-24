import React from 'react';
import { ShoppingCart } from 'lucide-react';

const Marketplace = () => {
  const products = [
    { name: 'Camiseta Acelera', price: 'R$ 89,90', image: '/images/marketplace/1.jpg'},
    { name: 'Boné Racing', price: 'R$ 69,90', image: '/images/marketplace/2.jpg' },
    { name: 'Keychain F1 2024', price: 'R$ 39,90', image: '/images/marketplace/3.jpg' },
    { name: 'Miniatura McLaren', price: 'R$ 249,90', image: '/images/marketplace/4.jpg' },
    { name: 'Jaqueta Paddock', price: 'R$ 299,00', image: '/images/marketplace/5.jpg' },
    { name: 'Photocards', price: 'R$ 15,90', image: '/images/marketplace/6.jpg' },
    { name: 'Box Mensal', price: 'R$ 79,90', image: '/images/marketplace/7.jpg' },
    { name: 'Capacete Réplica', price: 'R$ 899,00', image: '/images/marketplace/8.jpg' }
  ];

  return (
    <section id="loja" className="py-24 bg-black relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block bg-red-500/10 border border-red-500/30 rounded-full px-4 py-2 mb-4">
            <span className="text-sm font-semibold text-red-400">MARKETPLACE</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            Leve o Acelera <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">com você</span>
          </h2>
          <p className="text-gray-400 text-xl">Produtos exclusivos para fãs de verdade</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {products.map((product, idx) => (
            <div key={idx} className="group relative bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden border border-gray-800 hover:border-red-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-red-900/30">
              <div className="aspect-square overflow-hidden bg-gray-800">
                <img 
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold mb-2 group-hover:text-red-500 transition-colors">{product.name}</h3>
                <div className="flex items-center justify-between">
                  <p className="text-red-500 font-bold text-lg">{product.price}</p>
                  <button className="w-8 h-8 bg-red-600 hover:bg-red-700 rounded-lg flex items-center justify-center transition-colors">
                    <ShoppingCart size={16} />
                  </button>
                </div>
              </div>
              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-t from-red-500/0 via-transparent to-transparent opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none"></div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a href="#loja" className="inline-flex items-center gap-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg shadow-red-900/50 hover:shadow-red-900/80 hover:scale-105">
            <ShoppingCart size={24} /> 
            VISITE NOSSA LOJA ONLINE
          </a>
        </div>
      </div>
    </section>
  );
};

export default Marketplace;