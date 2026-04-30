import { useEffect, useState } from 'react';
import { navigation } from '../data/cars';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateHeader = () => {
      const scrollTop = window.scrollY;
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(scrollTop > 12);
      setProgress(scrollable > 0 ? Math.min(100, (scrollTop / scrollable) * 100) : 0);
    };

    updateHeader();
    window.addEventListener('scroll', updateHeader, { passive: true });

    return () => window.removeEventListener('scroll', updateHeader);
  }, []);

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="scroll-progress" style={{ transform: `scaleX(${progress / 100})` }} aria-hidden="true"></div>
      <div className="header-inner">
        <a className="brand" href="#top" aria-label="Volvo Car Могилёв">
          <img
            src={`${import.meta.env.BASE_URL}assets/logo.png`}
            alt="Volvo"
          />
          <span>
            <strong>Volvo Car</strong>
            <small>Могилёв</small>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Главная навигация">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <a className="phone-link" href="tel:+375297778899">
            +375 29 777-88-99
          </a>
          <button className="primary-button small" onClick={() => alert('Запись на тест-драйв: +375 29 777-88-99')}>
            Тест-драйв
          </button>
          <button
            className="menu-button"
            type="button"
            aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((value) => !value)}
          >
            <i className={`fas ${menuOpen ? 'fa-xmark' : 'fa-bars'}`} aria-hidden="true"></i>
          </button>
        </div>
      </div>

      <div className={`mobile-nav ${menuOpen ? 'is-open' : ''}`}>
        {navigation.map((item) => (
          <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
            {item.label}
          </a>
        ))}
        <a href="tel:+375297778899">Позвонить в салон</a>
      </div>
    </header>
  );
};

export default Header;
