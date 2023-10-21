import React from 'react'
import Table from './Table'
import Box from './Box'

const Dashboard = () => {
    return (
        <div className='p-4 mb-10'>
            <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5'>

                <Table />

                <Box />

            </div>
        </div>
    )
}

export default Dashboard