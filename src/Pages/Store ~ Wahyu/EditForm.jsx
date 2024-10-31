import React, { useState } from 'react';
import { addFoods } from '../../Components/Controller/api';
import { useNavigate } from 'react-router-dom';

const AddForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nama_makanan: '',
    price: '',
    sku: '',
    stok: '',
    category: '',
    desc: '',
    foto_makanan: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      foto_makanan: e.target.files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Adding Product:', formData);

    const data = new FormData();
    data.append('nama_makanan', formData.nama_makanan);
    data.append('price', formData.price);
    data.append('sku', formData.sku);
    data.append('stok', formData.stok);
    data.append('category', formData.category);
    data.append('desc', formData.desc);
    if (formData.foto_makanan) {
      data.append('photo', formData.foto_makanan);
    }

    try {
      await addFoods(data); 
      navigate('/seller/products');
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  return (
    <div className="max-w-sm mx-auto bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-center text-2xl font-bold text-white bg-green-500 py-2 mb-4 rounded">
        Add New Product
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            name="nama_makanan"
            value={formData.nama_makanan}
            onChange={handleChange}
            className="w-full border-b border-gray-300 focus:border-black outline-none p-1"
          />
        </div>
        <div>
          <label className="block text-gray-700">Price</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="w-full border-b border-gray-300 focus:border-black outline-none p-1"
          />
        </div>
        <div>
          <label className="block text-gray-700">SKU</label>
          <input
            type="text"
            name="sku"
            value={formData.sku}
            onChange={handleChange}
            className="w-full border-b border-gray-300 focus:border-black outline-none p-1"
          />
        </div>
        <div>
          <label className="block text-gray-700">Stock</label>
          <input
            type="number"
            name="stok"
            value={formData.stok}
            onChange={handleChange}
            className="w-full border-b border-gray-300 focus:border-black outline-none p-1"
          />
        </div>
        <div>
          <label className="block text-gray-700">Category</label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full border-b border-gray-300 focus:border-black outline-none p-1"
          />
        </div>
        <div>
          <label className="block text-gray-700">Description</label>
          <textarea
            name="desc"
            value={formData.desc}
            onChange={handleChange}
            className="w-full border-b border-gray-300 focus:border-black outline-none p-1"
          />
        </div>
        <div>
          <label className="block text-gray-700">Upload Photo</label>
          <input
            type="file"
            onChange={handleFileChange}
            className="mt-2"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded-md mt-4 hover:bg-green-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddForm;
