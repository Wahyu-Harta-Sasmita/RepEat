import React, { useState, useEffect } from "react";
import TextLogo from "../../../assets/images/Logo_Text.png";
import { Link, useParams } from "react-router-dom";
import { getFoods } from "../../../Components/Controller/getFoods";

const CartPageBesar = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [products, setProducts] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [checked, setChecked] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  const fetchProductData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`https://api.trplweb.wefgis-sync.com/api/foods/3`);
      if (!response.ok) throw new Error("Failed to fetch product");
      const data = await response.json();
      setProduct(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchFoods = () => {
    getFoods((response) => {
      if (response.success && Array.isArray(response.data)) {
        setProducts(response.data);
      } else {
        console.error("Data tidak valid", response);
      }
    });
  };

  useEffect(() => {
    fetchProductData();
    fetchFoods();
  }, []);

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

  const handleCheck = () => setChecked((prev) => !prev);

  const handleDelete = (idToDelete) => {
    setCartItems((prev) => prev.filter((item) => item.id !== idToDelete));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-green-500 text-white w-full">
        <div className="flex justify-between items-center p-4 w-full">
          <Link to="/">
            <img src={TextLogo} alt="TextLogo" className="w-32 h-auto mr-6 bg-white p-1 rounded-md" />
          </Link>
          <div className="flex items-center space-x-4 flex-grow">
            <input
              type="text"
              placeholder="search food / store"
              className="px-4 py-2 rounded-full flex-grow bg-gray-100 text-black placeholder-gray-500 outline-none"
            />
            <Link to="/forum" className="font-bold text-black">Forum</Link>
            <Link to="/products" className="font-bold text-black">Products</Link>
            <button className="text-white">❤️</button>
            <button className="text-white">🛒</button>
            <button className="text-white">🔔</button>
            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-700">PP</div>
          </div>
        </div>
      </header>

      <div className="p-4">
        {loading ? (
          <div>Loading product...</div>
        ) : error ? (
          <div className="text-red-500">{error}</div>
        ) : product ? (
          <div className="flex items-center p-4 bg-gray-300 rounded-md mb-4">
            <input type="checkbox" className="mr-4" checked={checked} onChange={handleCheck} />
            <img className="w-16 h-16 mr-4 object-cover" src={product.foto_makanan} alt={product.nama_makanan} />
            <div className="flex-1">
              <div className="text-lg font-semibold">{product.nama_makanan}</div>
              <div className="flex items-center space-x-2">
                <span>stok: {product.stok}</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button onClick={decrementQuantity} className="text-xl px-2 bg-gray-200">-</button>
              <span className="px-2 bg-green-500 text-white rounded-md">{quantity}</span>
              <button onClick={incrementQuantity} className="text-xl px-2 bg-gray-200">+</button>
            </div> 
          </div>
        ) : (
          <div>No product found.</div>
        )}
      </div>

      <footer className="p-4 bg-gray-300 flex justify-between items-center">
        <span className="text-lg font-semibold">Jumlah: {checked ? quantity : 0}</span>
        <div className="flex space-x-2">
          <button className="bg-red-500 text-white px-4 py-2 rounded-md" onClick={() => handleDelete(product?.id)}>🗑️</button>
          <button className="bg-green-500 text-white px-4 py-2 rounded-md">Buy Now</button>
        </div>
      </footer>

      <div className="p-4">
        <h2 className="text-xl font-semibold">Items in Cart:</h2>
        <ul>
          {cartItems.map((item, index) => (
            <li key={item.id} className="flex justify-between p-2 bg-gray-200 rounded-md mb-2">
              <span>{item.nama_makanan} x {item.quantity}</span>
              <span>Rp.{(item.price * item.quantity).toLocaleString()}</span>
              <button onClick={() => handleDelete(item.id)} className="text-red-500">🗑️</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CartPageBesar;
