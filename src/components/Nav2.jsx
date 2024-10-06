'use client';
import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const SecondaryNavbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="backdrop-blur-lg bg-sky-200/30 h-12 flex justify-between items-center px-4 pt-15 md:px-8 text-black shadow-lg">
      <div className="flex space-x-4">
        <button className="hover:text-sky-600">Challenges</button>
        <button className="hover:text-sky-600">Hobbies</button>
        <button className="hover:text-sky-600">Games</button>
      </div>

      <div className="relative">
        <button
          onClick={toggleDropdown}
          className="flex items-center hover:text-sky-600"
        >
          More <FaChevronDown className="ml-2" />
        </button>

        {/* Dropdown */}
        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg">
            <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
              Item 1
            </a>
            <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
              Item 2
            </a>
            <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
              Item 3
            </a>
            <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
              Item 4
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default SecondaryNavbar;
