import React from 'react';

const CartProductDetails = ({ product, quantity, onIncrement, onDecrement, onSubmit }) => {
  if (!product) {
    return <p>Loading product details...</p>;
  }

  return (
    <div className="w-full flex flex-col items-center">
      <div className="flex justify-between items-center w-full mb-4">
        <h2 className="text-lg font-bold">{product.nama_makanan}</h2>
        <span className="text-green-500 font-bold text-lg">Rp.{product.price.toLocaleString()}</span>
      </div>

      <div className="w-full mb-6">
        {product.foto_makanan ? (
          <img
            src={product.foto_makanan}
            alt={product.nama_makanan}
            className="w-full h-40 object-cover rounded-md"
          />
        ) : (
          <div className="w-full h-40 bg-gray-300 rounded-md flex items-center justify-center">
            No Image Available
          </div>
        )}
      </div>

      <div className="flex items-center space-x-4 mb-8">
        <span className="text-lg font-bold">Jumlah</span>
        <div className="flex items-center space-x-2 bg-gray-200 rounded-full px-2 py-1">
          <button
            onClick={onDecrement}
            className="text-gray-600 font-bold px-2 hover:text-black"
            aria-label="Decrease quantity"
            disabled={quantity <= 1}
          >
            −
          </button>
          <span className="bg-green-500 text-white font-bold px-4 py-1 rounded-full">{quantity}</span>
          <button
            onClick={onIncrement}
            className="text-gray-600 font-bold px-2 hover:text-black"
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>
      </div>

      <button
        onClick={onSubmit}
        className="bg-green-500 text-black font-bold text-lg py-3 px-6 rounded-full w-full max-w-xs hover:bg-green-600"
        aria-label="Add to Cart"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default CartProductDetails;