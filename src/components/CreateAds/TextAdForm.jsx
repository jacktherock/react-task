import { Check } from "lucide-react";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SubmitModal from "./SubmitModal";

const TextAdForm = () => {

    const [isSubmitted, setIsSubmitted] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = () => {
        setIsSubmitted(true);

        // Redirect to '/create/ads' after 0.6 seconds
        setTimeout(() => {
            navigate("/create/ads");
        }, 600);
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
                    <p className="font-semibold">Create Text Ad</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-10">
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <label htmlFor="heading1" className="font-medium md:font-semibold capitalize">
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
                            <label htmlFor="heading2" className="font-medium md:font-semibold capitalize">
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

                    <div className="space-y-2 mt-6 md:mt-0 lg:mt-0">
                        <label
                            htmlFor="description1"
                            className="font-medium md:font-semibold capitalize"
                        >
                            Description 01
                        </label>
                        <div>
                            <textarea
                                type="text"
                                id="description1"
                                placeholder="Add a heading that would make user interested"
                                className="px-3 py-2 ring-1 ring-gray-200 outline-none rounded-sm w-full"
                                rows={5}
                            />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-10 mt-5 space-y-6 md:space-y-0 lg:space-y-0">
                    <div className="space-y-2">
                        <label htmlFor="business" className="font-medium md:font-semibold capitalize">
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
                        <label htmlFor="buttonLabel" className="font-medium md:font-semibold capitalize">
                            Button Label
                        </label>
                        <select
                            name="buttonLabel"
                            id="buttonLabel"
                            className="px-2 bg-white text-gray-600 py-[0.60rem] ring-1 ring-gray-300 outline-none rounded-sm w-full opacity-60"
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

                <div className="space-y-2 my-6">
                    <label htmlFor="heading1" className="font-medium md:font-semibold capitalize">
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

                <div className="pt-5 pb-4 text-end space-x-6">
                    <button
                        onClick={handleGoBack}
                        className="bg-gray-100/50 ring-2 ring-gray-200 px-10 lg:px-16 py-2 rounded-sm font-medium"
                    >
                        Back
                    </button>
                    <button
                        onClick={handleSubmit}
                        className="bg-[#0096FF] px-10 lg:px-16 py-2 rounded-sm text-white font-medium"
                    >
                        Submit
                    </button>
                </div>
            </div>

            {isSubmitted && (
                <SubmitModal />
            )}

        </div>
    );
};

export default TextAdForm;
