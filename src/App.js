import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Benefits from './Components/Benefits/Benefits';
import Products from './Components/Products/products';
import Gallery from './Components/Gallery/Gallery';
import Contact from './Components/Contact/Contact';
import ProductDetail from './Components/ProductDetail/ProductDetail';
import WhatsappLauncher from './Components/launcher/WhatsappLauncher';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/benefits" element={<Benefits />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/product-details" element={<ProductDetail />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <WhatsappLauncher phoneNumber="+91 8008363648" /> {/* Replace with your actual WhatsApp number */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;