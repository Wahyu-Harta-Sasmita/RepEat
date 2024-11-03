import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProductDetails = ({ product, setIsModalOpen }) => {
  const navigate = useNavigate();

  const handleAddToCart = () => {
    // Open the modal when the user clicks "Add to Cart"
    setIsModalOpen(true);
  };

  return (
    <div className="flex w-full max-w-4xl gap-8">
      <div className="w-64 h-64 bg-gray-300 flex items-center justify-center">
        {product.foto_makanan ? (
          <img src={product.foto_makanan} alt={product.nama_makanan} className="w-full h-full rounded-lg object-cover" />
        ) : (
          'No Image Available'
        )}
      </div>

      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-bold">{product.nama_makanan}</h2>
        <div className="flex items-center gap-2">
          <span className="text-gray-700">Stok: {product.stok || 'N/A'}</span>
          <a href="#" className="text-red-500 ml-auto">⚠️ Report</a>
        </div>
        <p className="text-xl font-bold">Rp. {product.price.toLocaleString()}</p>
        <h3 className="font-semibold">Deskripsi</h3>
        <p className="text-gray-700">{product.desc || 'Tidak ada deskripsi.'}</p>

        <div className="flex gap-4 mt-4">
          <button onClick={handleAddToCart} className="px-4 py-2 font-bold text-black bg-green-500 rounded-full hover:bg-green-600">
            Add to Cart
          </button>
          <button className="px-4 py-2 font-bold text-black bg-green-500 rounded-full hover:bg-green-600">
            Buy
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
