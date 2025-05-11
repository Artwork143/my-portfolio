import { useRef } from "react";
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Landing from "./components/Landing";
import Footer from "./components/footer";
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

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
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
          <div ref={landingRef}><Landing /></div>
          <div ref={projectsRef}><Projects /></div>
          <div ref={aboutRef}><About /></div>
          <div ref={contactRef}><Contact /></div>
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
