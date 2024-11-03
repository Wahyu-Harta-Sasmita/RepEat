// src/components/Home/Header.jsx
import React from 'react';
import TextLogo from '../../assets/images/Logo_Text.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-green-500 text-white w-full">
      <div className="flex justify-between items-center p-4 w-full">
        <div className="flex items-center flex-shrink-0">
          <Link to='/'>
          <img src={TextLogo} alt="Text Logo" className="w-32 h-auto mr-6 bg-white p-1 rounded-md" />
          </Link>
        </div>
        <div className="flex items-center space-x-4 flex-grow">
          <input
            type="text"
            placeholder="search food / store"
            className="px-4 py-2 rounded-full flex-grow bg-gray-100 text-black placeholder-gray-500 outline-none"
          />
          <Link to="" className="font-bold text-black">Forum</Link>
          <Link to="/shop" className="font-bold text-black">Foods</Link>
          <button className="text-white">❤️</button>
          <button className="text-white">🛒</button>
          <button className="text-white">🔔</button>
          <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-700">PP</div>
        </div>
      </div>
    </header>
  );
}

export default Header;
