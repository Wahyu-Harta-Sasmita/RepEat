import React from 'react';

function Header() {
  return (
    <div className="flex justify-between items-center">
      <h1 className="text-2xl font-bold">Selamat Datang Kembali, Admin</h1>
      <input 
        type="text" 
        placeholder="Cari Barang" 
        className="px-4 py-2 border rounded-md" 
      />
    </div>
  );
}

export default Header;
