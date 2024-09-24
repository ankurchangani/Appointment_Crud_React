import React, { } from 'react'



const CharteredForm = ({ handleForm, handlesubmit }) => {

    return (
        <>
            <div className="bg-gray-100 min-h-screen flex items-center justify-center">
                <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
                    <h2 className="text-2xl font-semibold text-blue-900 mb-6">Chartered Accountant Form</h2>

                    <form onSubmit={handlesubmit}>
                        <div className="mb-4">
                            <input
                                type="text"
                                name="id"
                                onChange={handleForm}
                                className="w-full px-4 py-2 border rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                hidden
                            />
                        </div>
                        {/* Full Name */}
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                Full Name
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-sky-400"
                                id="name"
                                type="text"
                                name='name'

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
                                name='email'
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
                                name='contact'
                                onChange={handleForm}
                                placeholder="Enter your contact number"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contact">
                                Data
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-sky-400"
                                id="date"
                                type="date"
                                name='date'
                                onChange={handleForm}
                                placeholder="Enter your contact number"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contact">
                                Time
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-sky-400"
                                id="time"
                                type="time"
                                name='time'
                                onChange={handleForm}
                                placeholder="Enter your contact number"
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
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default CharteredForm
