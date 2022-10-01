import { useState } from 'react';
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
  const modeHandle = () => {
    setMode(!mode);
    console.log(mode);
  };

  return (
    <div className="App">
      <Navbar mode={mode} modeHandle={modeHandle} />
      <Header mode={mode} />
      <HowItWork mode={mode} />
      <Features mode={mode} />
      <Contact mode={mode} />
      <OurPartners mode={mode} />
      <Footer mode={mode} />
    </div>
  );
}

export default App;
