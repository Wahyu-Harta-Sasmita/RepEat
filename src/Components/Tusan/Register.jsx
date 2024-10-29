import React from 'react';

function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <header className="bg-green-500 text-white flex justify-between items-center p-4">
        <div className="flex items-center">
          <img src="logo.png" alt="RepEat Logo" className="h-8 mr-2" />
          <span className="text-xl font-bold">Rep<span className="text-gray-800">Eat</span></span>
        </div>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="search food / store"
            className="px-4 py-2 rounded-full w-60 bg-gray-100 text-black placeholder-gray-500 outline-none"
          />
          <a href="#" className="text-white">Forum</a>
          <a href="#" className="text-white">Products</a>
          <button className="text-white">❤️</button>
          <button className="text-white">🛒</button>
          <button className="text-white">🔔</button>
          <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-700">PP</div>
        </div>
      </header>

      {/* Content */}
      <main className="flex flex-col items-center mt-16">
        <img src="logo-large.png" alt="RepEat Logo Large" className="h-32 mb-4" />
        <h1 className="text-2xl font-bold mb-2">Welcome, TRPL</h1>
        <p className="text-center text-gray-700 mb-6">
          RepEat: Web Apps Untuk Mengelola dan Menjual Kembali Makanan Sisa Yang Masih Layak Makan
        </p>
        
        {/* Donate Buttons */}
        <div className="flex space-x-4">
          <button className="bg-green-500 text-white font-bold py-2 px-4 rounded-full hover:bg-green-600">
            PRODUCTS
          </button>
          <button className="bg-green-500 text-white font-bold py-2 px-4 rounded-full hover:bg-green-600">
            MONEY
          </button>
        </div>
      </main>
    </div>
  );
}

export default Home;
  