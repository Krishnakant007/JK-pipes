

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-5 md:px-20 lg:px-40">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Contact Us Section */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
          <p>J K Technoplast Private Limited</p>
          <p>Established in 2012 at Jalna, Maharashtra</p>
          <p>Manufacturer of PVC Pipe, HDPE Pipe, SWR Pipe, and more.</p>
          <p>Address: Plot Number A-9/1/2, Additional MIDC Area, Jalna-431203, Maharashtra, India</p>
          <p>CEO: Ganesh Singare</p>
          <p>Phone: [Add Contact Number Here]</p>
        </div>

        {/* Our Products Section */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Our Products</h2>
          <ul className="space-y-2">
            <li>PVC Pipes</li>
            <li>HDPE Pipes</li>
            <li>SWR Pipes</li>
            <li>Custom Pipes and More</li>
          </ul>
        </div>

        {/* Get in Touch Section */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Get in Touch</h2>
          <p>Phone: [Add Contact Number]</p>
          <p>Email: [Add Contact Email]</p>
          <p>Bank: Oriental Bank of Commerce</p>
          <p>GST No: 27AACCJ6589N1ZQ</p>
          <p>CIN No: U25202MH2011PTC217433</p>
        </div>

        {/* More Information Section */}
        <div>
          <h2 className="text-lg font-semibold mb-4">More Information</h2>
          <ul className="space-y-2">
            <li>Payment Modes: Cash, Credit Card, Cheque, DD, Online</li>
            <li>Shipment Mode: By Road</li>
            <li>Quality Assurance: Strict testing standards to ensure flawless products</li>
            <li>Why Us?</li>
            <ul className="ml-4 list-disc">
              <li>High-quality products</li>
              <li>Advanced infrastructure</li>
              <li>Customization options</li>
              <li>Timely delivery</li>
            </ul>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center">
        <p className="text-sm">&copy; 2024 J K Technoplast Private Limited. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
