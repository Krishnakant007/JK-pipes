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



// import { useState, useEffect, useRef } from 'react';
// import { useNavigate } from 'react-router-dom';
// import gsap from 'gsap';

// const Header = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const logoRef = useRef(null);
//   const navigate = useNavigate();

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
//             onClick={() => navigate('/')}
//           />
//           <div className="hidden md:flex space-x-8">
//             <h1 className="py-2 font-extrabold cursor-pointer" onClick={() => navigate('/products')}>Products</h1>
//             <h1 className="py-2 font-extrabold cursor-pointer" onClick={() => navigate('/contact')}>Contact</h1>
//             <h2 className="py-2 font-extrabold cursor-pointer" onClick={() => navigate('/about')}>About</h2>
//           </div>
//           <div className="flex items-center space-x-4 text-white">
//             <span className="hidden md:inline-flex text-lg">📞 9405799633</span>
            
//             <span className="md:hidden text-lg">📞 9405799633</span>
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
//             <h1 className="py-2 font-extrabold cursor-pointer" onClick={() => navigate('/products')}>Products</h1>
//             <h1 className="py-2 font-extrabold cursor-pointer" onClick={() => navigate('/contact')}>Contact</h1>
//             <h2 className="py-2 font-extrabold cursor-pointer" onClick={() => navigate('/about')}>About</h2>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// };

// export default Header;



import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

const Header = ({ setActiveSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const logoRef = useRef(null);

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

  const handleSectionChange = (section) => {
    setActiveSection(section);
    setIsMobileMenuOpen(false); // Close mobile menu on section change
  };

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
            onClick={() => handleSectionChange('home')}
          />
          <div className="hidden md:flex space-x-8">
            <h1 className="py-2 font-extrabold cursor-pointer" onClick={() => handleSectionChange('products')}>Products</h1>
            <h1 className="py-2 font-extrabold cursor-pointer" onClick={() => handleSectionChange('contact')}>Contact</h1>
            <h2 className="py-2 font-extrabold cursor-pointer" onClick={() => handleSectionChange('about')}>About</h2>
          </div>
          <div className="flex items-center space-x-4 text-black">
            <span className="hidden md:inline-flex text-lg">📞 9405799633</span>
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
            <h1 className="py-2 font-extrabold cursor-pointer" onClick={() => handleSectionChange('products')}>Products</h1>
            <h1 className="py-2 font-extrabold cursor-pointer" onClick={() => handleSectionChange('contact')}>Contact</h1>
            <h2 className="py-2 font-extrabold cursor-pointer" onClick={() => handleSectionChange('about')}>About</h2>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
