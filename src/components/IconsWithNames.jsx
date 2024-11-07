// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faWater, faGlassWater, faSprayCan, faSeedling } from '@fortawesome/free-solid-svg-icons';

// const IconCategories = () => {
//   // Icon data with names and icon values
//   const iconData = [
//     { icon: faWater, name: 'Drainage Water' },
//     { icon: faGlassWater, name: 'Drinking Water' },
//     { icon: faSprayCan, name: 'Irrigation ' },
//     { icon: faSeedling, name: 'Agriculture' },
//   ];

//   return (
//     <div className="bg-slate-200 py-12">
//       <div className="w-full max-w-7xl mx-auto px-4">
//         <h2 className="text-3xl font-bold text-center mb-8 text-blue-600">Our Services</h2>
//         <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
//           {iconData.map((item, index) => (
//             <div key={index} className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
//               <FontAwesomeIcon icon={item.icon} className="text-5xl text-green-600 mb-4" />
//               <span className="text-xl font-semibold text-gray-700">{item.name}</span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default IconCategories;



import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWater, faGlassWater, faSprayCan, faSeedling } from '@fortawesome/free-solid-svg-icons';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const IconCategories = () => {
  const iconRefs = useRef([]);

  useEffect(() => {
    iconRefs.current.forEach((icon, index) => {
      gsap.fromTo(
        icon,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          delay: index * 0.2,
          scrollTrigger: {
            trigger: icon,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
  }, []);

  const iconData = [
    { icon: faWater, name: 'Drainage Water' },
    { icon: faGlassWater, name: 'Drinking Water' },
    { icon: faSprayCan, name: 'Irrigation' },
    { icon: faSeedling, name: 'Agriculture' },
  ];

  return (
    <div className="bg-slate-200 py-12">
      <div className="w-full max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-600">Our Services</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {iconData.map((item, index) => (
            <div
              key={index}
              ref={(el) => (iconRefs.current[index] = el)}
              className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <FontAwesomeIcon icon={item.icon} className="text-5xl text-green-600 mb-4" />
              <span className="text-xl font-semibold text-gray-700">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IconCategories;
