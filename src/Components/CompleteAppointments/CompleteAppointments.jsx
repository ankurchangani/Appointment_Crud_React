import React from 'react'

const CompleteAppointments = ({completeAppointment}) => {
  if (!completeAppointment || completeAppointment.length === 0) {
    return <h2 className="text-center p-4">No completeAppointment</h2>;
  }
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Complete Appointments</h2>
      <table className="min-w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr className="bg-blue-600 text-white uppercase text-sm leading-normal">
            <th className="px-4 py-2 border border-gray-300">#</th>
            <th className="px-4 py-2 border border-gray-300">Name</th>
            <th className="px-4 py-2 border border-gray-300">Email</th>
            <th className="px-4 py-2 border border-gray-300">Contact</th>
            <th className="px-4 py-2 border border-gray-300">Chartered Status</th>
          </tr>
        </thead>
        <tbody>
          {completeAppointment.map((rec, index) => (
            <tr key={index} className="bg-white hover:bg-gray-100 text-gray-600 text-sm">
              <td className="border px-4 py-2 text-center">{index + 1}</td>
              <td className="border px-4 py-2 text-center">{rec.name}</td>
              <td className="border px-4 py-2 text-center">{rec.email}</td>
              <td className="border px-4 py-2 text-center">{rec.contact}</td>
              <td className="border px-4 py-2 text-center">{rec.charteredStatus}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CompleteAppointments



