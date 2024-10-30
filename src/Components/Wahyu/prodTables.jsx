import React from 'react';
import { Link } from 'react-router-dom';

const products = [
  { name: 'Handmade Pouch', sku: '302012', category: 'Bag & Pouch', stock: 10, price: 'Rp 100,000', status: 'Bekas', date: '28 Des 2022' },
  { name: 'Smartwatch E2', sku: '302011', category: 'Watch', stock: 204, price: 'Rp 100,000', status: 'Bekas', date: '24 Des 2022' },
  { name: 'Smartwatch E1', sku: '302002', category: 'Watch', stock: 48, price: 'Rp 100,000', status: 'Baru', date: '12 Des 2022' },
  { name: 'Headphone G1 Pro', sku: '301997', category: 'Audio', stock: 461, price: 'Rp 100,000', status: 'Bekas', date: '21 Okt 2022' },
];

function ProdTables() {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className='flex justify-between items-center'>
      <h3 className="text-gray-500 mb-4">Produk Kamu</h3>
      <button className="text-green-500 mr-2"> <Link to="/seller/addForm">+ Produk</Link></button>
      </div>
      <table className="w-full text-left">
        <thead>
          <tr>
            <th className="pb-2">Produk</th>
            <th>SKU</th>
            <th>Kategori</th>
            <th>Stok</th>
            <th>Harga</th>
            <th>Status</th>
            <th>Tanggal</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index} className="border-t">
              <td className="py-2">{product.name}</td>
              <td>{product.sku}</td>
              <td>{product.category}</td>
              <td>{product.stock}</td>
              <td>{product.price}</td>
              <td>
                <span className={
                  product.status === 'Baru' ? 'text-green-500' :
                  product.status === 'Bekas' ? 'text-red-500' : 'text-green-500'
                }>
                  {product.status}
                </span>
              </td>
              <td>{product.date}</td>
              <td>
                <button className="text-blue-500 mr-2"><Link to="/seller/editForm">Edit</Link></button>
                <button className="text-red-500">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProdTables;
