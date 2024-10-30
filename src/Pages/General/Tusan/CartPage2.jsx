import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const CartPage2 = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://api.trplweb.wefgis-sync.com/api/foods/${id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [id]);

  const handleDecrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-white">
      <header className="w-full bg-green-500 py-4 text-center text-black font-bold text-xl">
        Add to Cart
      </header>

      <div className="flex flex-col items-center mt-8 w-full max-w-md px-4">
        {product ? (
          <>
            <div className="flex justify-between items-center w-full mb-4">
              <h2 className="text-lg font-bold">{product.nama_makanan}</h2>
              <span className="text-green-500 font-bold text-lg">Rp.{product.price}</span>
            </div>

            <div className="w-full mb-6">
              <img
                src={product.foto_makanan}
                alt={product.nama_makanan}
                className="w-full h-40 object-cover rounded-md"
              />
            </div>
          </>
        ) : (
          <p>Loading product...</p>
        )}

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

        <Link to={`/cartpage/${id}`}>
          <button
            className="bg-green-500 text-black font-bold text-lg py-3 px-6 rounded-full w-full max-w-xs hover:bg-green-600"
          >
            Add to Cart
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CartPage2;
