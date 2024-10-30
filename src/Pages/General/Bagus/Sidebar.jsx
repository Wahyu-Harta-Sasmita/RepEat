import React from 'react';

function Sidebar() {
  return (
    <div className="w-64 bg-white border-r h-full p-4">
      {/* Profile User */}
      <div className="flex items-center mb-6 space-x-4">
        <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center text-xl font-semibold">
        </div>
        <div>
          <h2 className="font-bold text-lg">TRPL</h2>
          <p className="text-gray-500 text-sm">trpl.undiksha@gmail.com</p>
        </div>
      </div>

      {/* Menu User */}
      <div className="space-y-4">
        <div>
          <button className="w-full text-left text-sm font-semibold text-gray-700 py-2 hover:bg-gray-100 rounded">My Profile</button>
          <button className="w-full text-left text-sm font-semibold text-gray-700 py-2 hover:bg-gray-100 rounded">My Cart</button>
        </div>

        <div className="border-t pt-4 space-y-2">
          <button className="w-full text-left text-sm font-semibold text-gray-700 py-2 hover:bg-gray-100 rounded">Notifications</button>
          <button className="w-full text-left text-sm font-semibold text-gray-700 py-2 hover:bg-gray-100 rounded">Like</button>
          <button className="w-full text-left text-sm font-semibold text-gray-700 py-2 hover:bg-gray-100 rounded">Settings</button>
          <button className="w-full text-left text-sm font-semibold text-gray-700 py-2 hover:bg-gray-100 rounded">Address</button>
          <button className="w-full text-left text-sm font-semibold text-gray-700 py-2 hover:bg-gray-100 rounded">Order</button>
        </div>

        <div className="border-t pt-4 space-y-2">
          <button className="w-full text-left text-sm font-semibold text-gray-700 py-2 hover:bg-gray-100 rounded">Start Selling</button>
          <button className="w-full text-left text-sm font-semibold text-gray-700 py-2 hover:bg-gray-100 rounded">My Store</button>
        </div>

        <div className="border-t pt-4">
          <button className="w-full text-left text-sm font-semibold text-gray-700 py-2 hover:bg-gray-100 rounded">INFORMATION</button>
        </div>
      </div>

      {/* Button Logout */}
      <div className="border-t pt-4 mt-4">
        <button className="w-full text-left text-sm font-semibold text-red-600 py-2 hover:bg-gray-100 rounded">Log Out</button>
      </div>
    </div>
  );
}

export default Sidebar;
