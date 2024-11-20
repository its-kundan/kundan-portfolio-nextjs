"use client"
import React from "react";
import { BackgroundLines } from "@/components/ui/background-lines";
import {Cover} from "@/components/ui/cover";
import { motion } from 'framer-motion';
import Slider from 'react-slick'; // Import Slider component from react-slick

export default function HeroSection() {
  return (
    (<BackgroundLines className="flex items-center justify-center w-full flex-col px-4 z-0">
      <h2
        className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
        I&apos;m <br /> <Cover> Kundan Kumar</Cover>.
      </h2>
      <p
        className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
        I am a Web developer from India.
      </p>
      <div className="mt-6 flex space-x-4 justify-start z-10">
            <a href="https://drive.google.com/file/d/11L8-Ypkuv-Gx91PnSC3UbHrl5WS0kXoE/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
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
    </BackgroundLines>)
  );
}
