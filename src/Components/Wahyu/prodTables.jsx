import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { deleteFood, getFoods } from '../Controller/api';
import AddForm from './AddForm';

const ProdTables = () => {
    const [products, setProducts] = useState([]);
    const [isOverlayOpen, setIsOverlayOpen] = useState(false);

    useEffect(() => {
        fetchFoods();
    }, []);

    const fetchFoods = () => {
        getFoods((response) => {
            console.log(response); 
            if (response.success && Array.isArray(response.data)) {
                setProducts(response.data); 
            } else {
                console.error("Data tidak valid", response);
            }
        });
    };

    const handleDelete = (id) => {
        deleteFood(id, fetchFoods);
    };

    const openOverlay = () => setIsOverlayOpen(true);
    const closeOverlay = () => setIsOverlayOpen(false);

    return (
        <div className="relative">
            <div className={`bg-white p-4 rounded-lg shadow-md ${isOverlayOpen ? 'blur-sm' : ''}`}>
                <div className="flex justify-between items-center">
                    <h3 className="text-gray-500 mb-4">Produk Kamu</h3>
                    <button onClick={openOverlay} className="bg-green-500 text-white mr-2 p-2 rounded">
                        + Produk
                    </button>
                </div>
                <table className="w-full text-left">
                    <thead>
                        <tr>
                            <th className="pb-2">Image</th>
                            <th className="pb-2">Produk</th>
                            <th>SKU</th>
                            <th>Kategori</th>
                            <th>Stok</th>
                            <th>Harga</th>
                            <th>Tanggal</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, index) => (
                            <tr key={index} className="border-t">
                                <td><img src={product.foto_makanan} alt="Product Image" className="w-10 h-10 rounded-full" /></td>
                                <td className="py-2">{product.nama_makanan}</td>
                                <td>{product.sku}</td>
                                <td>{product.category}</td>
                                <td>{product.stok}</td>
                                <td>{product.price}</td>
                                <td>{product.created_at.substring(0, 10)}</td>
                                <td>
                                    <button className="text-blue-500 mr-2">
                                        <Link to={`/seller/editForm/${product.id}`}>Edit</Link>
                                    </button>
                                    <button onClick={() => handleDelete(product.id)} className="text-red-500">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {isOverlayOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                        <button onClick={closeOverlay} className="text-red-500 mb-4 float-right">X</button>
                        <AddForm />
                    </div>
                </div>
            )}
        </div>
    );
}

export default ProdTables;
