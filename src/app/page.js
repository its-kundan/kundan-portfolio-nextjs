import Image from "next/image";
import Test from "@/components/Test";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
// import Hero from "@/components/Hero";
import Project from "@/components/Project";
import FloatingIcons from "@/components/FloatingIcons";
import ChatBot from "@/components/ChatBot";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Contact2 from "@/components/Contact2";
import HeroSection from "@/components/HeroSection";


export default function Home() {
  return (
   <>
   {/* <Hero /> */}
   <HeroSection />
   <Experience />
   <Project />
   <FloatingIcons />
   <Skills />
   <Contact2 />
   <ChatBot />
   </>
  );
}


// "use client"
// import React from "react";
// import { BackgroundLines } from "@/components/ui/background-lines";

// export default function Home() {
//   return (
//     (<BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
//       <h2
//         className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
//         I&apos;m <br /> Kundan.
//       </h2>
//       <p
//         className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
//         I am a Web developer from India.
//       </p>
//     </BackgroundLines>)
//   );
// }
