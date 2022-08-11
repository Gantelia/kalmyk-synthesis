import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import { validateInput } from "../utils";
// import { BACKEND_URL } from "../const";

function MainIndex() {
  const [text, setText] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isError, setIsError] = useState(false);

  const prevTextRef = useRef("");
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audioFile = audioRef.current;
    if (audioFile === null) {
      setIsLoading(true);
    }
    if (audioFile !== null) {
      audioFile.onloadeddata = () => setIsLoading(false);
    }
    return () => {
      if (audioFile !== null) {
        audioFile.onloadeddata = null;
      }
    };
  }, [prevTextRef]);

  useEffect(() => {
    const audioFile = audioRef.current;
    if (audioFile === null) {
      return;
    }
    if (audioFile && isPlaying) {
      audioFile.play();
    }
  }, [isPlaying]);

  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault();
    if (!validateInput(text)) {
      return;
    }
    if (prevTextRef.current === text) {
      setIsPlaying(true);
      return;
    }
    if (prevTextRef.current !== text) {
      prevTextRef.current = text;
      setIsSubmitting(true);
      setIsPlaying(true);
      return;
    }
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
          disabled={isPlaying /*|| isSubmitting*/}
        >
          <span className="visually-hidden">Прослушать</span>
        </button>
      </form>
      {isError && (
        <p className="error">
          Что-то пошло не так...
          <br /> Попробуйте перезагрузить страницу
        </p>
      )}
      {isLoading && !isError && <p className="loading-message">Загрузка...</p>}
      <audio
        className="audio"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0e/90-%C3%B6%C4%9Fleden_sonra.wav"
        ref={audioRef}
        onEnded={() => setIsPlaying(false)}
      ></audio>
    </main>
  );
}

export default MainIndex;
