import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-gray-200 p-8 rounded-lg shadow-lg flex flex-col w-72 m-4">
      <div className="bg-gray-400 h-56 flex items-center justify-center text-white font-bold rounded-lg">
        {product.foto_makanan ? (
          <img
            src={product.foto_makanan}
            alt={product.nama_makanan || 'Product Image'}
            className="h-full w-full object-cover rounded-lg"
          />
        ) : (
          "Photo Not Available"
        )}
      </div>
      <div className="mt-4 flex flex-col flex-grow">
        <Link to={`/product/${product.id}`} className="font-bold text-lg text-black hover:underline">
          {product.nama_makanan}
        </Link>
        <div className="flex justify-between items-center mt-2 space-x-2">
          <span className="font-bold text-green-500">Rp.{product.price}</span>
        </div>
        <button className="text-gray-500 hover:text-red-500 mt-2">
          <i className="fas fa-heart"></i>
        </button>
      </div>
      <p className="font-semibold mt-2">Description</p>
      <Link to={`/product/${product.id}`} className="text-sm mt-1 text-gray-600 hover:underline">
        {product.desc}
      </Link>
    </div>
  );
};

export default ProductCard;