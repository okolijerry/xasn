import Link from "next/link";
import { BsWhatsapp } from "react-icons/bs";

import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import AchievementsSection from "./components/AchievementsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import "./globals.css";

export default function Home() {
  return (
    <main className="flex min-h-screen relative flex-col bg-[url('/images/bg.png')] bg-no-repeat bg-cover ">
      <Navbar />
      <div className="section mx-auto px-12 py-4">
        <HeroSection />
        <AchievementsSection />
        <AboutSection />
        <ProjectSection />
        <EmailSection />
      </div>
      <Footer />
      <div className=" fixed bottom-[6rem] right-[4rem] flex items-center justify-center cursor-pointer bg-white p-4 rounded-full border z-20">
        <Link href="https://wa.link/5kjh0s" target="_blank">
          <BsWhatsapp className="text-purple-500 text-4xl" />
        </Link>
      </div>
    </main>
  );
}
