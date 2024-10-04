'use client'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaAws } from 'react-icons/fa';
import { SiTailwindcss, SiPostgresql, SiMongodb, SiNextdotjs } from 'react-icons/si';
import { useState } from 'react';

const skills = [
  { name: "HTML5", icon: <FaHtml5 size={50} className="text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt size={50} className="text-blue-600" /> },
  { name: "JavaScript", icon: <FaJs size={50} className="text-yellow-400" /> },
  { name: "React", icon: <FaReact size={50} className="text-blue-500" /> },
  { name: "Next.js", icon: <SiNextdotjs size={50} className="text-black dark:text-white" /> },
  { name: "Node.js", icon: <FaNodeJs size={50} className="text-green-500" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={50} className="text-teal-400" /> },
  { name: "PostgreSQL", icon: <SiPostgresql size={50} className="text-blue-800" /> },
  { name: "MongoDB", icon: <SiMongodb size={50} className="text-green-400" /> },
  { name: "Git", icon: <FaGitAlt size={50} className="text-orange-500" /> },
  { name: "GitHub", icon: <FaGithub size={50} className="text-gray-600" /> },
  { name: "AWS", icon: <FaAws size={50} className="text-yellow-500" /> },
  // Add more skills here if needed
];

const ITEMS_PER_PAGE = 8; // Show 10 skills per page

const Skills = () => {
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the total number of pages
  const totalPages = Math.ceil(skills.length / ITEMS_PER_PAGE);

  // Calculate the current skills to display
  const currentSkills = skills.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  // Function to handle pagination
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-12" id="skills">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-8">
          My Skill Set
        </h2>
        
        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {currentSkills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md transform hover:scale-110 transition-transform duration-300 ease-in-out"
            >
              <div className="animate-bounce mb-2">{skill.icon}</div>
              <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">{skill.name}</h3>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center mt-8 space-x-4">
          <button
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-lg text-white ${currentPage === 1 ? 'bg-gray-500' : 'bg-blue-600 hover:bg-blue-500'}`}
          >
            Previous
          </button>
          <span className="text-lg font-bold text-gray-800 dark:text-white">
            {currentPage} / {totalPages}
          </span>
          <button
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded-lg text-white ${currentPage === totalPages ? 'bg-gray-500' : 'bg-blue-600 hover:bg-blue-500'}`}
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default Skills;
