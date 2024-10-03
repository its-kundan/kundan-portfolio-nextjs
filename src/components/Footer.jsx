import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Left - Navigation Links */}
        <div className="flex space-x-6">
          <Link href="#about" className="hover:text-gray-400">
            About Me
          </Link>
          <Link href="#projects" className="hover:text-gray-400">
            Projects
          </Link>
          <Link href="#skills" className="hover:text-gray-400">
            Skills
          </Link>
          <Link href="#resume" className="hover:text-gray-400">
            Resume
          </Link>
          <Link href="#blog" className="hover:text-gray-400">
            Blog
          </Link>
          <Link href="#contact" className="hover:text-gray-400">
            Contact
          </Link>
          <Link href="#achievements" className="hover:text-gray-400">
            Achievements
          </Link>
        </div>

        {/* Right - Social Media Links */}
        <div className="flex space-x-6">
          <a href="https://www.linkedin.com/in/its-kundan/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaLinkedin size={24} />
          </a>
          <a href="https://github.com/its-kundan" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaGithub size={24} />
          </a>
          <a href="https://x.com/kundan_k_" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaTwitter size={24} />
          </a>
        </div>
      </div>
      <div className="cc">
        all rights reseved by Kundan  Kumar.
      </div>
    </footer>
  );
};

export default Footer;
