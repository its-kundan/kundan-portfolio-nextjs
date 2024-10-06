import Image from "next/image";
import Test from "@/components/Test";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Project from "@/components/Project";
import FloatingIcons from "@/components/FloatingIcons";
import ChatBot from "@/components/ChatBot";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Contact2 from "@/components/Contact2";


export default function Home() {
  return (
   <>
   <Hero />
   <Experience />
   <Project />
   <FloatingIcons />
   <Skills />
   <Contact2 />
   <ChatBot />
   </>
  );
}

