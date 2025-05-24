import { useRef } from "react";
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Landing from "./components/Landing";
import Footer from "./components/Footer";
import GraphicDesignPortfolio from "./components/GraphicDesignPortfolio";

import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

function MainContent() {
  const location = useLocation();
  const isPortfolioPage = location.pathname === "/graphic-design-portfolio";

  // Refs for scrolling
  const landingRef = useRef(null);
  const projectsRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref, offset = -64) => {
  if (ref.current) {
    const elementPosition = ref.current.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition + offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};


  return (
    <>
      <Header
        onScrollTo={{
          home: () => scrollToSection(landingRef),
          projects: () => scrollToSection(projectsRef),
          about: () => scrollToSection(aboutRef),
          contact: () => scrollToSection(contactRef),
        }}
      />

      {!isPortfolioPage && (
        <>
          <div ref={landingRef} id="home" className="min-h-screen"><Landing /></div>
          <div ref={projectsRef} id="projects" className="min-h-screen"><Projects  /></div>
          <div ref={aboutRef} id="about" className="min-h-screen"><About /></div>
          <div ref={contactRef} id="contact" className="min-h-screen"><Contact /></div>
        </>
      )}

      <Routes>
        <Route path="/graphic-design-portfolio" element={<GraphicDesignPortfolio />} />
      </Routes>

      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <MainContent />
    </Router>
  );
}

export default App;
