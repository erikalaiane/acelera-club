import React from 'react';
import { Instagram as InstagramIcon } from 'lucide-react';

const Instagram = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">#AceleraClub no Instagram</h2>
          <p className="text-gray-400 text-lg">Acompanhe nosso dia a dia nas pistas</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="aspect-square bg-gray-800 rounded-lg hover:opacity-80 transition flex items-center justify-center text-4xl">
              📸
            </div>
          ))}
        </div>

        <div className="text-center">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="inline-block border-2 border-red-600 hover:bg-red-600 text-white px-8 py-3 rounded-lg font-bold transition flex items-center gap-2 mx-auto w-fit">
            <InstagramIcon /> SIGA @acelaraclub_rio
          </a>
        </div>
      </div>
    </section>
  );
};

export default Instagram;