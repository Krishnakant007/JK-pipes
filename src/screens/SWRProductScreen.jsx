// const SWRProductScreen = () => {
//     const products = [
//         {
//             name: "JK SWR Pipe",
//             price: "₹ 88/ Meter",
//             material: "PVC",
//             size: "75 mm",
//             length: "6 m",
//             brand: "JK",
//             type: "Type A",
//             jointType: "Ring fit/ Push fit",
//             usage: "Agriculture",
//             color: "Grey",
//             origin: "Made in India",
//             imageUrl: "/images/Jkswrpipe.webp",
//         },
//         {
//             name: "SWR Pushfit Pipe",
//             price: "₹ 165/ Meter",
//             material: "PVC",
//             size: "110 mm",
//             length: "6 m",
//             brand: "JK",
//             type: "Type A",
//             jointType: "Ring fit/ Push fit",
//             color: "Grey",
//             origin: "Made in India",
//             features: "Superlative performance, High durability",
//             imageUrl: "/images/SWRPushfitPipe2.webp",
//         },
//         {
//             name: "PVC SWR Pipe",
//             price: "₹ 370/ Meter",
//             material: "PVC",
//             size: "160 mm",
//             length: "6 m",
//             brand: "JK",
//             type: "Type A",
//             jointType: "Ring fit/ Push fit",
//             thickness: "3 mm",
//             color: "White",
//             origin: "Made in India",
//             imageUrl: "/images/PvcSwrPipe2.webp",
//         },
//         {
//             name: "SWR Ring Fit Pipe",
//             price: "₹ 550/ Piece",
//             material: "PVC",
//             size: "200 mm",
//             length: "6 m",
//             brand: "JK",
//             jointType: "Ring fit/ Push fit",
//             color: "White",
//             origin: "Made in India",
//             imageUrl: "/images/SwrRingFItPipe.webp",
//         },
//     ];

//     return (
//         <div className="py-12 px-8 bg-slate-400 h-full">
//             <h2 className="text-3xl font-bold text-center mb-8">SWR Pipes</h2>
//             <p className="text-center mb-6">Detailed information about our SWR Pipes selection:</p>

//             <div className="grid gap-8 max-w-4xl mx-auto">
//                 {products.map((product, index) => (
//                     <div key={index} className="p-6 border rounded-xl shadow-lg bg-white hover:shadow-2xl transition duration-300 ease-in-out">
//                         <div className="w-full h-48 flex items-center justify-center mb-4">
//                             <img
//                                 src={product.imageUrl}
//                                 alt={product.name}
//                                 className="max-h-full max-w-full object-contain rounded-lg"
//                             />
//                         </div>
//                         <h3 className="text-2xl font-semibold mb-2">{product.name}</h3>
//                         <p className="text-xl font-bold text-blue-600 mb-4">{product.price}</p>
//                         <ul className="text-gray-700 space-y-1">
//                             <li><strong>Material:</strong> {product.material}</li>
//                             <li><strong>Size/Diameter:</strong> {product.size}</li>
//                             <li><strong>Length of Pipe:</strong> {product.length}</li>
//                             <li><strong>Brand:</strong> {product.brand}</li>
//                             {product.type && <li><strong>Pipe Type:</strong> {product.type}</li>}
//                             <li><strong>Pipe Joint Type:</strong> {product.jointType}</li>
//                             {product.usage && <li><strong>Usage/Application:</strong> {product.usage}</li>}
//                             <li><strong>Color:</strong> {product.color}</li>
//                             <li><strong>Country of Origin:</strong> {product.origin}</li>
//                             {product.features && <li><strong>Features:</strong> {product.features}</li>}
//                             {product.thickness && <li><strong>Thickness:</strong> {product.thickness}</li>}
//                         </ul>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default SWRProductScreen;



// import React from 'react';

// const SWRProductScreen = () => {
//     const products = [
//         {
//             name: "JK SWR Pipe",
//             price: "₹ 88/ Meter",
//             material: "PVC",
//             size: "75 mm",
//             length: "6 m",
//             brand: "JK",
//             type: "Type A",
//             jointType: "Ring fit/ Push fit",
//             usage: "Agriculture",
//             color: "Grey",
//             origin: "Made in India",
//             imageUrl: "/images/Jkswrpipe.webp",
//             description: "Durable SWR pipe with a secure ring fit for agriculture.",
//         },
//         {
//             name: "SWR Pushfit Pipe",
//             price: "₹ 165/ Meter",
//             material: "PVC",
//             size: "110 mm",
//             length: "6 m",
//             brand: "JK",
//             type: "Type A",
//             jointType: "Ring fit/ Push fit",
//             color: "Grey",
//             origin: "Made in India",
//             features: "Superlative performance, High durability",
//             imageUrl: "/images/SWRPushfitPipe2.webp",
//             description: "High-performance pushfit pipe, ideal for robust installations.",
//         },
//         {
//             name: "PVC SWR Pipe",
//             price: "₹ 370/ Meter",
//             material: "PVC",
//             size: "160 mm",
//             length: "6 m",
//             brand: "JK",
//             type: "Type A",
//             jointType: "Ring fit/ Push fit",
//             thickness: "3 mm",
//             color: "White",
//             origin: "Made in India",
//             imageUrl: "/images/PvcSwrPipe2.webp",
//             description: "Premium PVC SWR pipe with a long-lasting build for drainage systems.",
//         },
//         {
//             name: "SWR Ring Fit Pipe",
//             price: "₹ 550/ Piece",
//             material: "PVC",
//             size: "200 mm",
//             length: "6 m",
//             brand: "JK",
//             jointType: "Ring fit/ Push fit",
//             color: "White",
//             origin: "Made in India",
//             imageUrl: "/images/SwrRingFItPipe.webp",
//             description: "Reliable SWR ring fit pipe for secure, leak-proof connections.",
//         },
//     ];

//     return (
//         <div className="py-12 px-8 bg-slate-200 min-h-screen">
//             <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">SWR Pipes</h2>
//             <p className="text-center mb-12 text-lg text-gray-600">Detailed information about our SWR Pipes selection:</p>

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

//                         <div className="border-t pt-4 mt-4">
//                             <table className="w-full text-left text-gray-700">
//                                 <tbody>
//                                     <tr className="border-b">
//                                         <td className="py-2 font-semibold">Material</td>
//                                         <td className="py-2">{product.material}</td>
//                                     </tr>
//                                     <tr className="border-b">
//                                         <td className="py-2 font-semibold">Size/Diameter</td>
//                                         <td className="py-2">{product.size}</td>
//                                     </tr>
//                                     <tr className="border-b">
//                                         <td className="py-2 font-semibold">Length</td>
//                                         <td className="py-2">{product.length}</td>
//                                     </tr>
//                                     <tr className="border-b">
//                                         <td className="py-2 font-semibold">Brand</td>
//                                         <td className="py-2">{product.brand}</td>
//                                     </tr>
//                                     {product.type && (
//                                         <tr className="border-b">
//                                             <td className="py-2 font-semibold">Pipe Type</td>
//                                             <td className="py-2">{product.type}</td>
//                                         </tr>
//                                     )}
//                                     <tr className="border-b">
//                                         <td className="py-2 font-semibold">Pipe Joint Type</td>
//                                         <td className="py-2">{product.jointType}</td>
//                                     </tr>
//                                     {product.usage && (
//                                         <tr className="border-b">
//                                             <td className="py-2 font-semibold">Usage/Application</td>
//                                             <td className="py-2">{product.usage}</td>
//                                         </tr>
//                                     )}
//                                     <tr className="border-b">
//                                         <td className="py-2 font-semibold">Color</td>
//                                         <td className="py-2">{product.color}</td>
//                                     </tr>
//                                     <tr className="border-b">
//                                         <td className="py-2 font-semibold">Country of Origin</td>
//                                         <td className="py-2">{product.origin}</td>
//                                     </tr>
//                                     {product.features && (
//                                         <tr className="border-b">
//                                             <td className="py-2 font-semibold">Features</td>
//                                             <td className="py-2">{product.features}</td>
//                                         </tr>
//                                     )}
//                                     {product.thickness && (
//                                         <tr className="border-b">
//                                             <td className="py-2 font-semibold">Thickness</td>
//                                             <td className="py-2">{product.thickness}</td>
//                                         </tr>
//                                     )}
//                                 </tbody>
//                             </table>
//                         </div>

//                         {/* Description Section */}
//                         <div className="pt-4 text-gray-700 text-lg">
//                             <p><strong>Description:</strong> {product.description}</p>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default SWRProductScreen;


import { gsap } from 'gsap';
import RatingCarousel from '../components/RatingCarousel';
import { useNavigate } from 'react-router-dom';
import { useState,useEffect, useRef } from 'react'


const SWRProductScreen = () => {
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
            name: "JK SWR Pipe",
            price: "₹ 88/ Meter",
            material: "PVC",
            size: "75 mm",
            length: "6 m",
            brand: "JK",
            type: "Type A",
            jointType: "Ring fit/ Push fit",
            usage: "Agriculture",
            color: "Grey",
            origin: "Made in India",
            imageUrl: "/images/Jkswrpipe.webp",
            description: "Durable SWR pipe with a secure ring fit for agriculture.",
        },
        {
            name: "SWR Pushfit Pipe",
            price: "₹ 165/ Meter",
            material: "PVC",
            size: "110 mm",
            length: "6 m",
            brand: "JK",
            type: "Type A",
            jointType: "Ring fit/ Push fit",
            color: "Grey",
            origin: "Made in India",
            features: "Superlative performance, High durability",
            imageUrl: "/images/SWRPushfitPipe2.webp",
            description: "High-performance pushfit pipe, ideal for robust installations.",
        },
        {
            name: "PVC SWR Pipe",
            price: "₹ 370/ Meter",
            material: "PVC",
            size: "160 mm",
            length: "6 m",
            brand: "JK",
            type: "Type A",
            jointType: "Ring fit/ Push fit",
            thickness: "3 mm",
            color: "White",
            origin: "Made in India",
            imageUrl: "/images/PvcSwrPipe2.webp",
            description: "Premium PVC SWR pipe with a long-lasting build for drainage systems.",
        },
        {
            name: "SWR Ring Fit Pipe",
            price: "₹ 550/ Piece",
            material: "PVC",
            size: "200 mm",
            length: "6 m",
            brand: "JK",
            jointType: "Ring fit/ Push fit",
            color: "White",
            origin: "Made in India",
            imageUrl: "/images/SwrRingFItPipe.webp",
            description: "Reliable SWR ring fit pipe for secure, leak-proof connections.",
        },
    ];

    const cardRefs = useRef([]);
    const imageRefs = useRef([]);
    const textRefs = useRef([]);

    useEffect(() => {
        cardRefs.current.forEach((card, index) => {
            gsap.fromTo(card, { opacity: 0, y: 50 }, { opacity: 1, y: 0, delay: index * 0.2, duration: 1 });
        });

        imageRefs.current.forEach((image, index) => {
            gsap.fromTo(image, { scale: 0.8 }, { scale: 1, delay: index * 0.2, duration: 1, ease: 'power3.out' });
        });

        textRefs.current.forEach((text, index) => {
            gsap.fromTo(text, { opacity: 0, y: 30 }, { opacity: 1, y: 0, delay: index * 0.3, duration: 1, ease: 'power3.out' });
        });
    }, []);

    return (
        <div className="py-12 px-8 bg-slate-200 min-h-screen">
            
        <button 
        onClick={() => navigate(-1)}
        className="fixed top-4 left-4 bg-black text-white text-lg font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 ease-in-out z-50"
    >
        ← Back
            </button>
            
            <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">SWR Pipes</h2>
            <p className="text-center mb-12 text-lg text-gray-600">Detailed information about our SWR Pipes selection:</p>

            <div className="grid gap-8 max-w-4xl mx-auto">
                {products.map((product, index) => (
                    <div
                        key={index}
                        ref={(el) => (cardRefs.current[index] = el)}
                        className="p-8 border rounded-xl shadow-lg bg-white hover:shadow-2xl transition duration-300 ease-in-out"
                    >
                        <div className="w-full h-64 flex items-center justify-center mb-4 border-b pb-4">
                            <img
                                ref={(el) => (imageRefs.current[index] = el)}
                                src={product.imageUrl}
                                alt={product.name}
                                className="max-h-full max-w-full object-contain rounded-lg"
                            />
                        </div>

                        <div ref={(el) => (textRefs.current[index] = el)}>
                            <h3 className="text-2xl font-semibold mb-2 text-gray-800">{product.name}</h3>
                            <p className="text-xl font-bold text-blue-600 mb-4">{product.price}</p>
                        </div>

                        <div className="border-t pt-4 mt-4">
                            <table className="w-full text-left text-gray-700">
                                <tbody>
                                    <tr className="border-b">
                                        <td className="py-2 font-semibold">Material</td>
                                        <td className="py-2">{product.material}</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="py-2 font-semibold">Size/Diameter</td>
                                        <td className="py-2">{product.size}</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="py-2 font-semibold">Length</td>
                                        <td className="py-2">{product.length}</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="py-2 font-semibold">Brand</td>
                                        <td className="py-2">{product.brand}</td>
                                    </tr>
                                    {product.type && (
                                        <tr className="border-b">
                                            <td className="py-2 font-semibold">Pipe Type</td>
                                            <td className="py-2">{product.type}</td>
                                        </tr>
                                    )}
                                    <tr className="border-b">
                                        <td className="py-2 font-semibold">Pipe Joint Type</td>
                                        <td className="py-2">{product.jointType}</td>
                                    </tr>
                                    {product.usage && (
                                        <tr className="border-b">
                                            <td className="py-2 font-semibold">Usage/Application</td>
                                            <td className="py-2">{product.usage}</td>
                                        </tr>
                                    )}
                                    <tr className="border-b">
                                        <td className="py-2 font-semibold">Color</td>
                                        <td className="py-2">{product.color}</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="py-2 font-semibold">Country of Origin</td>
                                        <td className="py-2">{product.origin}</td>
                                    </tr>
                                    {product.features && (
                                        <tr className="border-b">
                                            <td className="py-2 font-semibold">Features</td>
                                            <td className="py-2">{product.features}</td>
                                        </tr>
                                    )}
                                    {product.thickness && (
                                        <tr className="border-b">
                                            <td className="py-2 font-semibold">Thickness</td>
                                            <td className="py-2">{product.thickness}</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>

                        {/* Description Section */}
                        <div className="pt-4 text-gray-700 text-lg">
                            <p><strong>Description:</strong> {product.description}</p>
                        </div>
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
            <RatingCarousel/>
        </div>
    );
};

export default SWRProductScreen;
