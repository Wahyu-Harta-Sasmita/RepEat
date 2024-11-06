import React from 'react';

const CartItem = ({ item, handleDelete }) => {
  return (
    <li className="flex items-center p-4 bg-gray-300 rounded-md mb-4">
      <img src={item.foto_makanan} alt={item.nama_makanan} className="w-16 h-16 mr-4" />
      <div className="flex-1">
        <h3 className="font-semibold">{item.nama_makanan}</h3>
        <p>Price: {item.price}</p>
        <p>Quantity: {item.quantity}</p>
      </div>
      <button
        onClick={() => handleDelete(item.id)}
        className="text-red-500 hover:text-red-700"
      >
        Remove
      </button>
    </li>
  );
};

export default CartItem;
