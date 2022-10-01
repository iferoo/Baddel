import './App.css';
import Contact from './components/contact';
import Features from './components/features';
import Footer from './components/footer';
import Header from './components/header';
import HowItWork from './components/howitwork';
import Navbar from './components/navbar';
import OurPartners from './components/ourpartners';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <HowItWork />
      <Features />
      <Contact />
      <OurPartners />
      <Footer />
    </div>
  );
}

export default App;
