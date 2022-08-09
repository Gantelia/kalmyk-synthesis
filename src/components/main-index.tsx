import { ChangeEvent, FormEvent, useRef, useState } from "react";
// import { BACKEND_URL } from "../const";

function MainIndex() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [text, setText] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const prevTextRef = useRef("");

  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault();
    console.log(prevTextRef);

    if (prevTextRef.current === text) {
      setIsPlaying(true);
      console.log("isPlaying");
    }
    prevTextRef.current = text;
    console.log(prevTextRef);
  };

  return (
    <main className="main-index main">
      <h1 className="visually-hidden">Синтез</h1>
      <p className="slogan">Калмыцкий язык для всех!</p>
      <form className="form" action="#" method="post" onSubmit={handleSubmit}>
        <label className="visually-hidden" htmlFor="field"></label>
        <input
          className="form-field"
          type="text"
          name="audition-text"
          id="field"
          placeholder="Введите текст"
          onInput={(evt: ChangeEvent<HTMLInputElement>) =>
            setText(evt.target.value)
          }
          // disabled={isSubmitting}
        />
        <button
          className="form-submit"
          type="submit"
          // disabled={isSubmitting}
        >
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
