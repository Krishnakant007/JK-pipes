// src/WhyUsCarousel.jsx

import  { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

// Sample data for Why Us section
const whyUsData = [
    {
        text: "High-quality products",
        imageUrl: "/images/high_quality.jpg", // Replace with actual image paths
    },
    {
        text: "Advanced infrastructure",
        imageUrl: "/images/advanced_infrastructure.jpg",
    },
    {
        text: "Customization options",
        imageUrl: "/images/customization.jpg",
    },
    {
        text: "Timely delivery",
        imageUrl: "/images/timely_delivery.jpg",
    },
];

const WhyUsCarousel = () => {
    const carouselRef = useRef();

    // GSAP animation on component mount
    useEffect(() => {
        const tl = gsap.timeline({ repeat: -1, yoyo: true });
        tl.to(carouselRef.current, { x: '-=100%', duration: 1 })
          .to(carouselRef.current, { x: '+=100%', duration: 1 });

        return () => tl.kill(); // Clean up the animation on unmount
    }, []);

    return (
        <div className="py-12 bg-slate-200">
            <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">Why Us?</h2>
            <div
                ref={carouselRef}
                className="flex overflow-hidden whitespace-nowrap"
                style={{ display: 'flex', alignItems: 'center' }}
            >
                {whyUsData.map((item, index) => (
                    <div key={index} className="min-w-[250px] mx-4 p-4 bg-white rounded-lg shadow-lg">
                        <img 
                            src={item.imageUrl} 
                            alt={item.text} 
                            className="h-40 w-full object-cover rounded-md mb-4" 
                        />
                        <h3 className="text-xl font-semibold text-center">{item.text}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WhyUsCarousel;
