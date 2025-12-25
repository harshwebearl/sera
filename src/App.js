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

import AdminLayout from "./admin/layout/AdminLayout";

import Dashboard from "./admin/pages/Dashboard";
import HomeCMS from "./admin/pages/HomeCMS";
import AdminProducts from "./admin/pages/Products";
import AddProduct from "./admin/pages/AddProduct.jsx";
import Login from './admin/pages/Login.jsx';


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

        
<Route path="/login" element={<Login />} />

         {/* ADMIN LAYOUT */}
        <Route path="/admin" element={<AdminLayout />}>

          {/* DASHBOARD */}
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />

          {/* HOME PAGE CMS */}
          <Route path="homecms" element={<HomeCMS />} />

          {/* PRODUCTS */}
          <Route path="products" element={<AdminProducts />} />
          <Route path="products/add" element={<AddProduct />} />
          <Route path="products/edit/:id" element={<AddProduct />} />

          {/* GALLERY */}
          {/* <Route path="gallery" element={<Gallery />} /> */}

          {/* TESTIMONIALS */}
          {/* <Route path="testimonials" element={<Testimonials />} /> */}

          {/* ENQUIRIES */}
          {/* <Route path="enquiries" element={<Enquiries />} /> */}

          {/* SEO SETTINGS */}
          {/* <Route path="seo" element={<SeoSettings />} /> */}

          {/* SITE SETTINGS */}
          {/* <Route path="settings" element={<SiteSettings />} /> */}

        </Route>


      </Routes>
    </BrowserRouter>
  );
}

export default App;
