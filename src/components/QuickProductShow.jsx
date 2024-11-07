import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

gsap.registerPlugin(ScrollTrigger);

const QuickProductShow = () => {
    const productImages = [
        'products20.jpg',
        'products10.jpg',
        'products7.jpg',
        'products13.jpg',
    ];

    const [currentSlide, setCurrentSlide] = useState(0);
    const productRef = useRef([]);
    const intervalRef = useRef();

    // GSAP Animation Effect on Slide Change
    useEffect(() => {
        if (productRef.current[currentSlide]) {
            gsap.fromTo(
                productRef.current[currentSlide],
                { opacity: 0, x: 100 }, // Start position outside the view
                { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out' } // Animate to center
            );
        }
    }, [currentSlide]);

    // Infinite Looping Functionality
    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % productImages.length);
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(intervalRef.current); // Cleanup interval on unmount
    }, [productImages.length]);

    const handleDotClick = (index) => {
        setCurrentSlide(index);
        clearInterval(intervalRef.current); // Reset auto-slide on manual navigation
        intervalRef.current = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % productImages.length);
        }, 3000);
    };

    return (
        <section className="flex flex-col items-center justify-center py-10 bg-gray-100 w-full">
            <h2 className="text-4xl font-bold text-blue-600 mb-8">Product Showcase</h2>
            
            <div className="relative w-full max-w-4xl h-[60vh] md:h-[70vh] overflow-hidden rounded-lg shadow-lg bg-white">
                <div
                    className="flex w-full transition-transform duration-700"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                    {productImages.map((image, index) => (
                        <div 
                            key={index} 
                            ref={(el) => (productRef.current[index] = el)} 
                            className="flex-shrink-0 w-full h-full flex items-center justify-center"
                        >
                            <img
                                src={image}
                                alt={`Product ${index + 1}`}
                                className="object-cover w-full h-full rounded-lg"
                                onError={(e) => (e.target.src = 'placeholder.jpg')}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Dot Navigation */}
            <div className="flex space-x-3 mt-6">
                {productImages.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => handleDotClick(index)}
                        className={`w-3 h-3 rounded-full transition-colors duration-300 ${index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'}`}
                    />
                ))}
            </div>
        </section>
    );
};

export default QuickProductShow;
