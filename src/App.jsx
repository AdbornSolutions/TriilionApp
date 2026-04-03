import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import DigitalMarketing from './pages/DigitalMarketing';
import ERPDevelopment from './pages/ERPDevelopment';
import WebDevelopment from './pages/WebDevelopment';
import MobileApp from './pages/MobileApp';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Terms from './pages/Terms';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
        <Route path="/services/erp-development" element={<ERPDevelopment />} />
        <Route path="/services/web-development" element={<WebDevelopment />} />
        <Route path="/services/mobile-app" element={<MobileApp />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </Router>
  );
}

export default App;
