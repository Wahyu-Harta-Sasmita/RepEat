import React from 'react';

const CartItem = ({ item, onDelete }) => {
  return (
    <li className="flex justify-between p-2 bg-gray-200 rounded-md mb-2">
      <span>{item.nama_makanan} x {item.quantity}</span>
      <span>Rp.{(item.price * item.quantity).toLocaleString()}</span>
      <button onClick={() => onDelete(item.id)} className="text-red-500">🗑️</button>
    </li>
  );
};

export default CartItem;
