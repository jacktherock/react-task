import React from 'react'
import Spinner from '../../assets/loader.png'

const Loader = () => {
    return (
        <div className='flex justify-center items-center h-96'>
            <img src={Spinner} alt="" className='animate-spin-slow w-10 h-10' />
        </div>
    )
}

export default Loader