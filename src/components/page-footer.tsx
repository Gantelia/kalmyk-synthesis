function PageFooter() {
  return (
    <footer className="page-footer">
      <p className="page-footer-about">Разработано&nbsp;&ndash;</p>
      <a className="page-footer-link" href="https://it-08.ru">
        <img
          className="page-footer-logo"
          src={require("../images/logo-IT08.jpg")}
          width="37"
          height="37"
          alt="Логотип «Цифровая Калмыкия»"
        />
      </a>
    </footer>
  );
}

export default PageFooter;
