import { useState } from "react";
import Social from "./Social";
import { cta, eventTypes, site } from "../data/content";

// Completează numărul real al impresarului aici.
const impresarPhone = "+40 7XX XXX XXX";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    type: eventTypes[0],
    date: "",
    message: "",
  });

  const set =
    (k: keyof typeof form) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >,
    ) => {
      setForm((f) => ({ ...f, [k]: e.target.value }));
    };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = `Cerere ofertă: ${form.type}`;

    const body = [
      `Nume: ${form.name}`,
      `Telefon: ${form.phone}`,
      `Tip eveniment: ${form.type}`,
      `Data: ${form.date || "nedecisă încă"}`,
      "",
      form.message,
    ].join("\n");

    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <>
      <section id="contact" className="section contact">
        <div className="contact__info">
          <p className="script">Contact</p>

          <h2>Hai să vorbim despre evenimentul tău</h2>

          <p>
            Spune-mi data, locul și atmosfera pe care o vrei. Revin cu o ofertă
            personalizată.
          </p>

          <ul className="contact__list">
            <li>
              <a href={`tel:${site.phone.replace(/\s/g, "")}`}>
                {+40761673774}
              </a>
            </li>

            <li>
              <a
                href={`https://wa.me/${site.whatsapp}`}
                target="_blank"
                rel="noreferrer"
              >
                Scrie pe WhatsApp
              </a>
            </li>

            <li>
              <a href={`mailto:${site.email}`}>{"bogdanroman1983@yahoo.com"}</a>
            </li>
          </ul>

          <Social />
        </div>

        <form className="form" onSubmit={submit}>
          <label>
            Numele tău
            <input
              required
              value={form.name}
              onChange={set("name")}
              autoComplete="name"
            />
          </label>

          <label>
            Telefon
            <input
              required
              type="tel"
              value={form.phone}
              onChange={set("phone")}
              autoComplete="tel"
            />
          </label>

          <div className="form__row">
            <label>
              Tip eveniment
              <select value={form.type} onChange={set("type")}>
                {eventTypes.map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </label>

            <label>
              Data (dacă o știi)
              <input type="date" value={form.date} onChange={set("date")} />
            </label>
          </div>

          <label>
            Mesaj
            <textarea rows={4} value={form.message} onChange={set("message")} />
          </label>

          <button className="btn btn--solid" type="submit">
            {cta}
          </button>

          <p className="form__hint">
            Se deschide aplicația ta de email cu mesajul pregătit.
          </p>
        </form>
      </section>

      {/* Banda impresarului */}
      <aside className="impresar-banner">
        <div className="impresar-banner__inner">
          <div className="impresar-banner__text">
            <span className="impresar-banner__label">BOOKING & EVENIMENTE</span>

            <h3>Contactează impresarul Mr B Sax</h3>

            <p>
              Află disponibilitatea și primește o ofertă personalizată pentru
              evenimentul tău.
            </p>
          </div>

          <div className="impresar-banner__contact">
            <span>REZERVĂRI TELEFONICE</span>

            {impresarPhone.includes("X") ? (
              <strong>+40770589917</strong>
            ) : (
              <a href={`tel:${impresarPhone.replace(/[^\d+]/g, "")}`}>
                {impresarPhone}
              </a>
            )}
          </div>
        </div>
      </aside>
    </>
  );
}
