// import { useState, useEffect } from "react";

// const Carousel = () => {
//   const [currentVideo, setCurrentVideo] = useState(0);
//   const videos = ["blackPipe.mp4", "whiteV.mp4", "blackRing.mp4"];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentVideo((prev) => (prev + 1) % videos.length);
//     }, 5000); // Change every 5 seconds
//     return () => clearInterval(interval);
//   }, [videos.length]);

//   return (
//     <div className="flex justify-center items-center p-4">
//       <video
//         src={videos[currentVideo]}
//         className="w-full h-auto max-w-full sm:max-w-4/5 md:max-w-3/5 xl:w-[500px] xl:h-[500px] object-contain"
        
//         autoPlay
//         loop
//       />
//     </div>
//   );
// };

// export default Carousel;

//2


// import { useState, useEffect } from "react";

// const Carousel = () => {
//   const [currentVideo, setCurrentVideo] = useState(0);
//   const videos = ["blackPipe.mp4", "whiteV.mp4", "blackRing.mp4"];


//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentVideo((prev) => (prev + 1) % videos.length);
//     }, 5000); // Change every 5 seconds
//     return () => clearInterval(interval);
//   }, [videos.length]);

//   return (
//     <div className="flex justify-center items-center p-0 m-0 h-screen w-screen">
//       <video
//         src={videos[currentVideo]}
//         className="w-full h-full object-cover"
//         autoPlay
//         muted
//         loop
//         playsInline
//       />
//     </div>
//   );
// };

// export default Carousel;


// import { useEffect, useRef } from "react";
// import gsap from "gsap";

// const VideoComponent = () => {
//   const videoRef = useRef(null); // Reference to the video element
//   const videoSrc = "1025.mp4"; // Single video file

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           videoRef.current.play(); // Play video when fully in view
//         } else {
//           videoRef.current.pause(); // Pause video when it starts to scroll out
//         }
//       },
//       { threshold: 0 } // Trigger when any part of the video is out of view
//     );

//     if (videoRef.current) {
//       observer.observe(videoRef.current);
//     }

//     return () => {
//       if (videoRef.current) observer.unobserve(videoRef.current);
//     };
//   }, []);

//   return (
//     <div className="flex justify-center items-center p-0 m-0 w-full h-auto">
//       <video
//         ref={videoRef}
//         src={videoSrc}
//         className="w-full h-full object-cover"
//         autoPlay
//         muted
//         loop
//         playsInline
//         style={{ opacity: 1 }}
//       />
//     </div>
//   );
// };

// export default VideoComponent;


// import { useEffect, useRef, useState } from "react";
// import gsap from "gsap";

// const VideoComponent = () => {
//   const videoRef = useRef(null); // Reference to the video element
//   const textRef = useRef(null); // Reference to the text element
//   const videoSrc = "1025.mp4"; // Single video file
//   const [showFirstSet, setShowFirstSet] = useState(true);

//   // Define the two sets of items
//   const firstSet = [
//     "✔️ JK PVC Pipe",
//     "✔️ PVC Drainage Pipe",
//     "✔️ Rigid PVC Pipe",
//     "✔️ Irrigation PVC Pipe",
//     "✔️ 160mm PVC Pipe",
//     "✔️ 75MM PVC Pipe",
//   ];
//   const secondSet = [
//     "✔️ 160mm HDPE Pipe",
//     "✔️ Agricultural HDPE Pipe",
//     "✔️ HDPE Water Pipe",
//     "✔️ JK HDPE Pipe",
//     "✔️ Black HDPE Pipe",
//   ];

//   useEffect(() => {
//     // Set up initial animation for the first text set
//     gsap.fromTo(
//       textRef.current,
//       { opacity: 0, x: -50 },
//       { opacity: 1, x: 0, duration: 1, ease: "power1.out" }
//     );

//     // Switch to the second set of text after 5 seconds
//     const textSwitchTimeout = setTimeout(() => {
//       gsap.to(textRef.current, { opacity: 0, duration: 1, ease: "power1.inOut" });
//       setTimeout(() => {
//         setShowFirstSet(false); // Show the second set
//         gsap.fromTo(
//           textRef.current,
//           { opacity: 0, x: -50 },
//           { opacity: 1, x: 0, duration: 1, ease: "power1.out" }
//         );
//       }, 1000); // Wait for the fade-out before showing the second set
//     }, 5000);

//     // Intersection Observer for playing and pausing video based on visibility
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           videoRef.current.play(); // Play video when fully in view
//         } else {
//           videoRef.current.pause(); // Pause video when it starts to scroll out
//         }
//       },
//       { threshold: 0 } // Trigger when any part of the video is out of view
//     );

//     if (videoRef.current) {
//       observer.observe(videoRef.current);
//     }

//     return () => {
//       clearTimeout(textSwitchTimeout); // Clear the timeout when component unmounts
//       if (videoRef.current) observer.unobserve(videoRef.current);
//     };
//   }, []);

//   return (
//     <div className="relative flex justify-center items-center p-0 m-0 w-full h-auto">
//       <video
//         ref={videoRef}
//         src={videoSrc}
//         className="w-full h-full object-cover"
//         autoPlay
//         muted
//         loop
//         playsInline
//         style={{ opacity: 1 }}
//       />
//       <div
//         ref={textRef}
//         className="absolute left-4 top-1/4 flex flex-col text-white text-lg md:text-2xl font-semibold space-y-2"
//         style={{ pointerEvents: "none" }}
//       >
//         {showFirstSet
//           ? firstSet.map((item, index) => <div key={index}>{item}</div>)
//           : secondSet.map((item, index) => <div key={index}>{item}</div>)}
//       </div>
//     </div>
//   );
// };

// export default VideoComponent;






// import { useEffect, useRef, useState } from "react";
// import gsap from "gsap";

// const VideoComponent = () => {
//   const videoRef = useRef(null); // Reference to the video element
//   const textRef = useRef(null); // Reference to the text element
//   const videoSrc = "1025.mp4"; // Single video file
//   const [showFirstSet, setShowFirstSet] = useState(true);

//   // Define the two sets of items
//   const firstSet = [
//     "✔️ JK PVC Pipe",
//     "✔️ PVC Drainage Pipe",
//     "✔️ Rigid PVC Pipe",
//     "✔️ Irrigation PVC Pipe",
//     "✔️ 160mm PVC Pipe",
//     "✔️ 75MM PVC Pipe",
//   ];
//   const secondSet = [
//     "✔️ 160mm HDPE Pipe",
//     "✔️ Agricultural HDPE Pipe",
//     "✔️ HDPE Water Pipe",
//     "✔️ JK HDPE Pipe",
//     "✔️ Black HDPE Pipe",
//   ];

//   useEffect(() => {
//     // Function to animate text switch
//     const switchTextSet = () => {
//       gsap.to(textRef.current, { opacity: 0, duration: 1, ease: "power1.inOut" });
//       setTimeout(() => {
//         setShowFirstSet((prev) => !prev); // Toggle between text sets
//         gsap.fromTo(
//           textRef.current,
//           { opacity: 0, x: -50 },
//           { opacity: 1, x: 0, duration: 1, ease: "power1.out" }
//         );
//       }, 1000); // Wait for fade-out to complete
//     };

//     // Initial animation for the first set
//     gsap.fromTo(
//       textRef.current,
//       { opacity: 0, x: -50 },
//       { opacity: 1, x: 0, duration: 1, ease: "power1.out" }
//     );

//     // Set interval for looping between the two text sets
//     const interval = setInterval(() => {
//       switchTextSet();
//     }, showFirstSet ? 5000 : 10000); // First set for 5 sec, second set for 10 sec

//     // Intersection Observer to play/pause video
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           videoRef.current.play(); // Play video when in view
//         } else {
//           videoRef.current.pause(); // Pause video when out of view
//         }
//       },
//       { threshold: 0 } // Trigger when any part of the video is out of view
//     );

//     if (videoRef.current) {
//       observer.observe(videoRef.current);
//     }

//     return () => {
//       clearInterval(interval); // Clear interval on component unmount
//       if (videoRef.current) observer.unobserve(videoRef.current);
//     };
//   }, [showFirstSet]);

//   return (
//     <div className="relative flex justify-center items-center p-0 m-0 w-full h-auto">
//       <video
//         ref={videoRef}
//         src={videoSrc}
//         className="w-full h-full object-cover"
//         autoPlay
//         muted
//         loop
//         playsInline
//         style={{ opacity: 1 }}
//       />
//       <div
//         ref={textRef}
//         className="absolute left-4 top-1/4 flex flex-col text-white text-lg md:text-2xl font-semibold space-y-2"
//         style={{ pointerEvents: "none" }}
//       >
//         {(showFirstSet ? firstSet : secondSet).map((item, index) => (
//           <div key={index}>{item}</div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default VideoComponent;


// import { useEffect, useRef, useState } from "react";
// import gsap from "gsap";

// const VideoComponent = () => {
//   const videoRef = useRef(null); // Reference to the video element
//   const textRef = useRef(null); // Reference to the text element
//   const videoSrc = "1025.mp4"; // Single video file
//   const [showFirstSet, setShowFirstSet] = useState(true);

//   // Define the two sets of items
//   const firstSet = [
//     "✔️ Residential plumbing and drainage.",
//     "✔️ Stormwater management systems.",
//     "✔️ Industrial plumbing and electrical conduits.",
//     "✔️ Agricultural irrigation.",
//     "✔️ Large-scale drainage projects.",
//   ];
  
//   const secondSet = [
//     "✔️ Water supply and drainage systems.",
//     "✔️ Agricultural irrigation applications.",
//     "✔️ Potable water supply.",
//     "✔️ Sewage systems and industrial processes.",
//     "✔️ Underground gas distribution.",
//   ];
  

//   useEffect(() => {
//     // Function to animate text switch
//     const switchTextSet = () => {
//       gsap.to(textRef.current, { opacity: 0, duration: 1, ease: "power1.inOut" });
//       setTimeout(() => {
//         setShowFirstSet((prev) => !prev); // Toggle between text sets
//         gsap.fromTo(
//           textRef.current,
//           { opacity: 0, x: -50 },
//           { opacity: 1, x: 0, duration: 1, ease: "power1.out" }
//         );
//       }, 1000); // Wait for fade-out to complete
//     };

//     // Initial animation for the first set
//     gsap.fromTo(
//       textRef.current,
//       { opacity: 0, x: -50 },
//       { opacity: 1, x: 0, duration: 1, ease: "power1.out" }
//     );

//     // Set interval for looping between the two text sets
//     const interval = setInterval(() => {
//       switchTextSet();
//     }, showFirstSet ? 5000 : 10000); // First set for 5 sec, second set for 10 sec

//     // Intersection Observer to play/pause video
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           videoRef.current.play(); // Play video when in view
//         } else {
//           videoRef.current.pause(); // Pause video when out of view
//         }
//       },
//       { threshold: 0 } // Trigger when any part of the video is out of view
//     );

//     if (videoRef.current) {
//       observer.observe(videoRef.current);
//     }

//     return () => {
//       clearInterval(interval); // Clear interval on component unmount
//       if (videoRef.current) observer.unobserve(videoRef.current);
//     };
//   }, [showFirstSet]);

//   return (
//     <div className="relative flex justify-center items-center p-0 m-0 w-full h-auto overflow-hidden ">
//       <video
//         ref={videoRef}
//         src={videoSrc}
//         className="w-full h-full object-cover"
//         autoPlay
//         muted
//         loop
//         playsInline
//         style={{ opacity: 1 }}
//       />
//       <div
//         ref={textRef}
//         className="absolute left-0 top-1/4 max-w-full w-4/5 px-2 text-white text-lg md:text-2xl font-semibold space-y-2"
//         style={{ pointerEvents: "none", overflow: "hidden" }}
//       >
//         {(showFirstSet ? firstSet : secondSet).map((item, index) => (
//           <div key={index} className="whitespace-nowrap overflow-hidden text-ellipsis">
//             {item}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default VideoComponent;



// import { useEffect, useRef, useState } from "react";
// import gsap from "gsap";

// const VideoComponent = () => {
//   const videoRef = useRef(null); // Reference to the video element
//   const textRef = useRef(null); // Reference to the text element
//   const videoSrc = "1025.mp4"; // Single video file
//   const [showFirstSet, setShowFirstSet] = useState(true);

//   // Define the two sets of items
//   const firstSet = [
//     "✔️ Residential plumbing and drainage.",
//     "✔️ Stormwater management systems.",
//     "✔️ Industrial plumbing and electrical conduits.",
//     "✔️ Agricultural irrigation.",
//     "✔️ Large-scale drainage projects.",
//   ];
  
//   const secondSet = [
//     "✔️ Water supply and drainage systems.",
//     "✔️ Agricultural irrigation applications.",
//     "✔️ Potable water supply.",
//     "✔️ Sewage systems and industrial processes.",
//     "✔️ Underground gas distribution.",
//   ];
  
//   useEffect(() => {
//     const switchTextSet = () => {
//       gsap.to(textRef.current, { opacity: 0, duration: 1, ease: "power1.inOut" });
//       setTimeout(() => {
//         setShowFirstSet((prev) => !prev);
//         gsap.fromTo(
//           textRef.current,
//           { opacity: 0, x: -50 },
//           { opacity: 1, x: 0, duration: 1, ease: "power1.out" }
//         );
//       }, 1000);
//     };

//     gsap.fromTo(
//       textRef.current,
//       { opacity: 0, x: -50 },
//       { opacity: 1, x: 0, duration: 1, ease: "power1.out" }
//     );

//     const interval = setInterval(() => {
//       switchTextSet();
//     }, showFirstSet ? 5000 : 10000);

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           videoRef.current.play();
//         } else {
//           videoRef.current.pause();
//         }
//       },
//       { threshold: 0 }
//     );

//     if (videoRef.current) {
//       observer.observe(videoRef.current);
//     }

//     return () => {
//       clearInterval(interval);
//       if (videoRef.current) observer.unobserve(videoRef.current);
//     };
//   }, [showFirstSet]);

//   return (
//     <div className="relative flex justify-center items-center p-0 m-0 w-full h-[50vh] md:h-auto overflow-hidden">
//       <video
//         ref={videoRef}
//         src={videoSrc}
//         className="w-full h-full object-cover"
//         autoPlay
//         muted
//         loop
//         playsInline
//       />
//       <div
//         ref={textRef}
//         className="absolute left-0 top-1/4 max-w-full w-4/5 px-2 text-white text-sm sm:text-base md:text-lg font-semibold space-y-1 sm:space-y-2 md:space-y-3"
//         style={{ pointerEvents: "none", overflow: "hidden" }}
//       >
//         {(showFirstSet ? firstSet : secondSet).map((item, index) => (
//           <div key={index} className="whitespace-nowrap overflow-hidden text-ellipsis">
//             {item}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default VideoComponent;



// import { useEffect, useRef, useState } from "react";
// import gsap from "gsap";

// const ImageSliderComponent = () => {
//   const textRef = useRef(null);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [showFirstSet, setShowFirstSet] = useState(true);

//   // Images for the slider
//   const images = [
//     "/img1.jpg",
//     "/img2.jpg",
//     "/img3.jpg",
//     // "/image4.jpg",
//     // "/image5.jpg"
//   ];

//   // Define the two sets of items
//   const firstSet = [
//     "✔️ Residential plumbing and drainage.",
//     "✔️ Stormwater management systems.",
//     "✔️ Industrial plumbing and electrical conduits.",
//     "✔️ Agricultural irrigation.",
//     "✔️ Large-scale drainage projects.",
//   ];
  
//   const secondSet = [
//     "✔️ Water supply and drainage systems.",
//     "✔️ Agricultural irrigation applications.",
//     "✔️ Potable water supply.",
//     "✔️ Sewage systems and industrial processes.",
//     "✔️ Underground gas distribution.",
//   ];
  
//   useEffect(() => {
//     const switchTextSet = () => {
//       gsap.to(textRef.current, { opacity: 0, duration: 1, ease: "power1.inOut" });
//       setTimeout(() => {
//         setShowFirstSet((prev) => !prev);
//         gsap.fromTo(
//           textRef.current,
//           { opacity: 0, x: -50 },
//           { opacity: 1, x: 0, duration: 1, ease: "power1.out" }
//         );
//       }, 1000);
//     };

//     gsap.fromTo(
//       textRef.current,
//       { opacity: 0, x: -50 },
//       { opacity: 1, x: 0, duration: 1, ease: "power1.out" }
//     );

//     const interval = setInterval(() => {
//       switchTextSet();
//     }, showFirstSet ? 5000 : 10000);

//     // Cycle images every 5 seconds
//     const imageInterval = setInterval(() => {
//       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 5000);

//     return () => {
//       clearInterval(interval);
//       clearInterval(imageInterval);
//     };
//   }, [showFirstSet, images.length]);

//   return (
//     <div className="relative flex justify-center items-center p-0 m-0 w-full h-[50vh] md:h-auto overflow-hidden">
//       {/* Image Slider */}
//       <div className="w-full h-full">
//         <img
//           src={images[currentImageIndex]}
//           alt={`Slide ${currentImageIndex + 1}`}
//           className="w-full h-full object-cover"
//         />
//       </div>

//       {/* Text Overlay */}
//       <div
//         ref={textRef}
//         className="absolute left-0 top-1/4 max-w-full w-4/5 px-2 text-white text-sm sm:text-base md:text-lg font-semibold space-y-1 sm:space-y-2 md:space-y-3"
//         style={{ pointerEvents: "none", overflow: "hidden" }}
//       >
//         {(showFirstSet ? firstSet : secondSet).map((item, index) => (
//           <div key={index} className="whitespace-nowrap overflow-hidden text-ellipsis">
//             {item}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ImageSliderComponent;




// import { useEffect, useRef, useState } from "react";
// import gsap from "gsap";

// const ImageSliderComponent = () => {
//   const textRef = useRef(null);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [showFirstSet, setShowFirstSet] = useState(true);

//   // Images for the slider
//   const images = [
//     "/img1.jpg",
//     "/img2.jpg",
//     "/img3.jpg",
//     "/image4.jpg",
//     "/image5.jpg"
//   ];

//   // Define the two sets of items
//   const firstSet = [
//     "✔️ Residential plumbing and drainage.",
//     "✔️ Stormwater management systems.",
//     "✔️ Industrial plumbing and electrical conduits.",
//     "✔️ Agricultural irrigation.",
//     "✔️ Large-scale drainage projects.",
//   ];
  
//   const secondSet = [
//     "✔️ Water supply and drainage systems.",
//     "✔️ Agricultural irrigation applications.",
//     "✔️ Potable water supply.",
//     "✔️ Sewage systems and industrial processes.",
//     "✔️ Underground gas distribution.",
//   ];
  
//   useEffect(() => {
//     const switchTextSet = () => {
//       gsap.to(textRef.current, { opacity: 0, duration: 1, ease: "power1.inOut" });
//       setTimeout(() => {
//         setShowFirstSet((prev) => !prev);
//         gsap.fromTo(
//           textRef.current,
//           { opacity: 0, x: -50 },
//           { opacity: 1, x: 0, duration: 1, ease: "power1.out" }
//         );
//       }, 1000);
//     };

//     gsap.fromTo(
//       textRef.current,
//       { opacity: 0, x: -50 },
//       { opacity: 1, x: 0, duration: 1, ease: "power1.out" }
//     );

//     const interval = setInterval(() => {
//       switchTextSet();
//     }, showFirstSet ? 5000 : 10000);

//     // Cycle images every 5 seconds
//     const imageInterval = setInterval(() => {
//       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 5000);

//     return () => {
//       clearInterval(interval);
//       clearInterval(imageInterval);
//     };
//   }, [showFirstSet, images.length]);

//   return (
//     <div className="relative flex justify-center items-center p-0 m-0 w-full h-screen md:h-auto max-h-screen overflow-hidden">
//       {/* Image Slider */}
//       <div className="w-full h-full max-h-screen">
//         <img
//           src={images[currentImageIndex]}
//           alt={`Slide ${currentImageIndex + 1}`}
//           className="w-full h-full object-cover max-h-screen"
//         />
//       </div>

//       {/* Text Overlay */}
//       <div
//         ref={textRef}
//         className="absolute left-0 top-1/4 max-w-full w-4/5 px-2 text-white text-sm sm:text-base md:text-lg font-semibold space-y-1 sm:space-y-2 md:space-y-3"
//         style={{ pointerEvents: "none", overflow: "hidden" }}
//       >
//         {(showFirstSet ? firstSet : secondSet).map((item, index) => (
//           <div key={index} className="whitespace-nowrap overflow-hidden text-ellipsis">
//             {item}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ImageSliderComponent;



// import { useEffect, useRef, useState } from "react";
// import gsap from "gsap";

// const ImageSliderComponent = () => {
//   const textRef = useRef(null);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [showFirstSet, setShowFirstSet] = useState(true);

//   // Images for the slider
//   const images = [
//     "/img1.jpg",
//     "/img2.jpg",
//     "/img3.jpg",
//     "/img4.jpg",
//     "/image5.jpg",
//     "/img5.jpg"
//   ];

//   // Define the two sets of items
//   const firstSet = [
//     "✔️ Residential plumbing and drainage.",
//     "✔️ Stormwater management systems.",
//     "✔️ Industrial plumbing and electrical conduits.",
//     "✔️ Agricultural irrigation.",
//     "✔️ Large-scale drainage projects.",
//   ];
  
//   const secondSet = [
//     "✔️ Water supply and drainage systems.",
//     "✔️ Agricultural irrigation applications.",
//     "✔️ Potable water supply.",
//     "✔️ Sewage systems and industrial processes.",
//     "✔️ Underground gas distribution.",
//   ];
  
//   useEffect(() => {
//     const switchTextSet = () => {
//       gsap.to(textRef.current, { opacity: 0, duration: 1, ease: "power1.inOut" });
//       setTimeout(() => {
//         setShowFirstSet((prev) => !prev);
//         gsap.fromTo(
//           textRef.current,
//           { opacity: 0, x: -50 },
//           { opacity: 1, x: 0, duration: 1, ease: "power1.out" }
//         );
//       }, 1000);
//     };

//     gsap.fromTo(
//       textRef.current,
//       { opacity: 0, x: -50 },
//       { opacity: 1, x: 0, duration: 1, ease: "power1.out" }
//     );

//     const interval = setInterval(() => {
//       switchTextSet();
//     }, showFirstSet ? 5000 : 10000);

//     // Cycle images every 5 seconds
//     const imageInterval = setInterval(() => {
//       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 5000);

//     return () => {
//       clearInterval(interval);
//       clearInterval(imageInterval);
//     };
//   }, [showFirstSet, images.length]);

//   return (
//     <div className="relative flex justify-center items-center p-0 m-0 w-full h-screen md:h-auto max-h-screen overflow-hidden">
//       {/* Image Slider with Transparent Black Overlay */}
//       <div className="w-full h-full max-h-screen relative">
//         <img
//           src={images[currentImageIndex]}
//           alt={`Slide ${currentImageIndex + 1}`}
//           className="w-full h-full object-cover max-h-screen"
//         />
//         {/* Transparent Black Overlay */}
//         <div className="absolute inset-0 bg-black opacity-50"></div>
//       </div>

//       {/* Text Overlay */}
//       <div
//         ref={textRef}
//         className="absolute left-0 top-1/4 max-w-full w-4/5 px-2 text-white text-sm sm:text-base md:text-lg font-semibold space-y-1 sm:space-y-2 md:space-y-3"
//         style={{ pointerEvents: "none", overflow: "hidden" }}
//       >
//         {(showFirstSet ? firstSet : secondSet).map((item, index) => (
//           <div key={index} className="whitespace-nowrap overflow-hidden text-ellipsis">
//             {item}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ImageSliderComponent;


// import { useEffect, useRef, useState } from "react";
// import gsap from "gsap";

// const ImageSliderComponent = () => {
//   const imageRef = useRef(null);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   // Images for the slider
//   const images = [
//     "/img2.jpg",
//     "/img8.jpg",
//     "/img3.jpg",
//     "/soil.jpg",
//     "/kids.jpg",
//     "/img5.jpg",
//   ];

//   useEffect(() => {
//     const animateImage = () => {
//       // Animate the image with a smooth zoom-out effect
//       gsap.fromTo(
//         imageRef.current,
//         { scale: 1.1 }, // Start slightly zoomed in
//         { scale: 1, duration: 4, ease: "power2.out" } // Smooth zoom-out
//       );
//     };

//     // Initial animation on component load
//     animateImage();

//     // Set interval for cycling through images with smooth zoom-out effect
//     const interval = setInterval(() => {
//       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//       animateImage(); // Trigger zoom-out animation on each image change
//     }, 5000); // Change every 5 seconds

//     return () => clearInterval(interval);
//   }, [images.length]);

//   return (
//     <div className="relative flex justify-center items-center w-full h-screen overflow-hidden">
//       {/* Image Slider with Smooth Zoom-Out Effect */}
//       <div className="w-full h-full relative">
//         <img
//           ref={imageRef}
//           src={images[currentImageIndex]}
//           alt={`Slide ${currentImageIndex + 1}`}
//           className="w-full h-full object-cover"
//         />
//       </div>
//     </div>
//   );
// };

// export default ImageSliderComponent;


// import { useEffect, useRef, useState } from "react";
// import gsap from "gsap";

// const ImageSliderComponent = () => {
//   const imageRef = useRef(null);
//   const textRef = useRef(null); // Reference for the text animation
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   // Images for the slider
//   const images = [
//     "/img2.jpg",
//     "/img8.jpg",
//     "/img3.jpg",
//     "/soil.jpg",
//     "/kids.jpg",
//     "/img5.jpg",
//   ];

//   // Corresponding text for each image
//   const texts = [
//     "Innovations that change the way we live.",
//     "Focused on improving the quality of life.",
//     "Growing responsibly for a better future.",
//     "Building a sustainable tomorrow.",
//     "Working towards a future with better living standards and sustainability.",
//     "Building a future that is responsible and sustainable for all.",
//   ];

//   useEffect(() => {
//     const animateImageAndText = () => {
//       // Animate the image with a smooth zoom-out effect
//       gsap.fromTo(
//         imageRef.current,
//         { scale: 1.1 }, // Start slightly zoomed in
//         { scale: 1, duration: 4, ease: "power2.out" } // Smooth zoom-out
//       );

//       // Animate the text fade-in and fade-out
//       gsap.fromTo(
//         textRef.current,
//         { opacity: 0 }, // Start with text hidden
//         { opacity: 1, duration: 3, ease: "power2.out" } // Fade in with a smooth effect
//       );
//     };

//     // Initial animation on component load
//     animateImageAndText();

//     // Set interval for cycling through images with smooth zoom-out effect
//     const interval = setInterval(() => {
//       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//       animateImageAndText(); // Trigger zoom-out animation and text fade-in on each image change
//     }, 5000); // Change every 5 seconds

//     return () => clearInterval(interval);
//   }, [images.length]);

//   return (
//     <div className="relative flex justify-center items-center w-full h-screen overflow-hidden">
//       {/* Image Slider with Smooth Zoom-Out Effect */}
//       <div className="w-full h-full relative">
//         <img
//           ref={imageRef}
//           src={images[currentImageIndex]}
//           alt={`Slide ${currentImageIndex + 1}`}
//           className="w-full h-full object-cover"
//         />
//         {/* Text overlay */}
//         <div
//           ref={textRef}
//           className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 text-white text-3xl font-bold max-w-lg text-center p-4"
//           style={{ zIndex: 10 }}
//         >
//           {texts[currentImageIndex]}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ImageSliderComponent;



import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

// Ensure you have Oleo Script font imported in your project or add it to the index.html if using React
// Example: <link href="https://fonts.googleapis.com/css2?family=Oleo+Script&display=swap" rel="stylesheet">

const ImageSliderComponent = () => {
  const imageRef = useRef(null);
  const textRef = useRef(null); // Reference for the text animation
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Images for the slider
  const images = [
    "/img2.jpg",
    "/img8.jpg",
    "/img3.jpg",
    "/soil.jpg",
    "/kids.jpg",
    "/img5.jpg",
  ];

  // Corresponding text for each image
  const texts = [
    "Innovations that change the way we live.",
    "Focused on improving the quality of life.",
    "Growing responsibly for a better future.",
    "Building a sustainable tomorrow.",
    "Working towards a future with better living standards and sustainability.",
    "Building a future that is responsible and sustainable for all.",
  ];

  useEffect(() => {
    const animateImageAndText = () => {
      // Animate the image with a smooth zoom-out effect
      gsap.fromTo(
        imageRef.current,
        { scale: 1.1 }, // Start slightly zoomed in
        { scale: 1, duration: 4, ease: "power2.out" } // Smooth zoom-out
      );

      // Animate the text fade-in and fade-out
      gsap.fromTo(
        textRef.current,
        { opacity: 0 }, // Start with text hidden
        { opacity: 1, duration: 3, ease: "power2.out" } // Fade in with a smooth effect
      );
    };

    // Initial animation on component load
    animateImageAndText();

    // Set interval for cycling through images with smooth zoom-out effect
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      animateImageAndText(); // Trigger zoom-out animation and text fade-in on each image change
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative flex justify-center items-center w-full h-screen overflow-hidden">
      {/* Image Slider with Smooth Zoom-Out Effect */}
      <div className="w-full h-full relative">
        <img
          ref={imageRef}
          src={images[currentImageIndex]}
          alt={`Slide ${currentImageIndex + 1}`}
          className="w-full h-full object-cover"
        />
        {/* Text overlay */}
        <div
          ref={textRef}
          className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 text-white text-4xl font-bold max-w-lg text-center p-4"
          style={{
            zIndex: 10,
            fontFamily: "'Oleo Script', cursive", // Apply Oleo Script font
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" // Add a shadow for better contrast on light backgrounds
          }}
        >
          {texts[currentImageIndex]}
        </div>
      </div>
    </div>
  );
};

export default ImageSliderComponent;
