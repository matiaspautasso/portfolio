import { useEffect, useState } from "react";
import { CONTACT, PROJECTS, TECH_STACK, UI, type Lang, type Project } from "./content";

const RESUME_URL = `${import.meta.env.BASE_URL}${CONTACT.resume}`;

function useLang(): [Lang, (l: Lang) => void] {
  const [lang, setLang] = useState<Lang>(() => {
    try {
      const saved = localStorage.getItem("lang");
      if (saved === "en" || saved === "es") return saved;
    } catch {
      /* storage unavailable */
    }
    return "en";
  });

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem("lang", lang);
    } catch {
      /* ignore */
    }
  }, [lang]);

  return [lang, setLang];
}

function Header({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) {
  const t = UI[lang];
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <a href="#top" className="brand">
          Matías Pautasso
        </a>
        <nav className="nav" aria-label="Primary">
          <a href="#projects">{t.nav.projects}</a>
          <a href="#about">{t.nav.about}</a>
          <a href="#contact">{t.nav.contact}</a>
        </nav>
        <div className="header-actions">
          <a className="resume-link" href={RESUME_URL} target="_blank" rel="noopener">
            {t.resume} <span aria-hidden="true">↓</span>
          </a>
          <button
            type="button"
            className="lang-toggle"
            onClick={() => setLang(lang === "en" ? "es" : "en")}
            aria-label={lang === "en" ? "Cambiar a español" : "Switch to English"}
          >
            {t.langToggle}
          </button>
        </div>
      </div>
    </header>
  );
}

function Hero({ lang }: { lang: Lang }) {
  const t = UI[lang];
  return (
    <section className="hero" id="top">
      <div className="shell hero-grid">
        <div className="hero-copy">
          <p className="hero-greeting reveal">{t.hero.greeting}</p>
          <h1 className="hero-role reveal reveal-1">{t.hero.role}</h1>
          <p className="hero-summary reveal reveal-2">{t.hero.summary}</p>
          <p className="hero-stack reveal reveal-3">{t.hero.stack}</p>
          <div className="hero-cta reveal reveal-4">
            <a className="btn btn-primary" href="#projects">
              {t.hero.ctaProjects} <span aria-hidden="true">↗</span>
            </a>
            <a className="btn btn-ghost" href={RESUME_URL} target="_blank" rel="noopener">
              {t.hero.ctaResume} <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
        <aside className="hero-panel reveal reveal-3" aria-hidden="true">
          <div className="panel-head">
            <span className="dot" />
            <span className="dot" />
            <span className="dot" />
            <span className="panel-title">system / orders</span>
          </div>
          <pre className="panel-body">
{`POST /orders            201  idempotent
  ├─ reserve stock      OK   row-lock
  ├─ outbox → queue     OK   at-least-once
  └─ worker: process    ●    streaming…
events  ▓▓▓▓▓▓▓▓░░  live`}
          </pre>
        </aside>
      </div>
    </section>
  );
}

function ProjectCard({ project, lang }: { project: Project; lang: Lang }) {
  const t = UI[lang];
  return (
    <article className={`project${project.featured ? " project-featured" : ""}`}>
      <div className="project-top">
        <span className="project-kind">{project.kind[lang]}</span>
        {project.url ? (
          <a className="project-view" href={project.url} target="_blank" rel="noopener">
            {t.viewProject} <span aria-hidden="true">↗</span>
          </a>
        ) : (
          <span className="project-private">{t.privateProject}</span>
        )}
      </div>
      <h3 className="project-name">{project.name}</h3>
      <p className="project-tagline">{project.tagline[lang]}</p>
      <p className="project-desc">{project.description[lang]}</p>
      <ul className="tech-row">
        {project.tech.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
    </article>
  );
}

function Projects({ lang }: { lang: Lang }) {
  const t = UI[lang];
  return (
    <section className="section" id="projects">
      <div className="shell">
        <SectionHead label={t.sections.projectsLabel} title={t.sections.projectsTitle} />
        <div className="project-grid">
          {PROJECTS.map((p) => (
            <ProjectCard key={p.id} project={p} lang={lang} />
          ))}
        </div>
      </div>
    </section>
  );
}

function About({ lang }: { lang: Lang }) {
  const t = UI[lang];
  return (
    <section className="section section-alt" id="about">
      <div className="shell">
        <SectionHead label={t.sections.whatLabel} title={t.sections.whatTitle} />
        <div className="what-grid">
          {t.what.items.map((item) => (
            <div className="what-item" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </div>
          ))}
        </div>

        <div className="about-block">
          <SectionHead label={t.sections.aboutLabel} title={t.sections.aboutTitle} />
          <div className="about-copy">
            {t.about.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>

        <div className="stack-block">
          <SectionHead label={t.sections.stackLabel} title={t.sections.stackTitle} />
          <ul className="stack-list">
            {TECH_STACK.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Contact({ lang }: { lang: Lang }) {
  const t = UI[lang];
  return (
    <section className="section" id="contact">
      <div className="shell">
        <SectionHead label={t.sections.contactLabel} title={t.sections.contactTitle} />
        <p className="contact-lead">{t.contact.lead}</p>
        <div className="contact-links">
          <a href={`mailto:${CONTACT.email}`}>
            <span className="contact-k">{t.contact.emailLabel}</span>
            <span className="contact-v">{CONTACT.email}</span>
          </a>
          <a href={CONTACT.github} target="_blank" rel="noopener">
            <span className="contact-k">{t.contact.githubLabel}</span>
            <span className="contact-v">{CONTACT.githubLabel}</span>
          </a>
          <a href={CONTACT.linkedin} target="_blank" rel="noopener">
            <span className="contact-k">{t.contact.linkedinLabel}</span>
            <span className="contact-v">{CONTACT.linkedinLabel}</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function SectionHead({ label, title }: { label: string; title: string }) {
  return (
    <div className="section-head">
      <span className="section-index">{label}</span>
      <h2 className="section-title">{title}</h2>
    </div>
  );
}

export default function App() {
  const [lang, setLang] = useLang();
  const t = UI[lang];
  return (
    <>
      <Header lang={lang} setLang={setLang} />
      <main>
        <Hero lang={lang} />
        <Projects lang={lang} />
        <About lang={lang} />
        <Contact lang={lang} />
      </main>
      <footer className="site-footer">
        <div className="shell footer-inner">
          <span>© {new Date().getFullYear()} Matías Pautasso · {CONTACT.location[lang]}</span>
          <span className="footer-note">{t.footerNote}</span>
        </div>
      </footer>
    </>
  );
}
