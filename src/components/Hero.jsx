// 'use client'; // Add this line at the top

// import Image from 'next/image';
// import { motion } from 'framer-motion';

// const Hero = () => {
//   return (
//     <section className="bg-gray-100 min-h-screen flex items-center">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
//         {/* Left Side - Text */}
//         <div className="md:w-1/2 mb-10 md:mb-0">
//           <motion.h1
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 1 }}
//             className="text-5xl md:text-6xl font-bold text-gray-900"
//           >
//             I&apos;m <span className="text-blue-600">Kundan Kumar</span>
//           </motion.h1>
//           <motion.h2
//             initial={{ x: -100 }}
//             animate={{ x: 0 }}
//             transition={{ type: 'spring', stiffness: 120 }}
//             className="text-2xl md:text-3xl mt-4 text-gray-700"
//           >
//             A passionate web developer skilled in modern web technologies, aiming to build impactful digital experiences.
//           </motion.h2>

//           {/* Buttons Section */}
//           <div className="mt-6 flex space-x-4 justify-start">
//             <a href="https://drive.google.com/file/d/16GlhniYCCMKEcTJ2hPp1BuwI6AoihzR3/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
//               <motion.button
//                 whileHover={{ scale: 1.1 }}
//                 className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-200"
//               >
//                 Resume
//               </motion.button>
//             </a>
//             <a href="#contact">
//               <motion.button
//                 whileHover={{ scale: 1.1 }}
//                 className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition duration-200"
//               >
//                 Hire Me
//               </motion.button>
//             </a>
//           </div>
//         </div>

//         {/* Right Side - Image with Animation */}
//         <motion.div
//           className="md:w-1/2 flex justify-center"
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 1.5, ease: 'easeInOut' }}
//           whileHover={{ scale: 1.05, rotate: 3 }}
//         >
//           <Image
//             src="/images/hero.jpg"  // Correct path for Next.js public folder
//             alt="Kundan Kumar"
//             width={400}
//             height={400}
//             className="rounded-lg border border-white border-opacity-30"
//           />
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

'use client'; // Add this line at the top

import Image from 'next/image';
import { motion } from 'framer-motion';
import Slider from 'react-slick'; // Import Slider component from react-slick

const Hero = () => {
  // Carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <section className="bg-gray-100 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        {/* Left Side - Text */}
        <div className="md:w-1/2 mb-10 md:mb-0">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-6xl font-bold text-gray-900"
          >
            I&apos;m <span className="text-blue-600">Kundan Kumar</span>
          </motion.h1>
          <motion.h2
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ type: 'spring', stiffness: 120 }}
            className="text-2xl md:text-3xl mt-4 text-gray-700"
          >
            A passionate web developer skilled in modern web technologies, aiming to build impactful digital experiences.
          </motion.h2>

          {/* Buttons Section */}
          <div className="mt-6 flex space-x-4 justify-start">
            <a href="https://drive.google.com/file/d/16GlhniYCCMKEcTJ2hPp1BuwI6AoihzR3/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-200"
              >
                Resume
              </motion.button>
            </a>
            <a href="#contact">
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition duration-200"
              >
                Hire Me
              </motion.button>
            </a>
          </div>
        </div>

        {/* Right Side - Carousel with 5 Images */}
        <motion.div
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
        >
          <Slider {...settings} className="w-full">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="w-full flex justify-center">
                <Image
                  src = "/public/images/1.png"
                  // src = {`/public/images/${1}.png`}
                  // src={`/images/carousel${i}.jpg`} // Correct path for images
                  alt={`Carousel Image ${i}`}
                  width={400}
                  height={400}
                  className="rounded-lg border border-white border-opacity-30 object-cover"
                />
              </div>
            ))}
          </Slider>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
