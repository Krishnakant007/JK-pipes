// import React, { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';

// const PVCProductScreen = () => {
//     const products = [
//         {
//             name: "JK PVC Pipe",
//             price: "₹ 470/ Piece",
//             usage: "Agricultural",
//             material: "PVC",
//             thickness: "2 mm",
//             size: "Other",
//             length: "6 m",
//             workingPressure: "4 Kg/sqcm",
//             pipeClass: "Schedule 40",
//             pipeJointType: "Sol fit",
//         },
//         {
//             name: "PVC Drainage Pipe",
//             price: "₹ 350/ Piece",
//             material: "PVC",
//             size: "110 mm",
//             length: "6 m",
//             brand: "JK",
//             pipeType: "Type A",
//             pipeJointType: "Sol fit",
//             usage: "Plumbing",
//             color: "Grey",
//             origin: "Made in India",
//         },
//         {
//             name: "Rigid PVC Pipe",
//             price: "₹ 900/ Piece",
//             usage: "Agricultural",
//             size: "90 mm",
//             length: "6 m",
//             workingPressure: "4 Kg/sqcm",
//             pipeClass: "Schedule 40",
//             origin: "Made in India",
//         },
//         {
//             name: "Irrigation PVC Pipe",
//             price: "₹ 470/ Piece",
//             usage: "Agricultural",
//             length: "6 m",
//             workingPressure: "2.5 Kg/sqcm",
//             pipeClass: "Schedule 40",
//             pipeJointType: "Ring fit/ Push fit",
//         },
//         {
//             name: "160mm PVC Pipe",
//             price: "₹ 478/ Piece",
//             brand: "JK",
//             usage: "Agricultural",
//             material: "PVC",
//             thickness: "2 mm",
//             size: "160 mm",
//             length: "6 m",
//             workingPressure: "4 Kg/sqcm",
//             pipeClass: "Schedule 40",
//             pipeJointType: "Sol fit",
//         },
//         {
//             name: "75MM PVC Pipe",
//             price: "₹ 625/ Piece",
//             usage: "Agricultural",
//             material: "PVC",
//             thickness: "2 mm",
//             size: "75 mm",
//             length: "6 m",
//             workingPressure: "4 Kg/sqcm",
//             pipeClass: "Schedule 40",
//         },
//         {
//             name: "White PVC Pipe",
//             price: "₹ 790/ Piece",
//             material: "PVC",
//             size: "3 inch",
//             brand: "JK",
//             unitPipeLength: "6 meter",
//             shape: "Round",
//             color: "Grey",
//             origin: "Made in India",
//         },
//         {
//             name: "110Mm PVC Pipe",
//             price: "₹ 1,300/ Piece",
//             brand: "Other",
//             usage: "Agricultural",
//             size: "110 mm",
//             length: "6 m",
//             workingPressure: "4 Kg/sqcm",
//             pipeClass: "Schedule 40",
//             pipeJointType: "Sol fit",
//             color: "Other",
//             origin: "Made in India",
//         },
//         {
//             name: "Hollow PVC Pipe",
//             price: "₹ 480/ Piece",
//             brand: "JK",
//             material: "PVC",
//             size: "180 mm",
//             length: "6 m",
//             pipeType: "Type A",
//             pipeJointType: "Ring fit/ Push fit",
//             usage: "Utilities Water",
//             color: "Grey",
//             origin: "Made in India",
//         },
//         {
//             name: "Grey PVC Pipe",
//             price: "₹ 450/ Piece",
//             material: "PVC",
//             size: "200 mm",
//             length: "6 m",
//             pipeType: "Type A",
//             pipeJointType: "Ring fit/ Push fit",
//             usage: "Utilities Water",
//             color: "Grey",
//             origin: "Made in India",
//         },
//     ];

//     const cardRefs = useRef([]);
//     const imageRefs = useRef([]);
//     const textRefs = useRef([]);

//     useEffect(() => {
//         cardRefs.current.forEach((card, index) => {
//             gsap.fromTo(card, { opacity: 0, y: 50 }, { opacity: 1, y: 0, delay: index * 0.2, duration: 1 });
//         });

//         imageRefs.current.forEach((image, index) => {
//             gsap.fromTo(image, { scale: 0.8 }, { scale: 1, delay: index * 0.2, duration: 1, ease: 'power3.out' });
//         });

//         textRefs.current.forEach((text, index) => {
//             gsap.fromTo(text, { opacity: 0, y: 30 }, { opacity: 1, y: 0, delay: index * 0.3, duration: 1, ease: 'power3.out' });
//         });
//     }, []);

//     return (
//         <div className="py-12 px-8 bg-slate-200 min-h-screen">
//             <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">PVC Pipes</h2>
//             <p className="text-center mb-12 text-lg text-gray-600">Explore our PVC pipe selection for diverse applications:</p>

//             <div className="grid gap-8 max-w-4xl mx-auto">
//                 {products.map((product, index) => (
//                     <div
//                         key={index}
//                         ref={(el) => (cardRefs.current[index] = el)}
//                         className="p-8 border rounded-xl shadow-lg bg-white hover:shadow-2xl transition duration-300 ease-in-out"
//                     >
//                         <div ref={(el) => (textRefs.current[index] = el)}>
//                             <h3 className="text-2xl font-semibold mb-2 text-gray-800">{product.name}</h3>
//                             <p className="text-xl font-bold text-blue-600 mb-4">{product.price}</p>
//                         </div>

//                         <div className="border-t pt-4 mt-4">
//                             <table className="w-full text-left text-gray-700">
//                                 <tbody>
//                                     <tr className="border-b">
//                                         <td className="py-2 font-semibold">Usage/Application</td>
//                                         <td className="py-2">{product.usage}</td>
//                                     </tr>
//                                     <tr className="border-b">
//                                         <td className="py-2 font-semibold">Material</td>
//                                         <td className="py-2">{product.material}</td>
//                                     </tr>
//                                     <tr className="border-b">
//                                         <td className="py-2 font-semibold">Thickness</td>
//                                         <td className="py-2">{product.thickness}</td>
//                                     </tr>
//                                     <tr className="border-b">
//                                         <td className="py-2 font-semibold">Size/Diameter</td>
//                                         <td className="py-2">{product.size}</td>
//                                     </tr>
//                                     <tr className="border-b">
//                                         <td className="py-2 font-semibold">Length of Pipe</td>
//                                         <td className="py-2">{product.length}</td>
//                                     </tr>
//                                     <tr className="border-b">
//                                         <td className="py-2 font-semibold">Working Pressure</td>
//                                         <td className="py-2">{product.workingPressure}</td>
//                                     </tr>
//                                     <tr className="border-b">
//                                         <td className="py-2 font-semibold">Pipe Class</td>
//                                         <td className="py-2">{product.pipeClass}</td>
//                                     </tr>
//                                     <tr className="border-b">
//                                         <td className="py-2 font-semibold">Pipe Joint Type</td>
//                                         <td className="py-2">{product.pipeJointType}</td>
//                                     </tr>
//                                     <tr className="border-b">
//                                         <td className="py-2 font-semibold">Color</td>
//                                         <td className="py-2">{product.color}</td>
//                                     </tr>
//                                     <tr className="border-b">
//                                         <td className="py-2 font-semibold">Country of Origin</td>
//                                         <td className="py-2">{product.origin}</td>
//                                     </tr>
//                                 </tbody>
//                             </table>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default PVCProductScreen;





// const PVCProductScreen = () => {
//     const products = [
//         {
//             name: "JK PVC Pipe",
//             price: "₹ 470/ Piece",
//             usage: "Agricultural",
//             material: "PVC",
//             thickness: "2 mm",
//             diameter: "Other",
//             length: "6 m",
//             workingPressure: "4 Kg/sqcm",
//             pipeClass: "Schedule 40",
//             jointType: "Sol fit",
//             imageUrl: "/images/jk-pvc-pipe.webp",
//         },
//         {
//             name: "PVC Drainage Pipe",
//             price: "₹ 350/ Piece",
//             material: "PVC",
//             diameter: "110 mm",
//             length: "6 m",
//             brand: "JK",
//             type: "Type A",
//             jointType: "Sol fit",
//             usage: "Plumbing",
//             color: "Grey",
//             origin: "Made in India",
//             imageUrl: "/images/PvcDrainagePipe.webp",
//         },
       
        
     
//     {
//         "name": "Rigid PVC Pipe",
//         "price": "₹ 900/ Piece",
//         "usage": "Agricultural",
//         "size": "90 mm",
//         "length": "6 m",
//         "workingPressure": "4 Kg/sqcm",
//         "pipeClass": "Schedule 40",
//         "origin": "Made in India",
//         "imageUrl": "/images/RigidPvcPipe.webp"
//     },
//     {
//         "name": "Irrigation PVC Pipe",
//         "price": "₹ 470/ Piece",
//         "usage": "Agricultural",
//         "length": "6 m",
//         "workingPressure": "2.5 Kg/sqcm",
//         "pipeClass": "Schedule 40",
//         "pipeJointType": "Ring fit/ Push fit",
//         "imageUrl": "/images/IrrigationPvcPipe.webp"
//     },
//     {
//         "name": "160mm PVC Pipe",
//         "price": "₹ 478/ Piece",
//         "brand": "JK",
//         "usage": "Agricultural",
//         "material": "PVC",
//         "thickness": "2 mm",
//         "size": "160 mm",
//         "length": "6 m",
//         "workingPressure": "4 Kg/sqcm",
//         "pipeClass": "Schedule 40",
//         "pipeJointType": "Sol fit",
//         "imageUrl": "/images/160mmPvcPipe.webp"
//     },
//     {
//         "name": "75MM PVC Pipe",
//         "price": "₹ 625/ Piece",
//         "brand": "Other",
//         "usage": "Agricultural",
//         "material": "PVC",
//         "thickness": "2 mm",
//         "size": "Other",
//         "length": "6 m",
//         "workingPressure": "4 Kg/sqcm",
//         "pipeClass": "Schedule 40",
//         "imageUrl": "/images/75mmPvcPipe.webp"
//     },
//     {
//         "name": "White PVC Pipe",
//         "price": "₹ 790/ Piece",
//         "material": "PVC",
//         "size": "200 mm",
//         "length": "6 m",
//         "pipeType": "Type A",
//         "pipeJointType": "Ring fit/ Push fit",
//         "usage": "Utilities Water",
//         "color": "Grey",
//         "origin": "Made in India",
//         "imageUrl": "/images/WhitePvcPipe.webp"
//     },
//     {
//         "name": "PVC Round Pipe",
//         "price": "₹ 900/ Piece",
//         "material": "PVC",
//         "size": "3 inch",
//         "brand": "JK",
//         "unitLength": "6 meter",
//         "shape": "Round (Head)",
//         "color": "Grey",
//         "origin": "Made in India",
//         "imageUrl": "/images/PvcRoundPipe.webp"
//     },
//     {
//         "name": "110Mm PVC Pipe",
//         "price": "₹ 1,300/ Piece",
//         "brand": "Other",
//         "usage": "Agricultural",
//         "size": "110 mm",
//         "length": "6 m",
//         "workingPressure": "4 Kg/sqcm",
//         "pipeClass": "Schedule 40",
//         "pipeJointType": "Sol fit",
//         "color": "Other",
//         "origin": "Made in India",
//         "imageUrl": "/images/110mmPvcPipe.webp"
//     },
//     {
//         "name": "Hollow PVC Pipe",
//         "price": "₹ 480/ Piece",
//         "brand": "JK",
//         "material": "PVC",
//         "size": "180 mm",
//         "length": "6 m",
//         "pipeType": "Type A",
//         "pipeJointType": "Ring fit/ Push fit",
//         "usage": "Utilities Water",
//         "color": "Grey",
//         "origin": "Made in India",
//         "imageUrl": "/images/HollowPvcPipe.webp"
//     },
//     {
//         "name": "Grey PVC Pipe",
//         "price": "₹ 450/ Piece",
//         "material": "PVC",
//         "size": "200 mm",
//         "length": "6 m",
//         "pipeType": "Type A",
//         "pipeJointType": "Ring fit/ Push fit",
//         "usage": "Utilities Water",
//         "color": "Grey",
//         "origin": "Made in India",
//         "imageUrl": "/images/GreyPvcPipe.webp"
//     }
//     ];

//     return (
//         <div className="py-12 px-8 bg-slate-200 min-h-screen">
//             <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">PVC Pipes</h2>
//             <p className="text-center mb-12 text-lg text-gray-600">Explore our high-quality selection of PVC pipes:</p>

//             <div className="grid gap-8 max-w-4xl mx-auto">
//                 {products.map((product, index) => (
//                     <div key={index} className="p-8 border rounded-xl shadow-lg bg-white hover:shadow-2xl transition duration-300 ease-in-out">
//                         <div className="w-full h-48 flex items-center justify-center mb-4 border-b pb-4">
//                             <img
//                                 src={product.imageUrl}
//                                 alt={product.name}
//                                 className="max-h-full max-w-full object-contain rounded-lg"
//                             />
//                         </div>
                        
//                         <h3 className="text-2xl font-semibold mb-2 text-gray-800">{product.name}</h3>
//                         <p className="text-xl font-bold text-blue-600 mb-4">{product.price}</p>

//                         <table className="w-full text-left text-gray-700">
//                             <tbody>
//                                 {Object.entries(product).map(([key, value]) => (
//                                     key !== "name" && key !== "price" && key !== "imageUrl" && (
//                                         <tr className="border-b" key={key}>
//                                             <td className="py-2 font-semibold capitalize">{key.replace(/([A-Z])/g, ' $1')}</td>
//                                             <td className="py-2">{value}</td>
//                                         </tr>
//                                     )
//                                 ))}
//                             </tbody>
//                         </table>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default PVCProductScreen;





import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import RatingCarousel from "../components/RatingCarousel";
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const PVCProductScreen = () => {
    const navigate = useNavigate();
    const [showBackButton, setShowBackButton] = useState(false);

    // Scroll to top when component mounts
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const header = document.getElementById('header'); // Assuming the header has an id="header"
            const scrollY = window.scrollY;

            // Show the back button if header is not present or if the scroll position is past the header height
            if (!header || scrollY > header.clientHeight) {
                setShowBackButton(true);
            } else {
                setShowBackButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check for header presence on load
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const products = [
        {
            name: "JK PVC Pipe",
            price: "₹ 470/ Piece",
            usage: "Agricultural",
            material: "PVC",
            thickness: "2 mm",
            diameter: "Other",
            length: "6 m",
            workingPressure: "4 Kg/sqcm",
            pipeClass: "Schedule 40",
            jointType: "Sol fit",
            imageUrl: "/images/jk-pvc-pipe.webp",
        },
        {
            name: "PVC Drainage Pipe",
            price: "₹ 350/ Piece",
            material: "PVC",
            diameter: "110 mm",
            length: "6 m",
            brand: "JK",
            type: "Type A",
            jointType: "Sol fit",
            usage: "Plumbing",
            color: "Grey",
            origin: "Made in India",
            imageUrl: "/images/PvcDrainagePipe.webp",
        },
       
        
     
    {
        "name": "Rigid PVC Pipe",
        "price": "₹ 900/ Piece",
        "usage": "Agricultural",
        "size": "90 mm",
        "length": "6 m",
        "workingPressure": "4 Kg/sqcm",
        "pipeClass": "Schedule 40",
        "origin": "Made in India",
        "imageUrl": "/images/RigidPvcPipe.webp"
    },
    {
        "name": "Irrigation PVC Pipe",
        "price": "₹ 470/ Piece",
        "usage": "Agricultural",
        "length": "6 m",
        "workingPressure": "2.5 Kg/sqcm",
        "pipeClass": "Schedule 40",
        "pipeJointType": "Ring fit/ Push fit",
        "imageUrl": "/images/IrrigationPvcPipe.webp"
    },
    {
        "name": "160mm PVC Pipe",
        "price": "₹ 478/ Piece",
        "brand": "JK",
        "usage": "Agricultural",
        "material": "PVC",
        "thickness": "2 mm",
        "size": "160 mm",
        "length": "6 m",
        "workingPressure": "4 Kg/sqcm",
        "pipeClass": "Schedule 40",
        "pipeJointType": "Sol fit",
        "imageUrl": "/images/160mmPvcPipe.webp"
    },
    {
        "name": "75MM PVC Pipe",
        "price": "₹ 625/ Piece",
        "brand": "JK",
        "usage": "Agricultural",
        "material": "PVC",
        "thickness": "2 mm",
        "size": "Other",
        "length": "6 m",
        "workingPressure": "4 Kg/sqcm",
        "pipeClass": "Schedule 40",
        "imageUrl": "/images/75mmPvcPipe.webp"
    },
    {
        "name": "White PVC Pipe",
        "price": "₹ 790/ Piece",
        "material": "PVC",
        "size": "200 mm",
        "length": "6 m",
        "pipeType": "Type A",
        "pipeJointType": "Ring fit/ Push fit",
        "usage": "Utilities Water",
        "color": "Grey",
        "origin": "Made in India",
        "imageUrl": "/images/WhitePvcPipe.webp"
    },
    {
        "name": "PVC Round Pipe",
        "price": "₹ 900/ Piece",
        "material": "PVC",
        "size": "3 inch",
        "brand": "JK",
        "unitLength": "6 meter",
        "shape": "Round (Head)",
        "color": "Grey",
        "origin": "Made in India",
        "imageUrl": "/images/PvcRoundPipe.webp"
    },
    {
        "name": "110Mm PVC Pipe",
        "price": "₹ 1,300/ Piece",
        "brand": "JK ",
        "usage": "Agricultural",
        "size": "110 mm",
        "length": "6 m",
        "workingPressure": "4 Kg/sqcm",
        "pipeClass": "Schedule 40",
        "pipeJointType": "Sol fit",
        "color": "Other",
        "origin": "Made in India",
        "imageUrl": "/images/110mmPvcPipe.webp"
    },
    {
        "name": "Hollow PVC Pipe",
        "price": "₹ 480/ Piece",
        "brand": "JK",
        "material": "PVC",
        "size": "180 mm",
        "length": "6 m",
        "pipeType": "Type A",
        "pipeJointType": "Ring fit/ Push fit",
        "usage": "Utilities Water",
        "color": "Grey",
        "origin": "Made in India",
        "imageUrl": "/images/HollowPvcPipe.webp"
    },
    {
        "name": "Grey PVC Pipe",
        "price": "₹ 450/ Piece",
        "material": "PVC",
        "size": "200 mm",
        "length": "6 m",
        "pipeType": "Type A",
        "pipeJointType": "Ring fit/ Push fit",
        "usage": "Utilities Water",
        "color": "Grey",
        "origin": "Made in India",
        "imageUrl": "/images/GreyPvcPipe.webp"
    }
    ];

    useEffect(() => {
        // GSAP animation for scrolling
        const cards = gsap.utils.toArray(".product-card");

        cards.forEach((card) => {
            gsap.fromTo(
                card,
                { y: 50, opacity: 0 }, // Start from bottom with opacity 0
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.5,
                    scrollTrigger: {
                        trigger: card,
                        start: "top 75%", // When the top of the card reaches 75% of the viewport height
                        toggleActions: "play none none reverse", // Play on enter, reverse on leave
                        once: true // Animation occurs only once
                    }
                }
            );
        });
    }, []);

    return (
        <div className="py-12 px-8 bg-slate-200 min-h-screen">
            {showBackButton && (
                <button 
                    onClick={() => navigate(-1)}
                    className="fixed top-4 left-4 bg-black text-white text-lg font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 ease-in-out z-50"
                >
                    ← Back
                </button>
            )}
            <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">PVC Pipes</h2>
            <p className="text-center mb-12 text-lg text-gray-600">Explore our high-quality selection of PVC pipes:</p>

            <div className="grid gap-8 max-w-4xl mx-auto">
                {products.map((product, index) => (
                    <div key={index} className="product-card p-8 border rounded-xl shadow-lg bg-white hover:shadow-2xl transition duration-300 ease-in-out">
                        <div className="w-full h-48 flex items-center justify-center mb-4 border-b pb-4">
                            <img 
                                src={product.imageUrl} 
                                alt={product.name} 
                                className="max-h-full max-w-full object-contain rounded-lg" 
                            />
                        </div>
                        
                        <h3 className="text-2xl font-semibold mb-2 text-gray-800">{product.name}</h3>
                        <p className="text-xl font-bold text-blue-600 mb-4">{product.price}</p>

                        <table className="w-full text-left text-gray-700">
                            <tbody>
                                {Object.entries(product).map(([key, value]) => (
                                    key !== "name" && key !== "price" && key !== "imageUrl" && (
                                        <tr className="border-b" key={key}>
                                            <td className="py-2 font-semibold capitalize">{key.replace(/([A-Z])/g, ' $1')}</td>
                                            <td className="py-2">{value}</td>
                                        </tr>
                                    )
                                ))}
                            </tbody>
                        </table>
                    </div>
                ))}
                <div className="fixed bottom-4 right-4">
                <a 
                    href="https://wa.me/919405799633" // Replace 'your-number' with your WhatsApp number
                    className="bg-green-500 text-white text-lg font-semibold px-4 py-3 rounded-full shadow-lg hover:bg-green-600 transition duration-300 ease-in-out"
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    💬 Chat on WhatsApp
                </a>
            </div>

            </div>
            <RatingCarousel />
        </div>
    );
};

export default PVCProductScreen;
