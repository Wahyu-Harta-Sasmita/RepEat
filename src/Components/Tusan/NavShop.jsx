import React from 'react';
import { Link } from 'react-router-dom';

const NavShop = () => {
  return (
    <nav className="flex justify-center space-x-6 my-2 px-4 text-black text-lg">
      <Link to="#" className="underline">All</Link>
      <Link to="#">Fast Food</Link>
      <Link to="#">Healthy Food</Link>
      <Link to="#">Vegetarian</Link>
      <Link to="#">Fast Drink</Link>
      <Link to="#">Juice</Link>
    </nav>
  );
}

export default NavShop;
