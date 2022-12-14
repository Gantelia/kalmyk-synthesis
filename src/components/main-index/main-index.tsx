import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import { checkStatus, isInputValid } from "../../utils";

const test = require("../../audio/test.wav");
const BACKEND_URL = 'http://localhost:8000';

function MainIndex() {
  const [text, setText] = useState<string>("");
  const [isValid, setIsValid] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isError, setIsError] = useState(false);
  const [voiceURL, setVoiceURL] = useState(test);

  const prevTextRef = useRef("");
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${BACKEND_URL}/text2voice/?text=${text}`,
          {
            method: "GET",
            mode: "no-cors",
          }
        );
        //Тело ответа не приходит с сервера,
        // поэтому закомментированный код
        //  на данный момент не работает

        // const voiceName = response.data.filename;
        // setVoiceURL(`${BACKEND_URL}/download/${voiceName}`);
        // checkStatus(response);
      } catch (error: unknown) {
        setIsError(true);
        throw new Error(`${error}`);
      } finally {
        setIsSubmitting(false);
        setIsLoading(false);
      }
    };

    if (!isSubmitting) {
      return;
    }

    if (isSubmitting) {
      fetchData();
      setIsLoading(true);
    }
  }, [isSubmitting, text]);

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

    if (!isValid) {
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
      <h1 className="visually-hidden">Синтез калмыцкой речи</h1>
      <p className="slogan">Калмыцкий язык для всех!</p>
      <form className="form" action="#" method="post" onSubmit={handleSubmit}>
        <label className="visually-hidden" htmlFor="field"></label>
        <textarea
          className="form-field"
          name="audition-text"
          rows={3}
          id="field"
          placeholder="Введите текст"
          onInput={(evt: ChangeEvent<HTMLTextAreaElement>) => {
            setText(evt.target.value);
            setIsValid(isInputValid(evt.target.value));
          }}
          disabled={isSubmitting}
        />
        <button
          className="form-submit"
          type="submit"
          disabled={isPlaying || isSubmitting}
        >
          <span className="visually-hidden">Прослушать</span>
        </button>
      </form>
      {!isValid && text &&
        <p className="validation">
          Доступны только буквы калмыцкого алфавита, цифры и знаки препинания
        </p>}
      {isError && (
        <p className="error">
          Что-то пошло не так...
          <br /> Попробуйте перезагрузить страницу
        </p>
      )}
      {isLoading && !isError && <p className="loading-message">Загрузка...</p>}
      <audio
        className="audio"
        ref={audioRef}
        onEnded={() => setIsPlaying(false)}
      >
        <source type="audio/wav" src={voiceURL} />
      </audio>
    </main>
  );
}

export default MainIndex;
