// src/components/DetailScreen.jsx
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/outline"; // Using Heroicons for a back icon, or replace with any icon library

const DetailScreen = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { title, content, videoSrc } = location.state || {};

    return (
        <div className="min-h-screen bg-gray-100 p-8 flex flex-col items-center">
            <button
                onClick={() => navigate(-1)}
                className="flex items-center mb-6 px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-700 transition"
            >
                <ArrowLeftIcon className="h-5 w-5 mr-2" />
                Back
            </button>
            
            <h1 className="text-4xl font-bold mb-4">{title}</h1>

            {videoSrc && (
                <video
                    autoPlay
                    muted
                    loop
                    className="h-48 w-80 mb-6 rounded-full"
                >
                    <source src={videoSrc} type="video/mp4" />
                </video>
            )}

            <p className="text-lg text-gray-700 text-center max-w-2xl">{content}</p>
        </div>
    );
};

export default DetailScreen;
