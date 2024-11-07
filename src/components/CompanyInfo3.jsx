// import { useEffect, useRef, useState } from "react";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const CompanyInfo3 = () => {
//     const sectionsRef = useRef([]);
//     const [expanded, setExpanded] = useState({ vision: false });
//     const contentRefs = useRef({});

//     useEffect(() => {
//         sectionsRef.current.forEach((section) => {
//             gsap.fromTo(
//                 section,
//                 { opacity: 0, y: 50 },
//                 {
//                     opacity: 1,
//                     y: 0,
//                     duration: 1,
//                     ease: "power3.out",
//                     scrollTrigger: {
//                         trigger: section,
//                         start: "top 80%",
//                         toggleActions: "play none none reverse",
//                     },
//                 }
//             );
//         });
//     }, []);

//     const toggleExpand = (section) => {
//         setExpanded((prevState) => {
//             const isExpanded = !prevState[section];

//             if (contentRefs.current[section]) {
//                 gsap.to(contentRefs.current[section], {
//                     height: isExpanded ? "auto" : 0,
//                     opacity: isExpanded ? 1 : 0,
//                     duration: 0.5,
//                     ease: "power3.inOut",
//                 });
//             }

//             return { ...prevState, [section]: isExpanded };
//         });
//     };

//     return (
//         <section
//             className="py-12 px-8 bg-cover bg-center mt-40"
//             style={{
//                 backgroundImage: `url('https://r4you.org.il/wp-content/uploads/2017/11/shutterstock_584242033.jpg')`, // Replace with your background image URL
//             }}
//         >
//             {/* Product Usage Section */}
//             <div className="text-center mb-10" ref={(el) => (sectionsRef.current[0] = el)}>
            
//                 <div className="flex justify-center items-center gap-6 flex-wrap">
//                     {/* Add your product usage logos here */}
//                 </div>
//             </div>

//             {/* Our Vision */}
//             <div className="bg-white/90 rounded-xl p-6 mb-8 shadow-xl" ref={(el) => (sectionsRef.current[1] = el)}>
//             <div className="mb-10 flex justify-center">
//             <video autoPlay muted loop className="h-24 w-64">
//                    <source src="Vision.mp4" type="video/mp4" />
//                </video>
//            </div>
//                 <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
//                 <p className="text-lg text-gray-700 mb-4">
//                     We strive to lead the industry by providing innovative and sustainable solutions that meet the highest standards...
//                 </p>
//                 <div
//                     className="overflow-hidden"
//                     style={{ height: 0, opacity: 0 }}
//                     ref={(el) => (contentRefs.current.vision = el)}
//                 >
//                     <p className="text-lg text-gray-700 mb-4">
//                         Our vision is to continuously evolve and enhance our products to create a lasting impact on our community and environment...
//                     </p>
//                 </div>
//                 <button
//                     onClick={() => toggleExpand("vision")}
//                     className="flex items-center justify-center gap-2 py-2 px-6 bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-full hover:bg-blue-700 transition"
//                 >
//                     {expanded.vision ? "View Less" : "View More"}
//                     <svg
//                         className={`w-5 h-5 transition-transform duration-300 ${expanded.vision ? "rotate-180" : ""}`}
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                     >
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
//                     </svg>
//                 </button>
//             </div>
//         </section>
//     );
// };

// export default CompanyInfo3;


// import { useEffect, useRef, useState } from "react";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const CompanyInfo3 = () => {
//     const sectionsRef = useRef([]);
//     const [expanded, setExpanded] = useState({ vision: false });
//     const contentRefs = useRef({});

//     useEffect(() => {
//         sectionsRef.current.forEach((section) => {
//             gsap.fromTo(
//                 section,
//                 { opacity: 0, y: 50 },
//                 {
//                     opacity: 1,
//                     y: 0,
//                     duration: 1,
//                     ease: "power3.out",
//                     scrollTrigger: {
//                         trigger: section,
//                         start: "top 80%",
//                         toggleActions: "play none none reverse",
//                     },
//                 }
//             );
//         });
//     }, []);

//     const toggleExpand = (section) => {
//         setExpanded((prevState) => {
//             const isExpanded = !prevState[section];

//             if (contentRefs.current[section]) {
//                 gsap.to(contentRefs.current[section], {
//                     height: isExpanded ? "auto" : 0,
//                     opacity: isExpanded ? 1 : 0,
//                     duration: 0.5,
//                     ease: "power3.inOut",
//                 });
//             }

//             return { ...prevState, [section]: isExpanded };
//         });
//     };

//     return (
//         <section
//             className="py-12 px-8 bg-cover bg-center mt-40"
//             style={{
//                 backgroundImage: `url('https://r4you.org.il/wp-content/uploads/2017/11/shutterstock_584242033.jpg')`,
//             }}
//         >
//             {/* Product Usage Section */}
//             <div className="text-center mb-10" ref={(el) => (sectionsRef.current[0] = el)}>
//                 <div className="flex justify-center items-center gap-6 flex-wrap">
//                     {/* Add your product usage logos here */}
//                 </div>
//             </div>

//             {/* Our Vision */}
//             <div className="bg-white/90 rounded-xl p-6 mb-8 shadow-xl" ref={(el) => (sectionsRef.current[1] = el)}>
//                 <div className="mb-10 flex justify-center">
//                     <video autoPlay muted loop className="h-24 w-64">
//                         <source src="Vision.mp4" type="video/mp4" />
//                     </video>
//                 </div>
//                 <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
//                 <p className="text-lg text-gray-700 mb-4">
//                     We strive to lead the industry by providing innovative and sustainable solutions that meet the
//                     highest standards...
//                 </p>

//                 {/* Additional content visible on larger screens or with 'View More' on mobile */}
//                 <div
//                     className={`text-lg text-gray-700 mb-4 ${expanded.vision ? 'block' : 'hidden lg:block'}`}
//                     style={{ height: expanded.vision || window.innerWidth >= 1024 ? 'auto' : 0, opacity: expanded.vision || window.innerWidth >= 1024 ? 1 : 0 }}
//                     ref={(el) => (contentRefs.current.vision = el)}
//                 >
//                     <p>
//                         Our vision is to continuously evolve and enhance our products to create a lasting impact on our
//                         community and environment...
//                     </p>
//                 </div>

//                 {/* Show More button for mobile screens only */}
//                 {!expanded.vision && (
//                     <button
//                         onClick={() => toggleExpand("vision")}
//                         className="block lg:hidden flex items-center justify-center gap-2 py-2 px-6 bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-full hover:bg-blue-700 transition"
//                     >
//                         {expanded.vision ? "View Less" : "View More"}
//                         <svg
//                             className={`w-5 h-5 transition-transform duration-300 ${expanded.vision ? "rotate-180" : ""}`}
//                             xmlns="http://www.w3.org/2000/svg"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             stroke="currentColor"
//                         >
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
//                         </svg>
//                     </button>
//                 )}
//             </div>
//         </section>
//     );
// };

// export default CompanyInfo3;






// import { useEffect, useRef, useState } from "react";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";

// gsap.registerPlugin(ScrollTrigger);

// const CompanyInfo3 = () => {
//     const sectionsRef = useRef([]);
//     const [expanded, setExpanded] = useState({ vision: false });
//     const contentRefs = useRef({});

//     useEffect(() => {
//         sectionsRef.current.forEach((section) => {
//             gsap.fromTo(
//                 section,
//                 { opacity: 0, y: 50 },
//                 {
//                     opacity: 1,
//                     y: 0,
//                     duration: 1,
//                     ease: "power3.out",
//                     scrollTrigger: {
//                         trigger: section,
//                         start: "top 80%",
//                         toggleActions: "play none none reverse",
//                     },
//                 }
//             );
//         });
//     }, []);

//     const toggleExpand = (section) => {
//         setExpanded((prevState) => {
//             const isExpanded = !prevState[section];
//             if (contentRefs.current[section]) {
//                 gsap.to(contentRefs.current[section], {
//                     height: isExpanded ? "auto" : 0,
//                     opacity: isExpanded ? 1 : 0,
//                     duration: 0.5,
//                     ease: "power3.inOut",
//                 });
//             }
//             return { ...prevState, [section]: isExpanded };
//         });
//     };

//     // Slider settings for image carousel
//     const settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 3000,
//         arrows: true,
//     };

//     return (
//         <section className="py-12 mt-24">
//             {/* Image Carousel */}
//             <div className="carousel-container mb-10">
//                 <Slider {...settings}>
//                     <div>
//                         <img src="https://example.com/image1.jpg" alt="Image 1" className="w-full h-auto object-cover" />
//                     </div>
//                     <div>
//                         <img src="https://example.com/image2.jpg" alt="Image 2" className="w-full h-auto object-cover" />
//                     </div>
//                     <div>
//                         <img src="https://example.com/image3.jpg" alt="Image 3" className="w-full h-auto object-cover" />
//                     </div>
//                     {/* Add more images as needed */}
//                 </Slider>
//             </div>

//             {/* Our Vision Section */}
//             <div className="text-center mb-8" ref={(el) => (sectionsRef.current[0] = el)}>
//                 <h3 className="text-4xl font-bold text-gray-800">Our Vision</h3>
//                 <p className="text-lg text-gray-700 mt-4">
//                     We are Producing the high Quality HDPE Pipes, Fittings and Sprinkler Systems as Per IS 4984/14151.
//                     We manufacture HDPE Pipes from 20mm to 200mm in all pressure classes and grades as per international standards.
//                 </p>

//                 {/* Additional content with expand/collapse functionality */}
//                 <div
//                     className={`text-lg text-gray-700 mb-4 ${expanded.vision ? 'block' : 'hidden lg:block'}`}
//                     style={{ height: expanded.vision || window.innerWidth >= 1024 ? 'auto' : 0, opacity: expanded.vision || window.innerWidth >= 1024 ? 1 : 0 }}
//                     ref={(el) => (contentRefs.current.vision = el)}
//                 >
//                     <p>
//                         Our HDPE products are manufactured from high-grade HDPE polymers using state-of-the-art automated machinery. All our products undergo rigorous testing to ensure they meet the highest quality standards for durability and sustainability.
//                     </p>
//                 </div>

//                 {/* Toggle Expand Button */}
//                 {!expanded.vision && (
//                     <button
//                         onClick={() => toggleExpand("vision")}
//                         className="block lg:hidden flex items-center justify-center gap-2 py-2 px-6 bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-full hover:bg-blue-700 transition"
//                     >
//                         {expanded.vision ? "View Less" : "View More"}
//                         <svg
//                             className={`w-5 h-5 transition-transform duration-300 ${expanded.vision ? "rotate-180" : ""}`}
//                             xmlns="http://www.w3.org/2000/svg"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             stroke="currentColor"
//                         >
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
//                         </svg>
//                     </button>
//                 )}
//             </div>
//         </section>
//     );
// };

// export default CompanyInfo3;




// import { useEffect, useRef, useState } from "react";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";

// gsap.registerPlugin(ScrollTrigger);

// const CompanyInfo3 = () => {
//     const sectionsRef = useRef([]);
//     const [expanded, setExpanded] = useState({ vision: false });
//     const contentRefs = useRef({});

//     useEffect(() => {
//         sectionsRef.current.forEach((section) => {
//             gsap.fromTo(
//                 section,
//                 { opacity: 0, y: 50 },
//                 {
//                     opacity: 1,
//                     y: 0,
//                     duration: 1,
//                     ease: "power3.out",
//                     scrollTrigger: {
//                         trigger: section,
//                         start: "top 80%",
//                         toggleActions: "play none none reverse",
//                     },
//                 }
//             );
//         });
//     }, []);

//     const toggleExpand = (section) => {
//         setExpanded((prevState) => {
//             const isExpanded = !prevState[section];
//             if (contentRefs.current[section]) {
//                 gsap.to(contentRefs.current[section], {
//                     height: isExpanded ? "auto" : 0,
//                     opacity: isExpanded ? 1 : 0,
//                     duration: 0.5,
//                     ease: "power3.inOut",
//                 });
//             }
//             return { ...prevState, [section]: isExpanded };
//         });
//     };

//     const settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 3000,
//         arrows: true,
//     };

//     return (
//         <section className="py-12 mt-24">
//             {/* Subtitle Text Above Carousel */}
//             <div className="text-center mb-8">
//                 <p className="text-lg text-gray-600">Leading the Industry with Quality and Innovation</p>
//             </div>

//             {/* Image Carousel */}
//             <div className="carousel-container mb-10">
//                 <Slider {...settings}>
//                     <div>
//                         <img src="img4.jpg" alt="Image 1" className="w-full h-auto object-cover" />
//                     </div>
//                     <div>
//                         <img src="leo1.jpg" alt="Image 2" className="w-full h-auto object-cover" />
//                     </div>
//                     <div>
//                         <img src="leo2.jpg" alt="Image 3" className="w-full h-auto object-cover" />
//                     </div>
//                 </Slider>
//             </div>

//             {/* Main Content with Title and Video Section */}
//             <div className="text-center mb-8" ref={(el) => (sectionsRef.current[0] = el)}>
//                 {/* Title */}
//                 <h3 className="text-4xl font-bold text-gray-800 mb-4">Our Vision</h3>
                
//                 {/* Video Section */}
//                 <div className="mb-6 flex justify-center">
//                     <video autoPlay muted loop className="h-24 w-64">
//                         <source src="Vision.mp4" type="video/mp4" />
//                     </video>
//                 </div>

//                 {/* Main Description */}
//                 <p className="text-lg text-gray-700">
//                     We are Producing high-quality HDPE Pipes, Fittings, and Sprinkler Systems as per IS 4984/14151.
//                     We manufacture HDPE Pipes from 20mm to 200mm in all pressure classes and grades as per international standards.
//                 </p>

//                 {/* Additional content with expand/collapse functionality */}
//                 <div
//                     className={`text-lg text-gray-700 mb-4 ${expanded.vision ? 'block' : 'hidden lg:block'}`}
//                     style={{ height: expanded.vision || window.innerWidth >= 1024 ? 'auto' : 0, opacity: expanded.vision || window.innerWidth >= 1024 ? 1 : 0 }}
//                     ref={(el) => (contentRefs.current.vision = el)}
//                 >
//                     <p>
//                         Our HDPE products are manufactured from high-grade HDPE polymers using state-of-the-art automated machinery. All our products undergo rigorous testing to ensure they meet the highest quality standards for durability and sustainability.
//                     </p>
//                 </div>

//                 {/* Toggle Expand Button */}
//                 {!expanded.vision && (
//                     <button
//                         onClick={() => toggleExpand("vision")}
//                         className="block lg:hidden flex items-center justify-center gap-2 py-2 px-6 bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-full hover:bg-blue-700 transition"
//                     >
//                         {expanded.vision ? "View Less" : "View More"}
//                         <svg
//                             className={`w-5 h-5 transition-transform duration-300 ${expanded.vision ? "rotate-180" : ""}`}
//                             xmlns="http://www.w3.org/2000/svg"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             stroke="currentColor"
//                         >
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
//                         </svg>
//                     </button>
//                 )}
//             </div>
//         </section>
//     );
// };

// export default CompanyInfo3;




// import { useEffect, useRef, useState } from "react";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";

// gsap.registerPlugin(ScrollTrigger);

// const CompanyInfo3 = () => {
//     const sectionsRef = useRef([]);
//     const [expanded, setExpanded] = useState({ vision: false });
//     const contentRefs = useRef({});

//     useEffect(() => {
//         sectionsRef.current.forEach((section) => {
//             gsap.fromTo(
//                 section,
//                 { opacity: 0, y: 50 },
//                 {
//                     opacity: 1,
//                     y: 0,
//                     duration: 1,
//                     ease: "power3.out",
//                     scrollTrigger: {
//                         trigger: section,
//                         start: "top 80%",
//                         toggleActions: "play none none reverse",
//                     },
//                 }
//             );
//         });
//     }, []);

//     const toggleExpand = (section) => {
//         setExpanded((prevState) => {
//             const isExpanded = !prevState[section];
//             if (contentRefs.current[section]) {
//                 gsap.to(contentRefs.current[section], {
//                     height: isExpanded ? "auto" : 0,
//                     opacity: isExpanded ? 1 : 0,
//                     duration: 0.9,
//                     ease: "power3.inOut",
//                 });
//             }
//             return { ...prevState, [section]: isExpanded };
//         });
//     };

//     const settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 3000,
//         arrows: true,
//     };

//     return (
//         <section className="py-12 mt-24">
//             {/* Subtitle Text Above Carousel */}
//             <div className="text-center mb-8">
//                 <p className="text-lg text-gray-600">Leading the Industry with Quality and Innovation</p>
//             </div>

//             {/* Image Carousel */}
//             <div className="carousel-container mb-10">
//                 <Slider {...settings}>
//                     <div>
//                         <img
//                             src="img4.jpg"
//                             alt="Image 1"
//                             className="w-full h-full max-h-[600px] object-cover"
//                         />
//                     </div>
//                     <div>
//                         <img
//                             src="leo1.jpg"
//                             alt="Image 2"
//                             className="w-full h-full max-h-[600px] object-cover"
//                         />
//                     </div>
//                     <div>
//                         <img
//                             src="leo2.jpg"
//                             alt="Image 3"
//                             className="w-full h-full max-h-[600px] object-cover"
//                         />
//                     </div>
//                 </Slider>
//             </div>

//             {/* Main Content with Title and Video Section */}
//             <div className="text-center mb-8" ref={(el) => (sectionsRef.current[0] = el)}>
//                 {/* Title */}
//                 <h3 className="text-4xl font-bold text-gray-800 mb-4">Our Vision</h3>
                
//                 {/* Video Section */}
//                 <div className="mb-6 flex justify-center">
//                     <video autoPlay muted loop className="h-24 w-64">
//                         <source src="Vision.mp4" type="video/mp4" />
//                     </video>
//                 </div>

//                 {/* Main Description */}
//                 <p className="text-lg text-gray-700">
//                     We are Producing high-quality HDPE Pipes, Fittings, and Sprinkler Systems as per IS 4984/14151.
//                     We manufacture HDPE Pipes from 20mm to 200mm in all pressure classes and grades as per international standards.
//                 </p>

//                 {/* Additional content with expand/collapse functionality */}
//                 <div
//                     className={`text-lg text-gray-700 mb-4 ${expanded.vision ? 'block' : 'hidden lg:block'}`}
//                     style={{ height: expanded.vision || window.innerWidth >= 1024 ? 'auto' : 0, opacity: expanded.vision || window.innerWidth >= 1024 ? 1 : 0 }}
//                     ref={(el) => (contentRefs.current.vision = el)}
//                 >
//                     <p>
//                         Our HDPE products are manufactured from high-grade HDPE polymers using state-of-the-art automated machinery. All our products undergo rigorous testing to ensure they meet the highest quality standards for durability and sustainability.
//                     </p>
//                 </div>

//                 {/* Toggle Expand Button */}
//                 {!expanded.vision && (
//                     <button
//                         onClick={() => toggleExpand("vision")}
//                         className="block lg:hidden flex items-center justify-center gap-2 py-2 px-6 bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-full hover:bg-blue-700 transition"
//                     >
//                         {expanded.vision ? "View Less" : "View More"}
//                         <svg
//                             className={`w-5 h-5 transition-transform duration-300 ${expanded.vision ? "rotate-180" : ""}`}
//                             xmlns="http://www.w3.org/2000/svg"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             stroke="currentColor"
//                         >
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
//                         </svg>
//                     </button>
//                 )}
//             </div>
//         </section>
//     );
// };

// export default CompanyInfo3;
// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const CompanyInfo3 = () => {
//     const sectionsRef = useRef([]);

//     useEffect(() => {
//         sectionsRef.current.forEach((section) => {
//             gsap.fromTo(
//                 section,
//                 { opacity: 0, y: 50 },
//                 {
//                     opacity: 1,
//                     y: 0,
//                     duration: 1,
//                     ease: "power3.out",
//                     scrollTrigger: {
//                         trigger: section,
//                         start: "top 80%",
//                         toggleActions: "play none none reverse",
//                     },
//                 }
//             );
//         });
//     }, []);

//     return (
//         <section className="py-12 mt-24">
//             {/* Image and Text Section for Desktop */}
//             <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-8 mb-10">
//                 {/* Static Image Section */}
//                 <div className="image-container lg:w-1/2 w-full mb-6 lg:mb-0">
//                     <img
//                         src="img7.jpg"
//                         alt="HDPE Pipes and Fittings"
//                         className="w-full h-auto max-h-[600px] object-cover rounded-lg shadow-lg"
//                     />
//                 </div>

//                 {/* Text Section */}
//                 <div className="text-container lg:w-1/2 w-full text-gray-700">
//                     <h3 className="text-4xl font-bold text-blue-600 mb-4 lg:mt-0 px-5">Our Vision</h3>
//                     <p className="text-xl font-semibold mb-4 leading-relaxed px-10 py-5">
//                         Our HDPE products are manufactured from high-grade HDPE polymers using state-of-the-art
//                         automated machinery. All our products undergo rigorous testing to ensure they meet the
//                         highest quality standards for durability and sustainability.
//                     </p>
//                     <p className="leading-relaxed px-10 text-xl font-semibold">
//                         We produce high-quality HDPE Pipes, Fittings, and Sprinkler Systems as per IS 4984/14151.
//                         Our HDPE pipes range from 20mm to 200mm in diameter, covering all pressure classes and
//                         international grade standards, ensuring both quality and reliability in every product.
//                     </p>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default CompanyInfo3;



// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const CompanyInfo3 = () => {
//     const sectionsRef = useRef([]);

//     useEffect(() => {
//         sectionsRef.current.forEach((section) => {
//             gsap.fromTo(
//                 section,
//                 { opacity: 0, y: 50 },
//                 {
//                     opacity: 1,
//                     y: 0,
//                     duration: 1,
//                     ease: "power3.out",
//                     scrollTrigger: {
//                         trigger: section,
//                         start: "top 80%",
//                         toggleActions: "play none none reverse",
//                     },
//                 }
//             );
//         });
//     }, []);

//     return (
//         <section className="py-12 mt-24">
//             {/* Image and Text Section for Desktop */}
//             <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-8 mb-10">
//                 {/* Static Image Section */}
//                 <div className="image-container lg:w-1/2 w-full mb-6 lg:mb-0">
//                     <img
//                         src="img7.jpg"
//                         alt="HDPE Pipes and Fittings"
//                         className="w-full h-auto max-h-[600px] object-cover rounded-lg shadow-lg"
//                     />
//                 </div>

//                 {/* Text Section */}
//                 <div className="text-container lg:w-1/2 w-full text-gray-700">
//                     <h3 className="text-4xl font-bold text-blue-600 mb-4 lg:mt-0 px-5">Our Vision</h3>
//                     <p className="text-xl font-semibold mb-4 leading-relaxed px-10 py-5">
//                         Our vision is to be a leading provider of high-quality piping solutions, delivering products that meet the diverse needs of agriculture, industrial, and domestic sectors. Through innovation, precision, and sustainability, we aim to enhance efficiency in water management and distribution systems, enabling communities and industries to benefit from reliable, durable, and environmentally-friendly piping products.
//                     </p>
//                     <p className="leading-relaxed px-10 text-xl font-semibold">
//                         By producing HDPE, uPVC, and PVC piping systems, we empower farmers with efficient, water-saving irrigation solutions, including our durable and maintenance-free sprinkler systems. Our products are designed to withstand varying weather conditions, resist corrosion, and ensure smooth flow for efficient water distribution. Our commitment to rigorous quality control means each product aligns with international standards, promising safety, performance, and longevity.
//                     </p>
//                     <p className="leading-relaxed px-10 text-xl font-semibold">
//                         We envision a future where our piping systems support sustainable growth, reduce labor requirements, and conserve resources, ultimately contributing to more resilient agricultural, industrial, and domestic infrastructure. Through continuous improvement and the adoption of cutting-edge manufacturing technologies, we aspire to make dependable piping solutions accessible to all, meeting the highest standards of quality and reliability.
//                     </p>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default CompanyInfo3;




// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const CompanyInfo3 = () => {
//     const sectionsRef = useRef([]);

//     useEffect(() => {
//         sectionsRef.current.forEach((section) => {
//             gsap.fromTo(
//                 section,
//                 { opacity: 0, y: 50 },
//                 {
//                     opacity: 1,
//                     y: 0,
//                     duration: 1,
//                     ease: "power3.out",
//                     scrollTrigger: {
//                         trigger: section,
//                         start: "top 80%",
//                         toggleActions: "play none none reverse",
//                     },
//                 }
//             );
//         });
//     }, []);

//     return (
//         <section className="py-12 mt-24">
//             {/* Image and Text Section for Desktop */}
//             <div className="flex flex-col lg:flex-row items-center lg:space-x-8 mb-10 h-full">
//                 {/* Image Section */}
//                 <div className="lg:w-1/2 w-full mb-6 lg:mb-0 h-full">
//                     <img
//                         src="img7.jpg"
//                         alt="HDPE Pipes and Fittings"
//                         className="w-full h-full object-cover rounded-lg shadow-lg"
//                     />
//                 </div>

//                 {/* Text Section */}
//                 <div className="text-container lg:w-1/2 w-full text-gray-700">
//                     <h3 className="text-4xl font-bold text-blue-600 mb-4 lg:mt-0 px-5">Our Vision</h3>
//                     <p className="text-xl font-semibold mb-4 leading-relaxed px-10 py-5">
//                         Our vision is to be a leading provider of high-quality piping solutions, delivering products that meet the diverse needs of agriculture, industrial, and domestic sectors. Through innovation, precision, and sustainability, we aim to enhance efficiency in water management and distribution systems, enabling communities and industries to benefit from reliable, durable, and environmentally-friendly piping products.
//                     </p>
//                     <p className="leading-relaxed px-10 text-xl font-semibold">
//                         By producing HDPE, uPVC, and PVC piping systems, we empower farmers with efficient, water-saving irrigation solutions, including our durable and maintenance-free sprinkler systems. Our products are designed to withstand varying weather conditions, resist corrosion, and ensure smooth flow for efficient water distribution. Our commitment to rigorous quality control means each product aligns with international standards, promising safety, performance, and longevity.
//                     </p>
//                     <p className="leading-relaxed px-10 text-xl font-semibold">
//                         We envision a future where our piping systems support sustainable growth, reduce labor requirements, and conserve resources, ultimately contributing to more resilient agricultural, industrial, and domestic infrastructure. Through continuous improvement and the adoption of cutting-edge manufacturing technologies, we aspire to make dependable piping solutions accessible to all, meeting the highest standards of quality and reliability.
//                     </p>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default CompanyInfo3;


import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CompanyInfo3 = () => {
    const textRef = useRef([]);

    useEffect(() => {
        // Animate each paragraph with fade-in and upward motion
        textRef.current.forEach((paragraph) => {
            gsap.fromTo(
                paragraph,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: paragraph,
                        start: "top 80%",
                        toggleActions: "play none none reverse",
                    },
                }
            );
        });
    }, []);

    return (
        <section className="py-12 mt-24">
            {/* Image and Text Section for Desktop */}
            <div className="flex flex-col lg:flex-row items-center lg:space-x-8 mb-10 h-full">
                {/* Image Section */}
                <div className="lg:w-1/2 w-full mb-6 lg:mb-0 h-full">
                    <img
                        src="img7.jpg"
                        alt="HDPE Pipes and Fittings"
                        className="w-full h-full object-cover rounded-lg shadow-lg"
                    />
                </div>

                {/* Text Section */}
                <div className="text-container lg:w-1/2 w-full text-gray-700">
                    <h3 className="text-4xl font-bold text-blue-600 mb-4 lg:mt-0 px-5">Our Vision</h3>
                    <p
                        ref={(el) => (textRef.current[0] = el)}
                        className="text-xl font-semibold mb-4 leading-relaxed px-10 py-5"
                    >
                        Our vision is to be a leading provider of high-quality piping solutions, delivering products that meet the diverse needs of agriculture, industrial, and domestic sectors.
                    </p>
                    <p
                        ref={(el) => (textRef.current[1] = el)}
                        className="leading-relaxed px-10 text-xl font-semibold"
                    >
                        By producing HDPE, uPVC, and PVC piping systems, we empower farmers with efficient, water-saving irrigation solutions, including our durable and maintenance-free sprinkler systems.
                    </p>
                    <p
                        ref={(el) => (textRef.current[2] = el)}
                        className="leading-relaxed px-10 text-xl font-semibold"
                    >
                        We envision a future where our piping systems support sustainable growth, reduce labor requirements, and conserve resources, ultimately contributing to more resilient infrastructure.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default CompanyInfo3;
