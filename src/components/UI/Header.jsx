import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='flex items-center justify-between px-5 lg:px-6 shadow-md py-5 sm:py-3 md:py-4 lg:py-5 uppercase'>
            <div>
                <p className='font-extrabold text-sm sm:text-lg md:text-xl lg:text-xl'>App logo</p>
            </div>
            <div className='flex space-x-6'>
                <Link to="/" className='uppercase font-semibold text-sm sm:text-lg md:text-xl lg:text-xl'>Dashboard</Link>
                <Link to="createads" className='uppercase font-semibold text-sm sm:text-lg md:text-xl lg:text-xl'>Create Ads</Link>
            </div>
        </div>
    )
}

export default Header