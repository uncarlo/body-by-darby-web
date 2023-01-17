import './App.scss';
import Services from './components/Services/Services';
import Header from './components/Header/Header';
import About from './components/About/About';

import { ParallaxProvider } from 'react-scroll-parallax';
import Testimonials from './components/Testimonials/Testimonials';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <ParallaxProvider>
        <Header />
        <Services />
        <About />
        <Testimonials />
        <Footer />
      </ParallaxProvider>
    </>
  );
}

export default App;
