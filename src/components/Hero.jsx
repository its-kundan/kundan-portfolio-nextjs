import Image from 'next/image';

const Hero = () => {
  return (
    <section className="bg-gray-100 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        {/* Left Side - Text */}
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
            I&apos;m <span className="text-blue-600">Kundan Kumar</span>
          </h1>
          <h2 className="text-2xl md:text-3xl mt-4 text-gray-700">
            A Web Developer from India
          </h2>

          {/* Buttons Section */}
          <div className="mt-6 flex space-x-4">
            <a href="https://drive.google.com/file/d/16GlhniYCCMKEcTJ2hPp1BuwI6AoihzR3/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-200">
                Resume
              </button>
            </a>
            <a href="#contact">
              <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition duration-200">
                Hire Me
              </button>
            </a>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="md:w-1/2 flex justify-center">
  <Image
    src="/images/hero.jpg"  // Correct path for Next.js public folder
    alt="Kundan Kumar"
    width={400}
    height={400}
    className="rounded-lg border border-white border-opacity-30" // Adjusted border opacity
  />
</div>

      </div>
    </section>
  );
};

export default Hero;
