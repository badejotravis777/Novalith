import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Pages
import ProjectDetail from "./pages/ProjectDetail";
import AboutPage from "./pages/AboutPage";

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
import FloatingWaitlistButton from './components/FloatingWaitlistButton';
import WaitlistModal from './components/WaitlistModal';
import WaitlistSection from "./components/WaitlistSection";

// HomePage component to wrap homepage layout
const HomePage = ({ onOpenModal }) => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <CaseStudies />
      <Packages />
      <WaitlistSection />
      <Clients />
      <Faq />
      <ScheduleSection />
      <Footer />
      <FloatingWaitlistButton onOpen={onOpenModal} />
    </>
  );
};

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <Router>
      {modalOpen && <WaitlistModal onClose={() => setModalOpen(false)} />}
      <Routes>
        <Route path="/" element={<HomePage onOpenModal={() => setModalOpen(true)} />} />
        <Route path="/about-page" element={<AboutPage />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
