import React from 'react'
import Sidebar from '../../Components/Wahyu/sidebar'
import Header from '../../Components/Wahyu/header'
import StatsCard from '../../Components/Wahyu/statsCard'
import OrdersTable from '../../Components/Wahyu/orderTable'

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 p-6 space-y-6">
        <Header />
        <div className="grid grid-cols-3 gap-4">
          <StatsCard title="Pendapatan Kamu" amount="Rp 1,300,000" percentage="15%" />
          <StatsCard title="Total Pesanan" amount="31,500" percentage="25%" />
          <StatsCard title="Total Donasi" amount="Rp 300,000" percentage="35%" />
          <StatsCard title="Total Produk" amount="247" percentage="5%" />
        </div>
        <OrdersTable />
      </div>
    </div>
  )
}

export default Dashboard