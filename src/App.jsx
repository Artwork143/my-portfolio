
import './App.css'
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Landing from './components/Landing';
import Footer from './components/footer';

function App() {
  return (
    <div>
      <Header />
      <Landing />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
