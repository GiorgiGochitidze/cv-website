"use client";

import AboutMe from "@/components/AboutMe/AboutMe";
import ContactMe from "@/components/ContactMe/ContactMe";
import Footer from "@/components/Footer/Footer";
import Landing from "@/components/Landing/landing";
import Navbar from "@/components/Navbar/Navbar";
// import NeonDotsBackground from "@/components/neon-dots";
import Portfolio from "@/components/Portfolio/Portfolio";
import Skills from "@/components/Skills/Skills";
import { useEffect } from "react";
// import { Suspense } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // default animation duration
      once: false, // whether animation should happen only once
    });
  }, []);
  return (
    <div>
      <Navbar />

      <Landing />

      <AboutMe />

      <Skills />

      <Portfolio />

      <ContactMe />

      <Footer />

      {/* <Suspense fallback={<></>}>
        <NeonDotsBackground />
      </Suspense> */}
    </div>
  );
};

export default App;
