import { useState } from 'react';

const Contacts = () => {
  const [form, setForm] = useState({ name: '', phone: '', interest: 'Подбор автомобиля' });
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!response.ok) throw new Error('Request failed');

      setStatus('sent');
      setForm({ name: '', phone: '', interest: 'Подбор автомобиля' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contacts" className="section contacts-section">
      <div className="contacts-copy reveal">
        <p className="eyebrow">Дилерский центр</p>
        <h2>Volvo Car Могилёв</h2>
        <p>
          Напишите или позвоните — менеджер подберёт автомобиль, рассчитает trade-in, подготовит предложение и
          запишет на сервис.
        </p>

        <div className="contact-list">
          <a href="tel:+375297778899">
            <i className="fas fa-phone" aria-hidden="true"></i>
            <span>
              <strong>+375 29 777-88-99</strong>
              Телефон отдела продаж и сервиса
            </span>
          </a>
          <a href="mailto:info@volvocarmogilev.by">
            <i className="fas fa-envelope" aria-hidden="true"></i>
            <span>
              <strong>info@volvocarmogilev.by</strong>
              Email для заявок и документов
            </span>
          </a>
          <div>
            <i className="fas fa-location-dot" aria-hidden="true"></i>
            <span>
              <strong>ул. Челюскинцев, 10</strong>
              Могилёв, 212000
            </span>
          </div>
        </div>

        <div className="visit-strip">
          <div>
            <strong>Пн-Сб</strong>
            <span>9:00-20:00</span>
          </div>
          <div>
            <strong>Вс</strong>
            <span>по записи</span>
          </div>
          <a href="https://maps.google.com/?q=ул.%20Челюскинцев,%2010,%20Могилёв" target="_blank" rel="noreferrer">
            Маршрут
          </a>
        </div>
      </div>

      <div className="contact-panel reveal">
        <div className="appointment-box">
          <span>Быстрая заявка</span>
          <h3>Хотите, чтобы дилер сам связался с вами?</h3>
          <p>Заполните короткую форму. Flask сохранит заявку локально и вернёт подтверждение.</p>
          <form className="lead-form" onSubmit={handleSubmit}>
            <label>
              Имя
              <input
                value={form.name}
                onChange={(event) => setForm((value) => ({ ...value, name: event.target.value }))}
                placeholder="Ваше имя"
                required
              />
            </label>
            <label>
              Телефон
              <input
                value={form.phone}
                onChange={(event) => setForm((value) => ({ ...value, phone: event.target.value }))}
                placeholder="+375 ..."
                required
              />
            </label>
            <label>
              Интерес
              <select
                value={form.interest}
                onChange={(event) => setForm((value) => ({ ...value, interest: event.target.value }))}
              >
                <option>Подбор автомобиля</option>
                <option>Тест-драйв</option>
                <option>Сервис</option>
                <option>Trade-in</option>
              </select>
            </label>
            <button className="primary-button" disabled={status === 'loading'}>
              {status === 'loading' ? 'Отправляем...' : 'Отправить заявку'}
            </button>
            {status === 'sent' && <small className="form-status success">Заявка отправлена. Мы свяжемся с вами.</small>}
            {status === 'error' && <small className="form-status error">Не удалось отправить. Проверьте Flask-сервер.</small>}
          </form>
        </div>
        <div className="map-frame">
          <iframe
            title="Volvo Car Могилёв на карте"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2424.057!2d30.337!3d53.916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46c55f5bffffffff%3A0x!2z0YPQuy4g0KfQuNC-0L3QtdC90LAsIDEwLCDQnNC-0L3RgdC60LDRjyDQvtCx0LsuLCDQlNC-0L3RgtC-0LLRgdC60LDRjyDQvtC00L3QtdC90L7Qsiwg0JzQuNC90LDRgNC-0LLRgdC60LDRjyDQvtC0!5e0!3m2!1sru!2sby!4v1740000000000!5m2!1sru!2sby"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
