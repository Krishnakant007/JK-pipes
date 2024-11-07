// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import { Navigation, Pagination, Autoplay } from 'swiper';
// import { useEffect, useState } from 'react';
// // Temporarily comment out gsap
// // import gsap from 'gsap';

// const ProductCarousel = () => {
//     const products = [
//         { image: 'product1.jpg', title: 'HDPE Pipe 20mm', description: 'Ideal for residential and industrial water transport, made from durable HDPE polymers.' },
//         { image: 'product2.jpg', title: 'Sprinkler System', description: 'Efficient water distribution system designed for agriculture and large gardens.' },
//         { image: 'product3.jpg', title: 'HDPE Fittings', description: 'High-quality, durable fittings compatible with a range of HDPE pipes.' },
//         { image: 'product4.jpg', title: 'SWr Fittings', description: 'High-quality, durable fittings compatible with a range of HDPE pipes.' },
//         { image: 'product5.jpg', title: 'HDPE Fittings', description: 'High-quality, durable fittings compatible with a range of HDPE pipes.' }
//     ];

//     const [isMounted, setIsMounted] = useState(false);

//     useEffect(() => {
//         setIsMounted(true);
//         console.log('Component mounted');
//     }, []);

//     // Temporarily remove gsap animation
//     // useEffect(() => {
//     //     if (isMounted) {
//     //         const slides = document.querySelectorAll('.swiper-slide');
//     //         slides.forEach((slide) => {
//     //             gsap.fromTo(slide, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, ease: 'power3.out' });
//     //         });
//     //     }
//     // }, [isMounted]);

//     if (!isMounted) return null;

//     return (
//         <div className="py-12 bg-gray-50">
//             <h2 className="text-center text-4xl font-bold text-blue-600 mb-8">Our Products</h2>
//             <Swiper
//                 modules={[Navigation, Pagination, Autoplay]}
//                 navigation
//                 pagination={{ clickable: true }}
//                 autoplay={{ delay: 5000 }}
//                 loop={true}
//                 className="w-full max-w-4xl mx-auto"
//             >
//                 {products.map((product, index) => (
//                     <SwiperSlide key={index} className="flex flex-col lg:flex-row items-center p-8">
//                         {/* Product Image */}
//                         <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
//                             <img
//                                 src={product.image}
//                                 alt={product.title}
//                                 className="w-full h-auto object-cover rounded-lg shadow-lg"
//                                 onError={(e) => (e.target.src = 'placeholder.jpg')}
//                             />
//                         </div>

//                         {/* Product Text */}
//                         <div className="lg:w-1/2 w-full text-center lg:text-left text-gray-700">
//                             <h3 className="text-2xl font-semibold text-blue-600 mb-4">{product.title}</h3>
//                             <p className="text-lg leading-relaxed">{product.description}</p>
//                         </div>
//                     </SwiperSlide>
//                 ))}
//             </Swiper>
//         </div>
//     );
// };

// export default ProductCarousel;



// // Import the required components from react-responsive-carousel
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import { useEffect, useState } from 'react';

// const ProductCarousel = () => {
//     const products = [
//         { image: 'product1.jpg', title: 'HDPE Pipe 20mm', description: 'Ideal for residential and industrial water transport.' },
//         { image: 'product2.jpg', title: 'Sprinkler System', description: 'Efficient water distribution for large gardens.' },
//         { image: 'product3.jpg', title: 'HDPE Fittings', description: 'Durable fittings compatible with a range of HDPE pipes.' }
//     ];

//     const [isMounted, setIsMounted] = useState(false);

//     useEffect(() => {
//         setIsMounted(true); // Only render after component mounts
//         console.log('Component mounted'); // Confirm mounting in console
//     }, []);

//     if (!isMounted) return null;

//     return (
//         <div className="py-12 bg-gray-50">
//             <h2 className="text-center text-4xl font-bold text-blue-600 mb-12">Our Products</h2>
//             {/* Simple Carousel component */}
//             <Carousel
//                 className="w-full max-w-5xl mx-auto"
//                 showThumbs={false}
//                 infiniteLoop
//                 useKeyboardArrows
//                 autoPlay
//                 interval={3000}
//                 transitionTime={500}
//             >
//                 {products.map((product, index) => (
//                     <div key={index} className="p-6 flex flex-col items-center">
//                         {/* Product Image */}
//                         <div className="w-full mb-6">
//                             <img
//                                 src={product.image}
//                                 alt={product.title}
//                                 className="object-cover rounded-lg shadow-md w-full h-48 sm:h-64 md:h-72 lg:h-80 xl:h-96"
//                                 onError={(e) => (e.target.src = 'placeholder.jpg')} // Fallback image
//                             />
//                         </div>
//                         {/* Product Text */}
//                         <div className="text-center">
//                             <h3 className="text-2xl font-semibold text-blue-600 mb-4">{product.title}</h3>
//                             <p className="text-base text-gray-700 leading-relaxed">{product.description}</p>
//                         </div>
//                     </div>
//                 ))}
//             </Carousel>
//         </div>
//     );
// };

// export default ProductCarousel;



// Import the required components from react-responsive-carousel
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import { useEffect, useState } from 'react';

// const ProductCarousel = () => {
//     const products = [
//         { image: 'products1.jpg', title: 'HDPE Pipe 20mm', description: 'Ideal for residential and industrial water transport.' },
//         { image: 'products3.jpg', title: 'Sprinkler System', description: 'Efficient water distribution for large gardens.' },
//         { image: 'products7.jpg', title: 'HDPE Fittings', description: 'Durable fittings compatible with a range of HDPE pipes.' }
//     ];

//     const [isMounted, setIsMounted] = useState(false);

//     useEffect(() => {
//         setIsMounted(true); // Only render after component mounts
//         console.log('Component mounted'); // Confirm mounting in console
//     }, []);

//     if (!isMounted) return null;

//     return (
//         <div className="bg-gray-50 w-full h-full min-h-screen flex flex-col items-center justify-center">
//             <h2 className="text-center text-4xl font-bold text-blue-600 mb-12">Our Products</h2>
//             <Carousel
//                 className="w-full h-64 sm:h-80 md:h-96 lg:h-full lg:min-h-screen"
//                 showThumbs={false}
//                 infiniteLoop
//                 useKeyboardArrows
//                 autoPlay
//                 interval={3000}
//                 transitionTime={500}
//             >
//                 {products.map((product, index) => (
//                     <div key={index} className="flex flex-col items-center h-full">
//                         {/* Product Image */}
//                         <div className="w-full h-full flex items-center justify-center mb-4">
//                             <img
//                                 src={product.image}
//                                 alt={product.title}
//                                 className="object-cover rounded-lg shadow-md w-full h-full"
//                                 onError={(e) => (e.target.src = 'placeholder.jpg')} // Fallback image
//                             />
//                         </div>
//                         {/* Product Text */}
//                         <div className="text-center mb-8 lg:mb-12">
//                             <h3 className="text-2xl font-semibold text-blue-600">{product.title}</h3>
//                             <p className="text-base text-gray-700 leading-relaxed">{product.description}</p>
//                         </div>
//                     </div>
//                 ))}
//             </Carousel>
//         </div>
//     );
// };

// export default ProductCarousel;




// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import { useEffect, useState } from 'react';

// const ProductCarousel = () => {
//     const products = [
//         { image: 'products1.jpg', title: 'HDPE Pipe 20mm', description: 'Ideal for residential and industrial water transport.' },
//         { image: 'products3.jpg', title: 'Sprinkler System', description: 'Efficient water distribution for large gardens.' },
//         { image: 'products7.jpg', title: 'HDPE Fittings', description: 'Durable fittings compatible with a range of HDPE pipes.' },
//         { image: 'products13.jpg', title: 'HDPE Fittings', description: 'Durable fittings compatible with a range of HDPE pipes.' }

//     ];

//     const [isMounted, setIsMounted] = useState(false);

//     useEffect(() => {
//         setIsMounted(true); // Ensure component mounts only once
//         console.log('Component mounted');
//     }, []);

//     if (!isMounted) return null;

//     return (
//         <div className="bg-gray-50 w-full min-h-screen flex flex-col items-center justify-center overflow-hidden">
//             <h2 className="text-center text-4xl font-bold text-blue-600 mb-6 md:mb-12">Our Products</h2>
//             <Carousel
//                 className="w-full h-[80vh] md:h-[90vh] lg:h-[100vh]" // Fit images to screen on desktop
//                 showThumbs={false}
//                 infiniteLoop // Enable infinite looping
//                 useKeyboardArrows
//                 autoPlay
//                 interval={2500} // Faster autoplay
//                 transitionTime={400} // Smoother transition
//                 swipeScrollTolerance={5} // Quick swipe interaction
//             >
//                 {products.map((product, index) => (
//                     <div key={index} className="flex flex-col items-center h-full p-4">
//                         {/* Product Image */}
//                         <div className="w-full h-full flex items-center justify-center overflow-hidden">
//                             <img
//                                 src={product.image}
//                                 alt={product.title}
//                                 className="object-cover w-full h-full rounded-lg shadow-md" // Fit image to screen
//                                 onError={(e) => (e.target.src = 'placeholder.jpg')}
//                             />
//                         </div>
//                         {/* Product Text */}
//                         <div className="text-center mt-4">
//                             <h3 className="text-2xl font-semibold text-blue-600">{product.title}</h3>
//                             <p className="text-base text-gray-700 leading-relaxed">{product.description}</p>
//                         </div>
//                     </div>
//                 ))}
//             </Carousel>
//         </div>
//     );
// };

// export default ProductCarousel;

// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import { useEffect, useState } from 'react';

// const ProductCarousel = () => {
//     const products = [
//         { image: 'products1.jpg', title: 'HDPE Pipe 20mm', description: 'Ideal for residential and industrial water transport.' },
//         { image: 'products3.jpg', title: 'Sprinkler System', description: 'Efficient water distribution for large gardens.' },
//         { image: 'products7.jpg', title: 'HDPE Fittings', description: 'Durable fittings compatible with a range of HDPE pipes.' },
//         { image: 'products13.jpg', title: 'HDPE Fittings', description: 'Durable fittings compatible with a range of HDPE pipes.' },
//     ];

//     const [isMounted, setIsMounted] = useState(false);

//     useEffect(() => {
//         setIsMounted(true); // Ensure component mounts only once
//         console.log('Component mounted');
//     }, []);

//     if (!isMounted) return null;

//     return (
//         <div className="bg-gray-50 w-full min-h-screen flex flex-col items-center justify-center overflow-hidden pt-10 pb-20">
//             <h2 className="text-center text-4xl font-bold text-blue-600 mb-6 md:mb-12">Our Products</h2>
//             <Carousel
//                 className="w-full max-w-5xl h-[80vh] md:h-[90vh] lg:h-[100vh]"
//                 showThumbs={false}
//                 infiniteLoop
//                 useKeyboardArrows
//                 autoPlay
//                 interval={3500} // Smooth autoplay
//                 transitionTime={700} // Smoother transition effect
//                 swipeScrollTolerance={5}
//             >
//                 {products.map((product, index) => (
//                     <div key={index} className="flex flex-col items-center h-full p-4">
//                         {/* Product Image */}
//                         <div className="w-full h-3/4 flex items-center justify-center overflow-hidden">
//                             <img
//                                 src={product.image}
//                                 alt={product.title}
//                                 className="object-cover w-full h-full rounded-lg shadow-md"
//                                 onError={(e) => (e.target.src = 'placeholder.jpg')}
//                             />
//                         </div>
//                         {/* Product Text */}
//                         <div className="text-center mt-4 p-4 max-w-3xl bg-white bg-opacity-90 rounded-lg shadow-lg">
//                             <h3 className="text-2xl md:text-3xl font-semibold text-blue-600">{product.title}</h3>
//                             <p className="text-base md:text-lg text-gray-700 leading-relaxed mt-2">
//                                 {product.description}
//                             </p>
//                         </div>
//                     </div>
//                 ))}
//             </Carousel>
//         </div>
//     );
// };

// export default ProductCarousel;



import { Carousel } from 'react-responsive-carousel'; 
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useEffect, useState } from 'react';

const ProductCarousel = () => {
    const products = [
        { image: 'products1.jpg', title: 'HDPE Pipe 20mm', description: 'Ideal for residential and industrial water transport.' },
        { image: 'products3.jpg', title: 'Sprinkler System', description: 'Efficient water distribution for large gardens.' },
        { image: 'products7.jpg', title: 'HDPE Fittings', description: 'Durable fittings compatible with a range of HDPE pipes.' },
        { image: 'products13.jpg', title: 'HDPE Fittings', description: 'Durable fittings compatible with a range of HDPE pipes.' },
    ];

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true); // Ensure component mounts only once
        console.log('Component mounted');
    }, []);

    if (!isMounted) return null;

    return (
        <div className="bg-gray-50 w-full min-h-screen flex flex-col items-center justify-center overflow-hidden pt-10 pb-20">
            <h2 className="text-center text-4xl font-bold text-blue-600 mb-6 md:mb-12">Our Products</h2>
            <Carousel
                className="w-full max-w-5xl h-[80vh] md:h-[90vh] lg:h-[100vh]"
                showThumbs={false}
                infiniteLoop
                useKeyboardArrows
                autoPlay
                interval={3500} // Smooth autoplay
                transitionTime={700} // Smoother transition effect
                swipeScrollTolerance={5}
                showStatus={false} // Hides status to make it look cleaner
            >
                {products.map((product, index) => (
                    <div key={index} className="flex flex-col items-center h-full p-6 md:p-8">
                        {/* Product Image */}
                        <div className="w-full h-3/4 flex items-center justify-center overflow-hidden rounded-lg shadow-lg">
                            <img
                                src={product.image}
                                alt={product.title}
                                className="object-cover w-full h-full rounded-lg"
                                onError={(e) => (e.target.src = 'placeholder.jpg')}
                            />
                        </div>
                        {/* Product Text */}
                        <div className="text-center mt-4 p-6 max-w-3xl bg-white bg-opacity-90 rounded-lg shadow-lg z-10">
                            <h3 className="text-2xl md:text-3xl font-semibold text-blue-600">{product.title}</h3>
                            <p className="text-base md:text-lg text-gray-700 leading-relaxed mt-2">
                                {product.description}
                            </p>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default ProductCarousel;
