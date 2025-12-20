import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Section from "../components/Section";
import Skills from "../components/Skills";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <Navbar />
      <Hero />
      <Skills/>

      <Section id="courses" title="Courses" />
      <Section id="css-artworks" title="CSS Artworks" dark />
      <Section id="my-setup" title="My Setup" />
      <Section id="contact" title="Contact" dark />
    </div>
  );
}
