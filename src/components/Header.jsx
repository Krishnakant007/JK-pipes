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



// import { useState, useEffect, useRef } from 'react';
// import gsap from 'gsap';

// const Header = ({ setActiveSection }) => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const logoRef = useRef(null);

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

//   const handleSectionChange = (section) => {
//     setActiveSection(section);
//     setIsMobileMenuOpen(false); // Close mobile menu on section change
//   };

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
//             onClick={() => handleSectionChange('home')}
//           />
//           <div className="hidden md:flex space-x-8">
//             <h1 className="py-2 font-extrabold cursor-pointer" onClick={() => handleSectionChange('products')}>Products</h1>
//             <h1 className="py-2 font-extrabold cursor-pointer" onClick={() => handleSectionChange('contact')}>Contact</h1>
//             <h2 className="py-2 font-extrabold cursor-pointer" onClick={() => handleSectionChange('about')}>About</h2>
//           </div>
//           <div className="flex items-center space-x-4 text-black">
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
//             <h1 className="py-2 font-extrabold cursor-pointer" onClick={() => handleSectionChange('products')}>Products</h1>
//             <h1 className="py-2 font-extrabold cursor-pointer" onClick={() => handleSectionChange('contact')}>Contact</h1>
//             <h2 className="py-2 font-extrabold cursor-pointer" onClick={() => handleSectionChange('about')}>About</h2>
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
            <h2 className="py-2 font-extrabold cursor-pointer" onClick={() => handleSectionChange('about')}>About Us</h2>
          </div>
          <div className="flex items-center space-x-4 text-black">
            {/* Phone Icon */}
            <a href="tel:9405799633" aria-label="Call">
              <svg className="w-6 h-6 cursor-pointer hover:text-purple-600 transition-colors duration-200" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.56 16.91l-4.29-1.5a2 2 0 0 0-2.05.48l-1.56 1.58a15.17 15.17 0 0 1-7.17-7.18L8.1 7.73a2 2 0 0 0 .48-2.05L7.08 1.4a2 2 0 0 0-2.22-1.34l-4.15.9A2 2 0 0 0 0 3a18.33 18.33 0 0 0 18.92 18.92 2 2 0 0 0 1.96-1.71l.9-4.15a2 2 0 0 0-1.22-2.15z" />
              </svg>
            </a>
            {/* WhatsApp Icon */}
            <a href="https://wa.me/9405799633" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <svg className="w-6 h-6 cursor-pointer hover:text-green-500 transition-colors duration-200" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.52 3.46A11.94 11.94 0 0 0 12 0a11.94 11.94 0 0 0-8.52 3.46A11.94 11.94 0 0 0 0 12a11.86 11.86 0 0 0 2.27 6.87L0 24l5.27-2.25A11.86 11.86 0 0 0 12 24a11.94 11.94 0 0 0 8.52-3.46A11.94 11.94 0 0 0 24 12a11.94 11.94 0 0 0-3.48-8.54zM12 21.57a9.59 9.59 0 0 1-5.2-1.52l-.38-.23-3.11 1.33.82-3.32-.22-.34A9.59 9.59 0 1 1 12 21.57zm5.64-7.89c-.3-.15-1.76-.86-2-1-.27-.09-.47-.15-.66.15s-.76 1-.94 1.21-.34.24-.63.09a8.19 8.19 0 0 1-2.4-1.52 9 9 0 0 1-1.63-2c-.17-.29 0-.43.14-.57s.3-.34.45-.51.18-.27.27-.46a.59.59 0 0 0 0-.57c-.09-.15-.66-1.58-.9-2.14s-.46-.51-.66-.51h-.57a1.1 1.1 0 0 0-.8.39 3.39 3.39 0 0 0-1.06 2.5A5.87 5.87 0 0 0 9.85 15a13.52 13.52 0 0 0 5.9 5.51c.3.12.6.23.92.14a3.48 3.48 0 0 0 2.3-1.63 2.88 2.88 0 0 0 .2-1.63c-.09-.09-.27-.14-.57-.28z" />
              </svg>
            </a>
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
            <h2 className="py-2 font-extrabold cursor-pointer" onClick={() => handleSectionChange('about')}>Home</h2>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
