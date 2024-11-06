import React, { useEffect, useState } from 'react';

const ProductDetails2 = ({ product, quantity, increment, decrement, onCheck }) => {
  const [checked, setChecked] = useState(true);

  useEffect(() => {
    // Load quantity and checked state from localStorage
    const savedChecked = JSON.parse(localStorage.getItem("checked")) || true;
    setChecked(savedChecked);
  }, [product]); 

  const handleCheck = () => {
    setChecked(!checked); 
    onCheck(); 

    // Save checked state to localStorage
    localStorage.setItem("checked", JSON.stringify(!checked));
  };

  useEffect(() => {
    // Save quantity to localStorage
    localStorage.setItem("quantity", quantity);
  }, [quantity]);

  if (!product) return null;

  const formattedPrice = new Intl.NumberFormat('id-ID').format(product.price);

  const handleIncrement = () => {
    if (quantity < product.stok) {
      increment();
    }
  };

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
        <button onClick={decrement} className="text-xl px-2 bg-gray-200">-</button>
        <span className="px-2 bg-green-500 text-white rounded-md">{quantity}</span>
        <button onClick={handleIncrement} className="text-xl px-2 bg-gray-200">+</button>
      </div>
    </div>
  );
};

export default ProductDetails2;