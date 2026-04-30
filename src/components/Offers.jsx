import { offers } from '../data/cars';

const Offers = () => {
  return (
    <section id="offers" className="section offers-section">
      <div className="section-heading reveal">
        <p className="eyebrow">Финансовые предложения</p>
        <h2>Условия, которые стоит обсудить до выбора комплектации</h2>
      </div>

      <div className="offers-grid">
        {offers.map((offer, index) => (
          <article className="offer-card reveal" style={{ '--delay': `${index * 90}ms` }} key={offer.title}>
            <span>{offer.value}</span>
            <h3>{offer.title}</h3>
            <p>{offer.text}</p>
            <button onClick={() => alert('Уточнить предложение: +375 29 777-88-99')}>
              Обсудить
            </button>
          </article>
        ))}
      </div>

      <div className="offer-advisor reveal" style={{ '--delay': '220ms' }}>
        <div>
          <p className="eyebrow">Расчёт до визита</p>
          <h3>Соберём предложение по платежу, trade-in и комплектации до вашего приезда.</h3>
        </div>
        <div className="advisor-steps" aria-label="Что подготовит менеджер">
          <span>Ежемесячный платёж</span>
          <span>Оценка trade-in</span>
          <span>Наличие и сроки</span>
        </div>
        <a className="primary-button light" href="tel:+375297778899">
          Получить расчёт
        </a>
      </div>
    </section>
  );
};

export default Offers;
