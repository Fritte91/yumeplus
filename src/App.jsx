import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { StatusBar } from './components/StatusBar';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Menu } from './components/Menu';
import { SalmonCakesSection } from './components/SalmonCakesSection';
import { Pricing } from './components/Pricing';
import { Amenities } from './components/Amenities';
import { Gallery } from './components/Gallery';
import { Reviews } from './components/Reviews';
import { Location } from './components/Location';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { StructuredData } from './components/StructuredData';
import { SalmonCakesPage } from './components/SalmonCakesPage';
import './App.css';

function HomePage() {
  return (
    <>
      <StatusBar />
      <Header />
      <Hero />
      <About />
      <Menu />
      <SalmonCakesSection />
      <Pricing />
      <Amenities />
      <Gallery />
      <Reviews />
      <Location />
      <Footer />
      <ScrollToTop />
    </>
  );
}

function App() {
  return (
    <LanguageProvider>
      <StructuredData />
      <div className="bg-white text-brand-900 font-sans antialiased selection:bg-gold-200 selection:text-gold-800 bg-luxury-section">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/salmon-cakes" element={
              <>
                <StatusBar />
                <Header />
                <SalmonCakesPage />
                <Footer />
                <ScrollToTop />
              </>
            } />
          </Routes>
        </BrowserRouter>
      </div>
    </LanguageProvider>
  );
}

export default App;
