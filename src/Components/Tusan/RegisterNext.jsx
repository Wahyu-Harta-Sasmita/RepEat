import React, { useState } from 'react';

const RegisterNext = () => {
  const [formData, setFormData] = useState({
    username: '',
    mobileNumber: '',
    password: '',
  });

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate a condition where the mobile number is already registered
    if (formData.mobileNumber === '1234567890') {
      setIsDialogOpen(true);
    } else {
      console.log('Form data submitted:', formData);
    }
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center">
      <header className="w-full bg-green-500 py-4 px-6 flex justify-between items-center">
        <h1 className="text-white font-bold text-xl">RepEat</h1>
      </header>

      <main className="mt-12 text-center">
        <h2 className="text-2xl font-semibold text-green-600">Easy Buying and Selling Only at RepEat</h2>
        <div className="mt-8 p-6 bg-white border rounded-lg shadow-lg max-w-md w-full">
          <h2 className="text-xl font-semibold text-center">Register Now</h2>
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500"
              required
            />
            <input
              type="tel"
              name="mobileNumber"
              placeholder="Mobile Number"
              value={formData.mobileNumber}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500"
              required
            />
            <button type="submit" className="w-full py-2 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600">
              Next
            </button>
          </form>
        </div>
      </main>

      {/* Dialog */}
      {isDialogOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80 text-center">
            <h3 className="text-lg font-semibold text-gray-800">Mobile number is already registered</h3>
            <p className="text-gray-600 mt-2">Enter with this number ({formData.mobileNumber})?</p>
            <div className="flex justify-around mt-6">
              <button
                onClick={handleDialogClose}
                className="text-green-500 font-semibold hover:underline"
              >
                Change
              </button>
              <button
                onClick={() => console.log('Entering with existing number')}
                className="bg-green-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-green-600"
              >
                Enter
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RegisterNext;
