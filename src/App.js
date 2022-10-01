import { useEffect, useState } from 'react';
import './App.css';
import Contact from './components/contact';
import Features from './components/features';
import Footer from './components/footer';
import Header from './components/header';
import HowItWork from './components/howitwork';
import Navbar from './components/navbar';
import OurPartners from './components/ourpartners';

function App() {
  const [mode, setMode] = useState(true);
  
  const currMode = localStorage.getItem('mode') === 'false' ? false : true;

  const modeHandle = () => {
    setMode(!mode);
    localStorage.setItem('mode', mode);
  };
 

  return (
    <div className="App">
      <Navbar mode={currMode} modeHandle={modeHandle} />
      <Header mode={currMode} />
      <HowItWork mode={currMode} />
      <Features mode={currMode} />
      <Contact mode={currMode} />
      <OurPartners mode={currMode} />
      <Footer mode={currMode} />
    </div>
  );
}

export default App;
