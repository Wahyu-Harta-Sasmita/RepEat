import React from 'react';

const CartFooter = ({ quantity, onDelete, onAddToCart, onSave }) => {
  return (
    <footer className="p-4 bg-gray-300 flex justify-between items-center">
      <span className="text-lg font-semibold">Jumlah: {quantity}</span>
      <div className="flex space-x-2">
        <button className="bg-red-500 text-white px-4 py-2 rounded-md" onClick={onDelete}>🗑️</button>
        <button className="bg-green-500 text-white px-4 py-2 rounded-md" onClick={onAddToCart}>Add to Cart & Buy</button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={onSave}>Save</button>
      </div>
    </footer>
  );
};

export default CartFooter;
