const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <a className="footer-brand" href="#top">
          <img
            src={`${import.meta.env.BASE_URL}assets/logo.png`}
            alt="Volvo"
          />
          <strong>Volvo Car Могилёв</strong>
        </a>
        <p>Официальный дилер Volvo. Продажа, сервис, trade-in и сопровождение владельцев.</p>
      </div>
      <div>
        <h4>Разделы</h4>
        <a href="#models">Модели</a>
        <a href="#service">Сервис</a>
        <a href="#offers">Акции</a>
      </div>
      <div>
        <h4>Контакты</h4>
        <a href="tel:+375297778899">+375 29 777-88-99</a>
        <a href="mailto:info@volvocarmogilev.by">info@volvocarmogilev.by</a>
      </div>
      <div>
        <h4>2026</h4>
        <p>Volvo Car Могилёв</p>
        <a className="back-top" href="#top">
          Наверх
        </a>
      </div>
    </footer>
  );
};

export default Footer;
