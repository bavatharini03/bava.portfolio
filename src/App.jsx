
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import ScrollProgress from "./components/ScrollProgress";
import CursorGlow from "./components/CursorGlow";


function App() {
  return (
    <div className="bg-slate-950 text-white min-h-screen">
      <CursorGlow />
       <ScrollProgress/>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Certifications />
      <Contact />
      <Footer />
      <BackToTop />
     
    </div>
  );
}

export default App;