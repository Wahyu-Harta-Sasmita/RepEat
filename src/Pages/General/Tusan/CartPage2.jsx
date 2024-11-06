import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Modal from '../../../Components/Tusan/Modal';
import CartPage2Content from '../../../Components/Tusan/CartPage2Content';

const CartPage2 = ({ product, isModalOpen, setIsModalOpen }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => setQuantity(quantity + 1);
  const handleDecrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Adding Product:', product);

    const newItem = {
      id: product.id,
      nama_makanan: product.nama_makanan,
      price: product.price,
      sku: product.sku,
      stok: product.stok,
      category: product.category,
      desc: product.desc,
      quantity: quantity,
      foto_makanan: product.foto_makanan,
    };
    console.log('Product to be added to cart:', newItem);

    // Get existing cart items from localStorage
    const existingCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    // Check if the product is already in the cart
    const existingItemIndex = existingCartItems.findIndex((item) => item.id === newItem.id);
    if (existingItemIndex > -1) {
      // If already in cart, update the quantity
      existingCartItems[existingItemIndex].quantity += quantity;
    } else {
      // Otherwise, add the new item
      existingCartItems.push(newItem);
    }

    // Save updated cart items back to localStorage
    localStorage.setItem("cartItems", JSON.stringify(existingCartItems));

    // Close modal and navigate to cart page
    setIsModalOpen(false);
    navigate(`/cartpage/${id}`);
  };

  return (
    <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
      <CartPage2Content
        product={product}
        quantity={quantity}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onSubmit={handleSubmit}
      />
    </Modal>
  );
};

export default CartPage2;
