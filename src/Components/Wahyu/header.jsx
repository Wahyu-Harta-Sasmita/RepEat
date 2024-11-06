import React from "react";
import { GoBellFill, GoMail } from "react-icons/go";
import { GiRamProfile } from "react-icons/gi";

const Header = () => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <h1 className="text-2xl font-bold mb-2">Selamat Datang Kembali, Admin</h1>
        <input
          type="text"
          placeholder="Cari Barang"
          className="px-4 py-2 border rounded-md"
        />
      </div>
      <div className="flex space-x-4">
        <GoBellFill className="text-2xl" />
        <GoMail className="text-2xl" />
        <GiRamProfile className="text-2xl" />
      </div>
    </div>
  );
};

export default Header;
