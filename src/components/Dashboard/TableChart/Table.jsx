import { HelpCircle } from 'lucide-react'
import React from 'react'

const Table = () => {
    return (
        <div className='overflow-y-scroll lg:overflow-hidden'>
            <div className='grid grid-col-1'>
                <div className='grid grid-cols-2 px-3 py-2 sm:px-3 sm:py-2 md:px-4 md:py-3 lg:px-4 lg:py-3 border-l border-r border-t'>
                    <p className="text-start text-sm lg:text-base">
                        Ad Insights
                    </p>
                    <div className='flex justify-end'>
                        <HelpCircle className='w-5 h-5 lg:w-6 lg:h-6' />
                    </div>
                </div>
                <table className="table-auto border w-full">
                    <thead className="border-b">
                        <tr>
                            <th className='text-start  text-sm lg:text-base font-semibold px-3 py-2 sm:px-3 sm:py-2 md:px-4 md:py-3 lg:px-4 lg:py-3'>Group</th>
                            <th className='text-end  text-sm lg:text-base font-semibold px-3 py-2 sm:px-3 sm:py-2 md:px-4 md:py-3 lg:px-4 lg:py-3'>Clicks</th>
                            <th className='text-end  text-sm lg:text-base font-semibold px-3 py-2 sm:px-3 sm:py-2 md:px-4 md:py-3 lg:px-4 lg:py-3'>Cost</th>
                            <th className='text-end  text-sm lg:text-base font-semibold px-3 py-2 sm:px-3 sm:py-2 md:px-4 md:py-3 lg:px-4 lg:py-3'>Conversions</th>
                            <th className='text-end  text-sm lg:text-base font-semibold px-3 py-2 sm:px-3 sm:py-2 md:px-4 md:py-3 lg:px-4 lg:py-3'>Revenue</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b">
                            <td className='text-start text-sm lg:text-base px-3 py-1 sm:px-3 sm:py-2 md:px-4 md:py-3 lg:px-4 lg:py-3'>Male</td>
                            <td className='text-end text-sm lg:text-base px-3 py-1 sm:px-3 sm:py-2 md:px-4 md:py-3 lg:px-4 lg:py-3'>348</td>
                            <td className='text-end text-sm lg:text-base px-3 py-1 sm:px-3 sm:py-2 md:px-4 md:py-3 lg:px-4 lg:py-3'>USD 12,528</td>
                            <td className='text-end text-sm lg:text-base px-3 py-1 sm:px-3 sm:py-2 md:px-4 md:py-3 lg:px-4 lg:py-3'>42</td>
                            <td className='text-end text-sm lg:text-base px-3 py-1 sm:px-3 sm:py-2 md:px-4 md:py-3 lg:px-4 lg:py-3'>USD 62,118</td>
                        </tr>
                        <tr className="border-b">
                            <td className='text-start text-sm lg:text-base px-3 py-1 sm:px-3 sm:py-2 md:px-4 md:py-3 lg:px-4 lg:py-3'>Female</td>
                            <td className='text-end text-sm lg:text-base px-3 py-1 sm:px-3 sm:py-2 md:px-4 md:py-3 lg:px-4 lg:py-3'>692</td>
                            <td className='text-end text-sm lg:text-base px-3 py-1 sm:px-3 sm:py-2 md:px-4 md:py-3 lg:px-4 lg:py-3'>USD 24,912</td>
                            <td className='text-end text-sm lg:text-base px-3 py-1 sm:px-3 sm:py-2 md:px-4 md:py-3 lg:px-4 lg:py-3'>35</td>
                            <td className='text-end text-sm lg:text-base px-3 py-1 sm:px-3 sm:py-2 md:px-4 md:py-3 lg:px-4 lg:py-3'>USD 5,175</td>
                        </tr>
                        <tr className="border-b">
                            <td className='text-start text-sm lg:text-base px-3 py-1 sm:px-3 sm:py-2 md:px-4 md:py-3 lg:px-4 lg:py-3'>Unknown</td>
                            <td className='text-end text-sm lg:text-base px-3 py-1 sm:px-3 sm:py-2 md:px-4 md:py-3 lg:px-4 lg:py-3'>105</td>
                            <td className='text-end text-sm lg:text-base px-3 py-1 sm:px-3 sm:py-2 md:px-4 md:py-3 lg:px-4 lg:py-3'>USD 3,943</td>
                            <td className='text-end text-sm lg:text-base px-3 py-1 sm:px-3 sm:py-2 md:px-4 md:py-3 lg:px-4 lg:py-3'>3</td>
                            <td className='text-end text-sm lg:text-base px-3 py-1 sm:px-3 sm:py-2 md:px-4 md:py-3 lg:px-4 lg:py-3'>USD 4,489</td>
                        </tr>
                        <tr className='border-b bg-gray-100/50'>
                            <td className='text-start text-sm lg:text-base px-3 py-1 sm:px-3 sm:py-2 md:px-4 md:py-3 lg:px-4 lg:py-3'>Total</td>
                            <td className='text-end text-sm lg:text-base px-3 py-1 sm:px-3 sm:py-2 md:px-4 md:py-3 lg:px-4 lg:py-3'>1,145</td>
                            <td className='text-end text-sm lg:text-base px-3 py-1 sm:px-3 sm:py-2 md:px-4 md:py-3 lg:px-4 lg:py-3'>USD 41,383</td>
                            <td className='text-end text-sm lg:text-base px-3 py-1 sm:px-3 sm:py-2 md:px-4 md:py-3 lg:px-4 lg:py-3'>80</td>
                            <td className='text-end text-sm lg:text-base px-3 py-1 sm:px-3 sm:py-2 md:px-4 md:py-3 lg:px-4 lg:py-3'>USD 71,782</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Table