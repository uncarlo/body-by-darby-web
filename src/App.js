import './App.scss';

import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import BlogPage from './pages/BlogPage/BlogPage';
import HomePage from './pages/HomePage/HomePage';
import Header from './components/Header/Header';
import BlogArticle from './components/BlogArticle/BlogArticle';
import Footer from './components/Footer/Footer';

function App() {
  const location = useLocation();
  let header = null;

  useEffect(() => {
    if (header !== null) {
      const pathname = location.pathname;
      let isTitleVisible = true;

      switch (pathname) {
        case '/blog':
        case '/blog-post':
          isTitleVisible = false;
          break;
        default:
          break;
      }

      header.setState({ isTitleVisible: isTitleVisible });
    }
  }, [location, header])

  return (
    <>
      <Header ref={(ref) => header = ref} isTitleVisible="true"></Header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog-post" element={<BlogArticle />} />
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
