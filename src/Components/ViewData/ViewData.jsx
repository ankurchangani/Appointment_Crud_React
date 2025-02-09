import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarCheck, faCheckCircle, faEdit } from '@fortawesome/free-solid-svg-icons';
import Approved from '../Approved/Approved';

const ViewData = ({ storage, handleEdit, PendingRec , handleApproved  , handleComplete}) => {
    return (
        <>
            <div className="p-6 bg-white rounded-lg shadow-lg">
                <table className="min-w-full table-auto border-collapse border border-gray-300">
                    <thead>
                        <tr className="bg-blue-600 text-white uppercase text-sm leading-normal">
                            <th className="px-4 py-2 border border-gray-300">#</th>
                            <th className="px-4 py-2 border border-gray-300">Name</th>
                            <th className="px-4 py-2 border border-gray-300">email</th>
                            <th className="px-4 py-2 border border-gray-300">Contact</th>
                            <th className="px-4 py-2 border border-gray-300">CharteredStatus</th>
                            <th className="px-4 py-2 border border-gray-300">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {storage.map((rec, index) => (
                            <tr key={index} className="bg-white hover:bg-gray-100 text-gray-600 text-sm">
                                <td className="border px-4 py-2 text-center">{index + 1}</td>
                                <td className="border px-4 py-2 text-center">{rec.name}</td>
                                <td className="border px-4 py-2 text-center">{rec.email}</td>
                                <td className="border px-4 py-2 text-center">{rec.contact}</td>
                                <td className='border px-4 py-2 text-center'>{rec.charteredStatus}</td>
                                <td className="text-center">
                                    <button className="mx-2 bg-red-500 text-white p-2 rounded-lg" onClick={() => PendingRec(rec.id)}>
                                        <FontAwesomeIcon icon={faCalendarCheck} className="mr-1" />
                                        
                                    </button>
                                    <button className="mx-2 bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600">
                                        <FontAwesomeIcon icon={faCheckCircle} className="mr-1" onClick={() =>handleApproved(rec.id)}/>
                                        
                                    </button>

                                    <button className="mx-2 bg-green-500 text-white p-2 rounded-lg">
                                        <FontAwesomeIcon icon={faCheckCircle} className="mr-1" onClick={() => handleComplete(rec.id)}  />
                                        
                                    </button>
                                    <button className="mx-2 bg-yellow-500 text-white p-2 rounded-lg hover:bg-yellow-600" onClick={() => handleEdit(rec.id)}>
                                        <FontAwesomeIcon icon={faEdit} className="mr-1" />
                                        
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default ViewData;
