import { useCallback, useEffect, useState } from 'react';
import './App.css';
import Contact from './components/contact';
import Features from './components/features';
import Footer from './components/footer';
import Header from './components/header';
import HowItWork from './components/howitwork';
import Navbar from './components/navbar';
import OurPartners from './components/ourpartners';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..

function App() {
  const [yOffset, setYOffset] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);
  ///
  const sections = document.querySelectorAll('section');
  const [activeLink, setActiveLink] = useState('header');

  ///

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  const handleScroll = useCallback(() => {
    const currentYOffset = window.pageYOffset;
    const newVisible = yOffset > currentYOffset;

    setYOffset(currentYOffset);
    setVisible(newVisible);

    let current = '';
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      // const sectionHeight = section.clientHeight;

      if (currentYOffset > sectionTop - 270) {
        current = section.getAttribute('id');
      }
    });
    if (currentYOffset < 209) {
      setActiveLink('header');
    }

    current ? setActiveLink(current) : setActiveLink('');
  }, [yOffset]);

  console.log(activeLink);

  console.log(window.pageYOffset);
  const [mode, setMode] = useState(true);

  const currMode = localStorage.getItem('mode') === 'false' ? false : true;

  const modeHandle = () => {
    setMode(!mode);
    localStorage.setItem('mode', mode);
  };

  useEffect(() => {
    AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
      initClassName: 'aos-init', // class applied after initialization
      animatedClassName: 'aos-animate', // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      // delay: 800, // values from 0 to 3000, with step 50ms
      duration: 1500, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: true, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: 'top-bottom' // defines which position of the element regarding to window should trigger the animation
    });
  }, []);

  return (
    <div className="App">
      <Navbar activeLink={activeLink} mode={currMode} modeHandle={modeHandle} visible={visible} />
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
