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
import ContactCMS from './admin/contact/ContactCMS.jsx';
import EditContactCMS from './admin/contact/EditContactCMS.jsx';
import EnquiryList from './admin/contact/EnquiryList.jsx';
import AdminAddresses from './admin/contact/address/AdminAddresses.jsx';
import AddAddress from './admin/contact/address/AddAddress.jsx';
import EditAddress from './admin/contact/address/EditAddress.jsx';
import AddProduct from './admin/products/AddProduct.jsx';


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
          <Route path="/admin/products/:category/:slug" element={<AdminProductDetails />} />
          <Route path="/admin/products/edit/:category/:slug" element={<EditProduct />} />
          <Route path="/admin/products/add" element={<AddProduct />} />



          {/* gallery */}
          <Route path="gallerylist" element={<GalleryList />} />
          <Route path="gallerylist/add" element={<AddGallery />} />



          <Route path="contactcms" element={<ContactCMS />} />
          <Route path="contact/edit" element={<EditContactCMS />} />
          <Route path="enquiries" element={<EnquiryList />} />

          <Route path="addresses" element={<AdminAddresses />} />
          <Route path="addresses/add" element={<AddAddress />} />
          <Route path="addresses/edit/:id" element={<EditAddress />} />


        </Route>


      </Routes>
    </BrowserRouter>
  );
}

export default App;
