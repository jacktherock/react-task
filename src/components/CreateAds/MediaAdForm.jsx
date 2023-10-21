import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import SubmitModal from './SubmitModal';

const MediaAdForm = () => {

    const [isSubmitted, setIsSubmitted] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = () => {
        setIsSubmitted(true);

        setTimeout(() => {
            navigate("/create/ads");
        }, 600); // 0.6 sec
    };

    const handleGoBack = () => {
        navigate(-1);
    };

    useEffect(() => {
        return () => {
            setIsSubmitted(false);
        };
    }, []);

    return (
        <div className="p-5">
            <div className="border rounded-md grid grid-cols-1 p-4">
                <div className="pb-4">
                    <p className="font-semibold">Create Media Ad</p>
                </div>

                <div className="grid grid-cols-2 gap-x-10">
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <label htmlFor="heading1" className="font-semibold capitalize">
                                Heading 01
                            </label>
                            <div>
                                <input
                                    type="text"
                                    id="heading1"
                                    placeholder="Add a heading that would make user interested"
                                    className="px-3 py-2 ring-1 ring-gray-200 outline-none rounded-sm w-full"
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="heading2" className="font-semibold capitalize">
                                Heading 02
                            </label>
                            <div>
                                <input
                                    type="text"
                                    id="heading2"
                                    placeholder="Add a heading that would make user interested"
                                    className="px-3 py-2 ring-1 ring-gray-200 outline-none rounded-sm w-full"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label
                            htmlFor="description1"
                            className="font-semibold capitalize"
                        >
                            Description 01
                        </label>
                        <div>
                            <textarea
                                type="text"
                                id="description1"
                                placeholder="Add primary text to help users understand more about your products, services or offers"
                                className="px-3 py-2 ring-1 ring-gray-200 outline-none rounded-sm w-full"
                                rows={5}
                            />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-x-10 mt-5">
                    <div className="space-y-2">
                        <label htmlFor="business" className="font-semibold capitalize">
                            Lanscape marketing image (1.9:1)
                        </label>
                        <div>
                            <input
                                type="text"
                                id="business"
                                placeholder="Add the URL of the image you want to use for the ad"
                                className="px-3 py-2 ring-1 ring-gray-200 outline-none rounded-sm w-full"
                            />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="business" className="font-semibold capitalize">
                            Portrait Marketing Image (4:5)
                        </label>
                        <div>
                            <input
                                type="text"
                                id="business"
                                placeholder="Add the URL of the image you want to use for the ad"
                                className="px-3 py-2 ring-1 ring-gray-200 outline-none rounded-sm w-full"
                            />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="business" className="font-semibold capitalize">
                            Square Marketing Image (1:1)
                        </label>
                        <div>
                            <input
                                type="text"
                                id="business"
                                placeholder="Add the URL of the image you want to use for the ad"
                                className="px-3 py-2 ring-1 ring-gray-200 outline-none rounded-sm w-full"
                            />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-x-10 mt-6">
                    <div className="space-y-2">
                        <label htmlFor="business" className="font-semibold capitalize">
                            Video URL
                        </label>
                        <div>
                            <input
                                type="text"
                                id="business"
                                placeholder="Add the URL of the video you want to use for the ad"
                                className="px-3 py-2 ring-1 ring-gray-200 outline-none rounded-sm w-full"
                            />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-x-10 mt-6">
                    <div className="space-y-2">
                        <label htmlFor="business" className="font-semibold capitalize">
                            Business Name
                        </label>
                        <div>
                            <input
                                type="text"
                                id="business"
                                placeholder="Add your business name"
                                className="px-3 py-2 ring-1 ring-gray-200 outline-none rounded-sm w-full"
                            />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="buttonLabel" className="font-semibold capitalize">
                            Button Label
                        </label>
                        <select
                            name="buttonLabel"
                            id="buttonLabel"
                            className="px-3 py-[0.60rem] ring-1 ring-gray-300 outline-none rounded-sm w-full opacity-60"
                        >
                            <option value="" hidden>
                                Select a label that best suits your ad
                            </option>
                            <option value="Label 01">Label 01</option>
                            <option value="Label 02">Label 02</option>
                            <option value="Label 03">Label 03</option>
                            <option value="Label 04">Label 04</option>
                        </select>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-x-10 mt-6">
                    <div className="space-y-2">
                        <label htmlFor="heading1" className="font-semibold capitalize">
                            Website URL
                        </label>
                        <div>
                            <input
                                type="text"
                                id="heading1"
                                placeholder="Add the URL of the landing page you want to redirect users to"
                                className="px-3 py-2 ring-1 ring-gray-200 outline-none rounded-sm w-full"
                            />
                        </div>
                    </div>
                </div>

                <div className="pt-5 pb-4 px-4 text-end space-x-6">
                    <button
                        onClick={handleGoBack}
                        className="bg-gray-100/50 ring-2 ring-gray-200 px-16 py-2 rounded-sm font-medium"
                    >
                        Back
                    </button>
                    <button
                        onClick={handleSubmit}
                        className="bg-[#0096FF] px-16 py-2 rounded-sm text-white font-medium"
                    >
                        Submit
                    </button>
                </div>
            </div>

            {
                isSubmitted && (
                    <SubmitModal />
                )
            }

        </div>
    )
}

export default MediaAdForm