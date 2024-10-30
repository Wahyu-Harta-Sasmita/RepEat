import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FullProduct from './Pages/General/Tusan/FullProduct';
import CartPage2 from './Pages/General/Tusan/CartPage2';
import Home from './Pages/General/Tusan/Home';
import Shop from './Pages/General/Tusan/Shop';
import CartPageBesar from './Pages/General/Tusan/CartPageBesar';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/shop' element={<Shop />} />
                <Route path="/product/:id" element={<FullProduct />} />
                <Route path="/cart/:id" element={<CartPage2 />} />
                <Route path='/cartpage/:id' element={<CartPageBesar />} />
            </Routes>
        </Router>
    );
}

export default App;
