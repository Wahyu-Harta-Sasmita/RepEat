import React, { useState, useEffect } from 'react';
import TextLogo from '../../../assets/images/Logo_Text.png';
import { Link } from 'react-router-dom';

const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://api.trplweb.wefgis-sync.com/api/foods')
            .then(response => response.json())
            .then(data => setProducts(data.data))
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    return (
        <div className="h-screen bg-white flex flex-col">
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
                        <Link to="/forum" className="font-bold text-black">Forum</Link>
                        <Link to="/products" className="font-bold text-black">Products</Link>
                        <button className="text-white">❤️</button>
                        <button className="text-white">🛒</button>
                        <button className="text-white">🔔</button>
                        <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-700">PP</div>
                    </div>
                </div>
            </header>

            <nav className="flex justify-center space-x-6 my-2 px-4 text-black text-lg">
                <Link to="#" className="underline">All</Link>
                <Link to="#">Fast Food</Link>
                <Link to="#">Healthy Food</Link>
                <Link to="#">Vegetarian</Link>
                <Link to="#">Fast Drink</Link>
                <Link to="#">Juice</Link>
            </nav>

            <div className="flex-grow flex items-center justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-8">
                    {products.map((product) => (
                        <div key={product.id} className="bg-gray-200 p-8 rounded-lg shadow-lg flex flex-col w-72 m-4"> {/* Tambahkan kelas m-4 di sini */}
                            <div className="bg-gray-400 h-56 flex items-center justify-center text-white font-bold rounded-lg">
                                {product.image ? (
                                    <img src={product.foto_makanan} alt={product.nama_makanan} className="h-full w-full object-cover rounded-lg" />
                                ) : (
                                    "Photo Products"
                                )}
                            </div>
                            <div className="mt-4 flex flex-col">
                                <Link to={`/product/${product.id}`} className="font-bold text-lg text-black hover:underline">
                                    {product.nama_makanan}
                                </Link>
                                <div className="flex justify-between items-center mt-2 space-x-2">
                                    <span className="font-bold text-green-500">Rp.{product.price}</span>
                                </div>
                                <button className="text-gray-500 hover:text-red-500 mt-2">
                                    <i className="fas fa-heart"></i>
                                </button>
                            </div>
                            <p className='font-semibold'>Description</p>
                            <Link to={`/product/${product.id}`} className="text-sm mt-2 text-gray-600 hover:underline">
                                {product.desc}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Shop;
