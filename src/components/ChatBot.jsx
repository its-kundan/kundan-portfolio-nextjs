"use client"
import { useState, useEffect, useRef } from 'react';
import { FaComments } from 'react-icons/fa';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [chatHistory, setChatHistory] = useState([]);
  const [showOptions, setShowOptions] = useState(true);
  const [currentOptions, setCurrentOptions] = useState([
    { id: 1, text: "Introduction", response: "I'm Kundan Kumar, a final year B.tech Undergrate at NIT Agartala." },
    { id: 2, text: "Projects", response: "Sudoku Solver, Luminus Drone" },
    { id: 3, text: "more", response: "Comming Soon..." }
  ]);
  const [userInput, setUserInput] = useState('');
  const chatBoxRef = useRef(null);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) setShowOptions(true);  // Ensure options are shown when opening the chat
  };

  const handleOptionClick = (option) => {
    setChatHistory([...chatHistory, { type: 'user', text: option.text }, { type: 'bot', text: option.response }]);
    setShowOptions(true);  // Show options again after each interaction
  };

  const handleSendClick = () => {
    if (userInput.trim() !== '') {
      setChatHistory([...chatHistory,
        { type: 'user', text: userInput },
        { type: 'bot', text: "Please select the option.", color: 'text-red-500' },
        { type: 'bot', text: "This is under construction.", color: 'text-gray-500' }
      ]);
      setUserInput('');  // Clear input after sending
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (chatBoxRef.current && !chatBoxRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="fixed right-12 bottom-7 z-50">
      <div className="relative group">
        <button
          onClick={toggleChat}
          className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-200 ease-in-out flex items-center justify-center"
          title="Chat with us"
        >
          <FaComments size={24} />
        </button>

        <div className="absolute bottom-full right-1/2 transform translate-x-1/2 mb-2 hidden group-hover:block">
          <div className="bg-black text-white text-sm rounded-lg px-2 py-1">
            AI Chat Bot
          </div>
          <div className="h-2 w-2 bg-black transform rotate-45 relative left-1/2 -translate-x-1/2"></div>
        </div>
      </div>

      {isOpen && (
        <div
          ref={chatBoxRef}
          className="bg-white border rounded-lg shadow-lg w-80 h-96 mt-4 p-4 absolute right-0 bottom-16"
        >
          <div className="flex justify-between items-center border-b pb-2">
            <h3 className="text-lg font-semibold text-black">Sudoku Assistant Bot</h3>
            <button onClick={toggleChat} className="text-red-500 font-bold">
              X
            </button>
          </div>

          <div className="overflow-y-auto p-2 space-y-2" style={{ height: 'calc(100% - 100px)' }}>
            {chatHistory.map((entry, index) => (
              <div key={index} className={`text-sm ${entry.color || (entry.type === 'bot' ? 'text-blue-600' : 'text-black')}`}>
                {entry.text}
              </div>
            ))}
            {showOptions && (
              <div className="flex flex-col space-y-2">
                {currentOptions.map(option => (
                  <button
                    key={option.id}
                    onClick={() => handleOptionClick(option)}
                    className="bg-gray-200 hover:bg-gray-300 text-black p-2 rounded"
                  >
                    {option.text}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Always visible text input area */}
          <div className="absolute bottom-4 left-4 right-4 flex items-center">
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Type a message..."
              className="flex-grow p-2 border rounded-lg text-sm focus:outline-none"
            />
            <button
              onClick={handleSendClick}
              className="bg-blue-600 text-white px-4 py-2 ml-2 rounded-lg"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
