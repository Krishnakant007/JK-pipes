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


import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CompanyInfo3 = () => {
    const sectionsRef = useRef([]);
    const [expanded, setExpanded] = useState({ vision: false });
    const contentRefs = useRef({});

    useEffect(() => {
        sectionsRef.current.forEach((section) => {
            gsap.fromTo(
                section,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: section,
                        start: "top 80%",
                        toggleActions: "play none none reverse",
                    },
                }
            );
        });
    }, []);

    const toggleExpand = (section) => {
        setExpanded((prevState) => {
            const isExpanded = !prevState[section];

            if (contentRefs.current[section]) {
                gsap.to(contentRefs.current[section], {
                    height: isExpanded ? "auto" : 0,
                    opacity: isExpanded ? 1 : 0,
                    duration: 0.5,
                    ease: "power3.inOut",
                });
            }

            return { ...prevState, [section]: isExpanded };
        });
    };

    return (
        <section
            className="py-12 px-8 bg-cover bg-center mt-40"
            style={{
                backgroundImage: `url('https://r4you.org.il/wp-content/uploads/2017/11/shutterstock_584242033.jpg')`,
            }}
        >
            {/* Product Usage Section */}
            <div className="text-center mb-10" ref={(el) => (sectionsRef.current[0] = el)}>
                <div className="flex justify-center items-center gap-6 flex-wrap">
                    {/* Add your product usage logos here */}
                </div>
            </div>

            {/* Our Vision */}
            <div className="bg-white/90 rounded-xl p-6 mb-8 shadow-xl" ref={(el) => (sectionsRef.current[1] = el)}>
                <div className="mb-10 flex justify-center">
                    <video autoPlay muted loop className="h-24 w-64">
                        <source src="Vision.mp4" type="video/mp4" />
                    </video>
                </div>
                <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
                <p className="text-lg text-gray-700 mb-4">
                    We strive to lead the industry by providing innovative and sustainable solutions that meet the
                    highest standards...
                </p>

                {/* Additional content visible on larger screens or with 'View More' on mobile */}
                <div
                    className={`text-lg text-gray-700 mb-4 ${expanded.vision ? 'block' : 'hidden lg:block'}`}
                    style={{ height: expanded.vision || window.innerWidth >= 1024 ? 'auto' : 0, opacity: expanded.vision || window.innerWidth >= 1024 ? 1 : 0 }}
                    ref={(el) => (contentRefs.current.vision = el)}
                >
                    <p>
                        Our vision is to continuously evolve and enhance our products to create a lasting impact on our
                        community and environment...
                    </p>
                </div>

                {/* Show More button for mobile screens only */}
                {!expanded.vision && (
                    <button
                        onClick={() => toggleExpand("vision")}
                        className="block lg:hidden flex items-center justify-center gap-2 py-2 px-6 bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-full hover:bg-blue-700 transition"
                    >
                        {expanded.vision ? "View Less" : "View More"}
                        <svg
                            className={`w-5 h-5 transition-transform duration-300 ${expanded.vision ? "rotate-180" : ""}`}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                )}
            </div>
        </section>
    );
};

export default CompanyInfo3;
