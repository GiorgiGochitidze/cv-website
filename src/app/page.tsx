import AboutMe from "@/components/AboutMe/AboutMe";
import Landing from "@/components/Landing/landing";
import NeonDotsBackground from "@/components/neon-dots";
import Portfolio from "@/components/Portfolio/Portfolio";
import Skills from "@/components/Skills/Skills";

const App = () => {
  return (
    <div>
      <NeonDotsBackground />

      <Landing />

      <AboutMe />

      <Skills />

      <Portfolio />
    </div>
  );
};

export default App;
