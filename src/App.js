import './App.scss';
import Services from './components/Services/Services';
import Header from './components/Header/Header';
import About from './components/About/About';

import { ParallaxProvider } from 'react-scroll-parallax';

function App() {
  return (
    <>
      <ParallaxProvider>
        <Header />
        <Services />
        <About />
      </ParallaxProvider>
    </>
  );
}

export default App;
