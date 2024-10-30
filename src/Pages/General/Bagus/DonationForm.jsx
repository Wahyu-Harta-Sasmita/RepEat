import React from 'react';

function DonationForm() {
  return (
    <div className="w-screen h-screen bg-white flex flex-col">
      {/* Header */}
      <div className="bg-green-500 p-4 text-black font-bold text-center text-2xl relative">
        <button className="absolute left-4 top-0 text-black text-5xl">&larr;</button>
        DONATION FORM
      </div>

      {/* Content */}
      <div className="flex-grow flex flex-col md:flex-row items-start justify-center mt-6 space-y-6 md:space-y-0 md:space-x-8 p-6">
        {/* Upload Photo Button */}
        <div className="flex flex-col items-center">
          <div className="w-64 h-64 bg-gray-300 flex items-center justify-center">
            <span className="text-black font-semibold">Photo Products</span>
          </div>
          <button className="mt-4 bg-green-500 text-black font-semibold py-2 px-4 rounded hover:bg-green-600 transition duration-200">
            Upload Photo
          </button>
        </div>

        {/* Isi Form */}
        <div className="flex-1 max-w-md">
          <form>
            {/* Form Nama */}
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="name">
                Nama
              </label>
              <input
                type="text"
                id="name"
                placeholder="Masukkan nama"
                className="w-full border-b-2 border-gray-400 focus:outline-none focus:border-gray-600 py-1"
              />
            </div>

            {/* Form Kondisi */}
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="condition">
                Kondisi
              </label>
              <input
                type="text"
                id="condition"
                placeholder="Masukkan kondisi"
                className="w-full border-b-2 border-gray-400 focus:outline-none focus:border-gray-600 py-1"
              />
            </div>

            {/* Form Deskripsi */}
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="description">
                Deskripsi
              </label>
              <textarea
                id="description"
                placeholder="Masukkan deskripsi"
                className="w-full border-b-2 border-gray-400 focus:outline-none focus:border-gray-600 py-1"
                rows="3"
              ></textarea>
            </div>

            {/* Send Button */}
            <button className="bg-green-500 text-black font-semibold py-2 px-6 rounded hover:bg-green-600 transition duration-200">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default DonationForm;
