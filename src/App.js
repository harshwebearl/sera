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
import Login from './admin/pages/Login.jsx';

import HomeCMS from "./admin/home/HomeCMS.jsx";
import EditHomeCMS from './admin/home/EditHomeCMS.jsx';

import IndustriesCMS from './admin/industries/IndustriesCMS.jsx';
import EditIndustriesCMS from './admin/industries/EditIndustriesCMS.jsx';
import CreateIndustry from './admin/industries/CreateIndustry.jsx';

import ClientsCMS from './admin/clients/ClientsCMS.jsx';
import AddClient from './admin/clients/AddClient.jsx';

import AddTestimonial from './admin/testimonials/AddTestimonial.jsx';
import TestimonialsCMS from './admin/testimonials/TestimonialsCMS.jsx';

import AboutCMS from './admin/about/AboutCMS.jsx';
import EditAbout from './admin/about/EditAbout.jsx';

import ProductList from './admin/products/ProductList.jsx';
import AdminProductDetails from './admin/products/AdminProductDetails.jsx';
import EditProduct from './admin/products/EditProduct.jsx';
import GalleryList from './admin/gallery/GalleryList.jsx';
import AddGallery from './admin/gallery/AddGallery.jsx';
import ProductCategory from './pages/ProductCategory.jsx';


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
        <Route path="/products/:category" element={<ProductCategory />} />
        <Route path="/products/:category/:slug" element={<ProductDetails />} />





        <Route path="/login" element={<Login />} />

        {/* ADMIN LAYOUT */}
        <Route path="/admin" element={<AdminLayout />}>

          {/* DASHBOARD */}
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />

          {/* HOME PAGE CMS */}
          <Route path="homecms" element={<HomeCMS />} />
          <Route path="homecms/edit" element={<EditHomeCMS />} />

          {/* Industries Section CMS */}
          <Route path="industriescms" element={<IndustriesCMS />} />
          <Route path="createindustry" element={<CreateIndustry />} />
          <Route path="industriescms/edit/:id" element={<EditIndustriesCMS />} />

          {/* Clients Section CMS */}
          <Route path="clientscms" element={<ClientsCMS />} />
          <Route path="addclient" element={<AddClient />} />

          {/* Testimonial Section CMS */}
          <Route path="testimonialscms" element={<TestimonialsCMS />} />
          <Route path="addtestimonial" element={<AddTestimonial />} />

          {/* About Page CMS */}
          <Route path="aboutcms" element={<AboutCMS />} />
          <Route path="editabout" element={<EditAbout />} />

          {/* PRODUCTS */}
          <Route path="productslist" element={<ProductList />} />
          <Route path="products/edit/:slug" element={<EditProduct />} />
          <Route path="/admin/products/:slug" element={<AdminProductDetails />} />

          {/* gallery */}
          <Route path="gallerylist" element={<GalleryList />} />
          <Route path="gallerylist/add" element={<AddGallery />} />



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
