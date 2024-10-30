import React, { useState } from 'react';

function ProductForm({ mode = 'add' }) {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    sku: '',
    stock: '',
    category: '',
    description: '',
    status: 'new',
    photo: null,
  });

  const isEditMode = mode === 'edit';

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
      photo: e.target.files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`${isEditMode ? 'Editing' : 'Adding'} Product:`, formData);
    // Add your form submission logic here
  };

  return (
    <div className="max-w-sm mx-auto bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-center text-2xl font-bold text-white bg-green-500 py-2 mb-4 rounded">
        {isEditMode ? 'Edit Product' : 'Add New Product'}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700">Nama</label>
          <input
            type="text"
            name="name"
            value={formData.name}
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
          <label className="block text-gray-700">Stok</label>
          <input
            type="number"
            name="stock"
            value={formData.stock}
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
          <label className="block text-gray-700">Desc</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border-b border-gray-300 focus:border-black outline-none p-1"
          />
        </div>
        <div>
          <label className="block text-gray-700">Status</label>
          <div className="flex space-x-4 mt-1">
            <label className="flex items-center">
              <input
                type="radio"
                name="status"
                value="new"
                checked={formData.status === 'new'}
                onChange={handleChange}
                className="mr-1"
              />
              New
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="status"
                value="remnant"
                checked={formData.status === 'remnant'}
                onChange={handleChange}
                className="mr-1"
              />
              Remnant
            </label>
          </div>
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

export default ProductForm;