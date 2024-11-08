
// import { useRef, useEffect } from "react";
// import emailjs from "emailjs-com";
// import gsap from "gsap";

// const ContactForm = () => {
//   const form = useRef();

//   // Function to send email on form submission
//   const sendEmail = (e) => {
//     e.preventDefault(); // Prevent the form from reloading the page

//     // Send form data to EmailJS
//     emailjs
//       .sendForm(
//        "service_u1271c6",       // Your Service ID
//         "template_mst6jyt",      // Your Template ID
//         form.current,
//         "vjHaI2e8JNQN28SD7"        // Replace with your Public Key
//       )
//       .then(() => {
//         alert("Message sent successfully!"); // Success message
//       })
//       .catch(() => {
//         alert("Failed to submit message. Please try again."); // Error message
//       });

//     e.target.reset(); // Clear the form after submission
//   };

//   // GSAP animation setup
//   useEffect(() => {
//     gsap.fromTo(
//       form.current,
//       { opacity: 0, y: 30 },
//       { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
//     );
//   }, []);

//   return (
//     <div className="flex flex-col items-center py-8 px-4 bg-gray-800 text-white min-h-screen">
//       <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
//       <form
//         ref={form}
//         onSubmit={sendEmail}
//         className="w-full max-w-md bg-gray-700 p-6 rounded-lg shadow-lg space-y-4"
//       >
//         <label className="block text-gray-300">Name</label>
//         <input
//           type="text"
//           name="from_name"
//           required
//           className="w-full px-4 py-2 text-black rounded-lg focus:outline-none"
//         />

//         <label className="block text-gray-300">Email</label>
//         <input
//           type="email"
//           name="user_email"
//           required
//           className="w-full px-4 py-2 text-black rounded-lg focus:outline-none"
//         />

//         <label className="block text-gray-300">Message</label>
//         <textarea
//           name="message"
//           required
//           className="w-full px-4 py-2 text-black rounded-lg focus:outline-none h-24 resize-none"
//         ></textarea>

//         <button
//           type="submit"
//           className="w-full bg-gradient-to-r from-blue-400 to-blue-600 bg-blue-500 hover:bg-blue-600 transition duration-300 py-2 rounded-lg font-semibold mt-2 text-white"
//         >
//           Send Message
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ContactForm;


// import { useRef, useEffect } from "react";
// import emailjs from "emailjs-com";
// import gsap from "gsap";

// const ContactForm = () => {
//   const form = useRef();
//   const formElements = useRef([]);

//   // Function to send email on form submission
//   const sendEmail = (e) => {
//     e.preventDefault(); // Prevent the form from reloading the page

//     // Send form data to EmailJS
//     emailjs
//       .sendForm(
//         "service_u1271c6", // Your Service ID
//         "template_mst6jyt", // Your Template ID
//         form.current,
//         "vjHaI2e8JNQN28SD7" // Replace with your Public Key
//       )
//       .then(() => {
//         alert("Message sent successfully!"); // Success message
//       })
//       .catch(() => {
//         alert("Failed to submit message. Please try again."); // Error message
//       });

//     e.target.reset(); // Clear the form after submission
//   };

//   // GSAP animation setup
//   useEffect(() => {
//     gsap.fromTo(
//       form.current,
//       { opacity: 0, y: 50 },
//       { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
//     );

//     // Staggered animation for form elements
//     gsap.fromTo(
//       formElements.current,
//       { opacity: 0, y: 20 },
//       { opacity: 1, y: 0, duration: 1, stagger: 0.2, delay: 0.5, ease: "power2.out" }
//     );
//   }, []);

//   return (
//     <div className="flex flex-col items-center py-8 px-4 bg-gray-800 text-white min-h-screen">
//       <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
//       <form
//         ref={form}
//         onSubmit={sendEmail}
//         className="w-full max-w-md bg-gray-700 p-6 rounded-lg shadow-lg space-y-4"
//       >
//         <label className="block text-gray-300">Name</label>
//         <input
//           type="text"
//           name="from_name"
//           required
//           className="w-full px-4 py-2 text-black rounded-lg focus:outline-none"
//           ref={(el) => formElements.current.push(el)}
//         />

//         <label className="block text-gray-300">Email</label>
//         <input
//           type="email"
//           name="user_email"
//           required
//           className="w-full px-4 py-2 text-black rounded-lg focus:outline-none"
//           ref={(el) => formElements.current.push(el)}
//         />

//         <label className="block text-gray-300">Message</label>
//         <textarea
//           name="message"
//           required
//           className="w-full px-4 py-2 text-black rounded-lg focus:outline-none h-24 resize-none"
//           ref={(el) => formElements.current.push(el)}
//         ></textarea>

//         <button
//           type="submit"
//           className="w-full bg-gradient-to-r from-blue-400 to-blue-600 bg-blue-500 hover:bg-blue-600 transition duration-300 py-2 rounded-lg font-semibold mt-2 text-white"
//           ref={(el) => formElements.current.push(el)}
//         >
//           Send Message
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ContactForm;




// import { useRef, useEffect } from "react";
// import emailjs from "emailjs-com";
// import gsap from "gsap";

// const ContactForm = () => {
//   const form = useRef();
//   const formElements = useRef([]);

//   // Function to send email on form submission
//   const sendEmail = (e) => {
//     e.preventDefault(); // Prevent the form from reloading the page

//     // Collect form data and set recipient email
//     const formData = new FormData(form.current);
//     formData.append("to_email", "k52712866@gmail.com"); // Set recipient email

//     // Send form data to EmailJS
//     emailjs
//       .sendForm(
//         "service_u1271c6", // Your Service ID
//         "template_mst6jyt", // Your Template ID
//         form.current,
//         "vjHaI2e8JNQN28SD7" // Your Public Key
//       )
//       .then(() => {
//         alert("Message sent successfully!"); // Success message
//       })
//       .catch(() => {
//         alert("Failed to submit message. Please try again."); // Error message
//       });

//     e.target.reset(); // Clear the form after submission
//   };

//   // GSAP animation setup
//   useEffect(() => {
//     gsap.fromTo(
//       form.current,
//       { opacity: 0, y: 50 },
//       { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
//     );

//     // Staggered animation for form elements
//     gsap.fromTo(
//       formElements.current,
//       { opacity: 0, y: 20 },
//       { opacity: 1, y: 0, duration: 1, stagger: 0.2, delay: 0.5, ease: "power2.out" }
//     );
//   }, []);

//   return (
//     <div className="flex flex-col items-center py-8 px-4 bg-gray-800 text-white min-h-screen">
//       <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
//       <form
//         ref={form}
//         onSubmit={sendEmail}
//         className="w-full max-w-md bg-gray-700 p-6 rounded-lg shadow-lg space-y-4"
//       >
//         <label className="block text-gray-300">Name</label>
//         <input
//           type="text"
//           name="from_name"
//           required
//           className="w-full px-4 py-2 text-black rounded-lg focus:outline-none"
//           ref={(el) => formElements.current.push(el)}
//         />

//         <label className="block text-gray-300">Email</label>
//         <input
//           type="email"
//           name="user_email"
//           required
//           className="w-full px-4 py-2 text-black rounded-lg focus:outline-none"
//           ref={(el) => formElements.current.push(el)}
//         />

//         <label className="block text-gray-300">Message</label>
//         <textarea
//           name="message"
//           required
//           className="w-full px-4 py-2 text-black rounded-lg focus:outline-none h-24 resize-none"
//           ref={(el) => formElements.current.push(el)}
//         ></textarea>

//         <button
//           type="submit"
//           className="w-full bg-gradient-to-r from-blue-400 to-blue-600 hover:bg-blue-600 transition duration-300 py-2 rounded-lg font-semibold mt-2 text-white"
//           ref={(el) => formElements.current.push(el)}
//         >
//           Send Message
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ContactForm;



// import { useRef, useEffect } from "react";
// import emailjs from "emailjs-com";
// import gsap from "gsap";

// const ContactForm = () => {
//   const form = useRef();
//   const formElements = useRef([]);

//   // Function to send email on form submission
//   const sendEmail = (e) => {
//     e.preventDefault(); // Prevent the form from reloading the page

//     // Collect form data and set recipient email
//     const formData = new FormData(form.current);
//     formData.append("to_email", "k52712866@gmail.com"); // Set recipient email

//     // Send form data to EmailJS
//     emailjs
//       .sendForm(
//         "service_u1271c6", // Your Service ID
//         "template_mst6jyt", // Your Template ID
//         form.current,
//         "vjHaI2e8JNQN28SD7" // Your Public Key
//       )
//       .then(() => {
//         alert("Message sent successfully!"); // Success message
//       })
//       .catch(() => {
//         alert("Failed to submit message. Please try again."); // Error message
//       });

//     e.target.reset(); // Clear the form after submission
//   };

//   // GSAP animation setup
//   useEffect(() => {
//     gsap.fromTo(
//       form.current,
//       { opacity: 0, y: 50 },
//       { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
//     );

//     // Staggered animation for form elements
//     gsap.fromTo(
//       formElements.current,
//       { opacity: 0, y: 20 },
//       { opacity: 1, y: 0, duration: 1, stagger: 0.2, delay: 0.5, ease: "power2.out" }
//     );
//   }, []);

//   return (
//     <div className="flex flex-col items-center py-8 px-4 bg-gray-800 text-white min-h-screen">
//       <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
//       <form
//         ref={form}
//         onSubmit={sendEmail}
//         className="w-full max-w-md bg-gray-700 p-6 rounded-lg shadow-lg space-y-4"
//       >
//         <label className="block text-gray-300">Name</label>
//         <input
//           type="text"
//           name="from_name"
//           required
//           placeholder="Your Name"
//           className="w-full px-4 py-2 text-black rounded-lg focus:outline-none"
//           ref={(el) => formElements.current.push(el)}
//         />

//         <label className="block text-gray-300">Email</label>
//         <input
//           type="email"
//           name="user_email"
//           required
//           placeholder="Your Email"
//           className="w-full px-4 py-2 text-black rounded-lg focus:outline-none"
//           ref={(el) => formElements.current.push(el)}
//         />

//         <label className="block text-gray-300">Mobile Number</label>
//         <input
//           type="tel"
//           name="user_mobile"
//           required
//           placeholder="Your Mobile Number"
//           className="w-full px-4 py-2 text-black rounded-lg focus:outline-none"
//           ref={(el) => formElements.current.push(el)}
//         />

//         <label className="block text-gray-300">Requirement</label>
//         <textarea
//           name="message"
//           required
//           placeholder="Describe your requirements"
//           className="w-full px-4 py-2 text-black rounded-lg focus:outline-none h-24 resize-none"
//           ref={(el) => formElements.current.push(el)}
//         ></textarea>

//         <button
//           type="submit"
//           className="w-full bg-gradient-to-r from-blue-400 to-blue-600 hover:bg-blue-600 transition duration-300 py-2 rounded-lg font-semibold mt-2 text-white"
//           ref={(el) => formElements.current.push(el)}
//         >
//           Send Message
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ContactForm;




// service_wyuxec9

// template_53i6k4e



// import { useRef, useEffect } from "react";
// import emailjs from "emailjs-com";
// import gsap from "gsap";

// const ContactForm = () => {
//   const form = useRef();
//   const formElements = useRef([]);

//   // Function to send email on form submission
//   const sendEmail = (e) => {
//     e.preventDefault(); // Prevent the form from reloading the page

//     // Collect form data and set recipient email
//     const formData = new FormData(form.current);
//     formData.append("to_email", "kvchavan007@gmail.com"); // Set recipient email

//     // Send form data to EmailJS with the updated service ID and template ID
//     emailjs
//       .sendForm(
//         "service_wyuxec9", // Updated Service ID
//         "template_53i6k4e", // Updated Template ID
//         form.current,
//         "DlbchzBha0ECkmZNJ" // Your Public Key
//       )
//       .then(() => {
//         alert("Message sent successfully!"); // Success message
//       })
//       .catch(() => {
//         alert("Failed to submit message. Please try again."); // Error message
//       });

//     e.target.reset(); // Clear the form after submission
//   };

//   // GSAP animation setup
//   useEffect(() => {
//     gsap.fromTo(
//       form.current,
//       { opacity: 0, y: 50 },
//       { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
//     );

//     // Staggered animation for form elements
//     gsap.fromTo(
//       formElements.current,
//       { opacity: 0, y: 20 },
//       { opacity: 1, y: 0, duration: 1, stagger: 0.2, delay: 0.5, ease: "power2.out" }
//     );
//   }, []);

//   return (
//     <div className="flex flex-col items-center py-8 px-4 bg-gray-800 text-white min-h-screen">
//       <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
//       <form
//         ref={form}
//         onSubmit={sendEmail}
//         className="w-full max-w-md bg-gray-700 p-6 rounded-lg shadow-lg space-y-4"
//       >
//         <label className="block text-gray-300">Name</label>
//         <input
//           type="text"
//           name="from_name"
//           required
//           placeholder="Your Name"
//           className="w-full px-4 py-2 text-black rounded-lg focus:outline-none"
//           ref={(el) => formElements.current.push(el)}
//         />

//         <label className="block text-gray-300">Email</label>
//         <input
//           type="email"
//           name="user_email"
//           required
//           placeholder="Your Email"
//           className="w-full px-4 py-2 text-black rounded-lg focus:outline-none"
//           ref={(el) => formElements.current.push(el)}
//         />

//         <label className="block text-gray-300">Mobile Number</label>
//         <input
//           type="text" // Changed to type="text" to allow full number
//           name="user_mobile"
//           required
//           placeholder="Your Mobile Number"
//           className="w-full px-4 py-2 text-black rounded-lg focus:outline-none"
//           ref={(el) => formElements.current.push(el)}
//         />

//         <label className="block text-gray-300">Requirement</label>
//         <textarea
//           name="message"
//           required
//           placeholder="Describe your requirements"
//           className="w-full px-4 py-2 text-black rounded-lg focus:outline-none h-24 resize-none"
//           ref={(el) => formElements.current.push(el)}
//         ></textarea>

//         <button
//           type="submit"
//           className="w-full bg-gradient-to-r from-blue-400 to-blue-600 hover:bg-blue-600 transition duration-300 py-2 rounded-lg font-semibold mt-2 text-white"
//           ref={(el) => formElements.current.push(el)}
//         >
//           Send Message
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ContactForm;


// import { useRef, useEffect } from "react";
// import emailjs from "emailjs-com";
// import gsap from "gsap";

// const ContactForm = () => {
//   const form = useRef();
//   const formElements = useRef([]);

//   // Function to send email on form submission
//   const sendEmail = (e) => {
//     e.preventDefault(); // Prevent the form from reloading the page

//     // Collect form data from the form reference
//     const formData = new FormData(form.current);
    
//     // Debug: Log form data to ensure it's being captured
//     for (let [key, value] of formData.entries()) {
//       console.log(key, value); // This will show each form input and its value
//     }

//     // Send form data to EmailJS with the updated service ID and template ID
//     emailjs
//       .sendForm(
//         "service_wyuxec9", // Updated Service ID
//         "template_53i6k4e", // Updated Template ID
//         form.current,
//         "DlbchzBha0ECkmZNJ" // Your Public Key
//       )
//       .then(() => {
//         alert("Message sent successfully!"); // Success message
//       })
//       .catch(() => {
//         alert("Failed to submit message. Please try again."); // Error message
//       });

//     e.target.reset(); // Clear the form after submission
//   };

//   // GSAP animation setup
//   useEffect(() => {
//     gsap.fromTo(
//       form.current,
//       { opacity: 0, y: 50 },
//       { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
//     );

//     // Staggered animation for form elements
//     gsap.fromTo(
//       formElements.current,
//       { opacity: 0, y: 20 },
//       { opacity: 1, y: 0, duration: 1, stagger: 0.2, delay: 0.5, ease: "power2.out" }
//     );
//   }, []);

//   return (
//     <div className="flex flex-col items-center py-8 px-4 bg-gray-800 text-white min-h-screen">
//       <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
//       <form
//         ref={form}
//         onSubmit={sendEmail}
//         className="w-full max-w-md bg-gray-700 p-6 rounded-lg shadow-lg space-y-4"
//       >
//         <label className="block text-gray-300">Name</label>
//         <input
//           type="text"
//           name="from_name"
//           required
//           placeholder="Your Name"
//           className="w-full px-4 py-2 text-black rounded-lg focus:outline-none"
//           ref={(el) => formElements.current.push(el)}
//         />

//         <label className="block text-gray-300">Email</label>
//         <input
//           type="email"
//           name="user_email"
//           required
//           placeholder="Your Email"
//           className="w-full px-4 py-2 text-black rounded-lg focus:outline-none"
//           ref={(el) => formElements.current.push(el)}
//         />

//         <label className="block text-gray-300">Mobile Number</label>
//         <input
//           type="text" // Changed to type="text" to allow full number
//           name="user_mobile"
//           required
//           placeholder="Your Mobile Number"
//           className="w-full px-4 py-2 text-black rounded-lg focus:outline-none"
//           ref={(el) => formElements.current.push(el)}
//         />

//         <label className="block text-gray-300">Requirement</label>
//         <textarea
//           name="message"
//           required
//           placeholder="Describe your requirements"
//           className="w-full px-4 py-2 text-black rounded-lg focus:outline-none h-24 resize-none"
//           ref={(el) => formElements.current.push(el)}
//         ></textarea>

//         <button
//           type="submit"
//           className="w-full bg-gradient-to-r from-blue-400 to-blue-600 hover:bg-blue-600 transition duration-300 py-2 rounded-lg font-semibold mt-2 text-white"
//           ref={(el) => formElements.current.push(el)}
//         >
//           Send Message
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ContactForm;



import { useRef, useEffect } from "react";
import emailjs from "emailjs-com";
import gsap from "gsap";

const ContactForm = () => {
  const form = useRef();
  const formElements = useRef([]);

  // Function to send email on form submission
  const sendEmail = (e) => {
    e.preventDefault(); // Prevent the form from reloading the page

    // Collect form data from the form reference
    const formData = new FormData(form.current);

    // Debug: Log form data to ensure it's being captured
    for (let [key, value] of formData.entries()) {
      console.log(key, value); // This will show each form input and its value
    }

    // Send form data to EmailJS with the updated service ID and template ID
    emailjs
      .sendForm(
        "service_wyuxec9", // Updated Service ID
        "template_53i6k4e", // Updated Template ID
        form.current,
        "DlbchzBha0ECkmZNJ" // Your Public Key
      )
      .then(() => {
        alert("Message sent successfully!"); // Success message
      })
      .catch(() => {
        alert("Failed to submit message. Please try again."); // Error message
      });

    e.target.reset(); // Clear the form after submission
  };

  // GSAP animation setup
  useEffect(() => {
    gsap.fromTo(
      form.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );

    // Staggered animation for form elements
    gsap.fromTo(
      formElements.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2, delay: 0.5, ease: "power2.out" }
    );
  }, []);

  return (
    <div className="flex flex-col items-center py-8 px-4 bg-gray-800 text-white min-h-screen">
      <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="w-full max-w-md bg-gray-700 p-6 rounded-lg shadow-lg space-y-4"
      >
        <label className="block text-gray-300">Name</label>
        <input
          type="text"
          name="from_name"
          required
          placeholder="Your Name"
          className="w-full px-4 py-2 text-black rounded-lg focus:outline-none"
          ref={(el) => formElements.current.push(el)}
        />

        <label className="block text-gray-300">Email</label>
        <input
          type="email"
          name="user_email"
          required
          placeholder="Your Email"
          className="w-full px-4 py-2 text-black rounded-lg focus:outline-none"
          ref={(el) => formElements.current.push(el)}
        />

        <label className="block text-gray-300">Mobile Number</label>
        <input
          type="text" // Changed to type="text" to allow full number
          name="user_mobile"
          required
          placeholder="Your Mobile Number"
          className="w-full px-4 py-2 text-black rounded-lg focus:outline-none"
          pattern="\d{10}" // Ensure it's exactly 10 digits
          ref={(el) => formElements.current.push(el)}
        />

        <label className="block text-gray-300">Post Your Requirement</label>
        <textarea
          name="message"
          required
          placeholder="Describe your requirements"
          className="w-full px-4 py-2 text-black rounded-lg focus:outline-none h-24 resize-none"
          ref={(el) => formElements.current.push(el)}
        ></textarea>

        <button
  type="submit"
  className="w-full bg-gradient-to-r from-blue-400 to-blue-600 text-white  rounded-lg transition-all duration-300 py-2 font-semibold mt-2 hover:bg-gradient-to-r hover:from-purple-400 hover:to-purple-600 focus:ring focus:ring-blue-300"
  ref={(el) => formElements.current.push(el)}
>
  Send Message
</button>
      </form>
    </div>
  );
};

export default ContactForm;
