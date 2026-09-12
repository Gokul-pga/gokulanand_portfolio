import Navbar from "../components/common/Navbar";
import About from "../components/sections/About";
import Hero from "../components/sections/Hero";
import ScrollSequence from "../components/sections/ScrollSequence";
import Showcase from "../components/sections/Showcase";
import Skills from "../components/sections/SkillsSection";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Showcase />
    </>
  );
}
