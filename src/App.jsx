import { Routes, Route, useLocation  } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import MatrixBackground from './components/MatrixBackground';
import ThemeSwitcher from './components/ThemeSwitcher';
import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();
  return (
    <div className="app-container">
      <MatrixBackground />
      <ThemeSwitcher />
      <Header />
      <AnimatePresence mode="wait">
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<About />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/resume" element={<Resume />} />
    </Routes>
  </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;
