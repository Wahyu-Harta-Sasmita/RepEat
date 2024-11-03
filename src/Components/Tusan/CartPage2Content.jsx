import React from 'react';
import CartHeader from './CartHeader';
import CartProductDetails from './CartProductDetails';

const CartPage2Content = ({
  product,
  quantity,
  onIncrement,
  onDecrement,
  onSubmit,
}) => {
  return (
    <div className="flex flex-col items-center bg-white p-6">
      <CartHeader />
      <CartProductDetails
        product={product}
        quantity={quantity}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default CartPage2Content;
