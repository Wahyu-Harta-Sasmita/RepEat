import React from 'react'
import ProdTables from '../../Components/Wahyu/prodTables'
import Header from '../../Components/Wahyu/header'
import Sidebar from '../../Components/Wahyu/sidebar'
const Products = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 p-6 space-y-6">
        <Header />
        <ProdTables />
      </div>
    </div>
  )
}

export default Products