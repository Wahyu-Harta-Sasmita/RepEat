import React from 'react';

function DonationPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-green-500 p-4 flex items-center justify-between text-white">
        <div className="flex items-center">
          <img src="/src/assets/images/Logo_Text_Small.png" alt="RepEat Logo" className="w-25 h-10 mr-4 bg-white flex rounded-md" />
        </div>
        <div className="flex-grow mx-4">
          <input
            type="text"
            placeholder="search food / store"
            className="w-full bg-gray-200 rounded-full px-4 py-2 text-gray-600 focus:outline-none"
          />
        </div>
        <nav className="flex items-center space-x-4">
          <a href="#forum" className="font-semibold">Forum</a>
          <a href="#products" className="font-semibold">Products</a>
          <button className="text-white">❤</button>
          <button className="text-white">🛒</button>
          <button className="text-white">🔔</button>
          <div className="bg-gray-400 rounded-full w-8 h-8 flex items-center justify-center text-sm">PP</div>
        </nav>
      </header>

      {/* Navigasi */}
      <div className="text-center mt-6">
        <a href="#makanan-donasi" className="text-xl font-semibold underline">Makanan Donasi</a>
        <a href="#donasi-uang" className="text-xl mx-6 font-semibold">Donasi Uang</a>
        <a href="#komunitas" className="text-xl font-semibold">Komunitas</a>
      </div>

      {/* List Product */}
      <div className="flex flex-wrap justify-center gap-6 p-6">
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className="w-72 bg-gray-200 rounded-lg shadow-lg overflow-hidden">
            {/* Product Image */}
            <div className="h-48 bg-gray-400 flex items-center justify-center text-white text-lg font-semibold">
              Photo Products
            </div>
            {/* Product Info */}
            <div className="p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-lg font-bold">name products</span>
                <button><i className="fas fa-heart"></i></button>
              </div>
              <p className="text-gray-500">Free</p>
              <p className="mt-2 text-sm text-gray-600">
                Description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor mus massa pretium sodales tempor nulla aenean mollis pellentesque.
              </p>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-sm font-bold">Stok: 10</span>
                <button className="bg-green-500 text-white font-semibold py-1 px-4 rounded hover:bg-green-600 transition">
                  Free Order
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Floating Button */}
      <button className="fixed bottom-6 right-6 bg-white border-2 border-black rounded-full p-3 shadow-lg">
        <i className="fas fa-plus text-2xl"></i>
      </button>
    </div>
  );
}

export default DonationPage;
