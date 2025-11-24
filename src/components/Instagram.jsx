import React from 'react';
import img1 from '/images/instagram/1.jpg';
import img2 from '/images/instagram/2.jpg';
import img3 from '/images/instagram/3.jpg';
import img4 from '/images/instagram/4.jpg';
import img5 from '/images/instagram/5.jpg';
import img6 from '/images/instagram/6.jpg';
import { Instagram as InstagramIcon } from 'lucide-react';

const Instagram = () => {
  const images = [img1, img2, img3, img4, img5, img6];

  return (
    <section className="py-24 bg-gray-900 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block bg-pink-500/10 border border-pink-500/30 rounded-full px-4 py-2 mb-4">
            <span className="text-sm font-semibold text-pink-400">REDES SOCIAIS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">#AceleraClub</span> no Instagram
          </h2>
          <p className="text-gray-400 text-lg">Acompanhe nosso dia a dia nas pistas</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {images.map((img, i) => (
            <div key={i} className="group relative aspect-square rounded-xl overflow-hidden border-2 border-gray-800 hover:border-pink-500 transition-all duration-300 cursor-pointer">
              <img 
                src={img}
                alt={`Instagram post ${i + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                <InstagramIcon className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={32} />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border-2 border-pink-500 hover:bg-pink-500/10 text-white px-8 py-3 rounded-xl font-bold transition-all duration-300 group">
            <InstagramIcon className="group-hover:scale-110 transition-transform" /> 
            SIGA @acelaraclub_rio
          </a>
        </div>
      </div>
    </section>
  );
};

export default Instagram;