import { useCallback, useEffect, useRef, useState } from "react";
import { slides } from "../data/content";

import s1 from "../assets/hero/slide-1.png";
import s2 from "../assets/hero/slide-2.png";
import s3 from "../assets/hero/slide-3.png";
import s4 from "../assets/hero/slide-4.png";

const sources = [s1, s2, s3, s4];

const INTERVAL = 7500;

export default function Hero() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const touch = useRef<number | null>(null);
  const n = slides.length;

  const go = useCallback((d: number) => setI((c) => (c + d + n) % n), [n]);

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches)
      return;
    const t = setInterval(() => go(1), INTERVAL);
    return () => clearInterval(t);
  }, [paused, go, i]);

  return (
    <section
      id="top"
      className="hero"
      aria-roledescription="carusel"
      aria-label="Mr B Sax, prezentare"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") go(1);
        if (e.key === "ArrowLeft") go(-1);
      }}
      onTouchStart={(e) => {
        touch.current = e.touches[0].clientX;
      }}
      onTouchEnd={(e) => {
        if (touch.current === null) return;
        const dx = e.changedTouches[0].clientX - touch.current;
        if (Math.abs(dx) > 45) go(dx < 0 ? 1 : -1);
        touch.current = null;
      }}
    >
      {slides.map((s, k) => (
        <article
          key={s.title}
          className={`slide slide--${s.side} ${k === i ? "is-active" : ""}`}
          aria-hidden={k !== i}
          aria-roledescription="slide"
          aria-label={`${k + 1} din ${n}`}
        >
          <img
            className="slide__img"
            src={sources[k]}
            alt=""
            style={{ objectPosition: s.focus }}
            fetchPriority={k === 0 ? "high" : "auto"}
          />
          <div className="slide__copy">
            <p className="script">{s.script}</p>
            <h2 className="serif">{s.title}</h2>
            <p className="slide__text">{s.text}</p>
            <a className="btn" href={s.href} tabIndex={k === i ? 0 : -1}>
              {s.button} <span aria-hidden="true">→</span>
            </a>
          </div>
        </article>
      ))}

      <div className="hero__controls">
        <button
          className="arrow"
          onClick={() => go(-1)}
          aria-label="Slide anterior"
        >
          ‹
        </button>
        <div className="dots">
          {slides.map((s, k) => (
            <button
              key={s.title}
              className={k === i ? "is-on" : ""}
              onClick={() => setI(k)}
              aria-label={`Mergi la slide ${k + 1}`}
              aria-current={k === i}
            />
          ))}
        </div>
        <button
          className="arrow"
          onClick={() => go(1)}
          aria-label="Slide următor"
        >
          ›
        </button>
      </div>
    </section>
  );
}
