function MainIndex() {
  return (
    <main className="main-index main">
      <h1 className="visually-hidden">Синтез</h1>
      <p className="slogan">Калмыцкий язык для всех!</p>
      <form className="form" action="#" method="post">
        <label className="visually-hidden" htmlFor="field"></label>
        <input
          className="form-field"
          type="text"
          name="audition-text"
          id="field"
          placeholder="Введите текст"
        />
        <button className="form-submit" type="submit">
          <span className="visually-hidden">Прослушать</span>
        </button>
      </form>
      <audio
        className="visually-hidden"
        role="none"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0e/90-%C3%B6%C4%9Fleden_sonra.wav"
        controls
      ></audio>
    </main>
  );
}

export default MainIndex;
