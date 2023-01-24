import React, { useEffect, requestAnimationFrame } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'

import BlogPage from './pages/BlogPage/BlogPage';
import HomePage from './pages/HomePage/HomePage';
import Header from './components/Header/Header';
import BlogArticle from './components/BlogArticle/BlogArticle';
import Footer from './components/Footer/Footer';
import ContactPage from './pages/ContactPage/ContactPage';
import ServicesPage from './pages/ServicesPage/ServicesPage';
import BookingPage from './pages/BookingPage/BookingPage';

import './App.scss';

function App() {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    if (hash === '') {
      window.scrollTo(0, 0);
    }

    else {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
              block: 'start' });
        }
      }, 5);
    }
  }, [pathname, hash, key]); // do this on route change

  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog-post" element={<BlogArticle />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route exact path="/services/:serviceName" element={<ServicesPage />} />
        <Route path="/booking" element={<BookingPage />} />
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
