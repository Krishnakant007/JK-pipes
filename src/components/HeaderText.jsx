
// const Header = () => {
//   return (
//     <header className="w-full bg-gray-800 py-4 flex flex-col items-center relative text-center">
//       {/* ISO Certified PNG */}
//       <img
//         src="/iso.png" // Path relative to the public folder
//         alt="ISO Certified"
//         className="absolute top-0 transform -translate-y-1/2 mt-4"
//         style={{ width: "80px", height: "80px" }} // Adjust size as needed
//       />

//       {/* Main Title */}
//       <h1 className="text-white text-3xl font-bold mt-8">JK Pipes</h1>
      
//       {/* Subtitle */}
//       <p className="text-gray-300 mt-2 text-lg">
//         Established in 2012, JK Pipes (J K Technoplast Private Limited), based in Jalna, Maharashtra, is an ISO 9001:2015 certified private limited company and a world pioneer in innovative and fastest-growing piping solutions.
//       </p>

//       {/* Product Range */}
//       <p className="text-gray-300 mt-4">
//         We manufacture and supply a diverse range of high-quality products, including HDPE Pipes, Submersible Pipes, Sprinkler Pipes and Fittings, PVC Pipes, SWR Pipes, and more.
//       </p>

//       {/* Quality Statement */}
//       <p className="text-gray-300 mt-4">
//         Our products are crafted under the guidance of experienced professionals, using premium-grade materials sourced from trusted and certified vendors. Utilizing cutting-edge technology and adhering to the highest quality standards, we deliver pipes with seamless finishes, diverse designs, and competitive pricing.
//       </p>

//       {/* Closing Statement */}
//       <p className="text-gray-300 mt-4 mb-4">
//         Committed to innovation and excellence, we ensure timely delivery and superior quality, establishing ourselves as a trusted choice and building a substantial client base globally.
//       </p>
//     </header>
//   );
// };

// export default Header;



// import { useEffect, useRef } from "react";
// import gsap from "gsap";

// const Header = () => {
//   const mainTitleRef = useRef();
//   const subtitleRef = useRef();
//   const productRangeRef = useRef();
//   const qualityStatementRef = useRef();
//   const closingStatementRef = useRef();

//   useEffect(() => {
//     const animateText = (element, delay = 0) => {
//       gsap.fromTo(
//         element,
//         { opacity: 0, x: -20 },
//         { opacity: 1, x: 0, duration: 1.5, delay, ease: "power2.out" }
//       );
//     };

//     animateText(mainTitleRef.current, 0.5);
//     animateText(subtitleRef.current, 1.5);
//     animateText(productRangeRef.current, 2.5);
//     animateText(qualityStatementRef.current, 3.5);
//     animateText(closingStatementRef.current, 4.5);
//   }, []);

//   return (
//     <header className="w-full bg-gray-800 py-4 flex flex-col items-center relative text-center">
//       {/* ISO Certified PNG */}
//       <img
//         src="/iso.png"
//         alt="ISO Certified"
//         className="absolute top-0 transform -translate-y-1/2 mt-4"
//         style={{ width: "80px", height: "80px" }}
//       />

//       {/* Main Title */}
//       <h1 ref={mainTitleRef} className="text-white text-3xl font-bold mt-8">
//         JK Pipes
//       </h1>
      
//       {/* Subtitle */}
//       <p ref={subtitleRef} className="text-gray-300 mt-2 text-lg">
//         Established in 2012, JK Pipes (J K Technoplast Private Limited), based in Jalna, Maharashtra, is an ISO 9001:2015 certified private limited company and a world pioneer in innovative and fastest-growing piping solutions.
//       </p>

//       {/* Product Range */}
//       <p ref={productRangeRef} className="text-gray-300 mt-4">
//         We manufacture and supply a diverse range of high-quality products, including HDPE Pipes, Submersible Pipes, Sprinkler Pipes and Fittings, PVC Pipes, SWR Pipes, and more.
//       </p>

//       {/* Quality Statement */}
//       <p ref={qualityStatementRef} className="text-gray-300 mt-4">
//         Our products are crafted under the guidance of experienced professionals, using premium-grade materials sourced from trusted and certified vendors. Utilizing cutting-edge technology and adhering to the highest quality standards, we deliver pipes with seamless finishes, diverse designs, and competitive pricing.
//       </p>

//       {/* Closing Statement */}
//       <p ref={closingStatementRef} className="text-gray-300 mt-4 mb-4">
//         Committed to innovation and excellence, we ensure timely delivery and superior quality, establishing ourselves as a trusted choice and building a substantial client base globally.
//       </p>
//     </header>
//   );
// };

// export default Header;



// import { useEffect, useRef } from "react";
// import gsap from "gsap";

// const Header = () => {
//   const mainTitleRef = useRef();
//   const subtitleRef = useRef();
//   const productRangeRef = useRef();
//   const qualityStatementRef = useRef();
//   const closingStatementRef = useRef();

//   useEffect(() => {
//     const animateText = (element, delay = 0) => {
//       gsap.fromTo(
//         element,
//         { opacity: 0, x: -20 },
//         { opacity: 1, x: 0, duration: 1.5, delay, ease: "power2.out" }
//       );
//     };

//     animateText(mainTitleRef.current, 0.5);
//     animateText(subtitleRef.current, 1.5);
//     animateText(productRangeRef.current, 2.5);
//     animateText(qualityStatementRef.current, 3.5);
//     animateText(closingStatementRef.current, 4.5);
//   }, []);

//   return (
//     <header className="w-full bg-gray-800 py-8 flex flex-col items-center relative text-center px-4 md:px-10 lg:px-20">
//       {/* ISO Certified PNG */}
//       <img
//         src="/iso.png"
//         alt="ISO Certified"
//         className="absolute top-0 transform -translate-y-1/2 mt-4"
//         style={{ width: "80px", height: "80px" }}
//       />

//       {/* Main Title */}
//       <h1 ref={mainTitleRef} className="text-white text-3xl md:text-4xl font-bold mt-16">
//         JK Pipes
//       </h1>

//       {/* Subtitle */}
//       <p ref={subtitleRef} className="text-gray-300 mt-2 text-lg md:text-xl">
//         Established in 2012, JK Pipes (J K Technoplast Private Limited), based in Jalna, Maharashtra, is an ISO 9001:2015 certified private limited company and a world pioneer in innovative and fastest-growing piping solutions.
//       </p>

//       {/* Product Range */}
//       <p ref={productRangeRef} className="text-gray-300 mt-4 text-base md:text-lg">
//         We manufacture and supply a diverse range of high-quality products, including HDPE Pipes, Submersible Pipes, Sprinkler Pipes and Fittings, PVC Pipes, SWR Pipes, and more.
//       </p>

//       {/* Quality Statement */}
//       <p ref={qualityStatementRef} className="text-gray-300 mt-4 text-base md:text-lg">
//         Our products are crafted under the guidance of experienced professionals, using premium-grade materials sourced from trusted and certified vendors. Utilizing cutting-edge technology and adhering to the highest quality standards, we deliver pipes with seamless finishes, diverse designs, and competitive pricing.
//       </p>

//       {/* Closing Statement */}
//       <p ref={closingStatementRef} className="text-gray-300 mt-4 mb-4 text-base md:text-lg">
//         Committed to innovation and excellence, we ensure timely delivery and superior quality, establishing ourselves as a trusted choice and building a substantial client base globally.
//       </p>
//     </header>
//   );
// };

// export default Header;


// import { useEffect, useRef } from "react";
// import gsap from "gsap";

// const Header = () => {
//   const mainTitleRef = useRef();
//   const subtitleRef = useRef();
//   const productRangeRef = useRef();
//   const qualityStatementRef = useRef();
//   const closingStatementRef = useRef();

//   useEffect(() => {
//     const animateText = (element, delay = 0) => {
//       gsap.fromTo(
//         element,
//         { opacity: 0, y: 20 },
//         { opacity: 1, y: 0, duration: 1, delay, ease: "power2.out" }
//       );
//     };

//     animateText(mainTitleRef.current, 0.5);
//     animateText(subtitleRef.current, 1);
//     animateText(productRangeRef.current, 1.5);
//     animateText(qualityStatementRef.current, 2);
//     animateText(closingStatementRef.current, 2.5);
//   }, []);

//   return (
//     <header className="w-full flex flex-col items-center text-center py-8 px-4 md:px-10 lg:px-20 pb-12">
//       {/* ISO Certified PNG */}
//       <img
//         src="/iso.png"
//         alt="ISO Certified"
//         className="absolute top-0 transform -translate-y-1/2 mt-4"
//         style={{ width: "80px", height: "80px" }}
//       />

//       {/* Main Title Card */}
//       <div
//         ref={mainTitleRef}
//         className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-4xl md:text-5xl font-bold py-6 px-8 rounded-lg shadow-lg mt-20 mb-4"
//       >
//         JK Pipes
//       </div>

//       {/* Subtitle Card */}
//       <div
//         ref={subtitleRef}
//         className="bg-gradient-to-r from-blue-400 to-purple-500 text-white text-lg md:text-2xl py-4 px-6 rounded-lg shadow-md mt-4"
//       >
//         Established in 2012, JK Pipes (J K Technoplast Private Limited), based in Jalna, Maharashtra, is an ISO 9001:2015 certified private limited company and a world pioneer in innovative and fastest-growing piping solutions.
//       </div>

//       {/* Product Range Card */}
//       <div
//         ref={productRangeRef}
//         className="bg-gradient-to-r from-blue-300 to-purple-400 text-white text-base md:text-xl py-4 px-6 rounded-lg shadow-md mt-4"
//       >
//         We manufacture and supply a diverse range of high-quality products, including HDPE Pipes, Submersible Pipes, Sprinkler Pipes and Fittings, PVC Pipes, SWR Pipes, and more.
//       </div>

//       {/* Quality Statement Card */}
//       <div
//         ref={qualityStatementRef}
//         className="bg-gradient-to-r from-blue-200 to-purple-300 text-white text-base md:text-xl py-4 px-6 rounded-lg shadow-md mt-4"
//       >
//         Our products are crafted under the guidance of experienced professionals, using premium-grade materials sourced from trusted and certified vendors. Utilizing cutting-edge technology and adhering to the highest quality standards, we deliver pipes with seamless finishes, diverse designs, and competitive pricing.
//       </div>

//       {/* Closing Statement Card */}
//       <div
//         ref={closingStatementRef}
//         className="bg-gradient-to-r from-blue-100 to-purple-200 text-white text-base md:text-xl py-4 px-6 rounded-lg shadow-md mt-4 mb-8"
//       >
//         Committed to innovation and excellence, we ensure timely delivery and superior quality, establishing ourselves as a trusted choice and building a substantial client base globally.
//       </div>
//     </header>
//   );
// };

// export default Header;




// import { useEffect, useRef } from "react";
// import gsap from "gsap";

// const Header = () => {
//   const mainTitleRef = useRef();
//   const subtitleRef = useRef();
//   const productRangeRef = useRef();
//   const qualityStatementRef = useRef();
//   const closingStatementRef = useRef();

//   useEffect(() => {
//     const animateText = (element, delay = 0) => {
//       gsap.fromTo(
//         element,
//         { opacity: 0, y: 20 },
//         { opacity: 1, y: 0, duration: 1, delay, ease: "power2.out" }
//       );
//     };

//     animateText(mainTitleRef.current, 0.5);
//     animateText(subtitleRef.current, 1);
//     animateText(productRangeRef.current, 1.5);
//     animateText(qualityStatementRef.current, 2);
//     animateText(closingStatementRef.current, 2.5);
//   }, []);

//   return (
//     <header className="w-full flex justify-center py-12 px-4">
//       <div className="bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-700 text-white w-full max-w-5xl p-10 rounded-lg shadow-lg">
//         {/* ISO Certified PNG */}
//         <img
//           src="/iso.png"
//           alt="ISO Certified"
//           className="mx-auto mb-6"
//           style={{ width: "80px", height: "80px" }}
//         />

//         {/* Main Title */}
//         <h1 ref={mainTitleRef} className="text-4xl md:text-5xl font-bold mb-6 text-center">
//           JK Pipes
//         </h1>

//         {/* Subtitle */}
//         <p ref={subtitleRef} className="text-lg md:text-2xl mb-6 leading-relaxed text-center">
//           Established in 2012, JK Pipes (J K Technoplast Private Limited), based in Jalna, Maharashtra, is an ISO 9001:2015 certified private limited company and a world pioneer in innovative and fastest-growing piping solutions.
//         </p>

//         {/* Product Range */}
//         <p ref={productRangeRef} className="text-base md:text-xl mb-6 leading-relaxed text-center">
//           We manufacture and supply a diverse range of high-quality products, including HDPE Pipes, Submersible Pipes, Sprinkler Pipes and Fittings, PVC Pipes, SWR Pipes, and more.
//         </p>

//         {/* Quality Statement */}
//         <p ref={qualityStatementRef} className="text-base md:text-xl mb-6 leading-relaxed text-center">
//           Our products are crafted under the guidance of experienced professionals, using premium-grade materials sourced from trusted and certified vendors. Utilizing cutting-edge technology and adhering to the highest quality standards, we deliver pipes with seamless finishes, diverse designs, and competitive pricing.
//         </p>

//         {/* Closing Statement */}
//         <p ref={closingStatementRef} className="text-base md:text-xl leading-relaxed text-center">
//           Committed to innovation and excellence, we ensure timely delivery and superior quality, establishing ourselves as a trusted choice and building a substantial client base globally.
//         </p>
//       </div>
//     </header>
//   );
// };

// export default Header;

// import { useEffect, useRef } from "react";
// import gsap from "gsap";

// const Header = () => {
//   const mainTitleRef = useRef();
//   const subtitleRef = useRef();
//   const productRangeRef = useRef();
//   const qualityStatementRef = useRef();
//   const closingStatementRef = useRef();

//   useEffect(() => {
//     const animateText = (element, delay = 0) => {
//       gsap.fromTo(
//         element,
//         { opacity: 0, y: 20 },
//         { opacity: 1, y: 0, duration: 1, delay, ease: "power2.out" }
//       );
//     };

//     animateText(mainTitleRef.current, 0.5);
//     animateText(subtitleRef.current, 1);
//     animateText(productRangeRef.current, 1.5);
//     animateText(qualityStatementRef.current, 2);
//     animateText(closingStatementRef.current, 2.5);
//   }, []);

//   return (
//     <header className="w-full flex flex-col items-center py-12 px-4">
//       {/* Big About Us Title */}
//       <h2 className="text-5xl md:text-6xl font-bold text-black mb-10 text-center">
//         About Us
//       </h2>

//       {/* Main Content Card */}
//       <div className="bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-700 text-white w-full max-w-5xl p-10 rounded-lg shadow-lg">
//         {/* ISO Certified PNG */}
//         <img
//           src="/iso.png"
//           alt="ISO Certified"
//           className="mx-auto mb-6"
//           style={{ width: "80px", height: "80px" }}
//         />

//         {/* Main Title */}
//         <h1 ref={mainTitleRef} className="text-4xl md:text-5xl font-bold mb-6 text-center">
//           JK Pipes
//         </h1>

//         {/* Subtitle */}
//         <p ref={subtitleRef} className="text-lg md:text-2xl mb-6 leading-relaxed text-center">
//           We are one of the prominent manufacturers and suppliers of high quality and reliable PVC Pipes, HDPE Pipe, Garden Pipe, Sprinkler Pipe, and UPVC Plumbing Pipe since 2012. We have grown by leaps and bounds owing to our positive efforts as well as strong commitment towards quality.
//         </p>

//         {/* Product Range */}
//         <p ref={productRangeRef} className="text-base md:text-xl mb-6 leading-relaxed text-center">
//           Our quality products are fabricated using high-grade material and the latest techniques prevalent in the industry. Widely appreciated for their durability, easy maintenance, and other attributes, our products can be tailored as per client's requirements.
//         </p>

//         {/* Quality Statement */}
//         <p ref={qualityStatementRef} className="text-base md:text-xl mb-6 leading-relaxed text-center">
//           We consist of a professionally trained and skilled workforce. They work in close coordination with each other to ensure total customer satisfaction. Our warehouse experts ensure safety and easy storage of the products.
//         </p>

//         {/* Closing Statement */}
//         <p ref={closingStatementRef} className="text-base md:text-xl leading-relaxed text-center">
//           Furthermore, they are supported by technical assistants who have deep knowledge of their domain. The supply of products and other business dealings are executed by our skilled sales professionals in an efficient manner.
//         </p>
//       </div>
//     </header>
//   );
// };

// export default Header;


// import { useEffect, useRef } from "react";
// import gsap from "gsap";

// const Header = () => {
//   const mainTitleRef = useRef();
//   const subtitleRef = useRef();
//   const productRangeRef = useRef();
//   const qualityStatementRef = useRef();
//   const closingStatementRef = useRef();

//   useEffect(() => {
//     const animateText = (element, delay = 0) => {
//       gsap.fromTo(
//         element,
//         { opacity: 0, y: 20 },
//         { opacity: 1, y: 0, duration: 1, delay, ease: "power2.out" }
//       );
//     };

//     animateText(mainTitleRef.current, 0.5);
//     animateText(subtitleRef.current, 1);
//     animateText(productRangeRef.current, 1.5);
//     animateText(qualityStatementRef.current, 2);
//     animateText(closingStatementRef.current, 2.5);
//   }, []);

//   return (
//     <header className="w-full flex flex-col items-center py-12 px-4">
//       {/* Big About Us Title */}
//       <h2 className="text-5xl md:text-6xl font-bold text-black mb-10 text-center">
//         About Us
//       </h2>

//       {/* Main Content Area */}
//       <div className="flex flex-col md:flex-row items-center w-full max-w-5xl bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-700 text-white rounded-lg shadow-lg">
//         {/* Left Side Image */}
//         <div className="flex-shrink-0 w-full md:w-1/2">
//           <img
//             src="/left.jpg"
//             alt="Company Vision"
//             className="w-full h-full object-cover rounded-l-lg"
//           />
//         </div>

//         {/* Right Side Text Content */}
//         <div className="w-full md:w-1/2 p-10">
//           {/* ISO Certified PNG */}
//           <img
//             src="/iso.png"
//             alt="ISO Certified"
//             className="mx-auto mb-6"
//             style={{ width: "80px", height: "80px" }}
//           />

//           {/* Main Title */}
//           <h1 ref={mainTitleRef} className="text-4xl md:text-5xl font-bold mb-6 text-center">
//             JK Pipes
//           </h1>

//           {/* Subtitle */}
//           <p ref={subtitleRef} className="text-lg md:text-2xl mb-6 leading-relaxed text-center">
//             We are one of the prominent manufacturers and suppliers of high quality and reliable PVC Pipes, HDPE Pipe, Garden Pipe, Sprinkler Pipe, and UPVC Plumbing Pipe since 2012. We have grown by leaps and bounds owing to our positive efforts as well as strong commitment towards quality.
//           </p>

//           {/* Product Range */}
//           <p ref={productRangeRef} className="text-base md:text-xl mb-6 leading-relaxed text-center">
//             Our quality products are fabricated using high-grade material and the latest techniques prevalent in the industry. Widely appreciated for their durability, easy maintenance, and other attributes, our products can be tailored as per client's requirements.
//           </p>

//           {/* Quality Statement */}
//           <p ref={qualityStatementRef} className="text-base md:text-xl mb-6 leading-relaxed text-center">
//             We consist of a professionally trained and skilled workforce. They work in close coordination with each other to ensure total customer satisfaction. Our warehouse experts ensure safety and easy storage of the products.
//           </p>

//           {/* Closing Statement */}
//           <p ref={closingStatementRef} className="text-base md:text-xl leading-relaxed text-center">
//             Furthermore, they are supported by technical assistants who have deep knowledge of their domain. The supply of products and other business dealings are executed by our skilled sales professionals in an efficient manner.
//           </p>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;






// import { useEffect, useRef } from "react";
// import gsap from "gsap";

// const Header = () => {
//   const mainTitleRef = useRef();
//   const subtitleRef = useRef();
//   const productRangeRef = useRef();
//   const qualityStatementRef = useRef();
//   const closingStatementRef = useRef();

//   useEffect(() => {
//     const animateText = (element, delay = 0) => {
//       gsap.fromTo(
//         element,
//         { opacity: 0, y: 20 },
//         { opacity: 1, y: 0, duration: 1, delay, ease: "power2.out" }
//       );
//     };

//     animateText(mainTitleRef.current, 0.5);
//     animateText(subtitleRef.current, 1);
//     animateText(productRangeRef.current, 1.5);
//     animateText(qualityStatementRef.current, 2);
//     animateText(closingStatementRef.current, 2.5);
//   }, []);

//   return (
//     <header className="w-full flex flex-col items-center py-12 px-4">
//       {/* Big About Us Title */}
//       <h2 className="text-5xl md:text-6xl font-bold mb-10 text-center" style={{ fontFamily: "'Poppins', sans-serif" }}>
//         About Us
//       </h2>

//       {/* Main Content Area */}
//       <div className="flex flex-col md:flex-row items-center w-full max-w-5xl bg-white text-black rounded-lg shadow-lg">
//         {/* Left Side Image */}
//         <div className="flex-shrink-0 w-full md:w-1/2">
//           <img
//             src="/left.jpg"
//             alt="Company Vision"
//             className="w-full h-full object-cover rounded-l-lg"
//           />
//         </div>

//         {/* Right Side Text Content */}
//         <div className="w-full md:w-1/2 p-10">
//           {/* ISO Certified PNG */}
//           <img
//             src="/iso.png"
//             alt="ISO Certified"
//             className="mx-auto mb-6"
//             style={{ width: "80px", height: "80px" }}
//           />

//           {/* Main Title */}
//           <h1 ref={mainTitleRef} className="text-4xl md:text-5xl font-bold mb-6 text-center" style={{ fontFamily: "'Poppins', sans-serif" }}>
//             JK Pipes
//           </h1>

//           {/* Subtitle */}
//           <p ref={subtitleRef} className="text-lg md:text-xl mb-6 leading-relaxed text-center" style={{ fontFamily: "'Poppins', sans-serif" }}>
//             We are one of the prominent manufacturers and suppliers of high-quality and reliable PVC Pipes, HDPE Pipe, Garden Pipe, Sprinkler Pipe, and UPVC Plumbing Pipe since 2012. We have grown by leaps and bounds owing to our positive efforts and strong commitment to quality.
//           </p>

//           {/* Product Range */}
//           <p ref={productRangeRef} className="text-base md:text-lg mb-6 leading-relaxed text-center" style={{ fontFamily: "'Poppins', sans-serif" }}>
//             Our quality products are fabricated using high-grade material and the latest techniques prevalent in the industry. Widely appreciated for their durability and other attributes, our products can be tailored as per client's requirements.
//           </p>

//           {/* Quality Statement */}
//           <p ref={qualityStatementRef} className="text-base md:text-lg mb-6 leading-relaxed text-center" style={{ fontFamily: "'Poppins', sans-serif" }}>
//             We consist of a professionally trained and skilled workforce. They work in close coordination with each other to ensure total customer satisfaction.
//           </p>

//           {/* Closing Statement */}
//           <p ref={closingStatementRef} className="text-base md:text-lg leading-relaxed text-center" style={{ fontFamily: "'Poppins', sans-serif" }}>
//             Furthermore, they are supported by technical assistants who have deep knowledge of their domain. The supply of products and other business dealings are executed by our skilled sales professionals in an efficient manner.
//           </p>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

// import { useEffect, useRef } from "react";
// import gsap from "gsap";

// const Header = () => {
//   const mainTitleRef = useRef();
//   const subtitleRef = useRef();
//   const productRangeRef = useRef();
//   const qualityStatementRef = useRef();
//   const closingStatementRef = useRef();

//   useEffect(() => {
//     const animateText = (element, delay = 0) => {
//       gsap.fromTo(
//         element,
//         { opacity: 0, y: 20 },
//         { opacity: 1, y: 0, duration: 1, delay, ease: "power2.out" }
//       );
//     };

//     animateText(mainTitleRef.current, 0.5);
//     animateText(subtitleRef.current, 1);
//     animateText(productRangeRef.current, 1.5);
//     animateText(qualityStatementRef.current, 2);
//     animateText(closingStatementRef.current, 2.5);
//   }, []);

//   return (
//     <header className="w-full flex flex-col items-center py-12 px-4">
//       {/* Big About Us Title */}
//       <h2 className="text-5xl md:text-6xl font-bold mb-10 text-center" style={{ fontFamily: "'Poppins', sans-serif" }}>
//         About Us
//       </h2>

//       {/* Main Content Area */}
//       <div className="flex flex-col md:flex-row items-center w-full max-w-5xl text-black rounded-lg shadow-lg">
//         {/* Left Side Image */}
//         <div className="flex-shrink-0 w-full md:w-1/2">
//           <img
//             src="/left.jpg"
//             alt="Company Vision"
//             className="w-full h-full object-cover rounded-l-lg"
//           />
//         </div>

//         {/* Right Side Text Content */}
//         <div className="w-full md:w-1/2 p-10">
//           {/* ISO Certified PNG */}
//           <img
//             src="/is.jpg"
//             alt="ISO Certified"
//             className="mx-auto mb-6"
//             style={{ width: "80px", height: "80px" }}
//           />

//           {/* Main Title */}
//           <h1 ref={mainTitleRef} className="text-4xl md:text-5xl font-bold mb-6 text-center" style={{ fontFamily: "'Poppins', sans-serif" }}>
//             JK Pipes
//           </h1>

//           {/* Subtitle */}
//           <p ref={subtitleRef} className="text-lg md:text-xl mb-6 leading-relaxed text-center  font-bold " style={{ fontFamily: "'Poppins', sans-serif" }}>
//             We are one of the prominent manufacturers and suppliers of high-quality and reliable PVC Pipes, HDPE Pipe, Garden Pipe, Sprinkler Pipe, and UPVC Plumbing Pipe since 2012. We have grown by leaps and bounds owing to our positive efforts and strong commitment to quality.
//           </p>

//           {/* Product Range */}
//           <p ref={productRangeRef} className="text-base md:text-lg mb-6 leading-relaxed text-center font-bold" style={{ fontFamily: "'Poppins', sans-serif" }}>
//             Our quality products are fabricated using high-grade material and the latest techniques prevalent in the industry. Widely appreciated for their durability and other attributes, our products can be tailored as per client's requirements.
//           </p>

//           {/* Quality Statement */}
//           <p ref={qualityStatementRef} className="text-base md:text-lg mb-6 leading-relaxed text-center font-bold" style={{ fontFamily: "'Poppins', sans-serif" }}>
//             We consist of a professionally trained and skilled workforce. They work in close coordination with each other to ensure total customer satisfaction.
//           </p>

//           {/* Closing Statement */}
//           <p ref={closingStatementRef} className="text-base md:text-lg leading-relaxed text-center font-bold" style={{ fontFamily: "'Poppins', sans-serif" }}>
//             Furthermore, they are supported by technical assistants who have deep knowledge of their domain. The supply of products and other business dealings are executed by our skilled sales professionals in an efficient manner.
//           </p>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;






// import { useEffect, useRef } from "react";
// import gsap from "gsap";

// const Header = () => {
//   const mainTitleRef = useRef();
//   const subtitleRef = useRef();
//   const productRangeRef = useRef();
//   const qualityStatementRef = useRef();
//   const closingStatementRef = useRef();
//   const imageRef = useRef();

//   useEffect(() => {
//     // Animate image on load with scale and fade-in effect
//     gsap.fromTo(
//       imageRef.current,
//       { opacity: 0, scale: 1.1 },
//       { opacity: 1, scale: 1, duration: 1.5, ease: "power2.out" }
//     );

//     // Typewriter animation function for text
//     const typewriteText = (element, text, delay = 0) => {
//       let index = 0;
//       const typingSpeed = 50;
      
//       const typeInterval = setInterval(() => {
//         element.innerText = text.slice(0, index);
//         index += 1;
//         if (index > text.length) clearInterval(typeInterval);
//       }, typingSpeed);

//       setTimeout(() => clearInterval(typeInterval), delay * 1000);
//     };

//     // Apply animations for each text element with a delay
//     typewriteText(mainTitleRef.current, "JK Pipes", 0.5);
//     typewriteText(
//       subtitleRef.current,
//       "We are one of the prominent manufacturers and suppliers of high-quality and reliable PVC Pipes, HDPE Pipe, Garden Pipe, Sprinkler Pipe, and UPVC Plumbing Pipe since 2012. We have grown by leaps and bounds owing to our positive efforts and strong commitment to quality.",
//       1
//     );
//     typewriteText(
//       productRangeRef.current,
//       "Our quality products are fabricated using high-grade material and the latest techniques prevalent in the industry. Widely appreciated for their durability and other attributes, our products can be tailored as per client's requirements.",
//       1.5
//     );
//     typewriteText(
//       qualityStatementRef.current,
//       "We consist of a professionally trained and skilled workforce. They work in close coordination with each other to ensure total customer satisfaction.",
//       2
//     );
//     typewriteText(
//       closingStatementRef.current,
//       "Furthermore, they are supported by technical assistants who have deep knowledge of their domain. The supply of products and other business dealings are executed by our skilled sales professionals in an efficient manner.",
//       2.5
//     );
//   }, []);

//   return (
//     <header className="w-full flex flex-col items-center py-12 px-4">
//       {/* Big About Us Title */}
//       <h2 className="text-5xl md:text-6xl font-bold mb-10 text-center" style={{ fontFamily: "'Poppins', sans-serif" }}>
//         About Us
//       </h2>

//       {/* Main Content Area */}
//       <div className="flex flex-col md:flex-row items-center w-full max-w-5xl text-black rounded-lg shadow-lg">
//         {/* Left Side Image */}
//         <div className="flex-shrink-0 w-full md:w-1/2">
//           <img
//             ref={imageRef}
//             src="/left.jpg"
//             alt="Company Vision"
//             className="w-full h-full object-cover rounded-l-lg"
//           />
//         </div>

//         {/* Right Side Text Content */}
//         <div className="w-full md:w-1/2 p-10">
//           {/* ISO Certified PNG */}
//           <img
//             src="/is.jpg"
//             alt="ISO Certified"
//             className="mx-auto mb-6"
//             style={{ width: "80px", height: "80px" }}
//           />

//           {/* Main Title */}
//           <h1 ref={mainTitleRef} className="text-4xl md:text-5xl font-bold mb-6 text-center" style={{ fontFamily: "'Poppins', sans-serif" }} />

//           {/* Subtitle */}
//           <p ref={subtitleRef} className="text-lg md:text-xl mb-6 leading-relaxed text-center font-bold" style={{ fontFamily: "'Poppins', sans-serif" }} />

//           {/* Product Range */}
//           <p ref={productRangeRef} className="text-base md:text-lg mb-6 leading-relaxed text-center font-bold" style={{ fontFamily: "'Poppins', sans-serif" }} />

//           {/* Quality Statement */}
//           <p ref={qualityStatementRef} className="text-base md:text-lg mb-6 leading-relaxed text-center font-bold" style={{ fontFamily: "'Poppins', sans-serif" }} />

//           {/* Closing Statement */}
//           <p ref={closingStatementRef} className="text-base md:text-lg leading-relaxed text-center font-bold" style={{ fontFamily: "'Poppins', sans-serif" }} />
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;



import { useEffect, useRef } from "react";
import gsap from "gsap";

const Header = () => {
  const mainTitleRef = useRef();
  const subtitleRef = useRef();
  const productRangeRef = useRef();
  const qualityStatementRef = useRef();
  const closingStatementRef = useRef();
  const imageRef = useRef();

  useEffect(() => {
    // Smooth image animation on load
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, scale: 1.2, y: 30 },
      { opacity: 1, scale: 1, y: 0, duration: 1.5, ease: "power2.out" }
    );

    // Text fade-in animation function
    const animateText = (element, delay = 0) => {
      gsap.fromTo(
        element,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, delay, ease: "power2.out" }
      );
    };

    // Apply text animations with delay for staggered appearance
    animateText(mainTitleRef.current, 0.5);
    animateText(subtitleRef.current, 1);
    animateText(productRangeRef.current, 1.5);
    animateText(qualityStatementRef.current, 2);
    animateText(closingStatementRef.current, 2.5);
  }, []);

  return (
    <header className="w-full flex flex-col items-center py-12 px-4  ">
      {/* Big About Us Title */}
      <h2 className="text-5xl md:text-6xl font-bold mb-10 text-center text-blue-600" style={{ fontFamily: "'Poppins', sans-serif" }}>
        About Us
      </h2>

      {/* Main Content Area */}
      <div className="flex flex-col md:flex-row items-center w-full max-w-5xl text-black rounded-lg shadow-lg">
        {/* Left Side Image */}
        <div className="flex-shrink-0 w-full md:w-1/2">
          <img
            ref={imageRef}
            src="/left.jpg"
            alt="Company Vision"
            className="w-full h-full object-cover rounded-l-lg"
          />
        </div>

        {/* Right Side Text Content */}
        <div className="w-full md:w-1/2 p-10">
          {/* ISO Certified PNG */}
          <img
            src="/is.jpg"
            alt="ISO Certified"
            className="mx-auto mb-6"
            style={{ width: "80px", height: "80px" }}
          />

          {/* Main Title */}
          <h1 ref={mainTitleRef} className="text-4xl md:text-5xl font-bold mb-6 text-cente bg-gradient-to-r from-violet-500 to-violet-900r" style={{ fontFamily: "'Poppins', sans-serif" }}>
            JK Pipes
          </h1>

          {/* Subtitle */}
          <p ref={subtitleRef} className="text-lg md:text-xl mb-6 leading-relaxed text-center font-bold" style={{ fontFamily: "'Poppins', sans-serif" }}>
            We are one of the prominent manufacturers and suppliers of high-quality and reliable PVC Pipes, HDPE Pipe, Garden Pipe, Sprinkler Pipe, and UPVC Plumbing Pipe since 2012. We have grown by leaps and bounds owing to our positive efforts and strong commitment to quality.
          </p>

          {/* Product Range */}
          <p ref={productRangeRef} className="text-base md:text-lg mb-6 leading-relaxed text-center font-bold" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Our quality products are fabricated using high-grade material and the latest techniques prevalent in the industry. Widely appreciated for their durability and other attributes, our products can be tailored as per client's requirements.
          </p>

          {/* Quality Statement */}
          <p ref={qualityStatementRef} className="text-base md:text-lg mb-6 leading-relaxed text-center font-bold" style={{ fontFamily: "'Poppins', sans-serif" }}>
            We consist of a professionally trained and skilled workforce. They work in close coordination with each other to ensure total customer satisfaction.
          </p>

          {/* Closing Statement */}
          <p ref={closingStatementRef} className="text-base md:text-lg leading-relaxed text-center font-bold" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Furthermore, they are supported by technical assistants who have deep knowledge of their domain. The supply of products and other business dealings are executed by our skilled sales professionals in an efficient manner.
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
