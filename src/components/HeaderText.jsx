
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
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 1.5, delay, ease: "power2.out" }
      );
    };

    animateText(mainTitleRef.current, 0.5);
    animateText(subtitleRef.current, 1.5);
    animateText(productRangeRef.current, 2.5);
    animateText(qualityStatementRef.current, 3.5);
    animateText(closingStatementRef.current, 4.5);
  }, []);

  return (
    <header className="w-full bg-gray-800 py-4 flex flex-col items-center relative text-center">
      {/* ISO Certified PNG */}
      <img
        src="/iso.png"
        alt="ISO Certified"
        className="absolute top-0 transform -translate-y-1/2 mt-4"
        style={{ width: "80px", height: "80px" }}
      />

      {/* Main Title */}
      <h1 ref={mainTitleRef} className="text-white text-3xl font-bold mt-8">
        JK Pipes
      </h1>
      
      {/* Subtitle */}
      <p ref={subtitleRef} className="text-gray-300 mt-2 text-lg">
        Established in 2012, JK Pipes (J K Technoplast Private Limited), based in Jalna, Maharashtra, is an ISO 9001:2015 certified private limited company and a world pioneer in innovative and fastest-growing piping solutions.
      </p>

      {/* Product Range */}
      <p ref={productRangeRef} className="text-gray-300 mt-4">
        We manufacture and supply a diverse range of high-quality products, including HDPE Pipes, Submersible Pipes, Sprinkler Pipes and Fittings, PVC Pipes, SWR Pipes, and more.
      </p>

      {/* Quality Statement */}
      <p ref={qualityStatementRef} className="text-gray-300 mt-4">
        Our products are crafted under the guidance of experienced professionals, using premium-grade materials sourced from trusted and certified vendors. Utilizing cutting-edge technology and adhering to the highest quality standards, we deliver pipes with seamless finishes, diverse designs, and competitive pricing.
      </p>

      {/* Closing Statement */}
      <p ref={closingStatementRef} className="text-gray-300 mt-4 mb-4">
        Committed to innovation and excellence, we ensure timely delivery and superior quality, establishing ourselves as a trusted choice and building a substantial client base globally.
      </p>
    </header>
  );
};

export default Header;
