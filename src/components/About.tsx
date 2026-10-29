import portrait from "../assets/about.jpeg";
import { about, achievements, career, education } from "../data/content";

export default function About() {
  return (
    <section id="despre" className="section">
      <div className="about">
        <figure className="about__photo">
          <img src={portrait} alt="Mr B Sax" loading="lazy" />
        </figure>
        <div className="about__body">
          <p className="script">{about.kicker}</p>
          <h2>{about.title}</h2>
          <p className="lead">{about.lead}</p>
          {about.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
          <ul className="tags" aria-label="Stiluri muzicale">
            {about.styles.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
          <p className="closing">{about.closing}</p>
        </div>
      </div>

      <div className="cv">
        <div>
          <h3 className="cv__h">Educație și formare profesională</h3>
          <ul className="timeline">
            {education.map((e) => (
              <li key={e.title}>
                {e.logo && (
                  <img src={e.logo} alt="" className="timeline__logo" />
                )}
                <div>
                  <h4>{e.title}</h4>
                  <p className="gold">{e.place}</p>
                  {e.note && <p>{e.note}</p>}
                </div>
              </li>
            ))}
            <li>
              <div>
                <h4>{career.title}</h4>
                <p className="gold">{career.role}</p>
                <p>
                  {career.since}. {career.position}.
                </p>
                <ul className="bullets">
                  {career.duties.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="cv__h">Profil profesional și realizări</h3>
          <ul className="bullets">
            {achievements.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
