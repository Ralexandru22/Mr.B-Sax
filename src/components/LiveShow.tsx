import bg from "../assets/hero/live.png";
import { cta, live, site } from "../data/content";

export default function LiveShow() {
  return (
    <section
      id="live"
      className="live"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="live__inner">
        <h2 className="script big">{live.script}</h2>
        <p className="serif live__title">{live.title}</p>
        {live.paragraphs.map((p) => (
          <p key={p}>{p}</p>
        ))}
        <p className="closing">{live.closing}</p>
        <p className="sign">
          {site.name} — {site.tagline}.
        </p>
        <a className="btn btn--solid" href="#contact">
          {cta}
        </a>
      </div>
    </section>
  );
}
