import React from "react";

function NavBar() {
    return (
        <nav className="bg-body-tertiary">
            <div className="container mx-auto flex justify-between items-center p-4">
                {/* Brand Name */}
                <a href="/" className="text-blue-600 text-4xl font-extrabold no-underline">Bikri Bazaar</a>

                {/* Search Form */}
                <form className="flex flex-grow mx-4 md:w-1/2" role="search">
                    <div className="relative w-full">
                        <input
                            className="w-full py-2 px-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                            type="search"
                            placeholder="🔍 Search for products..."
                            aria-label="Search"
                        />
                    </div>
                </form>

                {/* Icons */}
                <div className="flex items-center space-x-4">
                    <button className="p-2 focus:outline-none">
                        <i className="bi bi-cart-dash text-2xl"></i>
                    </button>
                    <button className="p-2 focus:outline-none">
                        <i className="bi bi-person-circle text-2xl"></i>
                    </button>
                    <button className="p-2 focus:outline-none">
                        <i className="bi bi-bell-fill text-2xl"></i>
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
