import React, { useState, useEffect } from "react";
import TextLogo from "../../../assets/images/Logo_Text.png";

const CartPageBesar = () => {
  const initialQuantities = [1, 1];
  const [quantities, setQuantities] = useState(initialQuantities);
  const [checkedItems, setCheckedItems] = useState([false, false]); // Initial checked state for each product
  const [prices, setPrices] = useState([]); // State to store product prices

  useEffect(() => {
    // Fetch prices from API when component mounts
    fetch('https://api.example.com/products/prices') // Ganti dengan endpoint API yang sesuai
      .then(response => response.json())
      .then(data => {
        // Misalnya, data dikembalikan sebagai array harga
        setPrices(data.prices); // Sesuaikan sesuai struktur data yang diterima
      })
      .catch(error => {
        console.error('Error fetching product prices:', error);
      });
  }, []);

  const incrementQuantity = (index) => {
    setQuantities(quantities.map((qty, i) => (i === index ? qty + 1 : qty)));
  };

  const decrementQuantity = (index) => {
    setQuantities(
      quantities.map((qty, i) => (i === index && qty > 1 ? qty - 1 : qty))
    );
  };

  const handleCheck = (index) => {
    setCheckedItems(checkedItems.map((isChecked, i) => (i === index ? !isChecked : isChecked)));
  };

  // Format number with thousands separator
  const formatCurrency = (number) => {
    return new Intl.NumberFormat("id-ID").format(number);
  };

  // Calculate total based on checked items
  const totalQuantity = quantities.reduce((acc, qty, index) => acc + (checkedItems[index] ? qty : 0), 0);
  const totalPrice = quantities.reduce((acc, qty, index) => {
    return acc + (checkedItems[index] ? qty * (prices[index] || 0) : 0);
  }, 0);

  const handleBuyNow = () => {
    const itemsToBuy = quantities.map((qty, index) => ({
      productId: index + 1, // Ganti dengan ID produk yang sebenarnya
      quantity: checkedItems[index] ? qty : 0,
    })).filter(item => item.quantity > 0);

    fetch('https://api.example.com/cart/buy', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(itemsToBuy),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Purchase successful:', data);
      })
      .catch(error => {
        console.error('Error purchasing items:', error);
      });
  };

  const handleRemoveItems = () => {
    const remainingQuantities = quantities.filter((_, index) => !checkedItems[index]);

    fetch('https://api.example.com/cart/remove', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(remainingQuantities),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Items removed:', data);
      })
      .catch(error => {
        console.error('Error removing items:', error);
      });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-green-500 text-white w-full">
        <div className="flex justify-between items-center p-4 w-full">
          <div className="flex items-center flex-shrink-0">
            <img src={TextLogo} alt="TextLogo" className="w-32 h-auto mr-6 bg-white p-1 rounded-md" />
          </div>
          <div className="flex items-center space-x-4 flex-grow">
            <input
              type="text"
              placeholder="search food / store"
              className="px-4 py-2 rounded-full flex-grow bg-gray-100 text-black placeholder-gray-500 outline-none"
            />
            <a href="#" className="font-bold text-black">Forum</a>
            <a href="#products" className="font-bold text-black">Products</a>
            <button className="text-white">❤️</button>
            <button className="text-white">🛒</button>
            <button className="text-white">🔔</button>
            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-700">PP</div>
          </div>
        </div>
      </header>

      <div className="p-4">
        {[1, 2].map((_, index) => (
          <div key={index} className="flex items-center p-4 bg-gray-300 rounded-md mb-4">
            <input
              type="checkbox"
              className="mr-4"
              checked={checkedItems[index]}
              onChange={() => handleCheck(index)}
            />
            <div className="w-16 h-16 bg-gray-400 mr-4" />
            <div className="flex-1">
              <div className="text-lg font-semibold">Product Name</div>
              <div className="flex items-center space-x-2">
                <span className="text-yellow-500">⭐</span>
                <span>4.7</span>
                <span>stok: 20</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button onClick={() => decrementQuantity(index)} className="text-xl px-2 bg-gray-200">-</button>
              <span className="px-2 bg-green-500 text-white rounded-md">{quantities[index]}</span>
              <button onClick={() => incrementQuantity(index)} className="text-xl px-2 bg-gray-200">+</button>
              <button className="text-red-500" onClick={() => handleRemoveItems()}>🗑️</button>
            </div>
          </div>
        ))}
      </div>

      <footer className="p-4 bg-gray-300 flex justify-between items-center">
        <span className="text-lg font-semibold">Jumlah: {totalQuantity}</span>
        <span className="text-lg font-semibold">
          Harga: Rp {formatCurrency(totalPrice)}
        </span>
        <div className="flex space-x-2">
          <button className="bg-red-500 text-white px-4 py-2 rounded-md" onClick={handleRemoveItems}>🗑️</button>
          <button className="bg-green-500 text-white px-4 py-2 rounded-md" onClick={handleBuyNow}>Buy Now</button>
        </div>
      </footer>
    </div>
  );
};

export default CartPageBesar;
