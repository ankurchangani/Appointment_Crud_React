import React, { useState, useEffect } from 'react';

const UpdateData = ({ editData, handleUpdata }) => {
  const [updateData, setUpdateData] = useState({
    name: '',
    email: '',
    contact: '',
    date: '',
    time: '',
    charteredStatus: '',
  });

  useEffect(() => {
    if (editData) {
      setUpdateData(editData);
    }
  }, [editData]);

  const handleForm = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUpdateData({
      ...updateData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdata(updateData);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
        <h2 className="text-2xl font-semibold text-blue-900 mb-6">Update Form</h2>

        <form onSubmit={handleSubmit}>
          {/* Full Name */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Full Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-sky-400"
              id="name"
              type="text"
              name="name"
              value={updateData.name || ''}
              readOnly
              onChange={handleForm}
              placeholder="Enter your name"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-sky-400"
              id="email"
              type="email"
              name="email"
              value={updateData.email}
              readOnly
              onChange={handleForm}
              placeholder="Enter your email"
            />
          </div>

          {/* Contact Number */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contact">
              Contact Number
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-sky-400"
              id="contact"
              type="number"
              name="contact"
              value={updateData.contact}
              readOnly
              onChange={handleForm}
              placeholder="Enter your contact number"
            />
          </div>

          {/* Date */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">
              Date
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-sky-400"
              id="date"
              type="date"
              name="date"
              value={updateData.date}
              readOnly
              onChange={handleForm}
              placeholder="Enter the date"
            />
          </div>

          {/* Time */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="time">
              Time
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-sky-400"
              id="time"
              type="time"
              name="time"
              value={updateData.time}
              readOnly
              onChange={handleForm}
              placeholder="Enter the time"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="chartered-status">
              Chartered Status
            </label>
            <select
              id="chartered-status"
              name="charteredStatus"
              onChange={handleForm}
              value={updateData.charteredStatus}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-sky-400"
            >
              <option value="">Select Status</option>
              <option value="Pending">Pending</option>
              <option value="Approved">Approved</option>
              <option value="Completed">Completed</option>
            </select>
          </div>


          {/* Submit Button */}
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
              type="submit"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateData;
