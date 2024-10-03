'use client'
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Import the Image component from Next.js
import { HiExternalLink, HiCode } from 'react-icons/hi';
import {projects} from '/public/project.json';
const ProjectSection = () => {
  const [projects, setProjects] = useState([]);

  // Fetch the project data from the JSON file
  useEffect(() => {
    const fetchProjects = async () => {
      const response = await fetch('/projects.json');
      const data = await response.json();
      setProjects(data);
    };
    fetchProjects();
  }, []);

  return (
    <section id="projects" className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
              {/* Use the Image component from Next.js */}
              <Image
                src={project.image} // Image source
                alt={project.name} // Alt text for accessibility
                width={500} // Specify a width
                height={300} // Specify a height
                className="w-full h-48 object-cover" // Tailwind classes for styling
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                <h5 className="text-gray-600 mb-4">{project.description}</h5>
                <div className="flex justify-between">
                  <Link href={project.liveLink} className="flex items-center text-blue-600 hover:underline">
                    <HiExternalLink className="mr-1" /> Live
                  </Link>
                  <Link href={project.githubLink} className="flex items-center text-gray-600 hover:underline">
                    <HiCode className="mr-1" /> Code
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
