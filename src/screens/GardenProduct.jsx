// import { useEffect, useState } from "react";
// import RatingCarousel from "../components/RatingCarousel";
// import { useNavigate } from 'react-router-dom';


// const UPVCProductScreen = () => {

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
//   }, []);
  
//     const products = [
//         {
//             name: "JK UPVC Pipe",
//             price: "₹ 55/ Meter",
//             brand: "JK",
//             material: "UPVC",
//             size: "3 Inch",
//             length: "6 m",
//             thickness: "3 mm",
//             jointType: "Sol fit",
//             color: "White",
//             country: "Made in India",
//             imageUrl: "/images/jk_upvc_pipe.webp", // Add the actual path to your image
//             description: "Durable and high-quality UPVC pipe designed for various plumbing applications.",
//         },
//         // Add more products as needed...
//     ];

//     return (
//       <div className="py-12 px-8 bg-slate-200 min-h-screen">
        
//       <button
//       onClick={() => navigate(-1)}
//       className="fixed top-4 left-4 bg-black text-white text-lg font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 ease-in-out z-50"
//   >
//       ← Back
//         </button>
        
//             <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">UPVC Pipes</h2>
//             <p className="text-center mb-12 text-lg text-gray-600">Explore our range of UPVC pipes:</p>

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
//                                         <td className="py-2 font-semibold">Brand</td>
//                                         <td className="py-2">{product.brand}</td>
//                                     </tr>
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
//                                         <td className="py-2 font-semibold">Thickness</td>
//                                         <td className="py-2">{product.thickness}</td>
//                                     </tr>
//                                     <tr className="border-b">
//                                         <td className="py-2 font-semibold">Pipe Joint Type</td>
//                                         <td className="py-2">{product.jointType}</td>
//                                     </tr>
//                                     <tr className="border-b">
//                                         <td className="py-2 font-semibold">Color</td>
//                                         <td className="py-2">{product.color}</td>
//                                     </tr>
//                                     <tr className="border-b">
//                                         <td className="py-2 font-semibold">Country of Origin</td>
//                                         <td className="py-2">{product.country}</td>
//                                     </tr>
//                                 </tbody>
//                             </table>
//                         </div>

//                         {/* Description Section */}
//                         <div className="pt-4 text-gray-700 text-lg">
//                             <p><strong>Description:</strong> {product.description}</p>
//                         </div>
//                     </div>
//                 ))}
//         </div>
//         <RatingCarousel/>
//         </div>
//     );
// };

// export default UPVCProductScreen;



// import { useEffect, useState } from "react";
// import RatingCarousel from "../components/RatingCarousel";
// import { useNavigate } from 'react-router-dom';

// const UPVCProductScreen = () => {
//   const navigate = useNavigate();
//   const [showBackButton, setShowBackButton] = useState(false);

//   useEffect(() => {
//     // Scroll to the top of the page on load
//     window.scrollTo(0, 0);

//     const handleScroll = () => {
//       const header = document.getElementById('header'); // Assuming the header has an id="header"
//       const scrollY = window.scrollY;

//       // Show the back button if header is not present or if the scroll position is past the header height
//       if (!header || scrollY > header.clientHeight) {
//           setShowBackButton(true);
//       } else {
//           setShowBackButton(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     handleScroll(); // Initial check for header presence on load
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);
  
//   const products = [
//       {
//           name: "JK UPVC Pipe",
//           price: "₹ 55/ Meter",
//           brand: "JK",
//           material: "UPVC",
//           size: "3 Inch",
//           length: "6 m",
//           thickness: "3 mm",
//           jointType: "Sol fit",
//           color: "White",
//           country: "Made in India",
//           imageUrl: "/images/jk_upvc_pipe.webp", // Add the actual path to your image
//           description: "Durable and high-quality UPVC pipe designed for various plumbing applications.",
//       },
//       // Add more products as needed...
//   ];

//   return (
//     <div className="py-12 px-8 bg-slate-200 min-h-screen">
//       <button
//         onClick={() => navigate(-1)}
//         className="fixed top-4 left-4 bg-black text-white text-lg font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 ease-in-out z-50"
//       >
//         ← Back
//       </button>
      
//       <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">UPVC Pipes</h2>
//       <p className="text-center mb-12 text-lg text-gray-600">Explore our range of UPVC pipes:</p>

//       <div className="grid gap-8 max-w-4xl mx-auto">
//         {products.map((product, index) => (
//           <div key={index} className="p-8 border rounded-xl shadow-lg bg-white hover:shadow-2xl transition duration-300 ease-in-out">
//             <div className="w-full h-64 flex items-center justify-center mb-4 border-b pb-4">
//               <img
//                 src={product.imageUrl}
//                 alt={product.name}
//                 className="max-h-full max-w-full object-contain rounded-lg"
//                 style={{ height: '300px' }} // Increase the height of the image
//               />
//             </div>
//             <h3 className="text-2xl font-semibold mb-2 text-gray-800">{product.name}</h3>
//             <p className="text-xl font-bold text-blue-600 mb-4">{product.price}</p>

//             <div className="border-t pt-4 mt-4">
//               <table className="w-full text-left text-gray-700">
//                 <tbody>
//                   <tr className="border-b">
//                     <td className="py-2 font-semibold">Brand</td>
//                     <td className="py-2">{product.brand}</td>
//                   </tr>
//                   <tr className="border-b">
//                     <td className="py-2 font-semibold">Material</td>
//                     <td className="py-2">{product.material}</td>
//                   </tr>
//                   <tr className="border-b">
//                     <td className="py-2 font-semibold">Size/Diameter</td>
//                     <td className="py-2">{product.size}</td>
//                   </tr>
//                   <tr className="border-b">
//                     <td className="py-2 font-semibold">Length</td>
//                     <td className="py-2">{product.length}</td>
//                   </tr>
//                   <tr className="border-b">
//                     <td className="py-2 font-semibold">Thickness</td>
//                     <td className="py-2">{product.thickness}</td>
//                   </tr>
//                   <tr className="border-b">
//                     <td className="py-2 font-semibold">Pipe Joint Type</td>
//                     <td className="py-2">{product.jointType}</td>
//                   </tr>
//                   <tr className="border-b">
//                     <td className="py-2 font-semibold">Color</td>
//                     <td className="py-2">{product.color}</td>
//                   </tr>
//                   <tr className="border-b">
//                     <td className="py-2 font-semibold">Country of Origin</td>
//                     <td className="py-2">{product.country}</td>
//                   </tr>
//                 </tbody>
//               </table>
//             </div>

//             {/* Description Section */}
//             <div className="pt-4 text-gray-700 text-lg">
//               <p><strong>Description:</strong> {product.description}</p>
//             </div>
//           </div>
//         ))}
//         <div className="fixed bottom-4 right-4">
//         <a
//             href="https://wa.me/919405799633" // Replace 'your-number' with your WhatsApp number
//             className="bg-green-500 text-white text-lg font-semibold px-4 py-3 rounded-full shadow-lg hover:bg-green-600 transition duration-300 ease-in-out"
//             target="_blank"
//             rel="noopener noreferrer"
//         >
//             💬 Chat on WhatsApp
//         </a>
//     </div>
//       </div>
//       <RatingCarousel />
//     </div>
//   );
// };

// export default UPVCProductScreen;




// import { useEffect, useState } from "react";
// import RatingCarousel from "../components/RatingCarousel";
// import { useNavigate } from 'react-router-dom';

// const UPVCProductScreen = () => {
//   const navigate = useNavigate();
//   const [showBackButton, setShowBackButton] = useState(false);

//   useEffect(() => {
//     window.scrollTo(0, 0);

//     const handleScroll = () => {
//       const header = document.getElementById('header');
//       const scrollY = window.scrollY;

//       if (!header || scrollY > header.clientHeight) {
//           setShowBackButton(true);
//       } else {
//           setShowBackButton(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     handleScroll();
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);
  
//   const products = [
//     {
//         name: "JK Pipe",
//         brand: "STAR",
//         material: "PVC",
//         size: "3/4 Inch",
//         length: "100 ft",
//         usageApplication: "Garden Watering Pipe",
//         description: "STAR make premium quality PVC transparent flexible garden pipes. We offer a range of garden pipes to our clients using quality raw material and techniques according to customer specifications and requirements. These are available in various shapes and sizes as per the latest market trends and requirements. Raw material used in the production process is of optimum quality, ensuring durability and strength.",
//         color: "Transparent",
//         country: "Made in India",
//         imageUrl: "/images/pvc-garden.webp",
//         features: [
//           "Highly flexible nature even at very low or high temperatures",
//           "Fluorescent color",
//           "Chemical resistant",
//           "Non-pressure application",
//           "High quality and long lasting"
//         ],
//         application: [
//           "Garden watering pipe",
//           "Construction sites",
//           "Residential areas",
//           "Domestic delivery of water",
//           "Petrol, diesel transportation",
//           "Water sprinkler systems"
//         ]
//       }
      
      
    
 
//       // Add more products as needed...
//   ];

//   return (
//     <div className="py-12 px-8 bg-slate-200 min-h-screen">
//       <button
//         onClick={() => navigate(-1)}
//         className="fixed top-4 left-4 bg-black text-white text-lg font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-blue-900 transition duration-300 ease-in-out z-50"
//       >
//         ← Back
//       </button>
      
//       <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">Garden Pipes</h2>
//       <p className="text-center mb-12 text-lg text-gray-600">Explore our range of UPVC pipes:</p>

//       <div className="grid gap-8 max-w-4xl mx-auto">
//         {products.map((product, index) => (
//           <div key={index} className="p-8 border rounded-xl shadow-lg bg-white hover:shadow-2xl transition duration-300 ease-in-out">
//             <div className="w-full h-80 flex items-center justify-center mb-4 border-b pb-4">
//               <img
//                 src={product.imageUrl}
//                 alt={product.name}
//                 className="max-h-full max-w-full object-contain rounded-lg"
//                 style={{ height: '300px' }}
//               />
//             </div>
//             <h3 className="text-2xl font-semibold mb-2 text-gray-800">{product.name}</h3>

//             <div className="border-t pt-4 mt-4">
//               <table className="w-full text-left text-gray-700">
//                 <tbody>
//                   <tr className="border-b">
//                     <td className="py-2 font-semibold">Brand</td>
//                     <td className="py-2">{product.brand}</td>
//                   </tr>
//                   <tr className="border-b">
//                     <td className="py-2 font-semibold">Material</td>
//                     <td className="py-2">{product.material}</td>
//                   </tr>
//                   <tr className="border-b">
//                     <td className="py-2 font-semibold">Size/Diameter</td>
//                     <td className="py-2">{product.size}</td>
//                   </tr>
//                   <tr className="border-b">
//                     <td className="py-2 font-semibold">Length</td>
//                     <td className="py-2">{product.length}</td>
//                   </tr>
//                   <tr className="border-b">
//                     <td className="py-2 font-semibold">Thickness</td>
//                     <td className="py-2">{product.thickness}</td>
//                   </tr>
//                   <tr className="border-b">
//                     <td className="py-2 font-semibold">Pipe Joint Type</td>
//                     <td className="py-2">{product.jointType}</td>
//                   </tr>
//                   <tr className="border-b">
//                     <td className="py-2 font-semibold">Color</td>
//                     <td className="py-2">{product.color}</td>
//                   </tr>
//                   <tr className="border-b">
//                     <td className="py-2 font-semibold">Country of Origin</td>
//                     <td className="py-2">{product.country}</td>
//                   </tr>
//                 </tbody>
//               </table>
//             </div>

//             {/* Description Section */}
//             <div className="pt-4 text-gray-700 text-lg">
//               <p><strong>Description:</strong> {product.description}</p>
//             </div>

//             {/* Enquiry Button */}
//             <div className="mt-4 text-center">
//               <a
//                 href={`https://wa.me/919405799633?text=I'm%20interested%20in%20enquiring%20about%20${encodeURIComponent(product.name)}`}
//                 className="bg-blue-500 text-white text-lg font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 ease-in-out"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 Enquiry Now
//               </a>
//             </div>
//           </div>
//         ))}
//       </div>
//       <RatingCarousel />
//     </div>
//   );
// };

// export default UPVCProductScreen;








import { useEffect, useState } from "react";  
import RatingCarousel from "../components/RatingCarousel";
import { useNavigate } from 'react-router-dom';

const UPVCProductScreen = () => {
  const navigate = useNavigate();
  const [showBackButton, setShowBackButton] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    const handleScroll = () => {
      const header = document.getElementById('header');
      const scrollY = window.scrollY;

      if (!header || scrollY > header.clientHeight) {
          setShowBackButton(true);
      } else {
          setShowBackButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const products = [
    {
        name: "JK Pipe",
        brand: "STAR",
        material: "PVC",
        size: "3/4 Inch",
        length: "100 ft",
        usageApplication: "Garden Watering Pipe",
        description: "JK Pipes make premium quality PVC transparent flexible garden pipes. We offer a range of garden pipes to our clients using quality raw material and techniques according to customer specifications and requirements. These are available in various shapes and sizes as per the latest market trends and requirements. Raw material used in the production process is of optimum quality, ensuring durability and strength.",
        color: "Transparent",
        country: "Made in India",
        imageUrl: "/images/pvc-garden.webp",
        features: [
          "Highly flexible nature even at very low or high temperatures",
          "Fluorescent color",
          "Chemical resistant",
          "Non-pressure application",
          "High quality and long lasting"
        ],
        application: [
          "Garden watering pipe",
          "Construction sites",
          "Residential areas",
          "Domestic delivery of water",
          "Petrol, diesel transportation",
          "Water sprinkler systems"
        ]
    }
  ];

  return (
    <div className="py-12 px-8 bg-slate-200 min-h-screen">
      <button 
        onClick={() => navigate(-1)}
        className="fixed top-4 left-4 bg-black text-white text-lg font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-blue-900 transition duration-300 ease-in-out z-50"
      >
        ← Back
      </button>
      
      <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">Garden Pipes</h2>
      <p className="text-center mb-12 text-lg text-gray-600">Explore our range of UPVC pipes:</p>

      <div className="grid gap-8 max-w-4xl mx-auto">
        {products.map((product, index) => (
          <div key={index} className="p-8 border rounded-xl shadow-lg bg-white hover:shadow-2xl transition duration-300 ease-in-out">
            <div className="w-full h-80 flex items-center justify-center mb-4 border-b pb-4">
              <img 
                src={product.imageUrl} 
                alt={product.name} 
                className="max-h-full max-w-full object-contain rounded-lg" 
                style={{ height: '300px' }}
              />
            </div>
            <h3 className="text-2xl font-semibold mb-2 text-gray-800">{product.name}</h3>

            <div className="border-t pt-4 mt-4">
              <table className="w-full text-left text-gray-700">
                <tbody>
                  <tr className="border-b">
                    <td className="py-2 font-semibold">Brand</td>
                    <td className="py-2">{product.brand}</td>
                  </tr>
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
                    <td className="py-2 font-semibold">Color</td>
                    <td className="py-2">{product.color}</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-semibold">Country of Origin</td>
                    <td className="py-2">{product.country}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Description Section */}
            <div className="pt-4 text-gray-700 text-lg">
              <p><strong>Description:</strong> {product.description}</p>
            </div>

            {/* Features Section */}
            <div className="pt-4 text-gray-700 text-lg">
              <p><strong>Features:</strong></p>
              <ul className="list-disc pl-6">
                {product.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>

            {/* Application Section */}
            <div className="pt-4 text-gray-700 text-lg">
              <p><strong>Application:</strong></p>
              <ul className="list-disc pl-6">
                {product.application.map((app, idx) => (
                  <li key={idx}>{app}</li>
                ))}
              </ul>
            </div>

            {/* Enquiry Button */}
            <div className="mt-4 text-center">
              <a 
                href={`https://wa.me/919405799633?text=I'm%20interested%20in%20enquiring%20about%20${encodeURIComponent(product.name)}`}
                className="bg-blue-500 text-white text-lg font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 ease-in-out"
                target="_blank" 
                rel="noopener noreferrer"
              >
                Enquiry Now
              </a>
            </div>
          </div>
        ))}
      </div>
      <RatingCarousel />
    </div>
  );
};

export default UPVCProductScreen;
