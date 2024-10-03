import Image from "next/image";
import Test from "@/components/Test";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Project from "@/components/Project";
import FloatingIcons from "@/components/FloatingIcons";
import ChatBot from "@/components/ChatBot";

export default function Home() {
  return (
   <>
   <Hero />
  
   {/* <Project /> */}
   <FloatingIcons />
   <ChatBot />
   </>
  );
}

