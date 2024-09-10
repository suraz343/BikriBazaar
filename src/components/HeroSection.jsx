import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-blue-600 py-16 m-12">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-white max-w-lg">
          <h1 className="text-6xl font-bold mb-4">Bikri Bazaar</h1>
          <p className="text-xl mb-6">
            Buy, Sell, Reuse - A Marketplace for Second-Hand Household Goods
          </p>
          <div className="flex items-center space-x-4">
            <button className="bg-white text-blue-600 font-semibold px-6 py-2 rounded-full flex items-center hover:bg-gray-100 transition-transform">
              Start Selling 
              <span className="ml-2">→</span>
            </button>
            <button className="bg-white text-blue-600 font-semibold px-6 py-2 rounded-full flex items-center hover:bg-gray-100 ">
              Browse Products 
              <span className="ml-2">→</span>
            </button>
          
          </div>
        </div>
        <div className="w-1/3">
          <div className="bg-gray-200 w-full h-64 flex justify-center items-center rounded-lg">
            <span className="text-gray-500">
              <img src='https://imgs.search.brave.com/OKcvJy72cxGbqexytlIFkuS4XrWD_qXNakGA293hLWc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aXBob25lbGlmZS5j/b20vZGFpbHl0aXBz/L2ltZy8yNmQ5Y2Nl/M2E5ZGIxNjU0MDI5/NzQzLWIyMWFmNGUy/NDFmNzE2Mjg1NzE0/OTgtZ2lmLTIud2Vi/cA' alt='photo'></img>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
