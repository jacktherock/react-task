import { Check } from 'lucide-react'
import React from 'react'

const SubmitModal = () => {
    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white space-y-5 flex flex-col items-center justify-center p-4 w-80 h-full max-h-52 rounded-md">
                <div className="p-3 bg-[#0096FF] rounded-full">
                    <Check className="text-white" />
                </div>
                <p className="text-lg font-semibold">Submitted</p>
            </div>
        </div>
    )
}

export default SubmitModal