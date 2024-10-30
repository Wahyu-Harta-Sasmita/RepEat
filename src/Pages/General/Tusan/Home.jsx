import React from 'react';
import BigLogo from '../../../assets/images/Logo.png';
import TextLogo from '../../../assets/images/Logo_Text.png';
import FullProduct from '../../General/Tusan/FullProduct';

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-green-500 text-white w-full">
        <div className="flex justify-between items-center p-4 w-full">
          <div className="flex items-center flex-shrink-0">
            <img src={TextLogo} alt="" className="w-32 h-auto mr-6 bg-white p-1 rounded-md" />
          </div>
          <div className="flex items-center space-x-4 flex-grow">
            <input
              type="text"
              placeholder="search food / store"
              className="px-4 py-2 rounded-full flex-grow bg-gray-100 text-black placeholder-gray-500 outline-none"
            />
            <a href="#" className="font-bold text-black">Forum</a>
            <a href={F} className="font-bold text-black">Products</a>
            <button className="text-white">❤️</button>
            <button className="text-white">🛒</button>
            <button className="text-white">🔔</button>
            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-700">PP</div>
          </div>
        </div>
      </header>

      <main className="flex justify-center items-center mt-16 max-w-screen-lg mx-auto">
        <div className="flex flex-grow items-center justify-between">
          <div className="flex-shrink-0 mr-4 flex items-center">
            <img src={BigLogo} alt="" className="max-h-80" />
          </div>

          <div className="flex flex-col items-center">
            <h1 className="text-3xl font-bold mb-2">Welcome to RepEat</h1>
            <p className="text-gray-700 mb-0 text-lg">
              RepEat: Web Apps Untuk Mengelola dan Menjual
            </p>
            <p className="text-gray-700 mb-6 text-lg">
              Kembali Makanan Sisa Yang Masih Layak Makan
            </p>

            <div className="flex flex-col items-center mb-6">
              <h2 className="font-bold text-2xl mb-2">LET'S DONATE</h2>
              <div className="flex space-x-4">
                <button className="bg-green-500 text-black font-bold py-2 px-8 rounded-full hover:bg-green-600 w-30 h-12">
                  PRODUCTS
                </button>
                <button className="bg-green-500 text-black font-bold py-2 px-8 rounded-full hover:bg-green-600 w-36 h-12">
                  MONEY
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
