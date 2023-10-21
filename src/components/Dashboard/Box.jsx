import React, { useState } from 'react'
import Table2 from './TableChart/Table2'
import DonutChart from './TableChart/DonutChart'
import { PieChart, Sheet } from 'lucide-react'

const Box = () => {

    const [isShow, setIsShow] = useState(false)

    return (
        <div className='border rounded-md relative'>
            {
                isShow ? (<Table2 />) : (<DonutChart />)
            }

            <div className='flex absolute bottom-4 right-4'>
                <div className='bg-gray-200 rounded-full w-20'>
                    <button
                        type="button"
                        className={`p-2 rounded-full focus:bg-[#0096FF] focus:text-white ${!isShow ? 'bg-[#0096FF] text-white' : ''}`}
                        onClick={() => setIsShow(false)}
                    >
                        <PieChart />
                    </button>
                    <button
                        type="button"
                        className={`p-2 rounded-full focus:bg-[#0096FF] focus:text-white ${isShow ? 'bg-[#0096FF] text-white' : ''}`}
                        onClick={() => setIsShow(true)}
                    >
                        <Sheet />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Box