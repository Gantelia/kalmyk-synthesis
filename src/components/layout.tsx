import { Link, Outlet, useLocation } from "react-router-dom";

function Layout() {
  const location = useLocation();

  return (
    <div className="app">
      <header className="page-header">
        <nav className="navigation">
          <ul className="navigation-list">
            <li className="navigation-item">
              <Link
                to="/"
                className={`navigation-link ${
                  location.pathname === "/" ? "navigation-link-active" : ""
                }`}
              >
                Главная
              </Link>
            </li>
            <li className="navigation-item">
              <Link
                to="about"
                className={`navigation-link ${
                  location.pathname === "/about" ? "navigation-link-active" : ""
                }`}
              >
                О нас
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <Outlet />

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
    </div>
  );
}

export default Layout;
