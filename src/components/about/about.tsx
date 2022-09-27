function About() {
  return (
    <main className="main-inner main">
      <h1 className="main-inner-title">Разработчики:</h1>
      <dl className="main-inner-list">
        <div className="main-inner-item">
          <dt className="main-inner-role">Руководитель проекта</dt>
          <dd className="main-inner-name">Гавинов Руслан</dd>
        </div>
        <div className="main-inner-item">
          <dt className="main-inner-role">Бэкенд</dt>
          <dd className="main-inner-name">Анджукаев Церен</dd>
        </div>
        <div className="main-inner-item">
          <dt className="main-inner-role">Фронтенд и&nbsp;дизайн</dt>
          <dd className="main-inner-name">Грива Елена</dd>
        </div>
      </dl>
    </main>
  );
}

export default About;
