import React from 'react';
import { Search, Cart, Person, Bell } from 'react-bootstrap-icons'; // Import icons

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-blue-600 text-2xl font-bold">
          Bikri Bazaar
        </div>

        {/* Search bar */}
        <div className="w-full max-w-lg mx-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>
        </div>

        {/* Icons */}
        <div className="flex space-x-8 items-center text-gray-600 mr-0">
          <Cart className="cursor-pointer text-xl" />
          <Person className="cursor-pointer text-xl" />
          <Bell className="cursor-pointer text-xl" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
