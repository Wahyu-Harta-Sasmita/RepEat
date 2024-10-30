import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom'; 
import TextLogo from '../../../assets/images/Logo_Text.png';

const FullProduct = () => {
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();

  const fetchProductData = async () => {
    try {
      const response = await fetch(`https://api.trplweb.wefgis-sync.com/api/foods/${id}`);
      const data = await response.json();
      setProduct(Array.isArray(data) ? data[0] : data);
      console.log('Fetched product data:', data);
    } catch (error) {
      console.error('Error fetching product:', error);
    }
  };

  useEffect(() => {
    fetchProductData();
  }, [id]);

  const handleAddToCart = async () => {
    if (!product) return;

    const cartItem = {
      productId: product.id,
      quantity: 1,
      price: product.price,
    };

    try {
      const response = await fetch('https://api.example.com/cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cartItem),
      });

      if (response.ok) {
        console.log('Item added to cart:', await response.json());
        navigate('/cart');
      } else {
        console.error('Failed to add item to cart');
      }
    } catch (error) {
      console.error('Error adding item to cart:', error);
    }
  };

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
            <a href="/products" className="font-bold text-black">Products</a>
            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-700">PP</div>
          </div>
        </div>
      </header>

      <main className="flex flex-col items-center p-4 mt-8">
        {!product ? (
          <p className="text-center">Loading product details...</p>
        ) : (
          <>
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
                  <span className="text-gray-700">Stok: {product.stok || '20'}</span>
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

            <div className="flex gap-2 mt-8">
              <button className="px-4 py-2 font-bold text-black bg-green-500 rounded-l-full hover:bg-green-600">❮</button>
              <button className="px-4 py-2 font-bold text-black bg-green-500 rounded-r-full hover:bg-green-600">❯</button>
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default FullProduct;
