import React from 'react'
import Table from './Table'
import Table2 from './TableChart/Table'

const Dashboard = () => {
    return (

        <div className='p-4'>
            <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5'>

                <Table />

                <Table2 />

            </div>
        </div>
    )
}

export default Dashboard