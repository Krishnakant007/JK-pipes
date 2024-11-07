import React, { useState } from 'react';

const Whatsapp = () => {
  const [showMessage, setShowMessage] = useState(false); // To toggle the popup visibility
  const [isIconClicked, setIsIconClicked] = useState(false); // To toggle the WhatsApp icon to "X"

  const handleClick = () => {
    setShowMessage(!showMessage); // Toggle the visibility of the message box
    setIsIconClicked(!isIconClicked); // Toggle the WhatsApp icon to "X"
  };

  const startChat = () => {
    const phoneNumber = '9405799633'; // WhatsApp phone number
    const message = 'Hi, I need help!'; // Predefined message to send
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="relative">
      {/* Fixed WhatsApp logo or X button depending on state */}
      <div className="fixed bottom-4 right-4 z-50 cursor-pointer" onClick={handleClick}>
        {isIconClicked ? (
          // "X" button after clicking the WhatsApp icon
          <div className="bg-green-500 text-white rounded-full w-12 h-12 flex items-center justify-center">
            <span className="text-2xl">X</span>
          </div>
        ) : (
          // WhatsApp image before clicking
          <img
            src="/whatsapp.webp" // Path to your WhatsApp image
            alt="WhatsApp"
            width="60"  // Adjust the width
            height="60" // Adjust the height
          />
        )}
      </div>

      {/* Square Message Box shown after clicking the WhatsApp logo */}
      {showMessage && (
        <div className="fixed bottom-16 right-4 w-64 h-64 bg-white border rounded-lg shadow-lg z-50 text-center p-4">
          <p className="text-lg font-semibold mb-4">
            Hi, Need help! Chat with us on WhatsApp for any queries.
          </p>
          <button
            className="bg-green-500 text-white px-6 py-3 rounded-full text-lg"
            onClick={startChat}
          >
            START CHAT
          </button>
        </div>
      )}
    </div>
  );
};

export default Whatsapp;
