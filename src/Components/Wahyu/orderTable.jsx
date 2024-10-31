import React from 'react';

const orders = [
  { product: 'Handmade Pouch', buyer: 'John Bushmill', total: 'Rp 100,000', status: 'Diproses' },
  { product: 'Smartwatch E12', buyer: 'Ilham Budi Agung', total: 'Rp 100,000', status: 'Diproses' },
  { product: 'Smartwatch E1', buyer: 'Mohammad Karim', total: 'Rp 100,000', status: 'Dikirim' },
  { product: 'Headphone G1 Pro', buyer: 'Linda Blair', total: 'Rp 100,000', status: 'Dikirim' },
  { product: 'iPhone X', buyer: 'Josh Adam', total: 'Rp 100,000', status: 'Terkirim' },
];

const OrdersTable = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-gray-500 mb-4">Pesanan Terakhir</h3>
      <table className="w-full text-left">
        <thead>
          <tr>
            <th className="pb-2">Produk</th>
            <th>Pembeli</th>
            <th>Total</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index} className="border-t">
              <td className="py-2">{order.product}</td>
              <td>{order.buyer}</td>
              <td>{order.total}</td>
              <td className="text-green-500">{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OrdersTable;
