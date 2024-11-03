import React, { useState, useEffect } from 'react';
import Header from '../../../Components/Tusan/Header';
import NavShop from '../../../Components/Tusan/NavShop';
import ProductCard from '../../../Components/Tusan/ProductCard';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://api.trplweb.wefgis-sync.com/api/foods');
                const data = await response.json();
                setProducts(data.data);
            } catch (error) {
                console.error('Error fetching products:', error);
                setError('Failed to load products.');
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div className="h-screen bg-white flex flex-col">
            <Header />
            <NavShop />

            <div className="flex-grow flex items-center justify-center">
                {loading ? (
                    <p className="text-lg text-gray-600">Loading products...</p>
                ) : error ? (
                    <p className="text-lg text-red-500">{error}</p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-8">
                        {products.length > 0 ? (
                            products.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))
                        ) : (
                            <p className="text-lg text-gray-600">No products available.</p>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Shop;
