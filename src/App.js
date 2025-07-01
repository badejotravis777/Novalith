import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Pages
import ProjectDetail from "./pages/ProjectDetail";

// Components (used inside HomePage)
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import CaseStudies from './components/CaseStudies';
import Packages from './components/Packages';
import Clients from './components/Clients';
import Faq from './components/Faq';
import ScheduleSection from './components/ScheduleSection';
import Footer from './components/Footer';

// HomePage component to wrap homepage layout
const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <CaseStudies />
      <Packages />
      <Clients />
      <Faq />
      <ScheduleSection />
      <Footer />
    </>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
