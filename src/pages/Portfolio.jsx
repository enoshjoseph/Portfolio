import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Section from "../components/Section";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Achievements from "../components/Achievements";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <Navbar />
      <Hero />
      <Skills/>
      <Projects/>
      <Achievements/>
      <Contact/>
      <Footer/>

      {/* <Section id="courses" title="Courses" />
      <Section id="css-artworks" title="CSS Artworks" dark />
      <Section id="my-setup" title="My Setup" />
      <Section id="contact" title="Contact" dark /> */}
    </div>
  );
}
