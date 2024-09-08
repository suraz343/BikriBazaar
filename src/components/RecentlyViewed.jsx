import React, { useState } from 'react'; // Added useState import

const RecentlyViewed = () => {
  const [activeTab, setActiveTab] = useState('recentlyViewed');

  return (
    <section className="py-8">
      <div className="max-w-screen-lg mx-auto">
        <div className="flex space-x-4 mb-6">
          <button
            className={`px-4 py-2 border rounded ${activeTab === 'recentlyViewed' ? 'border-black' : 'border-gray-300'}`}
            onClick={() => setActiveTab('recentlyViewed')}
          >
            Recently Viewed
          </button>
          <button
            className={`px-4 py-2 border rounded ${activeTab === 'savedItems' ? 'border-black' : 'border-gray-300'}`}
            onClick={() => setActiveTab('savedItems')}
          >
            Saved Items
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {activeTab === 'recentlyViewed' ? (
            <>
              {/* Recently viewed items */}
              <div className="border p-4 rounded">
                <div className="h-40 bg-gray-200 mb-4"></div>
                <p>Retro Record Player</p>
                <p className="text-blue-500">$89.99</p>
              </div>
              <div className="border p-4 rounded">
                <div className="h-40 bg-gray-200 mb-4"></div>
                <p>Ceramic Vase Set</p>
                <p className="text-blue-500">$39.99</p>
              </div>
              <div className="border p-4 rounded">
                <div className="h-40 bg-gray-200 mb-4"></div>
                <p>Vintage Wall Clock</p>
                <p className="text-blue-500">$59.99</p>
              </div>
            </>
          ) : (
            <>
              {/* Saved items (you can populate this as needed) */}
              <div className="border p-4 rounded">
                <div className="h-40 bg-gray-200 mb-4"></div>
                <p>Saved Item 1</p>
                <p className="text-blue-500">$49.99</p>
              </div>
              <div className="border p-4 rounded">
                <div className="h-40 bg-gray-200 mb-4"></div>
                <p>Saved Item 2</p>
                <p className="text-blue-500">$29.99</p>
              </div>
              <div className="border p-4 rounded">
                <div className="h-40 bg-gray-200 mb-4"></div>
                <p>Saved Item 3</p>
                <p className="text-blue-500">$99.99</p>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default RecentlyViewed;
