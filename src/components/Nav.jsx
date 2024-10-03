'use client';
import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { HiMenu, HiX } from 'react-icons/hi';
import { FaSun, FaMoon } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const menuRef = useRef(null); // Reference to the mobile menu

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Apply/remove dark class to html tag on theme change
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Close mobile menu when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false); // Close menu when clicking outside
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    // Cleanup event listener when component unmounts or when menu closes
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav className="fixed w-full z-10 bg-white dark:bg-gray-900 bg-opacity-30 backdrop-filter backdrop-blur-lg shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-gray-800 dark:text-white">
              Portfolio
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Dark/Light Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none"
            >
              {darkMode ? <FaSun size={24} /> : <FaMoon size={24} />}
            </button>

            <Link
              href="#about"
              className="text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-400 px-3 py-2 rounded-md text-sm font-medium"
            >
              About Me
            </Link>
            <Link
              href="#projects"
              className="text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-400 px-3 py-2 rounded-md text-sm font-medium"
            >
              Projects
            </Link>
            <Link
              href="#skills"
              className="text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-400 px-3 py-2 rounded-md text-sm font-medium"
            >
              Skills
            </Link>
            <Link
              href="#resume"
              className="text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-400 px-3 py-2 rounded-md text-sm font-medium"
            >
              Resume
            </Link>
            <Link
              href="#contact"
              className="text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-400 px-3 py-2 rounded-md text-sm font-medium"
            >
              Contact
            </Link>
            <Link
              href="#achievements"
              className="text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-400 px-3 py-2 rounded-md text-sm font-medium"
            >
              Achievements
            </Link>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden flex items-center">
            {/* Dark/Light Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none mr-4"
            >
              {darkMode ? <FaSun size={24} /> : <FaMoon size={24} />}
            </button>

            <button
              onClick={toggleMenu}
              className="text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none"
            >
              {isOpen ? <HiX size={30} /> : <HiMenu size={30} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div
          ref={menuRef} // Ref to detect clicks outside
          className="md:hidden bg-white dark:bg-gray-900 bg-opacity-30 backdrop-filter backdrop-blur-lg"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-start">
            <Link
              href="#about"
              className="text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-400 px-3 py-2 rounded-md text-sm font-medium"
            >
              About Me
            </Link>
            <Link
              href="#projects"
              className="text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-400 px-3 py-2 rounded-md text-sm font-medium"
            >
              Projects
            </Link>
            <Link
              href="#skills"
              className="text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-400 px-3 py-2 rounded-md text-sm font-medium"
            >
              Skills
            </Link>
            <Link
              href="#resume"
              className="text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-400 px-3 py-2 rounded-md text-sm font-medium"
            >
              Resume
            </Link>
            <Link
              href="#contact"
              className="text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-400 px-3 py-2 rounded-md text-sm font-medium"
            >
              Contact
            </Link>
            <Link
              href="#achievements"
              className="text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-400 px-3 py-2 rounded-md text-sm font-medium"
            >
              Achievements
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
