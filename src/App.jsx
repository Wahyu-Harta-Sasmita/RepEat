import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Pages/Store ~ Wahyu/Dashboard';
import Products from './Pages/Store ~ Wahyu/products';
import Sidebar from './Pages/General/Bagus/Sidebar';
import FullProduct from './Pages/General/Tusan/FullProduct';
import CartPage2 from './Pages/General/Tusan/CartPage2';
import Home from './Pages/General/Tusan/Home';
import Shop from './Pages/General/Tusan/Shop';
import CartPageBesar from './Pages/General/Tusan/CartPageBesar';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
          <Home />
          <Sidebar />
          </>
          } />
        <Route path='/shop' element={<Shop />} />
        <Route path='/product/:id' element={<FullProduct />} />
        <Route path="/cart/:id" element={<CartPage2 />} />
        <Route path='/cartpage/:id' element={<CartPageBesar />} />
        <Route path="/seller/dashboard" element={<Dashboard />} />
        <Route path="/seller/products" element={<Products />} />
      </Routes>
    </Router>
  );
};

export default App;
