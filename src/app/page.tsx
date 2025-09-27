import AboutMe from "@/components/AboutMe/AboutMe";
import ContactMe from "@/components/ContactMe/ContactMe";
import Footer from "@/components/Footer/Footer";
import Landing from "@/components/Landing/landing";
import Navbar from "@/components/Navbar/Navbar";
import NeonDotsBackground from "@/components/neon-dots";
import Portfolio from "@/components/Portfolio/Portfolio";
import Skills from "@/components/Skills/Skills";
import { Suspense } from "react";

const App = () => {
  return (
    <div>
      <Navbar />

      <Landing />

      <AboutMe />

      <Skills />

      <Portfolio />

      <ContactMe />

      <Footer />
      
      <Suspense fallback={<></>}>
        <NeonDotsBackground />
      </Suspense>
    </div>
  );
};

export default App;
