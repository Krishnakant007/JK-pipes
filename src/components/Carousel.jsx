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


import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const VideoComponent = () => {
  const videoRef = useRef(null); // Reference to the video element
  const textRef = useRef(null); // Reference to the text element
  const videoSrc = "1025.mp4"; // Single video file
  const [showFirstSet, setShowFirstSet] = useState(true);

  // Define the two sets of items
  const firstSet = [
    "✔️ JK PVC Pipe",
    "✔️ PVC Drainage Pipe",
    "✔️ Rigid PVC Pipe",
    "✔️ Irrigation PVC Pipe",
    "✔️ 160mm PVC Pipe",
    
  ];
  const secondSet = [
    "✔️ 160mm HDPE Pipe",
    "✔️ Agricultural HDPE Pipe",
    "✔️ HDPE Water Pipe",
    "✔️ JK HDPE Pipe",
    "✔️ Black HDPE Pipe",
  ];

  useEffect(() => {
    // Function to animate text switch
    const switchTextSet = () => {
      gsap.to(textRef.current, { opacity: 0, duration: 1, ease: "power1.inOut" });
      setTimeout(() => {
        setShowFirstSet((prev) => !prev); // Toggle between text sets
        gsap.fromTo(
          textRef.current,
          { opacity: 0, x: -50 },
          { opacity: 1, x: 0, duration: 1, ease: "power1.out" }
        );
      }, 1000); // Wait for fade-out to complete
    };

    // Initial animation for the first set
    gsap.fromTo(
      textRef.current,
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1, ease: "power1.out" }
    );

    // Set interval for looping between the two text sets
    const interval = setInterval(() => {
      switchTextSet();
    }, showFirstSet ? 5000 : 10000); // First set for 5 sec, second set for 10 sec

    // Intersection Observer to play/pause video
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoRef.current.play(); // Play video when in view
        } else {
          videoRef.current.pause(); // Pause video when out of view
        }
      },
      { threshold: 0 } // Trigger when any part of the video is out of view
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      clearInterval(interval); // Clear interval on component unmount
      if (videoRef.current) observer.unobserve(videoRef.current);
    };
  }, [showFirstSet]);

  return (
    <div className="relative flex justify-center items-center p-0 m-0 w-full h-auto overflow-hidden ">
      <video
        ref={videoRef}
        src={videoSrc}
        className="w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        style={{ opacity: 1 }}
      />
      <div
        ref={textRef}
        className="absolute left-0 top-1/4 max-w-full w-4/5 px-2 text-white text-lg md:text-2xl font-semibold space-y-2"
        style={{ pointerEvents: "none", overflow: "hidden" }}
      >
        {(showFirstSet ? firstSet : secondSet).map((item, index) => (
          <div key={index} className="whitespace-nowrap overflow-hidden text-ellipsis">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoComponent;
