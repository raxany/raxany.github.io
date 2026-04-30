export const navigation = [
  { label: 'Модели', href: '#models' },
  { label: 'Сервис', href: '#service' },
  { label: 'Акции', href: '#offers' },
  { label: 'Контакты', href: '#contacts' },
];

export const cars = [
  {
    id: 'ex30',
    name: 'Volvo EX30',
    type: 'Электрический компактный SUV',
    description:
      'Городской электрокроссовер с быстрым откликом, чистым скандинавским интерьером и запасом хода для ежедневных маршрутов.',
    shortDescription: 'Компактный электрокроссовер для города и коротких поездок за город.',
    image: '/assets/cars/volvo-ex30.jpg',
    modalImage: '/assets/cars/volvo-ex30.jpg',
    price: 'от 34 900 BYN',
    availability: 'В наличии',
    color: 'Onyx Black',
    drive: 'RWD / AWD',
    badge: 'Electric',
    accent: '#111827',
    bestFor: 'Город, динамика, первый электромобиль',
    specs: [
      { value: 'до 480 км', label: 'запас хода WLTP' },
      { value: '3,6 с', label: '0-100 км/ч' },
      { value: '272-428 л.с.', label: 'мощность' },
      { value: 'от 34 900 BYN', label: 'цена' },
    ],
  },
  {
    id: 'xc60',
    name: 'Volvo XC60',
    type: 'Среднеразмерный SUV',
    description:
      'Самый универсальный кроссовер Volvo: комфортный каждый день, уверенный на трассе и достаточно просторный для семьи.',
    shortDescription: 'Универсальный кроссовер для семьи, города и дальних поездок.',
    image: '/assets/cars/volvo-xc60.jpg',
    modalImage: '/assets/cars/volvo-xc60.jpg',
    price: 'от 39 900 BYN',
    availability: 'В поставке',
    color: 'Vapour Grey',
    drive: 'AWD',
    badge: 'Best seller',
    accent: '#7b8794',
    bestFor: 'Семья, трасса, ежедневный комфорт',
    specs: [
      { value: 'до 455 л.с.', label: 'Recharge' },
      { value: 'до 77 км', label: 'электропробег' },
      { value: 'Google built-in', label: 'мультимедиа' },
      { value: 'от 39 900 BYN', label: 'цена' },
    ],
  },
  {
    id: 'xc90',
    name: 'Volvo XC90',
    type: 'Флагманский 7-местный SUV',
    description:
      'Большой премиальный SUV с тремя рядами сидений, полным приводом и высоким уровнем пассивной и активной безопасности.',
    shortDescription: 'Флагманский SUV для большой семьи, путешествий и статуса.',
    image: '/assets/cars/volvo-xc90.jpg',
    modalImage: '/assets/cars/volvo-xc90.jpg',
    price: 'от 59 900 BYN',
    availability: 'Под заказ',
    color: 'Crystal White',
    drive: 'AWD',
    badge: 'Flagship',
    accent: '#cfd8e3',
    bestFor: '7 мест, премиальный комфорт, дальние поездки',
    specs: [
      { value: 'до 7 мест', label: 'салон' },
      { value: 'до 455 л.с.', label: 'Recharge' },
      { value: 'AWD', label: 'полный привод' },
      { value: 'от 59 900 BYN', label: 'цена' },
    ],
  },
  {
    id: 's90',
    name: 'Volvo S90',
    type: 'Бизнес-седан',
    description:
      'Сдержанный седан представительского класса с тихим салоном, гибридной силовой установкой и плавной посадкой.',
    shortDescription: 'Бизнес-седан для тех, кто любит тишину, посадку и длинную базу.',
    image: '/assets/cars/volvo-s90.jpg',
    modalImage: '/assets/cars/volvo-s90.jpg',
    price: 'от 44 900 BYN',
    availability: 'В наличии',
    color: 'Denim Blue',
    drive: 'AWD',
    badge: 'Business',
    accent: '#1e3a5f',
    bestFor: 'Бизнес, город, спокойная премиальность',
    specs: [
      { value: 'до 455 л.с.', label: 'T8 Recharge' },
      { value: 'до 60 км', label: 'на электротяге' },
      { value: 'Bowers & Wilkins', label: 'аудио' },
      { value: 'от 44 900 BYN', label: 'цена' },
    ],
  },
];

export const offers = [
  {
    value: '0%',
    title: 'Кредит на EX30 / EX90',
    text: 'Индивидуальный расчёт платежа и быстрый ответ от партнёров.',
  },
  {
    value: '-12%',
    title: 'На XC60 Recharge',
    text: 'Предложение для автомобилей в поставке и заказов через салон.',
  },
  {
    value: 'Пакет',
    title: 'Зимний комплект в подарок',
    text: 'Шины, коврики и защита при покупке выбранных комплектаций.',
  },
];

export const serviceSteps = [
  { title: 'Подбор времени', text: 'Менеджер уточняет удобное окно и тип работ.' },
  { title: 'Диагностика', text: 'Проверка через Volvo VIDA / DiCE и визуальный осмотр.' },
  { title: 'Согласование', text: 'Прозрачная смета до начала работ.' },
  { title: 'Выдача', text: 'Автомобиль возвращается чистым и с понятными рекомендациями.' },
];
