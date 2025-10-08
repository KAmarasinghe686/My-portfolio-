import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Header />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}