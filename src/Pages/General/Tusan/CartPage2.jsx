import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const CartPage2 = () => {
  const { id } = useParams();
  const navigate = useNavigate(); 
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState(null);

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

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Adding Product:', product); 

    const data = {
      nama_makanan: product.nama_makanan,
      price: product.price,
      sku: product.sku,
      stok: product.stok,
      category: product.category,
      desc: product.desc,
      quantity: quantity,
      foto_makanan: product.foto_makanan,
    };
    console.log('Product to be added to cart:', data);
    navigate(`/cartpage/${id}`);
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
              <span className="text-green-500 font-bold text-lg">Rp.{product.price.toLocaleString()}</span>
            </div>

            <div className="w-full mb-6">
              <img
                src={product.foto_makanan}
                alt={product.nama_makanan}
                className="w-full h-40 object-cover rounded-md"
              />
            </div>

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

            <button
              onClick={handleSubmit}
              className="bg-green-500 text-black font-bold text-lg py-3 px-6 rounded-full w-full max-w-xs hover:bg-green-600"
            >
              Add to Cart
            </button>
          </>
        ) : (
          <p>Loading product...</p>
        )}
      </div>
    </div>
  );
};

export default CartPage2;
