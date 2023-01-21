import './App.scss';

import { Routes, Route } from 'react-router-dom';

import BlogPage from './pages/BlogPage/BlogPage';
import HomePage from './pages/HomePage/HomePage';
import Header from './components/Header/Header';
import BlogArticle from './components/BlogArticle/BlogArticle';
import Footer from './components/Footer/Footer';
import ContactPage from './pages/ContactPage/ContactPage';
import ServicesPage from './pages/ServicesPage/ServicesPage';
import BookingPage from './pages/BookingPage/BookingPage';

function App() {
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
