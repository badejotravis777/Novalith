// import './App.css';
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

function App() {
  return (
    <div className="App">
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
      {/* Your Components will go here */}
    </div>
  );
}

export default App;
