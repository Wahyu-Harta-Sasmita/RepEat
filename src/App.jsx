import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Pages/Store ~ Wahyu/Dashboard';
import Products from './Pages/Store ~ Wahyu/products';
import AddForm from './Pages/Store ~ Wahyu/AddForm';
import EditForm from './Pages/Store ~ Wahyu/EditForm';
import Sidebar from './Pages/General/Bagus/Sidebar';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
          <Sidebar />
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
