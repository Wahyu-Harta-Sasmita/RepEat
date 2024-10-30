import React, { useState } from 'react';

const CartPage2 = () => {
  const [quantity, setQuantity] = useState(1);
  const price = 100000; // Harga produk dalam rupiah

  const handleDecrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleAddToCart = () => {
    const cartItem = {
      productId: 1, // ID produk (ganti sesuai kebutuhan)
      quantity: quantity,
      price: price,
    };

    // Ganti URL ini dengan endpoint API yang sesuai
    fetch('https://api.example.com/cart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cartItem),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Item added to cart:', data);
        // Mungkin Anda ingin memberi tahu pengguna bahwa produk telah ditambahkan ke keranjang
      })
      .catch(error => {
        console.error('Error adding item to cart:', error);
        // Tangani kesalahan jika ada
      });
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-white">
      {/* Header */}
      <header className="w-full bg-green-500 py-4 text-center text-black font-bold text-xl">
        Add to Cart
      </header>

      {/* Content */}
      <div className="flex flex-col items-center mt-8 w-full max-w-md px-4">
        {/* Product Selection */}
        <div className="flex justify-between items-center w-full mb-4">
          <h2 className="text-lg font-bold">Choose Products</h2>
          <span className="text-green-500 font-bold text-lg">Rp.{price.toLocaleString()}</span>
        </div>

        <div className="flex justify-around w-full mb-6">
          <div className="bg-gray-300 w-20 h-20 flex items-center justify-center">#1</div>
          <div className="bg-gray-300 w-20 h-20 flex items-center justify-center">#2</div>
          <div className="bg-gray-300 w-20 h-20 flex items-center justify-center">#3</div>
          <div className="bg-gray-300 w-20 h-20 flex items-center justify-center">#4</div>
        </div>

        {/* Quantity Selector */}
        <div className="flex items-center space-x-4 mb-8">
          <span className="text-lg font-bold">Jumlah</span>
          <div className="flex items-center space-x-2 bg-gray-200 rounded-full px-2 py-1">
            <button
              onClick={handleDecrement}
              className="text-gray-600 font-bold px-2 hover:text-black"
            >
              −
            </button>
            <span className="bg-green-500 text-white font-bold px-4 py-1 rounded-full">{quantity}</span>
            <button
              onClick={handleIncrement}
              className="text-gray-600 font-bold px-2 hover:text-black"
            >
              +
            </button>
          </div>
        </div>

        {/* Add to Cart Button */}
        <button 
          onClick={handleAddToCart} // Menambahkan pemanggilan fungsi saat tombol diklik
          className="bg-green-500 text-black font-bold text-lg py-3 px-6 rounded-full w-full max-w-xs hover:bg-green-600"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default CartPage2;
