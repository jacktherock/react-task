import { Circle, Menu, Search } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/image3.jpg";

const CreateAds = () => {
    const [textAdChecked, setTextAdChecked] = useState(false);
    const [mediaAdChecked, setMediaAdChecked] = useState(false);
    const navigate = useNavigate();

    const handleTextAdClick = () => {
        setTextAdChecked(!textAdChecked);
        setMediaAdChecked(false);
    };

    const handleMediaAdClick = () => {
        setMediaAdChecked(!mediaAdChecked);
        setTextAdChecked(false);
    };

    const handleNextClick = () => {
        if (textAdChecked) {
            navigate("/create/ad-text");
        } else if (mediaAdChecked) {
            navigate("/create/ad-media");
        }
    };

    return (
        <div className="p-5">
            <div className="border rounded-md grid grid-cols-1">
                <div className="p-4">
                    <p className="font-semibold">Create Ads</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">

                    {/* Text Ad */}
                    <label htmlFor="textAdChecked">
                        <div
                            className="rounded-xl w-72 md:w-80 lg:w-96 mx-auto mb-5 md:mb-0 lg:mb-0 cursor-pointer"
                            style={{ boxShadow: "0px 0px 20px -2px rgba(0,0,0,0.1)" }}
                        >
                            <div className="pt-4 px-4">
                                <input
                                    type="checkbox"
                                    id="textAdChecked"
                                    className="h-4 w-4"
                                    checked={textAdChecked}
                                    onChange={handleTextAdClick}
                                />
                            </div>

                            <div className="px-2 pt-2 md:pt-0 lg:pt-0 md:px-7 lg:px-14">
                                <div className="border-t border-l border-r rounded-t-3xl pt-3 px-4 select-none">
                                    <div className="flex justify-center">
                                        <Circle className="w-3 h-3 opacity-40" />
                                    </div>
                                    <div className="border-t border-l border-r mt-3 pb-16">
                                        <div className="flex items-center justify-between bg-gray-300 p-3">
                                            <Menu className="w-4 h-4 opacity-40" />
                                            <div className="animate-pulse h-2 w-28 bg-slate-400 "></div>
                                            <Search className="w-4 h-4 opacity-40" />
                                        </div>
                                        <div className="px-3">
                                            <div className="animate-pulse py-3 space-y-2">
                                                <div className="h-2  bg-slate-200 "></div>
                                                <div className="h-2 bg-slate-200 "></div>
                                                <div className="h-2 w-32 lg:w-48 bg-slate-200 "></div>
                                            </div>
                                            <div className="border rounded-md p-3 space-y-2">
                                                <p className="text-xs text-blue-700 font-semibold border-b pb-2">
                                                    Lorem ipsum dolor sit amet consectetur, porro?
                                                </p>
                                                <p className="text-xs">
                                                    Lorem ipsum dolor, sit amet consectetur adipisicing
                                                    elit. Nisi corrupti dolore veniam sit{" "}
                                                </p>
                                            </div>
                                            <div className="animate-pulse py-3 space-y-2">
                                                <div className="h-2  bg-slate-200 "></div>
                                                <div className="h-2 w-32 lg:w-48 w-48 bg-slate-200 "></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center bg-gray-100/50 py-4">
                                <p className="opacity-50">Create</p>
                                <p className="font-bold text-xl">Text Ad</p>
                            </div>
                        </div>
                    </label>

                    {/* Media Ad */}
                    <label htmlFor="mediaAdChecked">
                        <div
                            className="rounded-xl w-72 md:w-80 lg:w-96 mx-auto mb-5 md:mb-0 lg:mb-0 cursor-pointer"
                            style={{ boxShadow: "0px 0px 20px -2px rgba(0,0,0,0.1)" }}
                        >
                            <div className="pt-4 px-4">
                                <input
                                    type="checkbox"
                                    id="mediaAdChecked"
                                    className="h-4 w-4"
                                    checked={mediaAdChecked}
                                    onChange={handleMediaAdClick}
                                />
                            </div>
                            <div className="px-2 pt-2 md:pt-0 lg:pt-0 md:px-7 lg:px-14">
                                <div className="border-t border-l border-r rounded-t-3xl pt-3 px-4 select-none">
                                    <div className="flex justify-center">
                                        <Circle className="w-3 h-3 opacity-40" />
                                    </div>
                                    <div className="border-t border-l border-r mt-3 pb-20">
                                        <div className="flex items-center justify-between bg-gray-300 p-3">
                                            <Menu className="w-4 h-4 opacity-40" />
                                            <div className="animate-pulse h-2 w-28 bg-slate-400 "></div>
                                            <Search className="w-4 h-4 opacity-40" />
                                        </div>
                                        <div className="px-3">
                                            <div className="animate-pulse py-3 space-y-2">
                                                <div className="h-2  bg-slate-200 "></div>
                                                <div className="h-2 bg-slate-200 "></div>
                                                <div className="h-2 w-32 lg:w-48 bg-slate-200 "></div>
                                            </div>
                                            <div className="grid grid-rows-2 grid-flow-col gap-2">
                                                <img
                                                    src={image3}
                                                    alt=""
                                                    className="object-cover row-span-2 col-span-2 h-full rounded-md"
                                                />
                                                <img
                                                    src={image2}
                                                    alt=""
                                                    className="object-cover row-span-1 col-span-1 h-full rounded-md"
                                                />
                                                <img
                                                    src={image1}
                                                    alt=""
                                                    className="object-cover row-span-1 col-span-1 h-full rounded-md"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center bg-gray-100/50 py-4">
                                <p className="opacity-50">Create</p>
                                <p className="font-bold text-xl">Media Ad</p>
                            </div>
                        </div>
                    </label>
                </div>

                <div className="pt-5 pb-4 px-4 text-end">
                    <button
                        className={`bg-[#0096FF] px-16 py-2 rounded-md text-white ${textAdChecked || mediaAdChecked
                            ? "" : "opacity-50 cursor-not-allowed"}`}
                        onClick={handleNextClick}
                        disabled={!textAdChecked && !mediaAdChecked}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CreateAds;
