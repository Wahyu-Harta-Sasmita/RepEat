import React, { useEffect, useState } from 'react';

const ProductDetails2 = ({ product, quantity, increment, decrement, onCheck }) => {
  const [checked, setChecked] = useState(() => {
    // Load checked state from localStorage
    return JSON.parse(localStorage.getItem("checked")) || true;
  });
  const [localQuantity, setLocalQuantity] = useState(() => {
    // Load quantity from localStorage if it exists
    return JSON.parse(localStorage.getItem("quantity")) || quantity;
  });

  useEffect(() => {
    // Save quantity and checked state to localStorage whenever they change
    localStorage.setItem("checked", JSON.stringify(checked));
    localStorage.setItem("quantity", JSON.stringify(localQuantity));
  }, [checked, localQuantity]);

  const handleCheck = () => {
    setChecked(!checked);
    onCheck();
  };

  const handleIncrement = () => {
    if (localQuantity < product.stok) {
      setLocalQuantity(prev => prev + 1);
      increment(); // Update parent component quantity
    }
  };

  const handleDecrement = () => {
    if (localQuantity > 1) {
      setLocalQuantity(prev => prev - 1);
      decrement(); // Update parent component quantity
    }
  };

  if (!product) return null;

  const formattedPrice = new Intl.NumberFormat('id-ID').format(product.price);

  return (
    <div className="flex items-center p-4 bg-gray-300 rounded-md mb-4">
      <input
        type="checkbox"
        className="mr-4"
        checked={checked}
        onChange={handleCheck}
      />
      <img className="w-16 h-16 mr-4 object-cover" src={product.foto_makanan} alt={product.nama_makanan} />
      <div className="flex-1">
        <div className="text-lg font-semibold">{product.nama_makanan}</div>
        <div className="flex items-center space-x-2 font-semibold">Harga: Rp {formattedPrice}</div>
        <div className="flex items-center space-x-2 font-semibold">
          <span>stok: {product.stok}</span>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <button onClick={handleDecrement} className="text-xl px-2 bg-gray-200">-</button>
        <span className="px-2 bg-green-500 text-white rounded-md">{localQuantity}</span>
        <button onClick={handleIncrement} className="text-xl px-2 bg-gray-200">+</button>
      </div>
    </div>
  );
};

export default ProductDetails2;
