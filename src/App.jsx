import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './Components/Tusan/Register';
import Dashboard from './Pages/Store ~ Wahyu/Dashboard';
import Products from './Pages/Store ~ Wahyu/products';
import AddForm from './Pages/Store ~ Wahyu/addForm';
import EditForm from './Pages/Store ~ Wahyu/EditForm';
import DonationPage from './Pages/General/Bagus/DonationPage'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
          <Register />
          <DonationPage/>
          </>
          } />
        <Route path="/seller/dashboard" element={<Dashboard />} />
        <Route path="/seller/products" element={<Products />} />
        <Route path="/seller/addForm" element={<AddForm />} />
        <Route path="/seller/editForm" element={<EditForm />} />
      </Routes>
    </Router>
  );
};

export default App;
