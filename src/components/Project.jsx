'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'; // Import GitHub and external link icons
import data from '../../public/data.json'; // Assuming you placed the data.json file in the public folder

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState('');

  // Set different projects per page based on screen size
  const projectsPerPage = 3;

  // Fetch the project data from data.json
  useEffect(() => {
    setProjects(data);
    setFilteredProjects(data);
  }, []);

  // Handle Pagination
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Handle Search and Filter
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    filterProjects(e.target.value, filterCategory);
  };

  const handleFilter = (e) => {
    setFilterCategory(e.target.value);
    filterProjects(searchQuery, e.target.value);
  };

  const filterProjects = (searchQuery, category) => {
    let filtered = projects.filter((project) =>
      project.heading.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Apply filter logic here if needed (e.g., filter by category)
    if (category) {
      filtered = filtered.filter((project) => project.category === category);
    }

    setFilteredProjects(filtered);
    setCurrentPage(1); // Reset to first page
  };

  return (
    <section className="p-8 bg-gray-100 mt-10" >
      {/* Search and Filter */}
      <h1 className="flex justify-center text-3xl" id="project"> Project</h1>
      <div className="flex justify-between mb-6">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Search projects..."
          className="border border-gray-300 px-4 py-2 rounded-md"
        />
        <select
          value={filterCategory}
          onChange={handleFilter}
          className="border border-gray-300 px-4 py-2 rounded-md"
        >
          <option value="">All Categories</option>
          <option value="web">Web Development</option>
          <option value="npm">npm Package Development</option>
          <option value="ai">AI/ML Development</option>
          <option value="chrome">Chrome Extension Development</option>
          <option value="backend">Backend Development</option>
          <option value="frontend">Frontend Development</option>
          <option value="ece">ECE Based</option>
          <option value="robotics">Robotics</option>
        </select>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="projects">
        {currentProjects.map((project, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-4">
            <Image
              src={project.imageURL}
              alt={project.heading}
              width={400}
              height={200}
              className="rounded-lg"
            />
            <h3 className="text-xl font-bold mt-4">{project.heading}</h3>
            <p className="text-gray-600">{project.description}</p>
            <div className="mt-4 flex justify-center space-x-4">
              <a
                href={project.githubLink}
                target="_blank"
                className="bg-gray-800 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-gray-700 transition"
              >
                <FaGithub size={20} /> <span>GitHub</span>
              </a>
              <a
                href={project.liveLink}
                target="_blank"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-blue-500 transition"
              >
                <FaExternalLinkAlt size={20} /> <span>Live</span>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-6 flex justify-center space-x-4">
        {[...Array(Math.ceil(filteredProjects.length / projectsPerPage)).keys()].map((number) => (
          <button
            key={number}
            onClick={() => paginate(number + 1)}
            className={`px-4 py-2 rounded-md ${
              currentPage === number + 1 ? 'bg-blue-600 text-white' : 'bg-gray-300'
            }`}
          >
            {number + 1}
          </button>
        ))}
      </div>
    </section>
  );
};

export default Projects;
