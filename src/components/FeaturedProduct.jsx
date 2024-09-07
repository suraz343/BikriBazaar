import React from 'react';
import { ArrowLeft, ArrowRight } from 'react-bootstrap-icons';



const FeaturedProduct = () => {
    const featuredProducts = [
        { name: 'Vintage Leather Sofa', price: '$299.99' },
        { name: 'Modern Coffee Table', price: '$149.99' },
        { name: 'Antique Brass Lamp', price: '$79.99' },
      ];
      
      const ProductCard = ({ name, price }) => (
        <div className="bg-white shadow-md p-4 rounded-lg">
          <div className="bg-gray-200 h-32 rounded mb-4 flex justify-center items-center">
            <span className="text-gray-400">[Image]</span>
          </div>
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-blue-600 font-bold">{price}</p>
        </div>
      );

      
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
        <div className="flex items-center space-x-4">
          {/* Left Arrow */}
          <button className="bg-gray-200 p-3 rounded-full hover:bg-gray-300">
            <ArrowLeft />
          </button>

          {/* Product Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 flex-grow">
            {featuredProducts.map((product) => (
              <ProductCard key={product.name} name={product.name} price={product.price} />
            ))}
          </div>

          {/* Right Arrow */}
          <button className="bg-gray-200 p-3 rounded-full hover:bg-gray-300">
            <ArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProduct;
