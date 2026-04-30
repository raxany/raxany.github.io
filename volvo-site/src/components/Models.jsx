import { useState } from 'react';
import { cars } from '../data/cars';
import Modal from './Modal';

const Models = () => {
  const [activeId, setActiveId] = useState(cars[1].id);
  const [selectedCar, setSelectedCar] = useState(null);
  const activeCar = cars.find((car) => car.id === activeId) ?? cars[0];

  return (
    <>
      <section id="models" className="section models-section">
        <div className="section-heading reveal">
          <p className="eyebrow">Модельный ряд</p>
          <h2>Выберите Volvo под свой сценарий</h2>
          <p>
            Вместо длинной витрины — быстрый обзор: кому подходит модель, что важно по характеристикам и как
            связаться с дилером.
          </p>
        </div>

        <div className="model-explorer reveal">
          <div className="model-tabs" aria-label="Выбор модели">
            {cars.map((car) => (
              <button
                className={car.id === activeId ? 'is-active' : ''}
                key={car.id}
                onClick={() => setActiveId(car.id)}
              >
                <span>{car.name.replace('Volvo ', '')}</span>
                <small>{car.availability}</small>
              </button>
            ))}
          </div>

          <div className="model-stage" key={activeCar.id}>
            <div className="model-stage-copy model-switch-copy">
              <span className="model-label">{activeCar.badge}</span>
              <h3>{activeCar.name}</h3>
              <p>{activeCar.description}</p>
              <dl className="model-facts">
                <div>
                  <dt>Сценарий</dt>
                  <dd>{activeCar.bestFor}</dd>
                </div>
                <div>
                  <dt>Цвет</dt>
                  <dd>{activeCar.color}</dd>
                </div>
                <div>
                  <dt>Привод</dt>
                  <dd>{activeCar.drive}</dd>
                </div>
              </dl>
              <div className="model-stage-actions">
                <button className="primary-button" onClick={() => setSelectedCar(activeCar)}>
                  Открыть конфигурацию
                </button>
                <a className="text-link" href="tel:+375297778899">
                  Получить консультацию
                </a>
              </div>
            </div>

            <div className="model-stage-media model-switch-media" style={{ '--accent': activeCar.accent }}>
              <img src={activeCar.image} alt={activeCar.name} />
            </div>
          </div>
        </div>

        <div className="selection-assistant reveal">
          <div>
            <p className="eyebrow">Помощь с выбором</p>
            <h3>Не уверены, какая модель подходит?</h3>
            <p>
              Расскажите менеджеру о поездках, бюджете и формате семьи. Мы предложим 2-3 комплектации,
              посчитаем trade-in и подготовим маршрут тест-драйва.
            </p>
          </div>
          <div className="assistant-points">
            <span>Семья и багаж</span>
            <span>Электро или гибрид</span>
            <span>Кредит / лизинг</span>
          </div>
          <a className="primary-button" href="tel:+375297778899">
            Подобрать с менеджером
          </a>
        </div>

        <div className="inventory-grid">
          {cars.map((car, index) => (
            <article className="inventory-card reveal" style={{ '--delay': `${index * 80}ms` }} key={car.id}>
              <div className="inventory-media" style={{ '--accent': car.accent }}>
                <img src={car.image} alt={car.name} />
              </div>
              <div className="inventory-body">
                <div className="inventory-topline">
                  <span>{car.availability}</span>
                  <small>{car.badge}</small>
                </div>
                <h3>{car.name}</h3>
                <p>{car.shortDescription}</p>
                <div className="inventory-specs">
                  {car.specs.slice(0, 3).map((spec) => (
                    <span key={`${car.id}-${spec.value}`}>{spec.value}</span>
                  ))}
                </div>
                <div className="inventory-footer">
                  <strong>{car.price}</strong>
                  <button onClick={() => setSelectedCar(car)}>Подробнее</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Modal car={selectedCar} onClose={() => setSelectedCar(null)} />
    </>
  );
};

export default Models;
