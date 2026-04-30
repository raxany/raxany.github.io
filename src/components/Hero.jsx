const Hero = () => {
  return (
    <section id="top" className="hero-section">
      <img className="hero-image" src="/assets/cars/volvo-xc90.jpg" alt="" aria-hidden="true" />
      <div className="hero-scrim" aria-hidden="true"></div>
      <div className="hero-ambient" aria-hidden="true"></div>
      <div className="hero-rail" aria-hidden="true"></div>

      <div className="hero-content reveal">
        <p className="eyebrow">Официальный дилер Volvo в Могилёве</p>
        <h1>Volvo без лишнего шума: выбрать, протестировать, обслужить</h1>
        <p>
          Автомобили Volvo в наличии и под заказ, официальный сервис, trade-in и персональное сопровождение
          на каждом этапе.
        </p>
        <div className="hero-actions">
          <a className="primary-button light" href="#models">
            Смотреть модели
          </a>
          <a className="ghost-button" href="#service">
            Записаться на сервис
          </a>
        </div>
      </div>

      <aside className="hero-status-panel reveal" style={{ '--delay': '130ms' }} aria-label="Салон сегодня">
        <span>Сегодня в салоне</span>
        <div>
          <strong>4</strong>
          <small>модели в подборе</small>
        </div>
        <div>
          <strong>30 мин</strong>
          <small>первичная диагностика</small>
        </div>
        <div>
          <strong>5,9%</strong>
          <small>кредитные программы</small>
        </div>
      </aside>

      <div className="hero-dock reveal reveal-scale" style={{ '--delay': '210ms' }} aria-label="Быстрые действия">
        <a href="#models">
          <i className="fas fa-car-side" aria-hidden="true"></i>
          <span>Подобрать Volvo</span>
          <small>4 модели в каталоге</small>
        </a>
        <a href="#offers">
          <i className="fas fa-percent" aria-hidden="true"></i>
          <span>Посмотреть акции</span>
          <small>кредит, скидки, пакет</small>
        </a>
        <a href="#contacts">
          <i className="fas fa-location-dot" aria-hidden="true"></i>
          <span>Связаться с дилером</span>
          <small>Могилёв, Челюскинцев 10</small>
        </a>
      </div>
    </section>
  );
};

export default Hero;
