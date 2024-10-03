'use client';
import { useState, useEffect, useRef } from 'react';
import { FaComments } from 'react-icons/fa';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const chatBoxRef = useRef(null); // To reference the chatbox

  // Function to toggle the chatbot dialogue box
  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  // Close the chatbox when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (chatBoxRef.current && !chatBoxRef.current.contains(event.target)) {
        setIsOpen(false); // Close chatbox when clicking outside
      }
    };

    // Add event listener when the chatbox is open
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    // Cleanup the event listener
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="fixed right-5 bottom-5 z-50">
      {/* Chat Button with Tooltip */}
      <div className="relative group">
        <button
          onClick={toggleChat}
          className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-200 ease-in-out flex items-center justify-center"
          title="Chat with us"
        >
          <FaComments size={24} />
        </button>

        {/* Tooltip */}
        <div className="absolute bottom-full right-1/2 transform translate-x-1/2 mb-2 hidden group-hover:block">
          <div className="bg-black text-white text-sm rounded-lg px-2 py-1">
            AI Chat Bot
          </div>
          <div className="h-2 w-2 bg-black transform rotate-45 relative left-1/2 -translate-x-1/2"></div>
        </div>
      </div>

      {/* Chatbox */}
      {isOpen && (
        <div
          ref={chatBoxRef} // Assign reference to the chatbox div
          className="bg-white border rounded-lg shadow-lg w-80 h-96 mt-4 p-4 absolute right-0 bottom-16"
        >
          <div className="flex justify-between items-center border-b pb-2">
            <h3 className="text-lg font-semibold text-black">Kundan Assistant Bot</h3>
            <button onClick={toggleChat} className="text-red-500 font-bold">
              X
            </button>
          </div>

          {/* Chat Body */}
          <div className="h-72 overflow-y-auto p-2">
            <p className="text-sm text-black">Welcome to our support chat!</p>
            {/* Add chat messages here */}
          </div>

          {/* Chat Input */}
          <div className="flex items-center mt-2">
            <input
              type="text"
              placeholder="Type a message..."
              className="w-full px-3 py-2 border rounded-lg text-sm focus:outline-none"
            />
            <button className="bg-blue-600 text-white px-4 py-2 ml-2 rounded-lg">
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
