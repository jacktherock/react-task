import { HelpCircle } from 'lucide-react'
import React from 'react'

const Table = () => {
    return (
        <div className='border rounded-md'>

            <div className='flex justify-between px-3 py-2 sm:px-3 sm:py-2 md:px-4 md:py-3 lg:px-4 lg:py-3 border-b'>
                <p className="text-sm font-semibold lg:text-base">
                    Ad Insights
                </p>
                <HelpCircle className='w-5 h-5 lg:w-6 lg:h-6 opacity-10' />
            </div>

            <div className='overflow-auto'>
                <table className=" table-auto rounded-md w-full">
                    <thead className="border-b">
                        <tr>
                            <th className='text-start  text-sm lg:text-base font-semibold px-3 py-2 sm:px-3 sm:py-2 md:px-4 md:py-3 lg:px-4 lg:py-3'>Campaigns</th>
                            <th className='text-end  text-sm lg:text-base font-semibold px-3 py-2 sm:px-3 sm:py-2 md:px-4 md:py-3 lg:px-4 lg:py-3'>Clicks</th>
                            <th className='text-end  text-sm lg:text-base font-semibold px-3 py-2 sm:px-3 sm:py-2 md:px-4 md:py-3 lg:px-4 lg:py-3'>Cost</th>
                            <th className='text-end  text-sm lg:text-base font-semibold px-3 py-2 sm:px-3 sm:py-2 md:px-4 md:py-3 lg:px-4 lg:py-3'>Conversions</th>
                            <th className='text-end  text-sm lg:text-base font-semibold px-3 py-2 sm:px-3 sm:py-2 md:px-4 md:py-3 lg:px-4 lg:py-3'>Revenue</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='border-b'>
                            <td className='text-start text-sm lg:text-base px-3 py-1 sm:px-3 sm:py-2 md:px-4 md:py-3 lg:px-4 lg:py-3'>Cosmetics</td>
                            <td className='text-end text-sm lg:text-base px-3 py-1 sm:px-3 sm:py-2 md:px-4 md:py-3 lg:px-4 lg:py-3'>712</td>
                            <td className='text-end text-sm lg:text-base px-3 py-1 sm:px-3 sm:py-2 md:px-4 md:py-3 lg:px-4 lg:py-3'>USD 4,272</td>
                            <td className='text-end text-sm lg:text-base px-3 py-1 sm:px-3 sm:py-2 md:px-4 md:py-3 lg:px-4 lg:py-3'>8</td>
                            <td className='text-end text-sm lg:text-base px-3 py-1 sm:px-3 sm:py-2 md:px-4 md:py-3 lg:px-4 lg:py-3'>USD 16,568</td>
                        </tr>
                        <tr className='border-b'>
                            <td className='text-start text-sm lg:text-base px-3 py-1 sm:px-3 sm:py-2 md:px-4 md:py-3 lg:px-4 lg:py-3'>Serums</td>
                            <td className='text-end text-sm lg:text-base px-3 py-1 sm:px-3 sm:py-2 md:px-4 md:py-3 lg:px-4 lg:py-3'>3,961</td>
                            <td className='text-end text-sm lg:text-base px-3 py-1 sm:px-3 sm:py-2 md:px-4 md:py-3 lg:px-4 lg:py-3'>USD 27,331</td>
                            <td className='text-end text-sm lg:text-base px-3 py-1 sm:px-3 sm:py-2 md:px-4 md:py-3 lg:px-4 lg:py-3'>115</td>
                            <td className='text-end text-sm lg:text-base px-3 py-1 sm:px-3 sm:py-2 md:px-4 md:py-3 lg:px-4 lg:py-3'>USD 362,526</td>
                        </tr>
                        <tr className='border-b'>
                            <td className='text-start text-sm lg:text-base px-3 py-1 sm:px-3 sm:py-2 md:px-4 md:py-3 lg:px-4 lg:py-3'>Facewash</td>
                            <td className='text-end text-sm lg:text-base px-3 py-1 sm:px-3 sm:py-2 md:px-4 md:py-3 lg:px-4 lg:py-3'>9,462</td>
                            <td className='text-end text-sm lg:text-base px-3 py-1 sm:px-3 sm:py-2 md:px-4 md:py-3 lg:px-4 lg:py-3'>USD 76,831</td>
                            <td className='text-end text-sm lg:text-base px-3 py-1 sm:px-3 sm:py-2 md:px-4 md:py-3 lg:px-4 lg:py-3'>123</td>
                            <td className='text-end text-sm lg:text-base px-3 py-1 sm:px-3 sm:py-2 md:px-4 md:py-3 lg:px-4 lg:py-3'>USD 266,800</td>
                        </tr>
                        <tr className='border-b'>
                            <td className='text-start text-sm lg:text-base px-3 py-1 sm:px-3 sm:py-2 md:px-4 md:py-3 lg:px-4 lg:py-3'>Shampoos</td>
                            <td className='text-end text-sm lg:text-base px-3 py-1 sm:px-3 sm:py-2 md:px-4 md:py-3 lg:px-4 lg:py-3'>439</td>
                            <td className='text-end text-sm lg:text-base px-3 py-1 sm:px-3 sm:py-2 md:px-4 md:py-3 lg:px-4 lg:py-3'>USD 2,151</td>
                            <td className='text-end text-sm lg:text-base px-3 py-1 sm:px-3 sm:py-2 md:px-4 md:py-3 lg:px-4 lg:py-3'>5</td>
                            <td className='text-end text-sm lg:text-base px-3 py-1 sm:px-3 sm:py-2 md:px-4 md:py-3 lg:px-4 lg:py-3'>USD 11,029</td>
                        </tr>
                        <tr className='border-b'>
                            <td className='text-start text-sm lg:text-base px-3 py-1 sm:px-3 sm:py-2 md:px-4 md:py-3 lg:px-4 lg:py-3'>Conditioners</td>
                            <td className='text-end text-sm lg:text-base px-3 py-1 sm:px-3 sm:py-2 md:px-4 md:py-3 lg:px-4 lg:py-3'>1,680</td>
                            <td className='text-end text-sm lg:text-base px-3 py-1 sm:px-3 sm:py-2 md:px-4 md:py-3 lg:px-4 lg:py-3'>USD 3,864</td>
                            <td className='text-end text-sm lg:text-base px-3 py-1 sm:px-3 sm:py-2 md:px-4 md:py-3 lg:px-4 lg:py-3'>49</td>
                            <td className='text-end text-sm lg:text-base px-3 py-1 sm:px-3 sm:py-2 md:px-4 md:py-3 lg:px-4 lg:py-3'>USD 175,245</td>
                        </tr>
                        <tr className='border-b'>
                            <td className='text-start text-sm lg:text-base px-3 py-1 sm:px-3 sm:py-2 md:px-4 md:py-3 lg:px-4 lg:py-3'>Facewash 2</td>
                            <td className='text-end text-sm lg:text-base px-3 py-1 sm:px-3 sm:py-2 md:px-4 md:py-3 lg:px-4 lg:py-3'>4,978</td>
                            <td className='text-end text-sm lg:text-base px-3 py-1 sm:px-3 sm:py-2 md:px-4 md:py-3 lg:px-4 lg:py-3'>USD 29,370</td>
                            <td className='text-end text-sm lg:text-base px-3 py-1 sm:px-3 sm:py-2 md:px-4 md:py-3 lg:px-4 lg:py-3'>189</td>
                            <td className='text-end text-sm lg:text-base px-3 py-1 sm:px-3 sm:py-2 md:px-4 md:py-3 lg:px-4 lg:py-3'>USD 623,106</td>
                        </tr>
                        <tr className='bg-gray-100/50'>
                            <td className='text-start text-sm lg:text-base px-3 py-1 sm:px-3 sm:py-2 md:px-4 md:py-3 lg:px-4 lg:py-3'>Total</td>
                            <td className='text-end text-sm lg:text-base px-3 py-1 sm:px-3 sm:py-2 md:px-4 md:py-3 lg:px-4 lg:py-3'>26,510</td>
                            <td className='text-end text-sm lg:text-base px-3 py-1 sm:px-3 sm:py-2 md:px-4 md:py-3 lg:px-4 lg:py-3'>USD 1,43,819</td>
                            <td className='text-end text-sm lg:text-base px-3 py-1 sm:px-3 sm:py-2 md:px-4 md:py-3 lg:px-4 lg:py-3'>489</td>
                            <td className='text-end text-sm lg:text-base px-3 py-1 sm:px-3 sm:py-2 md:px-4 md:py-3 lg:px-4 lg:py-3'>USD 15,73,563</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>

    )
}

export default Table