// import { useState, useEffect, useRef } from 'react';
// import gsap from 'gsap';

// const Header = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Added state for mobile menu
//   const logoRef = useRef(null); // Reference for the logo element

//   // Function to track scroll and animate logo on scroll
//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollPosition = window.scrollY;
//       if (scrollPosition > 0) {
//         setIsScrolled(true);
//         // Animate logo on scroll using GSAP
//         gsap.to(logoRef.current, {
//           opacity: 0,
//           scale: 0.8,
//           duration: 0.5,
//           ease: 'power1.out',
//         });
//       } else {
//         setIsScrolled(false);
//         // Animate logo back to visible when not scrolled
//         gsap.to(logoRef.current, {
//           opacity: 1,
//           scale: 1,
//           duration: 0.5,
//           ease: 'power1.out',
//         });
//       }
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <header
//       className={`sticky top-0 z-50 shadow-xl transition-all duration-300 ${
//         isScrolled ? 'bg-blue-500' : 'bg-transparent'
//       }`}
//     >
//       <div className="relative">
//         <div className="flex justify-between items-center px-10 p-3">
//           {/* Logo will animate on scroll */}
//           <img
//             ref={logoRef}
//             src="/logo.png"
//             width={90}
//             height={50}
//             alt="Logo"
//             className="rounded-md"
//           />
//           <div className="hidden md:flex space-x-8">
//             <h1 className="py-2 font-extrabold">Products</h1>
//             <h1 className="py-2 font-extrabold">Contacts</h1>
//             <h2 className="py-2 font-extrabold">Abouts</h2>
//           </div>
//           {/* Hamburger Icon for mobile */}
//           <button
//             className="md:hidden text-white"
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} // Toggle mobile menu
//             aria-label="Toggle Menu"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="w-8 h-8"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h16M4 18h16"
//               />
//             </svg>
//           </button>
//         </div>
//         {/* Mobile Menu */}
//         {isMobileMenuOpen && (
//           <div className="md:hidden flex flex-col items-start px-10 space-y-4">
//             <h1 className="py-2 font-extrabold">Products</h1>
//             <h1 className="py-2 font-extrabold">Contacts</h1>
//             <h2 className="py-2 font-extrabold">Abouts</h2>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// };

// export default Header;




// import { useState, useEffect, useRef } from 'react';
// import gsap from 'gsap';

// const Header = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const logoRef = useRef(null);

//   // Function to track scroll and animate logo on scroll
//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollPosition = window.scrollY;
//       if (scrollPosition > 0) {
//         setIsScrolled(true);
//         // Animate logo on scroll using GSAP
//         gsap.to(logoRef.current, {
//           opacity: 0,
//           scale: 0.8,
//           duration: 0.5,
//           ease: 'power1.out',
//         });
//       } else {
//         setIsScrolled(false);
//         // Animate logo back to visible when not scrolled
//         gsap.to(logoRef.current, {
//           opacity: 1,
//           scale: 1,
//           duration: 0.5,
//           ease: 'power1.out',
//         });
//       }
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <header
//       className={`sticky top-0 z-50 shadow-xl transition-all duration-300 ${
//         isScrolled ? 'bg-blue-500' : 'bg-transparent'
//       }`}
//     >
//       <div className="relative">
//         <div className="flex justify-between items-center px-10 p-3">
//           <img
//             ref={logoRef}
//             src="/logo.png"
//             width={90}
//             height={50}
//             alt="Logo"
//             className="rounded-md"
//           />
//           <div className="hidden md:flex space-x-8">
//             <h1 className="py-2 font-extrabold">Products</h1>
//             <h1 className="py-2 font-extrabold">Contacts</h1>
//             <h2 className="py-2 font-extrabold">Abouts</h2>
//           </div>
//           {/* Mobile Number Display */}
//           <div className="md:hidden text-white">
//             <span className='text-lg '>
//             Inquiry
//             : 9854856521</span>
//           </div>
//           {/* Hamburger Icon for mobile */}
//           <button
//             className="md:hidden text-white"
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} // Toggle mobile menu
//             aria-label="Toggle Menu"
//           >
//             {isMobileMenuOpen ? (
//               // Cancel Icon when menu is open
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="w-8 h-8"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               </svg>
//             ) : (
//               // Hamburger Icon when menu is closed
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="w-8 h-8"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4 6h16M4 12h16M4 18h16"
//                 />
//               </svg>
//             )}
//           </button>
//         </div>
//         {/* Mobile Menu */}
//         {isMobileMenuOpen && (
//           <div className="md:hidden flex flex-col items-start px-10 space-y-4">
//             <h1 className="py-2 font-extrabold">Products</h1>
//             <h1 className="py-2 font-extrabold">Contacts</h1>
//             <h2 className="py-2 font-extrabold">Abouts</h2>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// };

// export default Header;



// import { useState, useEffect, useRef } from 'react';
// import { useNavigate } from 'react-router-dom'; // Use navigate instead of router
// import gsap from 'gsap';

// const Header = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const logoRef = useRef(null);
//   const navigate = useNavigate(); // Use navigate for routing

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollPosition = window.scrollY;
//       if (scrollPosition > 0) {
//         setIsScrolled(true);
//         gsap.to(logoRef.current, {
//           opacity: 0,
//           scale: 0.8,
//           duration: 0.5,
//           ease: 'power1.out',
//         });
//       } else {
//         setIsScrolled(false);
//         gsap.to(logoRef.current, {
//           opacity: 1,
//           scale: 1,
//           duration: 0.5,
//           ease: 'power1.out',
//         });
//       }
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <header className={`sticky top-0 z-50 shadow-xl transition-all duration-300 ${isScrolled ? 'bg-blue-500' : 'bg-transparent'}`}>
//       <div className="relative">
//         <div className="flex justify-between items-center px-10 p-3">
//           <img
//             ref={logoRef}
//             src="/logo.png"
//             width={90}
//             height={50}
//             alt="Logo"
//             className="rounded-md cursor-pointer"
//             onClick={() => navigate('/')} // Logo click to go back home
//           />
//           <div className="hidden md:flex space-x-8">
//             <h1 className="py-2 font-extrabold">Products</h1>
//             <h1 className="py-2 font-extrabold">Contacts</h1>
//             <h2 className="py-2 font-extrabold">About</h2>
//           </div>
//           <div className="md:hidden text-white">
//             <span className='text-lg '>Inquiry : 9854856521</span>
//           </div>
//           <button
//             className="md:hidden text-black"
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             aria-label="Toggle Menu"
//           >
//             {isMobileMenuOpen ? (
//               <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//               </svg>
//             ) : (
//               <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
//               </svg>
//             )}
//           </button>
//         </div>
//         {isMobileMenuOpen && (
//           <div className="md:hidden flex flex-col items-start px-10 space-y-4">
//             <h1 className="py-2 font-extrabold">Products</h1>
//             <h1 className="py-2 font-extrabold">Contacts</h1>
//             <h2 className="py-2 font-extrabold">About</h2>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// };

// export default Header;



import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const logoRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setIsScrolled(true);
        gsap.to(logoRef.current, {
          opacity: 0,
          scale: 0.8,
          duration: 0.5,
          ease: 'power1.out',
        });
      } else {
        setIsScrolled(false);
        gsap.to(logoRef.current, {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          ease: 'power1.out',
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`sticky top-0 z-50 shadow-xl transition-all duration-300 ${isScrolled ? 'bg-blue-500' : 'bg-transparent'}`}>
      <div className="relative">
        <div className="flex justify-between items-center px-10 p-3">
          <img
            ref={logoRef}
            src="/logo.png"
            width={90}
            height={50}
            alt="Logo"
            className="rounded-md cursor-pointer"
            onClick={() => navigate('/')}
          />
          <div className="hidden md:flex space-x-8">
            <h1 className="py-2 font-extrabold cursor-pointer" onClick={() => navigate('/products')}>Products</h1>
            <h1 className="py-2 font-extrabold cursor-pointer" onClick={() => navigate('/contact')}>Contact</h1>
            <h2 className="py-2 font-extrabold cursor-pointer" onClick={() => navigate('/about')}>About</h2>
          </div>
          <div className="flex items-center space-x-4 text-white">
            <span className="hidden md:inline-flex text-lg">📞 9405799633</span>
            <a href="https://wa.me/9405799633" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 48 48">
                <path fill="#fff" d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"></path>
                <path fill="#40c351" d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"></path>
              </svg>
            </a>
            <span className="md:hidden text-lg">📞 9405799633</span>
          </div>
          <button
            className="md:hidden text-black"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
        {isMobileMenuOpen && (
          <div className="md:hidden flex flex-col items-start px-10 space-y-4">
            <h1 className="py-2 font-extrabold cursor-pointer" onClick={() => navigate('/products')}>Products</h1>
            <h1 className="py-2 font-extrabold cursor-pointer" onClick={() => navigate('/contact')}>Contact</h1>
            <h2 className="py-2 font-extrabold cursor-pointer" onClick={() => navigate('/about')}>About</h2>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
