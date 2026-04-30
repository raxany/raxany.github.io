import { serviceSteps } from '../data/cars';

const serviceCards = [
  { icon: 'fa-microchip', title: 'Диагностика VIDA', text: 'Заводская проверка электронных систем и понятный отчёт.' },
  { icon: 'fa-oil-can', title: 'Регламентное ТО', text: 'Оригинальные расходники, прозрачный регламент и гарантия работ.' },
  { icon: 'fa-screwdriver-wrench', title: 'Кузов и запчасти', text: 'Подбор оригинальных деталей и аккуратный ремонт после согласования.' },
];

const serviceBenefits = [
  { value: '2 года', label: 'гарантия на оригинальные детали' },
  { value: 'VIDA', label: 'заводская диагностика Volvo' },
  { value: '1 день', label: 'для большинства регламентных работ' },
];

const Service = () => {
  return (
    <section id="service" className="section service-section">
      <div className="section-heading align-left reveal">
        <p className="eyebrow">Официальный сервис</p>
        <h2>Сервис Volvo, который не отнимает день</h2>
        <p>
          Запись, диагностика, согласование и выдача собраны в понятный процесс. Вы заранее понимаете объём работ,
          стоимость и сроки.
        </p>
      </div>

      <div className="service-layout">
        <div className="service-main">
          <div className="service-cards">
            {serviceCards.map((item, index) => (
              <article className="service-card reveal" style={{ '--delay': `${index * 80}ms` }} key={item.title}>
                <i className={`fas ${item.icon}`} aria-hidden="true"></i>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>

          <div className="service-assurance reveal" style={{ '--delay': '180ms' }}>
            <div>
              <p className="eyebrow">Контроль качества</p>
              <h3>После работ вы получаете отчёт, рекомендации и понятный следующий шаг.</h3>
            </div>
            <div className="assurance-grid">
              {serviceBenefits.map((benefit) => (
                <span key={benefit.value}>
                  <strong>{benefit.value}</strong>
                  {benefit.label}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="service-process reveal">
          <div className="process-header">
            <span>Как проходит визит</span>
            <strong>30 мин</strong>
            <small>первичная диагностика</small>
          </div>
          <ol>
            {serviceSteps.map((step) => (
              <li key={step.title}>
                <span></span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
          <button className="primary-button" onClick={() => alert('Запись на сервис: +375 29 777-88-99')}>
            Записаться на сервис
          </button>
        </div>
      </div>
    </section>
  );
};

export default Service;
