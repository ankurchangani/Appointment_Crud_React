import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className='flex justify-center items-center'>
            <div className='py-5'>
                <Link
                    className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-full shadow-lg hover:bg-blue-600 transition duration-300 flex items-center gap-2" 
                    to = "/CharteredForm"
                >
                    Add Record
                </Link>
            </div>
        </div>
    )
}

export default Home
