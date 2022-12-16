import './App.scss';
import Services from './components/Services/Services';
import Header from './components/Header/Header';
import { ParallaxProvider } from 'react-scroll-parallax';

function App() {
  return (
    <>
      <ParallaxProvider>
        <Header />
        <Services />
      </ParallaxProvider>
    </>
  );
}

export default App;
