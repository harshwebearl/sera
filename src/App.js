import './App.css';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Gallery from './pages/Gallery';
import ScrollToTop from './components/ScrollToTop';


function App() {

  useEffect(() => {
  AOS.init({
    duration: 900,
    once: false,
    easing: "ease-out-cubic",
  });
}, []);

  return (
    <BrowserRouter>
    <ScrollToTop />
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/products" element={<Products />} />
    <Route path="/products/:slug" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
