import React from 'react';



const Category = () => {
    const categories = [
        { name: 'Furniture', icon: '🪑' },
        { name: 'Electronics', icon: '📱' },
        { name: 'Kitchen', icon: '🍳' },
        { name: 'Decor', icon: '🏡' },
        { name: 'Garden', icon: '🌿' },
        { name: 'Books', icon: '📚' },
      ];
      
      const CategoryCard = ({ name, icon }) => (
        <div className="bg-white shadow-md p-6 rounded-lg flex flex-col items-center text-center">
          <div className="text-4xl mb-4">{icon}</div>
          <p className="text-lg font-semibold">{name}</p>
        </div>
      );

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">Browse by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category) => (
            <CategoryCard key={category.name} name={category.name} icon={category.icon} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Category;
