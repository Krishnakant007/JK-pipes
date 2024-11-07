

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const sectionsRef = useRef([]);

  useEffect(() => {
    sectionsRef.current.forEach((section, index) => {
      gsap.fromTo(
        section,
        { x: index % 2 === 0 ? -100 : 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <footer className="bg-black text-white py-10 px-5 md:px-20 lg:px-40">
      <div>
        <h1 className="text-3xl font-semibold pb-4">View Our Location</h1>
        <div
          style={{ position: "relative", paddingBottom: "56.25%", height: 0, overflow: "hidden" }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.8306187092016!2d75.86109527522501!3d19.84711858152279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bda572feacbb4bb%3A0x1816145364295a5c!2sJ.K.Pipes!5e0!3m2!1sen!2sin!4v1729767750170!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0, position: "absolute", top: 0, left: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Location of J.K. Pipes"
          />
        </div>
      </div>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
        {/* Section 1 */}
        <div ref={(el) => (sectionsRef.current[0] = el)} className="space-y-3">
          <h2 className="font-bold text-2xl">Reach Us</h2>
          <p>JK Pipes Private Limited</p>
          <p>Established in 2012 at Jalna, Maharashtra</p>
          <p>Manufacturer of PVC Pipe, HDPE Pipe, SWR Pipe, and more.</p>
          <p>Address: RVW7+RFV, Nagpur - Aurangabad Hwy, Jalna Industrial Area MIDC, Maharashtra 431213</p>
          <p>CEO: Ganesh Singare</p>
          <p>Phone: 09405799633</p>
        </div>

        {/* Section 2 */}
        <div ref={(el) => (sectionsRef.current[1] = el)} className="space-y-3">
          <h2 className="font-bold text-2xl">Why Us?</h2>
          <ul className="ml-4 list-disc">
            <li>High-quality products</li>
            <li>Advanced infrastructure</li>
            <li>Customization options</li>
            <li>Timely delivery</li>
          </ul>
        </div>

        {/* Section 3 */}
        <div ref={(el) => (sectionsRef.current[2] = el)} className="space-y-3">
          <h2 className="font-bold text-2xl">Our Products</h2>
          <ul className="space-y-2">
            <li>PVC Pipes</li>
            <li>HDPE Pipes</li>
            <li>SWR Pipes</li>
            <li>HDPE Coil Pipe</li>
            <li>Custom Pipes and More</li>
          </ul>
        </div>

        {/* Section 4 */}
        <div ref={(el) => (sectionsRef.current[3] = el)} className="space-y-3">
        <h2 className="font-bold text-2xl">Get in Touch</h2>
        <p>📞 Phone: +91 9405799633</p>
        <p>📞 Phone: +91 9673750215</p>
        <p>✉️ Email: jktechnoplast@yahoo.com</p>
        
     </div>
        {/* Section 5 */}
        <div ref={(el) => (sectionsRef.current[4] = el)} className="space-y-3">
          <h2 className="font-bold text-2xl">More Information</h2>
          <ul className="space-y-2">
            <li>Payment Modes: Cash, Credit Card, Cheque, DD, Online</li>
            <li>Shipment Mode: By Road</li>
            <li>Quality Assurance: Strict testing standards to ensure flawless products</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center">
        <p className="text-md font-bold">&copy; 2024 JK Pipes Private Limited. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
