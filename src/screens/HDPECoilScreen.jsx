
// const HDPECoilScreen = () => {
//   const products = [
    
//     {
//       name: "140mm HDPE Pipe",
//       price: "₹ 33/ Meter",
//       material: "HDPE",
//       size: "140 mm",
//       pressureRating: "PN 6",
//       length: "6 m",
//       usage: "Agriculture",
//       color: "Black",
//       connectionType: "Male",
//       packaging: "Roll",
//       country: "Made in India",
//       imageUrl: "/images/140mm_HDPE_Pipe.webp",
//       description: "Perfect for high-flow agricultural irrigation and drainage solutions."
//   },
//   {
//       name: "110mm HDPE Pipe",
//       price: "₹ 34/ Meter",
//       material: "HDPE",
//       size: "110 mm",
//       pressureRating: "PN 6",
//       length: "6 m",
//       country: "Made in India",
//       packaging: "Roll",
//       color: "Black",
//       imageUrl: "/images/110mm_HDPE_Pipe.webp",
//       description: "Ideal for large-scale plumbing installations and industrial use."
//   },
//   {
//       name: "85mm HDPE Pipe",
//       price: "₹ 32/ Meter",
//       material: "HDPE",
//       size: "85 mm",
//       pressureRating: "PN 6",
//       length: "6 m",
//       usage: "Utilities Water",
//       country: "Made in India",
//       color: "Black",
//       imageUrl: "/images/85mm_HDPE_Pipe.webp",
//       description: "Reliable for municipal water supply systems and infrastructure projects."
//   },
//   {
//       name: "32mm HDPE Pipe",
//       price: "₹ 31/ Meter",
//       material: "HDPE",
//       size: "32 mm",
//       pressureRating: "PN 4",
//       length: "6 m",
//       usage: "Agriculture",
//       color: "Black",
//       packaging: "Roll",
//       imageUrl: "/images/32mm_HDPE_Pipe.webp",
//       description: "Lightweight and flexible for small-scale irrigation and gardening needs."
//   }
  
//     // Add more products as needed...
// ];

// return (
//     <div className="py-12 px-8 bg-slate-200 min-h-screen">
//         <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">HDPE Pipes</h2>
//         <p className="text-center mb-12 text-lg text-gray-600">Explore our range of HDPE pipes:</p>

//         <div className="grid gap-8 max-w-4xl mx-auto">
//             {products.map((product, index) => (
//                 <div key={index} className="p-8 border rounded-xl shadow-lg bg-white hover:shadow-2xl transition duration-300 ease-in-out">
//                     <div className="w-full h-48 flex items-center justify-center mb-4 border-b pb-4">
//                         <img
//                             src={product.imageUrl}
//                             alt={product.name}
//                             className="max-h-full max-w-full object-contain rounded-lg"
//                         />
//                     </div>
//                     <h3 className="text-2xl font-semibold mb-2 text-gray-800">{product.name}</h3>
//                     <p className="text-xl font-bold text-blue-600 mb-4">{product.price}</p>

//                     <div className="border-t pt-4 mt-4">
//                         <table className="w-full text-left text-gray-700">
//                             <tbody>
//                                 <tr className="border-b">
//                                     <td className="py-2 font-semibold">Material</td>
//                                     <td className="py-2">{product.material}</td>
//                                 </tr>
//                                 <tr className="border-b">
//                                     <td className="py-2 font-semibold">Size/Diameter</td>
//                                     <td className="py-2">{product.size}</td>
//                                 </tr>
//                                 <tr className="border-b">
//                                     <td className="py-2 font-semibold">Pressure Rating</td>
//                                     <td className="py-2">{product.pressureRating}</td>
//                                 </tr>
//                                 <tr className="border-b">
//                                     <td className="py-2 font-semibold">Length</td>
//                                     <td className="py-2">{product.length}</td>
//                                 </tr>
//                                 <tr className="border-b">
//                                     <td className="py-2 font-semibold">Country of Origin</td>
//                                     <td className="py-2">{product.country}</td>
//                                 </tr>
//                                 <tr className="border-b">
//                                     <td className="py-2 font-semibold">Color</td>
//                                     <td className="py-2">{product.color}</td>
//                                 </tr>
//                                 {product.usage && (
//                                     <tr className="border-b">
//                                         <td className="py-2 font-semibold">Usage/Application</td>
//                                         <td className="py-2">{product.usage}</td>
//                                     </tr>
//                                 )}
//                                 {product.packaging && (
//                                     <tr className="border-b">
//                                         <td className="py-2 font-semibold">Packaging Type</td>
//                                         <td className="py-2">{product.packaging}</td>
//                                     </tr>
//                                 )}
//                                 {product.connectionType && (
//                                     <tr className="border-b">
//                                         <td className="py-2 font-semibold">Connection End Type</td>
//                                         <td className="py-2">{product.connectionType}</td>
//                                     </tr>
//                                 )}
//                             </tbody>
//                         </table>
//                     </div>

//                     {/* Description Section */}
//                     <div className="pt-4 text-gray-700 text-lg">
//                         <p><strong>Description:</strong> {product.description}</p>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     </div>
// );
// };


// export default HDPECoilScreen







// import { motion } from 'framer-motion';
// import RatingCarousel from '../components/RatingCarousel';
// import { useNavigate } from 'react-router-dom';
// import { useEffect, useState } from 'react';


// const HDPECoilScreen = () => {
//   const navigate = useNavigate()
//   const [showBackButton, setShowBackButton] = useState(false);


//   useEffect(() => {
//     const handleScroll = () => {
//         const header = document.getElementById('header'); // Assuming the header has an id="header"
//         const scrollY = window.scrollY;

//         // Show the back button if header is not present or if the scroll position is past the header height
//         if (!header || scrollY > header.clientHeight) {
//             setShowBackButton(true);
//         } else {
//             setShowBackButton(false);
//         }
//     };

//     window.addEventListener('scroll', handleScroll);
//     handleScroll(); // Initial check for header presence on load
//     return () => window.removeEventListener('scroll', handleScroll);
// }, []);

//     const products = [
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
//             description: "Perfect for high-flow agricultural irrigation and drainage solutions."
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
//             description: "Ideal for large-scale plumbing installations and industrial use."
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
//             description: "Reliable for municipal water supply systems and infrastructure projects."
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
//             description: "Lightweight and flexible for small-scale irrigation and gardening needs."
//         }
//         // Add more products as needed...
//     ];

//   return (
    
//         <div className="py-12 px-8 bg-slate-200 min-h-screen">
//         <button
//                     onClick={() => navigate(-1)}
//                     className="fixed top-4 left-4 bg-black text-white text-lg font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 ease-in-out z-50"
//                 >
//                     ← Back
//                 </button>

      
//             <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">HDPE Pipes & Coils</h2>
//             <p className="text-center mb-12 text-lg text-gray-600">Explore our range of HDPE coils:</p>

//             <div className="grid gap-8 max-w-4xl mx-auto">
//                 {products.map((product, index) => (
//                     <motion.div
//                         key={index}
//                         className="p-8 border rounded-xl shadow-lg bg-white hover:shadow-2xl transition duration-300 ease-in-out"
//                         initial={{ opacity: 0, scale: 0.8 }} // Initial state
//                         animate={{ opacity: 1, scale: 1 }} // Animate to these values
//                         transition={{ duration: 0.5 }} // Transition timing
//                     >
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
//                     </motion.div>
//                 ))}
//         </div>
//         <RatingCarousel/>
//         </div>
//     );
// };

// export default HDPECoilScreen;


// import { motion } from 'framer-motion'; 
// import RatingCarousel from '../components/RatingCarousel';
// import { useNavigate } from 'react-router-dom';
// import { useEffect, useState } from 'react';

// const HDPECoilScreen = () => {
//   const navigate = useNavigate();
//   const [showBackButton, setShowBackButton] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//         const header = document.getElementById('header'); // Assuming the header has an id="header"
//         const scrollY = window.scrollY;

//         // Show the back button if header is not present or if the scroll position is past the header height
//         if (!header || scrollY > header.clientHeight) {
//             setShowBackButton(true);
//         } else {
//             setShowBackButton(false);
//         }
//     };

//     // Scroll to top when the component mounts
//     window.scrollTo(0, 0);

//     window.addEventListener('scroll', handleScroll);
//     handleScroll(); // Initial check for header presence on load
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const products = [
//     {
//       name: "140mm HDPE Pipe",
//       price: "₹ 33/ Meter",
//       material: "HDPE",
//       size: "140 mm",
//       pressureRating: "PN 6",
//       length: "6 m",
//       usage: "Agriculture",
//       color: "Black",
//       connectionType: "Male",
//       packaging: "Roll",
//       country: "Made in India",
//       imageUrl: "/images/140mm_HDPE_Pipe.webp",
//       description: "Perfect for high-flow agricultural irrigation and drainage solutions."
//     },
//     {
//       name: "110mm HDPE Pipe",
//       price: "₹ 34/ Meter",
//       material: "HDPE",
//       size: "110 mm",
//       pressureRating: "PN 6",
//       length: "6 m",
//       country: "Made in India",
//       packaging: "Roll",
//       color: "Black",
//       imageUrl: "/images/110mm_HDPE_Pipe.webp",
//       description: "Ideal for large-scale plumbing installations and industrial use."
//     },
//     {
//       name: "85mm HDPE Pipe",
//       price: "₹ 32/ Meter",
//       material: "HDPE",
//       size: "85 mm",
//       pressureRating: "PN 6",
//       length: "6 m",
//       usage: "Utilities Water",
//       country: "Made in India",
//       color: "Black",
//       imageUrl: "/images/85mm_HDPE_Pipe.webp",
//       description: "Reliable for municipal water supply systems and infrastructure projects."
//     },
//     {
//       name: "32mm HDPE Pipe",
//       price: "₹ 31/ Meter",
//       material: "HDPE",
//       size: "32 mm",
//       pressureRating: "PN 4",
//       length: "6 m",
//       usage: "Agriculture",
//       color: "Black",
//       packaging: "Roll",
//       imageUrl: "/images/32mm_HDPE_Pipe.webp",
//       description: "Lightweight and flexible for small-scale irrigation and gardening needs."
//     }
//     // Add more products as needed...
//   ];

//   return (
//     <div className="py-12 px-8 bg-slate-200 min-h-screen">
//       <button 
//         onClick={() => navigate(-1)}
//         className="fixed top-4 left-4 bg-black text-white text-lg font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 ease-in-out z-50"
//       >
//         ← Back
//       </button>

//       <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">HDPE Pipes & Coils</h2>
//       <p className="text-center mb-12 text-lg text-gray-600">Explore our range of HDPE coils:</p>

//       <div className="grid gap-8 max-w-4xl mx-auto">
//         {products.map((product, index) => (
//           <motion.div 
//             key={index} 
//             className="p-8 border rounded-xl shadow-lg bg-white hover:shadow-2xl transition duration-300 ease-in-out"
//             initial={{ opacity: 0, scale: 0.8 }} // Initial state
//             animate={{ opacity: 1, scale: 1 }} // Animate to these values
//             transition={{ duration: 0.5 }} // Transition timing
//           >
//             <div className="w-full h-48 flex items-center justify-center mb-4 border-b pb-4">
//               <img 
//                 src={product.imageUrl} 
//                 alt={product.name} 
//                 className="max-h-full max-w-full object-contain rounded-lg" 
//               />
//             </div>
//             <h3 className="text-2xl font-semibold mb-2 text-gray-800">{product.name}</h3>
//             <p className="text-xl font-bold text-blue-600 mb-4">{product.price}</p>

//             <div className="border-t pt-4 mt-4">
//               <table className="w-full text-left text-gray-700">
//                 <tbody>
//                   <tr className="border-b">
//                     <td className="py-2 font-semibold">Material</td>
//                     <td className="py-2">{product.material}</td>
//                   </tr>
//                   <tr className="border-b">
//                     <td className="py-2 font-semibold">Size/Diameter</td>
//                     <td className="py-2">{product.size}</td>
//                   </tr>
//                   <tr className="border-b">
//                     <td className="py-2 font-semibold">Pressure Rating</td>
//                     <td className="py-2">{product.pressureRating}</td>
//                   </tr>
//                   <tr className="border-b">
//                     <td className="py-2 font-semibold">Length</td>
//                     <td className="py-2">{product.length}</td>
//                   </tr>
//                   <tr className="border-b">
//                     <td className="py-2 font-semibold">Country of Origin</td>
//                     <td className="py-2">{product.country}</td>
//                   </tr>
//                   <tr className="border-b">
//                     <td className="py-2 font-semibold">Color</td>
//                     <td className="py-2">{product.color}</td>
//                   </tr>
//                   {product.usage && (
//                     <tr className="border-b">
//                       <td className="py-2 font-semibold">Usage/Application</td>
//                       <td className="py-2">{product.usage}</td>
//                     </tr>
//                   )}
//                   {product.packaging && (
//                     <tr className="border-b">
//                       <td className="py-2 font-semibold">Packaging Type</td>
//                       <td className="py-2">{product.packaging}</td>
//                     </tr>
//                   )}
//                   {product.connectionType && (
//                     <tr className="border-b">
//                       <td className="py-2 font-semibold">Connection End Type</td>
//                       <td className="py-2">{product.connectionType}</td>
//                     </tr>
//                   )}
//                 </tbody>
//               </table>
//             </div>

//             {/* Description Section */}
//             <div className="pt-4 text-gray-700 text-lg">
//               <p><strong>Description:</strong> {product.description}</p>
//             </div>
//           </motion.div>
//         ))}
              
//                <div className="fixed bottom-4 right-4">
//                 <a 
//                     href="https://wa.me/919405799633" // Replace 'your-number' with your WhatsApp number
//                     className="bg-green-500 text-white text-lg font-semibold px-4 py-3 rounded-full shadow-lg hover:bg-green-600 transition duration-300 ease-in-out"
//                     target="_blank" 
//                     rel="noopener noreferrer"
//                 >
//                     💬 Chat on WhatsApp
//                 </a>
//               </div>
//               <div className="fixed bottom-4 right-4">
//               <a 
//                   href="https://wa.me/919405799633" // Replace 'your-number' with your WhatsApp number
//                   className="bg-green-500 text-white text-lg font-semibold px-4 py-3 rounded-full shadow-lg hover:bg-green-600 transition duration-300 ease-in-out"
//                   target="_blank" 
//                   rel="noopener noreferrer"
//               >
//                   💬 Chat on WhatsApp
//               </a>
//           </div>
//       </div>
//       <RatingCarousel />
//     </div>
//   );
// };

// export default HDPECoilScreen;






// import { motion } from 'framer-motion'; 
// import RatingCarousel from '../components/RatingCarousel';
// import { useNavigate } from 'react-router-dom';
// import { useEffect, useState } from 'react';

// const HDPECoilScreen = () => {
//   const navigate = useNavigate();
//   const [showBackButton, setShowBackButton] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//         const header = document.getElementById('header'); // Assuming the header has an id="header"
//         const scrollY = window.scrollY;

//         if (!header || scrollY > header.clientHeight) {
//             setShowBackButton(true);
//         } else {
//             setShowBackButton(false);
//         }
//     };

//     window.scrollTo(0, 0);

//     window.addEventListener('scroll', handleScroll);
//     handleScroll();
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const products = [
//     {
//       name: "140mm HDPE Pipe",
//       price: "₹ 33/ Meter",
//       material: "HDPE",
//       size: "140 mm",
//       pressureRating: "PN 6",
//       length: "6 m",
//       usage: "Agriculture",
//       color: "Black",
//       connectionType: "Male",
//       packaging: "Roll",
//       country: "Made in India",
//       imageUrl: "/images/140mm_HDPE_Pipe.webp",
//       description: "Perfect for high-flow agricultural irrigation and drainage solutions."
//     },
//     {
//       name: "110mm HDPE Pipe",
//       price: "₹ 34/ Meter",
//       material: "HDPE",
//       size: "110 mm",
//       pressureRating: "PN 6",
//       length: "6 m",
//       country: "Made in India",
//       packaging: "Roll",
//       color: "Black",
//       imageUrl: "/images/110mm_HDPE_Pipe.webp",
//       description: "Ideal for large-scale plumbing installations and industrial use."
//     },
//     {
//       name: "85mm HDPE Pipe",
//       price: "₹ 32/ Meter",
//       material: "HDPE",
//       size: "85 mm",
//       pressureRating: "PN 6",
//       length: "6 m",
//       usage: "Utilities Water",
//       country: "Made in India",
//       color: "Black",
//       imageUrl: "/images/85mm_HDPE_Pipe.webp",
//       description: "Reliable for municipal water supply systems and infrastructure projects."
//     },
//     {
//       name: "32mm HDPE Pipe",
//       price: "₹ 31/ Meter",
//       material: "HDPE",
//       size: "32 mm",
//       pressureRating: "PN 4",
//       length: "6 m",
//       usage: "Agriculture",
//       color: "Black",
//       packaging: "Roll",
//       imageUrl: "/images/32mm_HDPE_Pipe.webp",
//       description: "Lightweight and flexible for small-scale irrigation and gardening needs."
//     }
//     // Add more products as needed...
//   ];

//   return (
//     <div className="py-12 px-8 bg-slate-200 min-h-screen">
//       <button 
//         onClick={() => navigate(-1)}
//         className="fixed top-4 left-4 bg-black text-white text-lg font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 ease-in-out z-50"
//       >
//         ← Back
//       </button>

//       <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">HDPE Pipes & Coils</h2>
//       <p className="text-center mb-12 text-lg text-gray-600">Explore our range of HDPE coils:</p>

//       <div className="grid gap-8 max-w-4xl mx-auto">
//         {products.map((product, index) => (
//           <motion.div 
//             key={index} 
//             className="p-8 border rounded-xl shadow-lg bg-white hover:shadow-2xl transition duration-300 ease-in-out"
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.5 }}
//           >
//             <div className="w-full h-48 flex items-center justify-center mb-4 border-b pb-4">
//               <img 
//                 src={product.imageUrl} 
//                 alt={product.name} 
//                 className="max-h-full max-w-full object-contain rounded-lg" 
//               />
//             </div>
//             <h3 className="text-2xl font-semibold mb-2 text-gray-800">{product.name}</h3>

//             <div className="border-t pt-4 mt-4">
//               <table className="w-full text-left text-gray-700">
//                 <tbody>
//                   <tr className="border-b">
//                     <td className="py-2 font-semibold">Material</td>
//                     <td className="py-2">{product.material}</td>
//                   </tr>
//                   <tr className="border-b">
//                     <td className="py-2 font-semibold">Size/Diameter</td>
//                     <td className="py-2">{product.size}</td>
//                   </tr>
//                   <tr className="border-b">
//                     <td className="py-2 font-semibold">Pressure Rating</td>
//                     <td className="py-2">{product.pressureRating}</td>
//                   </tr>
//                   <tr className="border-b">
//                     <td className="py-2 font-semibold">Length</td>
//                     <td className="py-2">{product.length}</td>
//                   </tr>
//                   <tr className="border-b">
//                     <td className="py-2 font-semibold">Country of Origin</td>
//                     <td className="py-2">{product.country}</td>
//                   </tr>
//                   <tr className="border-b">
//                     <td className="py-2 font-semibold">Color</td>
//                     <td className="py-2">{product.color}</td>
//                   </tr>
//                   {product.usage && (
//                     <tr className="border-b">
//                       <td className="py-2 font-semibold">Usage/Application</td>
//                       <td className="py-2">{product.usage}</td>
//                     </tr>
//                   )}
//                   {product.packaging && (
//                     <tr className="border-b">
//                       <td className="py-2 font-semibold">Packaging Type</td>
//                       <td className="py-2">{product.packaging}</td>
//                     </tr>
//                   )}
//                   {product.connectionType && (
//                     <tr className="border-b">
//                       <td className="py-2 font-semibold">Connection End Type</td>
//                       <td className="py-2">{product.connectionType}</td>
//                     </tr>
//                   )}
//                 </tbody>
//               </table>
//             </div>

//             <div className="pt-4 text-gray-700 text-lg">
//               <p><strong>Description:</strong> {product.description}</p>
//             </div>

//             {/* Enquire Now Button */}
//             <div className="mt-6">
//               <a 
//                 href="https://wa.me/919405799633" 
//                 className="block bg-green-500 text-white text-center text-lg font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-green-600 transition duration-300 ease-in-out"
//                 target="_blank" 
//                 rel="noopener noreferrer"
//               >
//                 Enquire Now
//               </a>
//             </div>
//           </motion.div>
//         ))}
//       </div>

//       <RatingCarousel />
//     </div>
//   );
// };

// export default HDPECoilScreen;





import { motion } from 'framer-motion'; 
import RatingCarousel from '../components/RatingCarousel';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const HDPECoilScreen = () => {
  const navigate = useNavigate();
  const [showBackButton, setShowBackButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
        const header = document.getElementById('header');
        const scrollY = window.scrollY;
        
        if (!header || scrollY > header.clientHeight) {
            setShowBackButton(true);
        } else {
            setShowBackButton(false);
        }
    };

    window.scrollTo(0, 0);
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const products = [
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
            description: "Perfect for high-flow agricultural irrigation and drainage solutions."
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
            description: "Ideal for large-scale plumbing installations and industrial use."
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
            description: "Reliable for municipal water supply systems and infrastructure projects."
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
            description: "Lightweight and flexible for small-scale irrigation and gardening needs."
          }
    
  ];

  const handleEnquiry = (productName) => {
    const message = `Hello, I'm interested in more details about the product: ${productName}`;
    window.open(`https://wa.me/919405799633?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <div className="py-12 px-8 bg-slate-200 min-h-screen">
      <button 
        onClick={() => navigate(-1)}
        className="fixed top-4 left-4 bg-black text-white text-lg font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-blue-900 transition duration-300 ease-in-out z-50"
      >
        ← Back
      </button>

      <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">HDPE Pipes & Coils</h2>
      <p className="text-center mb-12 text-lg text-gray-600">Explore our range of HDPE coils:</p>

      <div className="grid gap-8 max-w-4xl mx-auto">
        {products.map((product, index) => (
          <motion.div 
            key={index} 
            className="p-8 border rounded-xl shadow-lg bg-white hover:shadow-2xl transition duration-300 ease-in-out"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-full h-48 flex items-center justify-center mb-4 border-b pb-4">
              <img 
                src={product.imageUrl} 
                alt={product.name} 
                className="max-h-full max-w-full object-contain rounded-lg" 
              />
            </div>
            <h3 className="text-2xl font-semibold mb-2 text-gray-800">{product.name}</h3>

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
                </tbody>
              </table>
            </div>

            <div className="pt-4 text-gray-700 text-lg">
              <p><strong>Description:</strong> {product.description}</p>
            </div>

            <button 
              onClick={() => handleEnquiry(product.name)}
              className="mt-4 bg-blue-500 text-white font-semibold px-6 py-2 rounded-lg shadow hover:bg-blue-600 transition duration-300 ease-in-out"
            >
              Enquiry Now
            </button>
          </motion.div>
        ))}
      </div>

      <RatingCarousel />
    </div>
  );
};

export default HDPECoilScreen;
