import React, { useState, useEffect } from "react";
import TextLogo from "../../../assets/images/Logo_Text.png";
import { Link, useParams } from "react-router-dom";

const CartPageBesar = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://api.trplweb.wefgis-sync.com/api/foods/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  const incrementQuantity = () => setQuantity(prev => prev + 1);

  const decrementQuantity = () => {
    if (quantity > 1) setQuantity(prev => prev - 1);
  };

  const handleCheck = () => setChecked(prev => !prev);

  const formatCurrency = number => new Intl.NumberFormat("id-ID").format(number);

  const handleBuyNow = () => {
    if (!product || !checked) return;

    const itemsToBuy = {
      productId: product.id,
      quantity,
    };
    // Here you would handle the buy action (e.g., send the data to your API)
  };

  const handleRemoveItems = async () => {
    if (!product || !checked) return;

    setProduct(null);

    try {
      const response = await fetch("https://api.example.com/cart/remove", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ productId: product.id }),
      });

      const data = await response.json();
      console.log("Items removed:", data);
    } catch (error) {
      console.error("Error removing items:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-green-500 text-white w-full">
        <div className="flex justify-between items-center p-4 w-full">
          <Link to="/">
            <div className="flex items-center flex-shrink-0">
              <img src={TextLogo} alt="TextLogo" className="w-32 h-auto mr-6 bg-white p-1 rounded-md" />
            </div>
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
        {product ? (
          <div className="flex items-center p-4 bg-gray-300 rounded-md mb-4">
            <input
              type="checkbox"
              className="mr-4"
              checked={checked}
              onChange={handleCheck}
            />
            <img
              className="w-16 h-16 mr-4 object-cover"
              src={product.foto_makanan}
              alt={product.nama_makanan}
            />
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
              <button className="text-red-500" onClick={handleRemoveItems}>🗑️</button>
            </div>
          </div>
        ) : (
          <div>Loading product...</div>
        )}
      </div>

      <footer className="p-4 bg-gray-300 flex justify-between items-center">
        <span className="text-lg font-semibold">Jumlah: {checked ? quantity : 0}</span>
        <div className="flex space-x-2">
          <button className="bg-red-500 text-white px-4 py-2 rounded-md" onClick={handleRemoveItems}>🗑️</button>
          <button className="bg-green-500 text-white px-4 py-2 rounded-md" onClick={handleBuyNow}>Buy Now</button>
        </div>
      </footer>
    </div>
  );
};

export default CartPageBesar;
