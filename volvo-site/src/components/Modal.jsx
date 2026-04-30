import { useEffect } from 'react';

const Modal = ({ car, onClose }) => {
  useEffect(() => {
    if (!car) return undefined;

    const closeByEscape = (event) => {
      if (event.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', closeByEscape);
    document.body.classList.add('modal-lock');

    return () => {
      document.removeEventListener('keydown', closeByEscape);
      document.body.classList.remove('modal-lock');
    };
  }, [car, onClose]);

  if (!car) return null;

  return (
    <div className="modal-backdrop" onMouseDown={onClose} role="presentation">
      <section
        className="car-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button className="modal-close" type="button" aria-label="Закрыть" onClick={onClose}>
          <i className="fas fa-xmark" aria-hidden="true"></i>
        </button>

        <div className="modal-media" style={{ '--accent': car.accent }}>
          <img src={car.modalImage} alt={car.name} />
        </div>

        <div className="modal-copy">
          <p className="eyebrow">{car.type}</p>
          <h2 id="modal-title">{car.name}</h2>
          <p>{car.description}</p>
          <div className="spec-grid">
            {car.specs.map((spec) => (
              <div key={`${spec.value}-${spec.label}`}>
                <strong>{spec.value}</strong>
                <span>{spec.label}</span>
              </div>
            ))}
          </div>
          <div className="modal-note">
            <span>{car.availability}</span>
            <strong>{car.price}</strong>
          </div>
          <button className="primary-button" onClick={() => alert('Запись на тест-драйв: +375 29 777-88-99')}>
            Записаться на тест-драйв
          </button>
        </div>
      </section>
    </div>
  );
};

export default Modal;
