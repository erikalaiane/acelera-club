import React from 'react';
import { ShoppingCart } from 'lucide-react';

const Marketplace = () => {
  const products = [
    { name: 'Camiseta Acelera', price: 'R$ 89,90', image: '🏎️' },
    { name: 'Boné Racing', price: 'R$ 69,90', image: '🧢' },
    { name: 'Keychain F1 2024', price: 'R$ 39,90', image: '🔑' },
    { name: 'Miniatura McLaren', price: 'R$ 249,90', image: '🏁' },
    { name: 'Jaqueta Paddock', price: 'R$ 299,00', image: '🧥' },
    { name: 'Photocard Senna', price: 'R$ 15,90', image: '📸' },
    { name: 'Box Mensal', price: 'R$ 79,90', image: '📦' },
    { name: 'Capacete Réplica', price: 'R$ 899,00', image: '🪖' }
  ];

  return (
    <section id="loja" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Leve o Acelera com você</h2>
          <p className="text-gray-400 text-lg">Produtos exclusivos para fãs de verdade</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {products.map((product, idx) => (
            <div key={idx} className="bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition border border-gray-800">
              <div className="aspect-square bg-gray-800 flex items-center justify-center text-6xl">
                {product.image}
              </div>
              <div className="p-4">
                <h3 className="font-bold mb-2">{product.name}</h3>
                <p className="text-red-600 font-bold text-lg">{product.price}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a href="#loja" className="inline-block bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition flex items-center justify-center gap-2 mx-auto w-fit">
            <ShoppingCart /> VISITE NOSSA LOJA ONLINE
          </a>
        </div>
      </div>
    </section>
  );
};

export default Marketplace;