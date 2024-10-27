
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



import { useEffect, useRef } from "react";
import gsap from "gsap";

const Header = () => {
  const mainTitleRef = useRef();
  const subtitleRef = useRef();
  const productRangeRef = useRef();
  const qualityStatementRef = useRef();
  const closingStatementRef = useRef();

  useEffect(() => {
    const animateText = (element, delay = 0) => {
      gsap.fromTo(
        element,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, delay, ease: "power2.out" }
      );
    };

    animateText(mainTitleRef.current, 0.5);
    animateText(subtitleRef.current, 1);
    animateText(productRangeRef.current, 1.5);
    animateText(qualityStatementRef.current, 2);
    animateText(closingStatementRef.current, 2.5);
  }, []);

  return (
    <header className="w-full flex flex-col items-center py-12 px-4">
      {/* Big About Us Title */}
      <h2 className="text-5xl md:text-6xl font-bold text-black mb-10 text-center">
        About Us
      </h2>

      {/* Main Content Card */}
      <div className="bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-700 text-white w-full max-w-5xl p-10 rounded-lg shadow-lg">
        {/* ISO Certified PNG */}
        <img
          src="/iso.png"
          alt="ISO Certified"
          className="mx-auto mb-6"
          style={{ width: "80px", height: "80px" }}
        />

        {/* Main Title */}
        <h1 ref={mainTitleRef} className="text-4xl md:text-5xl font-bold mb-6 text-center">
          JK Pipes
        </h1>

        {/* Subtitle */}
        <p ref={subtitleRef} className="text-lg md:text-2xl mb-6 leading-relaxed text-center">
          Established in 2012, JK Pipes (J K Technoplast Private Limited), based in Jalna, Maharashtra, is an ISO 9001:2015 certified private limited company and a world pioneer in innovative and fastest-growing piping solutions.
        </p>

        {/* Product Range */}
        <p ref={productRangeRef} className="text-base md:text-xl mb-6 leading-relaxed text-center">
          We manufacture and supply a diverse range of high-quality products, including HDPE Pipes, Submersible Pipes, Sprinkler Pipes and Fittings, PVC Pipes, SWR Pipes, and more.
        </p>

        {/* Quality Statement */}
        <p ref={qualityStatementRef} className="text-base md:text-xl mb-6 leading-relaxed text-center">
          Our products are crafted under the guidance of experienced professionals, using premium-grade materials sourced from trusted and certified vendors. Utilizing cutting-edge technology and adhering to the highest quality standards, we deliver pipes with seamless finishes, diverse designs, and competitive pricing.
        </p>

        {/* Closing Statement */}
        <p ref={closingStatementRef} className="text-base md:text-xl leading-relaxed text-center">
          Committed to innovation and excellence, we ensure timely delivery and superior quality, establishing ourselves as a trusted choice and building a substantial client base globally.
        </p>
      </div>
    </header>
  );
};

export default Header;
