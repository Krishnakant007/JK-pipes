// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const ProductCategories = () => {
//     const productRefs = useRef([]);
//     const buttonRefs = useRef([]);

//     useEffect(() => {
//         // Animate product cards on scroll
//         productRefs.current.forEach((product, index) => {
//             gsap.fromTo(
//                 product,
//                 { opacity: 0, y: 50 }, // Start with opacity 0 and move up
//                 {
//                     opacity: 1,
//                     y: 0,
//                     duration: 1,
//                     delay: index * 0.2, // Stagger the animation
//                     ease: "power3.out",
//                     scrollTrigger: {
//                         trigger: product,
//                         start: "top 80%",
//                         toggleActions: "play none none reverse",
//                     },
//                 }
//             );
//         });

//         // Slide-in button animation from right
//         buttonRefs.current.forEach((button, index) => {
//             gsap.fromTo(
//                 button,
//                 { x: 200, opacity: 0 }, // Start off the screen (to the right) and invisible
//                 {
//                     x: 0,
//                     opacity: 1,
//                     duration: 1,
//                     delay: index * 0.4, // Stagger the animation for each button
//                     ease: "power3.out",
//                 }
//             );
//         });
//     }, []);

//     return (
//         <section id="products" className="py-12 px-8">
//             {/* Main Section Title */}
//             <div className="text-center mb-10">
//                 <h1 className="text-4xl font-extrabold">Explore Our Product Categories</h1>
//                 <p className="text-gray-500 mt-2">We offer a wide range of high-quality pipes for all your needs.</p>
//             </div>

//             <h2 className="text-3xl font-bold mb-6 pl-10">Our Products</h2>

//             <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 gap-6">
//                 {/* PVC Category */}
//                 <div
//                     className="border p-6 sm:p-8 rounded-3xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out"
//                     ref={(el) => (productRefs.current[0] = el)}
//                 >
//                     <h3 className="text-xl font-bold text-center mb-4">SWR Pipes</h3>
//                     <img src="swr.jpg" alt="PVC Pipe" className="h-48 sm:h-56 mx-auto" />
//                     <div className="flex items-center justify-center">
//                         <h1 className="font-semibold"><span className="font-extrabold text-lg">4 </span> Products Available</h1>
//                         <button
//                             className="mt-4 py-2 w-32 sm:w-auto sm:px-6 bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-full transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-400 hover:to-purple-600 focus:ring focus:ring-blue-300 block mx-auto"
//                             ref={(el) => (buttonRefs.current[0] = el)}
//                         >
//                             View More
//                         </button>
//                     </div>
//                 </div>

//                 {/* HDPE Category */}
//                 <div
//                     className="border p-6 sm:p-8 rounded-3xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out"
//                     ref={(el) => (productRefs.current[1] = el)}
//                 >
//                     <h3 className="text-xl font-bold text-center mb-4">HDPE Pipes</h3>
//                     <img src="7.6.png" alt="HDPE Pipe" className="h-48 sm:h-56 mx-auto" />
//                     <div className="flex items-center justify-center">
//                         <h1 className="font-semibold"><span className="font-extrabold text-lg">5 </span> Products Available</h1>
//                         <button
//                             className="mt-4 py-2 w-32 sm:w-auto sm:px-6 bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-full transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-400 hover:to-purple-600 focus:ring focus:ring-blue-300 block mx-auto"
//                             ref={(el) => (buttonRefs.current[1] = el)}
//                         >
//                             View More
//                         </button>
//                     </div>
//                 </div>

//                 {/* SWR Category */}
//                 <div
//                     className="border p-6 sm:p-8 rounded-3xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out"
//                     ref={(el) => (productRefs.current[2] = el)}
//                 >
//                     <h3 className="text-xl font-bold text-center mb-4">PVC Pipes</h3>
//                     <img src="supreme-pvc-pipe-110-mm-6kg.jpg" alt="SWR Pipe" className="h-48 sm:h-56 mx-auto" />
//                     <div className="flex items-center justify-center">
//                         <h1 className="font-semibold"><span className="font-extrabold text-lg">11 </span> Products Available</h1>
//                         <button
//                             className="mt-4 py-2 w-32 sm:w-auto sm:px-6 bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-full transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-400 hover:to-purple-600 focus:ring focus:ring-blue-300 block mx-auto"
//                             ref={(el) => (buttonRefs.current[2] = el)}
//                         >
//                             View More
//                         </button>
//                     </div>
//                 </div>

//                 {/* HDPE & COIL Category */}
//                 <div
//                     className="border p-6 sm:p-8 rounded-3xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out"
//                     ref={(el) => (productRefs.current[3] = el)}
//                 >
//                     <h3 className="text-xl font-bold text-center mb-4">HDPE & COIL Pipes</h3>
//                     <img src="hdpecoil.webp" alt="HDPE & COIL Pipe" className="h-48 sm:h-56 mx-auto" />
//                     <div className="flex items-center justify-center">
//                         <h1 className="font-semibold"><span className="font-extrabold text-lg">3 </span> Products Available</h1>
//                         <button
//                             className="mt-4 py-2 w-32 sm:w-auto sm:px-6 bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-full transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-400 hover:to-purple-600 focus:ring focus:ring-blue-300 block mx-auto"
//                             ref={(el) => (buttonRefs.current[3] = el)}
//                         >
//                             View More
//                         </button>
//                     </div>
//                 </div>

//                 {/* UPVC Category */}
//                 <div
//                     className="border p-6 sm:p-8 rounded-3xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out"
//                     ref={(el) => (productRefs.current[4] = el)}
//                 >
//                     <h3 className="text-xl font-bold text-center mb-4">UPVC Pipes</h3>
//                     <img src="upvc.jpg" alt="UPVC Pipe" className="h-48 sm:h-56 mx-auto" />
//                     <div className="flex items-center justify-center">
//                         <h1 className="font-semibold"><span className="font-extrabold text-lg">1 </span> Products Available</h1>
//                         <button
//                             className="mt-4 py-2 w-32 sm:w-auto sm:px-6 bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-full transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-400 hover:to-purple-600 focus:ring focus:ring-blue-300 block mx-auto"
//                             ref={(el) => (buttonRefs.current[4] = el)}
//                         >
//                             View More
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default ProductCategories;





// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const ProductCategories = () => {
//     const productRefs = useRef([]);
//     const buttonRefs = useRef([]);

//     useEffect(() => {
//         // Animate product cards on scroll
//         productRefs.current.forEach((product, index) => {
//             gsap.fromTo(
//                 product,
//                 { opacity: 0, y: 50 }, // Start with opacity 0 and move up
//                 {
//                     opacity: 1,
//                     y: 0,
//                     duration: 1,
//                     delay: index * 0.2, // Stagger the animation
//                     ease: "power3.out",
//                     scrollTrigger: {
//                         trigger: product,
//                         start: "top 80%",
//                         toggleActions: "play none none reverse",
//                     },
//                 }
//             );
//         });

//         // Slide-in button animation from right
//         buttonRefs.current.forEach((button, index) => {
//             gsap.fromTo(
//                 button,
//                 { x: 200, opacity: 0 }, // Start off the screen (to the right) and invisible
//                 {
//                     x: 0,
//                     opacity: 1,
//                     duration: 1,
//                     delay: index * 0.4, // Stagger the animation for each button
//                     ease: "power3.out",
//                 }
//             );
//         });
//     }, []);

//     return (
//         <section id="products" className="py-12 px-8 bg-gray-200"> {/* Set grey background for the section */}
//             {/* Main Section Title */}
//             <div className="text-center mb-10">
//                 <h1 className="text-4xl font-extrabold">Explore Our Product Categories</h1>
//                 <p className="text-gray-500 mt-2">We offer a wide range of high-quality pipes for all your needs.</p>
//             </div>

//             <h2 className="text-3xl font-bold mb-6 pl-10">Our Products</h2>

//             <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 gap-6">
//                 {/* PVC Category */}
//                 <div
//                     className="border p-6 sm:p-8 rounded-3xl shadow-xl bg-white hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out"
//                     ref={(el) => (productRefs.current[0] = el)}
//                 >
//                     <h3 className="text-xl font-bold text-center mb-4">SWR Pipes</h3>
//                     <img src="swr.jpg" alt="PVC Pipe" className="h-48 sm:h-56 mx-auto" />
//                     <div className="flex items-center justify-center">
//                         <h1 className="font-semibold"><span className="font-extrabold text-lg">4 </span> Products Available</h1>
//                         <button
//                             className="mt-4 py-2 w-32 sm:w-auto sm:px-6 bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-full transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-400 hover:to-purple-600 focus:ring focus:ring-blue-300 block mx-auto"
//                             ref={(el) => (buttonRefs.current[0] = el)}
//                         >
//                             View More
//                         </button>
//                     </div>
//                 </div>

//                 {/* HDPE Category */}
//                 <div
//                     className="border p-6 sm:p-8 rounded-3xl shadow-xl bg-white hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out"
//                     ref={(el) => (productRefs.current[1] = el)}
//                 >
//                     <h3 className="text-xl font-bold text-center mb-4">HDPE Pipes</h3>
//                     <img src="7.6.png" alt="HDPE Pipe" className="h-48 sm:h-56 mx-auto" />
//                     <div className="flex items-center justify-center">
//                         <h1 className="font-semibold"><span className="font-extrabold text-lg">5 </span> Products Available</h1>
//                         <button
//                             className="mt-4 py-2 w-32 sm:w-auto sm:px-6 bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-full transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-400 hover:to-purple-600 focus:ring focus:ring-blue-300 block mx-auto"
//                             ref={(el) => (buttonRefs.current[1] = el)}
//                         >
//                             View More
//                         </button>
//                     </div>
//                 </div>

//                 {/* SWR Category */}
//                 <div
//                     className="border p-6 sm:p-8 rounded-3xl shadow-xl bg-white hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out"
//                     ref={(el) => (productRefs.current[2] = el)}
//                 >
//                     <h3 className="text-xl font-bold text-center mb-4">PVC Pipes</h3>
//                     <img src="supreme-pvc-pipe-110-mm-6kg.jpg" alt="SWR Pipe" className="h-48 sm:h-56 mx-auto" />
//                     <div className="flex items-center justify-center">
//                         <h1 className="font-semibold"><span className="font-extrabold text-lg">11 </span> Products Available</h1>
//                         <button
//                             className="mt-4 py-2 w-32 sm:w-auto sm:px-6 bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-full transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-400 hover:to-purple-600 focus:ring focus:ring-blue-300 block mx-auto"
//                             ref={(el) => (buttonRefs.current[2] = el)}
//                         >
//                             View More
//                         </button>
//                     </div>
//                 </div>

//                 {/* HDPE & COIL Category */}
//                 <div
//                     className="border p-6 sm:p-8 rounded-3xl shadow-xl bg-white hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out"
//                     ref={(el) => (productRefs.current[3] = el)}
//                 >
//                     <h3 className="text-xl font-bold text-center mb-4">HDPE & COIL Pipes</h3>
//                     <img src="hdpecoil.webp" alt="HDPE & COIL Pipe" className="h-48 sm:h-56 mx-auto" />
//                     <div className="flex items-center justify-center">
//                         <h1 className="font-semibold"><span className="font-extrabold text-lg">3 </span> Products Available</h1>
//                         <button
//                             className="mt-4 py-2 w-32 sm:w-auto sm:px-6 bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-full transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-400 hover:to-purple-600 focus:ring focus:ring-blue-300 block mx-auto"
//                             ref={(el) => (buttonRefs.current[3] = el)}
//                         >
//                             View More
//                         </button>
//                     </div>
//                 </div>

//                 {/* UPVC Category */}
//                 <div
//                     className="border p-6 sm:p-8 rounded-3xl shadow-xl bg-white hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out"
//                     ref={(el) => (productRefs.current[4] = el)}
//                 >
//                     <h3 className="text-xl font-bold text-center mb-4">UPVC Pipes</h3>
//                     <img src="upvc.jpg" alt="UPVC Pipe" className="h-48 sm:h-56 mx-auto" />
//                     <div className="flex items-center justify-center">
//                         <h1 className="font-semibold"><span className="font-extrabold text-lg">1 </span> Products Available</h1>
//                         <button
//                             className="mt-4 py-2 w-32 sm:w-auto sm:px-6 bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-full transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-400 hover:to-purple-600 focus:ring focus:ring-blue-300 block mx-auto"
//                             ref={(el) => (buttonRefs.current[4] = el)}
//                         >
//                             View More
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default ProductCategories;




// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";
// import { useNavigate } from 'react-router-dom';

// gsap.registerPlugin(ScrollTrigger);

// const ProductCategories = () => {
//     const productRefs = useRef([]);
//     const buttonRefs = useRef([]);
//     const navigate = useNavigate();

//     useEffect(() => {
//         // Animate product cards on scroll
//         productRefs.current.forEach((product, index) => {
//             gsap.fromTo(
//                 product,
//                 { opacity: 0, y: 50 },
//                 {
//                     opacity: 1,
//                     y: 0,
//                     duration: 1,
//                     delay: index * 0.2,
//                     ease: "power3.out",
//                     scrollTrigger: {
//                         trigger: product,
//                         start: "top 80%",
//                         toggleActions: "play none none reverse",
//                     },
//                 }
//             );
//         });

//         // Slide-in button animation from right
//         buttonRefs.current.forEach((button, index) => {
//             gsap.fromTo(
//                 button,
//                 { x: 200, opacity: 0 },
//                 {
//                     x: 0,
//                     opacity: 1,
//                     duration: 1,
//                     delay: index * 0.4,
//                     ease: "power3.out",
//                 }
//             );
//         });
//     }, []);

//     // Function to handle navigation to specific screens
//     const handleNavigate = (path) => {
//         navigate(path);
//     };

//     return (
//         <section id="products" className="py-12 px-8 bg-gray-200">
//             <div className="text-center mb-10">
//                 <h1 className="text-4xl font-extrabold">Explore Our Product Categories</h1>
//                 <p className="text-gray-500 mt-2">We offer a wide range of high-quality pipes for all your needs.</p>
//             </div>

//             <h2 className="text-3xl font-bold mb-6 pl-10">Our Products</h2>

//             <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 gap-6">
//                 {/* SWR Category */}
//                 <div
//                     className="border p-6 sm:p-8 rounded-3xl shadow-xl bg-white hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out"
//                     ref={(el) => (productRefs.current[0] = el)}
//                 >
//                     <h3 className="text-xl font-bold text-center mb-4">SWR Pipes</h3>
//                     <img src="swr.jpg" alt="SWR Pipe" className="h-48 sm:h-56 mx-auto" />
//                     <div className="flex items-center justify-center">
//                         <h1 className="font-semibold"><span className="font-extrabold text-lg">4 </span> Products Available</h1>
//                         <button
//                             className="mt-4 py-2 w-32 sm:w-auto sm:px-6 bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-full transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-400 hover:to-purple-600 focus:ring focus:ring-blue-300 block mx-auto"
//                             ref={(el) => (buttonRefs.current[0] = el)}
//                             onClick={() => handleNavigate('/swr')}
//                         >
//                             View More
//                         </button>
//                     </div>
//                 </div>

//                 {/* HDPE Category */}
//                 <div
//                     className="border p-6 sm:p-8 rounded-3xl shadow-xl bg-white hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out"
//                     ref={(el) => (productRefs.current[1] = el)}
//                 >
//                     <h3 className="text-xl font-bold text-center mb-4">HDPE Pipes</h3>
//                     <img src="7.6.png" alt="HDPE Pipe" className="h-48 sm:h-56 mx-auto" />
//                     <div className="flex items-center justify-center">
//                         <h1 className="font-semibold"><span className="font-extrabold text-lg">5 </span> Products Available</h1>
//                         <button
//                             className="mt-4 py-2 w-32 sm:w-auto sm:px-6 bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-full transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-400 hover:to-purple-600 focus:ring focus:ring-blue-300 block mx-auto"
//                             ref={(el) => (buttonRefs.current[1] = el)}
//                             onClick={() => handleNavigate('/hdpe')}
//                         >
//                             View More
//                         </button>
//                     </div>
//                 </div>

//                 {/* PVC Category */}
//                 <div
//                     className="border p-6 sm:p-8 rounded-3xl shadow-xl bg-white hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out"
//                     ref={(el) => (productRefs.current[2] = el)}
//                 >
//                     <h3 className="text-xl font-bold text-center mb-4">PVC Pipes</h3>
//                     <img src="supreme-pvc-pipe-110-mm-6kg.jpg" alt="PVC Pipe" className="h-48 sm:h-56 mx-auto" />
//                     <div className="flex items-center justify-center">
//                         <h1 className="font-semibold"><span className="font-extrabold text-lg">11 </span> Products Available</h1>
//                         <button
//                             className="mt-4 py-2 w-32 sm:w-auto sm:px-6 bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-full transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-400 hover:to-purple-600 focus:ring focus:ring-blue-300 block mx-auto"
//                             ref={(el) => (buttonRefs.current[2] = el)}
//                             onClick={() => handleNavigate('/pvc')}
//                         >
//                             View More
//                         </button>
//                     </div>
//                 </div>

//                 {/* HDPE & COIL Category */}
//                 <div
//                     className="border p-6 sm:p-8 rounded-3xl shadow-xl bg-white hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out"
//                     ref={(el) => (productRefs.current[3] = el)}
//                 >
//                     <h3 className="text-xl font-bold text-center mb-4">HDPE & COIL Pipes</h3>
//                     <img src="hdpecoil.webp" alt="HDPE & COIL Pipe" className="h-48 sm:h-56 mx-auto" />
//                     <div className="flex items-center justify-center">
//                         <h1 className="font-semibold"><span className="font-extrabold text-lg">4 </span> Products Available</h1>
//                         <button
//                             className="mt-4 py-2 w-32 sm:w-auto sm:px-6 bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-full transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-400 hover:to-purple-600 focus:ring focus:ring-blue-300 block mx-auto"
//                             ref={(el) => (buttonRefs.current[3] = el)}
//                             onClick={() => handleNavigate('/hdpecoil')}
//                         >
//                             View More
//                         </button>
//                     </div>
//                 </div>

//                 {/* UPVC Category */}
//                 <div
//                     className="border p-6 sm:p-8 rounded-3xl shadow-xl bg-white hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out"
//                     ref={(el) => (productRefs.current[4] = el)}
//                 >
//                     <h3 className="text-xl font-bold text-center mb-4">UPVC Pipes</h3>
//                     <img src="upvc.jpg" alt="UPVC Pipe" className="h-48 sm:h-56 mx-auto" />
//                     <div className="flex items-center justify-center">
//                         <h1 className="font-semibold"><span className="font-extrabold text-lg">1 </span> Products Available</h1>
//                         <button
//                             className="mt-4 py-2 w-32 sm:w-auto sm:px-6 bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-full transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-400 hover:to-purple-600 focus:ring focus:ring-blue-300 block mx-auto"
//                             ref={(el) => (buttonRefs.current[4] = el)}
//                             onClick={() => handleNavigate('/upvc')}
//                         >
//                             View More
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default ProductCategories;



import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useNavigate } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const ProductCategories = () => {
    const productRefs = useRef([]);
    const navigate = useNavigate();

    useEffect(() => {
        // Animate product cards on scroll
        productRefs.current.forEach((product, index) => {
            gsap.fromTo(
                product,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    delay: index * 0.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: product,
                        start: "top 80%",
                        toggleActions: "play none none reverse",
                    },
                }
            );
        });

        // The button animation code has been removed
    }, []);

    // Function to handle navigation to specific screens
    const handleNavigate = (path) => {
        navigate(path);
    };

    return (
        <section id="products" className="py-16 px-8 bg-gray-200 mt-24">
            <div className="text-center mb-10">
                <h1 className="text-4xl font-extrabold  text-blue-600 ">Explore Our Product Categories</h1>
                <p className="text-gray-500 mt-2">We offer a wide range of high-quality pipes for all your needs.</p>
            </div>

            <h2 className="text-3xl font-bold mb-6 pl-10">Our Products</h2>

            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-6">
                {/* SWR Category */}
                <div
                    className="border p-6 sm:p-8 rounded-3xl shadow-xl bg-white hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out"
                    ref={(el) => (productRefs.current[0] = el)}
                >
                    <h3 className="text-xl font-bold text-center mb-4">SWR Pipes</h3>
                    <img src="swr.jpg" alt="SWR Pipe" className="h-48 sm:h-56 mx-auto" />
                    <div className="flex items-center justify-center mt-4">
                        <h1 className="font-semibold"><span className="font-extrabold text-lg">4 </span> Products Available</h1>
                        <button
                            className="mt-4 py-2 w-32 sm:w-auto sm:px-6 bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-full transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-400 hover:to-purple-600 focus:ring focus:ring-blue-300 block mx-auto"
                            onClick={() => handleNavigate('/swr')}
                        >
                            View More
                        </button>
                    </div>
                </div>

                {/* HDPE Category */}
                <div
                    className="border p-6 sm:p-8 rounded-3xl shadow-xl bg-white hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out"
                    ref={(el) => (productRefs.current[1] = el)}
                >
                    <h3 className="text-xl font-bold text-center mb-4">HDPE Pipes</h3>
                    <img src="7.6.png" alt="HDPE Pipe" className="h-48 sm:h-56 mx-auto" />
                    <div className="flex items-center justify-center mt-4">
                        <h1 className="font-semibold"><span className="font-extrabold text-lg">5 </span> Products Available</h1>
                        <button
                            className="mt-4 py-2 w-32 sm:w-auto sm:px-6 bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-full transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-400 hover:to-purple-600 focus:ring focus:ring-blue-300 block mx-auto"
                            onClick={() => handleNavigate('/hdpe')}
                        >
                            View More
                        </button>
                    </div>
                </div>

                {/* PVC Category */}
                <div
                    className="border p-6 sm:p-8 rounded-3xl shadow-xl bg-white hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out"
                    ref={(el) => (productRefs.current[2] = el)}
                >
                    <h3 className="text-xl font-bold text-center mb-4">PVC Pipes</h3>
                    <img src="supreme-pvc-pipe-110-mm-6kg.jpg" alt="PVC Pipe" className="h-48 sm:h-56 mx-auto" />
                    <div className="flex items-center justify-center mt-4">
                        <h1 className="font-semibold"><span className="font-extrabold text-lg">11 </span> Products Available</h1>
                        <button
                            className="mt-4 py-2 w-32 sm:w-auto sm:px-6 bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-full transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-400 hover:to-purple-600 focus:ring focus:ring-blue-300 block mx-auto"
                            onClick={() => handleNavigate('/pvc')}
                        >
                            View More
                        </button>
                    </div>
                </div>

                {/* HDPE & COIL Category */}
                <div
                    className="border p-6 sm:p-8 rounded-3xl shadow-xl bg-white hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out"
                    ref={(el) => (productRefs.current[3] = el)}
                >
                    <h3 className="text-xl font-bold text-center mb-4">HDPE & COIL Pipes</h3>
                    <img src="hdpecoil.webp" alt="HDPE & COIL Pipe" className="h-48 sm:h-56 mx-auto" />
                    <div className="flex items-center justify-center mt-4">
                        <h1 className="font-semibold"><span className="font-extrabold text-lg">4 </span> Products Available</h1>
                        <button
                            className="mt-4 py-2 w-32 sm:w-auto sm:px-6 bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-full transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-400 hover:to-purple-600 focus:ring focus:ring-blue-300 block mx-auto"
                            onClick={() => handleNavigate('/hdpecoil')}
                        >
                            View More
                        </button>
                    </div>
                </div>

                {/* UPVC Category */}
                <div
                    className="border p-6 sm:p-8 rounded-3xl shadow-xl bg-white hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out"
                    ref={(el) => (productRefs.current[4] = el)}
                >
                    <h3 className="text-xl font-bold text-center mb-4">UPVC Pipes</h3>
                    <img src="upvc.jpg" alt="UPVC Pipe" className="h-48 sm:h-56 mx-auto" />
                    <div className="flex items-center justify-center mt-4">
                        <h1 className="font-semibold"><span className="font-extrabold text-lg">2 </span> Products Available</h1>
                        <button
                            className="mt-4 py-2 w-32 sm:w-auto sm:px-6 bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-full transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-400 hover:to-purple-600 focus:ring focus:ring-blue-300 block mx-auto"
                            onClick={() => handleNavigate('/upvc')}
                        >
                            View More
                        </button>
                    </div>
                </div>


           
            </div>
        </section>
    );
};

export default ProductCategories;



 //     <div
            //     className="border p-6 sm:p-8 rounded-3xl shadow-xl bg-white hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out"
            //     ref={(el) => (productRefs.current[4] = el)}
            // >
            //     <h3 className="text-xl font-bold text-center mb-4">Garden Pipes</h3>
            //     <img src="garden.webp" alt="Garden Pipe" className="h-48 sm:h-56 mx-auto" />
            //     <div className="flex items-center justify-center mt-4">
            //         <h1 className="font-semibold"><span className="font-extrabold text-lg">1 </span> Products Available</h1>
            //         <button
            //             className="mt-4 py-2 w-32 sm:w-auto sm:px-6 bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-full transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-400 hover:to-purple-600 focus:ring focus:ring-blue-300 block mx-auto"
            //             onClick={() => handleNavigate('/upvc')}
            //         >
            //             View More
            //         </button>
            //     </div>
            // </div>