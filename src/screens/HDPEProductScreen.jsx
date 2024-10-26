

// const HDPEProductScreen = () => {
//     const products = [
//         {
//             name: "160mm HDPE Pipe",
//             price: "₹ 35/ Meter",
//             material: "HDPE",
//             size: "160 mm",
//             pressureRating: "PN 4",
//             length: "6 m",
//             country: "Made in India",
//             color: "Black",
//             imageUrl: "/images/160mm_HDPE_Pipe.webp",
//             description: "Durable 160mm HDPE pipe, suitable for agricultural applications.",
//         },
//         {
//             name: "32mm HDPE Pipe",
//             price: "₹ 31/ Meter",
//             material: "HDPE",
//             size: "32 mm",
//             pressureRating: "PN 4",
//             length: "6 m",
//             usage: "Agriculture",
//             color: "Black",
//             packaging: "Roll",
//             imageUrl: "/images/32mm_HDPE_Pipe.webp",
//             description: "Lightweight and flexible 32mm HDPE pipe designed for agricultural use.",
//         },
//         {
//             name: "85mm HDPE Pipe",
//             price: "₹ 32/ Meter",
//             material: "HDPE",
//             size: "85 mm",
//             pressureRating: "PN 6",
//             length: "6 m",
//             usage: "Utilities Water",
//             country: "Made in India",
//             color: "Black",
//             imageUrl: "/images/85mm_HDPE_Pipe.webp",
//             description: "Reliable 85mm HDPE pipe for water utilities and infrastructure.",
//         },
//         {
//             name: "110mm HDPE Pipe",
//             price: "₹ 34/ Meter",
//             material: "HDPE",
//             size: "110 mm",
//             pressureRating: "PN 6",
//             length: "6 m",
//             country: "Made in India",
//             packaging: "Roll",
//             color: "Black",
//             imageUrl: "/images/110mm_HDPE_Pipe.webp",
//             description: "Sturdy 110mm HDPE pipe for various plumbing applications.",
//         },
//         {
//             name: "140mm HDPE Pipe",
//             price: "₹ 33/ Meter",
//             material: "HDPE",
//             size: "140 mm",
//             pressureRating: "PN 6",
//             length: "6 m",
//             usage: "Agriculture",
//             color: "Black",
//             connectionType: "Male",
//             packaging: "Roll",
//             country: "Made in India",
//             imageUrl: "/images/140mm_HDPE_Pipe.webp",
//             description: "Versatile 140mm HDPE pipe ideal for agricultural irrigation systems.",
//         },
//         // Add more products as needed...
//     ];

//     return (
//         <div className="py-12 px-8 bg-slate-200 min-h-screen">
//             <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">HDPE Pipes</h2>
//             <p className="text-center mb-12 text-lg text-gray-600">Explore our range of HDPE pipes:</p>

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
//                                         <td className="py-2 font-semibold">Pressure Rating</td>
//                                         <td className="py-2">{product.pressureRating}</td>
//                                     </tr>
//                                     <tr className="border-b">
//                                         <td className="py-2 font-semibold">Length</td>
//                                         <td className="py-2">{product.length}</td>
//                                     </tr>
//                                     <tr className="border-b">
//                                         <td className="py-2 font-semibold">Country of Origin</td>
//                                         <td className="py-2">{product.country}</td>
//                                     </tr>
//                                     <tr className="border-b">
//                                         <td className="py-2 font-semibold">Color</td>
//                                         <td className="py-2">{product.color}</td>
//                                     </tr>
//                                     {product.usage && (
//                                         <tr className="border-b">
//                                             <td className="py-2 font-semibold">Usage/Application</td>
//                                             <td className="py-2">{product.usage}</td>
//                                         </tr>
//                                     )}
//                                     {product.packaging && (
//                                         <tr className="border-b">
//                                             <td className="py-2 font-semibold">Packaging Type</td>
//                                             <td className="py-2">{product.packaging}</td>
//                                         </tr>
//                                     )}
//                                     {product.connectionType && (
//                                         <tr className="border-b">
//                                             <td className="py-2 font-semibold">Connection End Type</td>
//                                             <td className="py-2">{product.connectionType}</td>
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

// export default HDPEProductScreen;




import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const HDPEProductScreen = () => {
    const products = [
        {
            name: "160mm HDPE Pipe",
            price: "₹ 35/ Meter",
            material: "HDPE",
            size: "160 mm",
            pressureRating: "PN 4",
            length: "6 m",
            country: "Made in India",
            color: "Black",
            imageUrl: "/images/160mm_HDPE_Pipe.webp",
            description: "Durable 160mm HDPE pipe, suitable for agricultural applications.",
        },
        {
            name: "32mm HDPE Pipe",
            price: "₹ 31/ Meter",
            material: "HDPE",
            size: "32 mm",
            pressureRating: "PN 4",
            length: "6 m",
            usage: "Agriculture",
            color: "Black",
            packaging: "Roll",
            imageUrl: "/images/32mm_HDPE_Pipe.webp",
            description: "Lightweight and flexible 32mm HDPE pipe designed for agricultural use.",
        },
        {
            name: "85mm HDPE Pipe",
            price: "₹ 32/ Meter",
            material: "HDPE",
            size: "85 mm",
            pressureRating: "PN 6",
            length: "6 m",
            usage: "Utilities Water",
            country: "Made in India",
            color: "Black",
            imageUrl: "/images/85mm_HDPE_Pipe.webp",
            description: "Reliable 85mm HDPE pipe for water utilities and infrastructure.",
        },
        {
            name: "110mm HDPE Pipe",
            price: "₹ 34/ Meter",
            material: "HDPE",
            size: "110 mm",
            pressureRating: "PN 6",
            length: "6 m",
            country: "Made in India",
            packaging: "Roll",
            color: "Black",
            imageUrl: "/images/110mm_HDPE_Pipe.webp",
            description: "Sturdy 110mm HDPE pipe for various plumbing applications.",
        },
        {
            name: "140mm HDPE Pipe",
            price: "₹ 33/ Meter",
            material: "HDPE",
            size: "140 mm",
            pressureRating: "PN 6",
            length: "6 m",
            usage: "Agriculture",
            color: "Black",
            connectionType: "Male",
            packaging: "Roll",
            country: "Made in India",
            imageUrl: "/images/140mm_HDPE_Pipe.webp",
            description: "Versatile 140mm HDPE pipe ideal for agricultural irrigation systems.",
        },
        // Add more products as needed...
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
            <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">HDPE Pipes</h2>
            <p className="text-center mb-12 text-lg text-gray-600">Explore our range of HDPE pipes:</p>

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
                                        <td className="py-2 font-semibold">Pressure Rating</td>
                                        <td className="py-2">{product.pressureRating}</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="py-2 font-semibold">Length</td>
                                        <td className="py-2">{product.length}</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="py-2 font-semibold">Country of Origin</td>
                                        <td className="py-2">{product.country}</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="py-2 font-semibold">Color</td>
                                        <td className="py-2">{product.color}</td>
                                    </tr>
                                    {product.usage && (
                                        <tr className="border-b">
                                            <td className="py-2 font-semibold">Usage/Application</td>
                                            <td className="py-2">{product.usage}</td>
                                        </tr>
                                    )}
                                    {product.packaging && (
                                        <tr className="border-b">
                                            <td className="py-2 font-semibold">Packaging Type</td>
                                            <td className="py-2">{product.packaging}</td>
                                        </tr>
                                    )}
                                    {product.connectionType && (
                                        <tr className="border-b">
                                            <td className="py-2 font-semibold">Connection End Type</td>
                                            <td className="py-2">{product.connectionType}</td>
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
            </div>
        </div>
    );
};

export default HDPEProductScreen;
