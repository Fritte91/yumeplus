import { LanguageProvider } from './context/LanguageContext';
import { StatusBar } from './components/StatusBar';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Menu } from './components/Menu';
import { Pricing } from './components/Pricing';
import { Amenities } from './components/Amenities';
import { Gallery } from './components/Gallery';
import { Location } from './components/Location';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { StructuredData } from './components/StructuredData';
import './App.css';

function App() {
  return (
    <LanguageProvider>
      <StructuredData />
      <div className="bg-white text-brand-900 font-sans antialiased selection:bg-accent-100 selection:text-accent-700">
        <StatusBar />
        <Header />
        <Hero />
        <About />
        <Menu />
        <Pricing />
        <Amenities />
        <Gallery />
        <Location />
        <Footer />
        <ScrollToTop />
      </div>
    </LanguageProvider>
  );
}

export default App;

