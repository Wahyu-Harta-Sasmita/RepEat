import React, { useState, useEffect } from 'react';
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