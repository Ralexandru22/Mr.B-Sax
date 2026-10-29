import Icon from "./Icon";
import { mainServices, moreServices, servicesIntro } from "../data/content";

const serviceImages: Record<string, string> = {
  "Wedding Sax": "/src/assets/wedding_sax.png",
  "Party Sax": "/src/assets/party_sax.png",
  "Corporate Sax": "/src/assets/corporate_sax.png",
  "DJ Sax": "/src/assets/dj_sax.png",
};

export default function Services() {
  const services = [...mainServices];

  // Adaugă DJ Sax dacă nu există deja în content.ts
  if (!services.some((s) => s.name.toLowerCase().includes("dj"))) {
    services.push({
      name: "DJ Sax",
      subtitle: "Saxofon live & DJ",
      text: "O combinație de saxofon live și ritmuri de DJ, pentru o atmosferă modernă și plină de energie.",
      icon: "music",
    } as (typeof mainServices)[number]);
  }

  return (
    <section id="servicii" className="section services">
      <div className="services__heading">
        <p className="services__eyebrow">SERVICIILE MELE</p>
        <h2>
          Saxofon live pentru
          <span> orice tip de eveniment</span>
        </h2>
        <p>
          Momente muzicale care se adaptează perfect atmosferei, oamenilor și
          stilului evenimentului tău.
        </p>
      </div>

      <ul className="services__grid">
        {services.map((s) => (
          <li className="service-card" key={s.name}>
            <div
              className="service-card__image"
              style={{
                backgroundImage: `url("${serviceImages[s.name] || "/images/party_sax.png"}")`,
              }}
            />

            <div className="service-card__content">
              <h3 className="service-card__title">{s.name}</h3>

              <div className="service-card__line" />

              <p className="service-card__description">{s.text}</p>

              <a
                className="service-card__button"
                href="#contact"
                aria-label={`Solicită detalii pentru ${s.name}`}
              >
                DESCOPERĂ DETALII
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </li>
        ))}
      </ul>

      {/* <div className="services__more">
        <h3 className="more__h">Experiențe muzicale</h3>

        <ul className="more">
          {moreServices.map((s) => (
            <li key={s.title}>
              <Icon name={s.icon} className="more__icon" />
              <h4>{s.title}</h4>
              <p>{s.text}</p>
            </li>
          ))}
        </ul>

        <p className="outro">{servicesIntro.outro}</p>
      </div> */}
    </section>
  );
}
