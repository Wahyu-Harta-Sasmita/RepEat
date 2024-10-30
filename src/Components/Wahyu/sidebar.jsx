import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Sidebar() {
  const location = useLocation();

  return (
    <div className="w-64 bg-white p-4">
      <h2 className="text-green-500 font-bold text-2xl">RepEat</h2>
      <ul className="mt-6 space-y-4">
        <li>
          <Link 
            to="/seller/Dashboard" 
            className={`p-2 rounded ${location.pathname === '/seller/Dashboard' ? 'bg-green-500 text-white' : 'text-gray-700'}`}
          >
            Dashboard
          </Link>
        </li>
        <li>
          <Link 
            to="/seller/Products" 
            className={`p-2 rounded ${location.pathname === '/seller/Products' ? 'bg-green-500 text-white' : 'text-gray-700'}`}
          >
            Produk Kamu
          </Link>
        </li>
        <li className={`p-2 rounded ${location.pathname === '/seller/Komunitas' ? 'bg-green-500 text-white' : 'text-gray-700'}`}>
          Komunitas
        </li>
        <li className={`p-2 rounded ${location.pathname === '/seller/Laporan' ? 'bg-green-500 text-white' : 'text-gray-700'}`}>
          Laporan Pengguna
        </li>
        <li className={`p-2 rounded ${location.pathname === '/seller/Donasi' ? 'bg-green-500 text-white' : 'text-gray-700'}`}>
          Donasi
        </li>
        <li className={`p-2 rounded ${location.pathname === '/seller/Order' ? 'bg-green-500 text-white' : 'text-gray-700'}`}>
          Order
        </li>
        <li className={`p-2 rounded ${location.pathname === '/seller/Delivery' ? 'bg-green-500 text-white' : 'text-gray-700'}`}>
          Delivery
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
