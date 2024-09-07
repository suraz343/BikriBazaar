import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-blue-600 py-16 m-12">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-white max-w-lg">
          <h1 className="text-6xl font-bold mb-4">Bikri Bazaar</h1>
          <p className="text-lg mb-6">
            Buy, Sell, Reuse - A Marketplace for Second-Hand Household Goods
          </p>
          <div className="flex items-center space-x-4">
            <button className="bg-white text-blue-600 font-semibold px-6 py-2 rounded-full flex items-center hover:bg-gray-100 transition">
              Start Selling 
              <span className="ml-2">→</span>
            </button>
            <input
              type="text"
              placeholder="Search..."
              className="bg-white text-gray-800 px-4 py-2 rounded-full border-2 border-gray-300 focus:outline-none focus:border-blue-400"
            />
          </div>
        </div>
        <div className="w-1/3">
          <div className="bg-gray-200 w-full h-64 flex justify-center items-center rounded-lg">
            <span className="text-gray-500">[Insert Image]</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
