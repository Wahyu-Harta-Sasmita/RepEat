import React, { useState, useEffect } from 'react';
import TextLogo from '../../../assets/images/Logo_Text.png';

const FullProduct = () => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Ganti URL ini dengan endpoint API yang sesuai
    fetch('https://api.example.com/product/1') // misalnya, produk dengan ID 1
      .then(response => response.json())
      .then(data => setProduct(data))
      .catch(error => console.error('Error fetching product:', error));
  }, []);

  if (!product) {
    return <p className="text-center mt-4">Loading product details...</p>;
  }

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-green-500 text-white w-full">
        <div className="flex justify-between items-center p-4 w-full">
          <div className="flex items-center flex-shrink-0">
            <img src={TextLogo} alt="Logo" className="w-32 h-auto mr-6 bg-white p-1 rounded-md" />
          </div>
          <div className="flex items-center space-x-4 flex-grow">
            <input
              type="text"
              placeholder="search food / store"
              className="px-4 py-2 rounded-full flex-grow bg-gray-100 text-black placeholder-gray-500 outline-none"
            />
            <a href="#" className="font-bold text-black">Forum</a>
            <a href={FullProduct} className="font-bold text-black">Products</a>
            <button className="text-white">❤️</button>
            <button className="text-white">🛒</button>
            <button className="text-white">🔔</button>
            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-700">PP</div>
          </div>
        </div>
      </header>

      {/* Product Content */}
      <main className="flex flex-col items-center p-4">
        <div className="flex space-x-8 w-full max-w-4xl mt-8">
          {/* Product Image */}
          <div className="bg-gray-300 w-64 h-64 flex items-center justify-center">
            {product.image ? (
              <img src={product.image} alt={product.name} className="w-full h-full object-cover rounded-lg" />
            ) : (
              "No Image Available"
            )}
          </div>

          {/* Product Details */}
          <div className="flex flex-col space-y-2">
            <h2 className="text-2xl font-bold">{product.name}</h2>
            <div className="flex items-center space-x-2">
              <span className="text-yellow-500">⭐ {product.rating || '4.7'}</span>
              <span className="text-gray-700">stok: {product.stock || '20'}</span>
              <a href="#" className="text-red-500 ml-auto">⚠️ Report</a>
            </div>
            <p className="text-xl font-bold">Rp. {product.price}</p>
            <h3 className="font-semibold">Deskripsi</h3>
            <p className="text-gray-700">{product.description || 'Tidak ada deskripsi.'}</p>

            {/* Add to Cart and Buy Buttons */}
            <div className="flex space-x-4 mt-4">
              <button className="bg-green-500 text-black font-bold py-2 px-4 rounded-full hover:bg-green-600">
                Add to Cart
              </button>
              <button className="bg-green-500 text-black font-bold py-2 px-4 rounded-full hover:bg-green-600">
                Buy
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex space-x-2 mt-8">
          <button className="bg-green-500 text-black font-bold py-2 px-4 rounded-l-full hover:bg-green-600">❮</button>
          <button className="bg-green-500 text-black font-bold py-2 px-4 rounded-r-full hover:bg-green-600">❯</button>
        </div>
      </main>
    </div>
  );
}

export default FullProduct;
