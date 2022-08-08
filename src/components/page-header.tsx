function PageHeader() {
  return (
    <header className="page-header">
      <nav className="navigation">
        <ul className="navigation-list">
          <li className="navigation-item">
            <a className="navigation-link navigation-link-active" href="#">
              Главная
            </a>
          </li>
          <li className="navigation-item">
            <a className="navigation-link" href="developers.html">
              Разработчики
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default PageHeader;
