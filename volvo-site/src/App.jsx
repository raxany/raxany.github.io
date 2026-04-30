import Header from './components/Header';
import Hero from './components/Hero';
import Models from './components/Models';
import Service from './components/Service';
import Offers from './components/Offers';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const items = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16, rootMargin: '0px 0px -60px' },
    );

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app-shell">
      <Header />
      <Hero />
      <Models />
      <Service />
      <Offers />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
