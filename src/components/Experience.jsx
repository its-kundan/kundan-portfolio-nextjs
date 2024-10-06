'use client';

const Experience = () => {
  return (
    <section id="experience" className="py-16 bg-gray-100">
      <div className="container mx-auto px-8">
        <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
        
        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h3 className="text-2xl font-bold mb-2">Software Developer Intern</h3>
          <p className="text-gray-600 mb-4"> OnlineJaoo.com, Kolkata</p>
          <p className="text-gray-800 mb-2">Duration: May 2024 – June 2024</p>
          
          <ul className="list-disc pl-6 text-gray-700">
            <li>Developed and optimized full-stack applications using React, Node.js, and PostgreSQL.</li>
            <li>Collaborated with cross-functional teams to design, develop, and implement scalable solutions.</li>
            <li>Integrated APIs and handled backend logic to improve application functionality.</li>
            <li>Enhanced performance and reduced load times by optimizing database queries and code efficiency.</li>
            <li>Participated in code reviews and contributed to a clean, efficient codebase.</li>
          </ul>
        </div>

        {/* You can add more experiences similarly */}
      </div>
    </section>
  );
};

export default Experience;
