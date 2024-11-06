import React from 'react';
import { Link } from 'react-router-dom';
import BigLogo from '../../assets/images/Logo.png'

const MainSection = () => {
  return (
    <div className="min-h-screen bg-white">
      <main className="flex items-center justify-center mt-16 max-w-screen-lg mx-auto">
        <div className="flex-shrink-0 mr-8 flex items-center">
          <img src={BigLogo} alt="Big Logo" className="max-h-80" />
        </div>

        <div className="flex flex-col items-center pl-8">
          <h1 className="text-3xl font-bold mb-2">Welcome to RepEat</h1>
          <p className="text-gray-700 mb-0 text-lg">RepEat: Web Apps Untuk Mengelola dan Menjual</p>
          <p className="text-gray-700 mb-6 text-lg">Kembali Makanan Sisa Yang Masih Layak Makan</p>

          <div className="flex flex-col items-center mb-6">
            <h2 className="font-bold text-2xl mb-2">LET'S DONATE</h2>
            <div className="flex space-x-4">
              <Link to="/products">
                <button className="bg-green-500 text-black font-bold py-2 px-8 rounded-full hover:bg-green-600 w-30 h-12">
                  PRODUCTS
                </button>
              </Link>
              <button className="bg-green-500 text-black font-bold py-2 px-8 rounded-full hover:bg-green-600 w-36 h-12">
                MONEY
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainSection;
