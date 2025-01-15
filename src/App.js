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

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/benefits" element={<Benefits />} />
        <Route path="/gallery" element={<Gallery />} />-
        <Route path="/product-details" element={<ProductDetail />} />

        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;