import React, { useState } from "react";
import TextLogo from "../../assets/images/Logo_Text.png";
import FullProduct from "../Tusan/FullProduct";

const CartPage = () => {
  const initialQuantities = [1, 1]; // Initial quantity for each product
  const [quantities, setQuantities] = useState(initialQuantities);
  const [checkedItems, setCheckedItems] = useState([false, false]); // Initial checked state for each product

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
  const totalPrice = totalQuantity * 100000;

  return (
    <div className="min-h-screen bg-gray-100">
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
              <button className="text-red-500">🗑️</button>
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
          <button className="bg-red-500 text-white px-4 py-2 rounded-md">🗑️</button>
          <button className="bg-green-500 text-white px-4 py-2 rounded-md">Buy Now</button>
        </div>
      </footer>
    </div>
  );
};

export default CartPage;
