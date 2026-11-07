import "./App.css";
import { useState, useEffect, useRef, FormEvent, ReactNode } from "react";
import { ARTICLES, Article } from "./writing";

const EMAIL = "yonatandlurie@outlook.com";
const GITHUB_URL = "https://github.com/yonilurie";
const LINKEDIN_URL = "https://www.linkedin.com/in/yonilurie/";
const RESUME_URL = "YonatanLurieResume.pdf";
const FORMSPREE_URL = "https://formspree.io/f/xgeqapga";

// Drafts show locally under `npm run dev` but never on the live site
const PUBLISHED_ARTICLES = ARTICLES.filter((a) => import.meta.env.DEV || !a.draft);

const FACTS = [
  { label: "Currently", value: "Technical Lead, Vendor Integrations at Invent.us" },
  { label: "Based in", value: "Seattle, WA" },
  { label: "Focus", value: "Integrations, developer experience, AI tooling" },
  { label: "Background", value: "Psychology (UW) → full-stack engineering" },
];

const LIFECYCLE_HANDOFF = { title: "The idea", detail: "Someone has something they want built" };

const LIFECYCLE_OWNED = [
  { title: "Understand", detail: "Learn what they're actually trying to build" },
  { title: "Scope", detail: "Turn the idea into a buildable plan" },
  { title: "Unblock", detail: "Access, answers, and integration problems solved" },
  { title: "Review", detail: "Hold the quality bar before anything ships" },
  { title: "Launch", detail: "Get it to production and make sure it holds up" },
];

const PRINCIPLES = [
  {
    title: "Make the right path the easy path",
    body: "If people keep repeating the same manual steps, that's a tooling problem. I build the automation so the correct setup is also the fastest one.",
  },
  {
    title: "Explain the why",
    body: "Review feedback should teach, not just block. Findings are ranked must-fix, should-fix, and can-fix, each with where and why.",
  },
  {
    title: "Translate, don't relay",
    body: "Clients shouldn't need to speak engineering, and developers shouldn't have to guess what the client meant. I turn each side's language into something the other can act on.",
  },
];

const WORK = [
  {
    metric: "~1 hr → <10 min",
    title: "AI tooling for partner developers",
    body: "Claude Code skills that turn manual project setup into a single prompt and automate widget updates and preview images. Piloted with a non-technical user, then hardened the templates and guardrails based on the results.",
    tags: ["Claude Code", "SDK", "Developer experience"],
  },
  {
    metric: "20+ apps",
    title: "Partner app review",
    body: "Final approver for third-party apps before production, backed by an AI code-review skill with merge-request and whole-app modes that sorts findings by severity.",
    tags: ["Code review", "Security", "Performance"],
  },
  {
    metric: "~10 apps",
    title: "Legacy app migration",
    body: "Ported legacy partner apps to a new UI framework myself, and guided partners through migrating the rest.",
    tags: ["React", "UI kit", "Migration"],
  },
  {
    metric: "90% faster",
    title: "Self-service data fixes",
    body: "A tool that let non-technical finance staff resolve Workday data mismatches themselves, on a $60M+ scholarship platform.",
    tags: ["Full-stack", "SQL", "UW Finance"],
  },
];

const TIMELINE = [
  {
    title: "Technical Lead, Vendor Integrations",
    org: "Invent.us",
    dates: "2025 – Present",
    summary: "Technical lead for the third-party vendor program: scoping, provisioning, review, the SDK, and AI tooling. Turned a CEO-built prototype into a production micro-app.",
  },
  {
    title: "Software Engineer",
    org: "Invent.us",
    dates: "2024 – 2025",
    summary: "Partner onboarding and escalation; led demos and the full-stack build of a HubSpot ticketing app for an $8B AUM client.",
  },
  {
    title: "Frontend Development Intern",
    org: "Invent.us",
    dates: "2024",
    summary: "Shipped a production React micro-app for client portals; hired full-time within 90 days.",
  },
  {
    title: "Full-Stack Software Developer",
    org: "University of Washington Finance",
    dates: "2023 – 2024",
    summary: "Full-stack features on a $60M+ scholarship platform; raised test coverage from 32% to 86%.",
  },
  {
    title: "Full-Stack Software Engineering",
    org: "App Academy",
    dates: "2022",
    summary: null,
  },
  {
    title: "BA, Psychology",
    org: "University of Washington",
    dates: "2022",
    summary: null,
  },
];

const SKILLS = [
  { category: "Partner-facing", items: ["Vendor onboarding", "Requirements scoping", "Technical discovery", "Technical demos"] },
  { category: "Languages", items: ["TypeScript", "JavaScript", "C#", "Python", "SQL"] },
  { category: "Frontend", items: ["React", "Redux", "Tailwind", "Storybook"] },
  { category: "Backend & APIs", items: ["Node.js", "Express", "ASP.NET Core", "PostgreSQL", "OAuth integrations (Google, Microsoft Entra, HubSpot)"] },
  { category: "Platform & tools", items: ["SDK & UI-kit development", "Multi-tenant architecture", "Federated micro-frontends", "Claude Code (skills authoring)", "GitLab", "Azure", "Postman"] },
];

type Theme = "light" | "dark";

function getInitialTheme(): Theme {
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

function useHash() {
  const [hash, setHash] = useState(window.location.hash);
  useEffect(() => {
    const onChange = () => setHash(window.location.hash);
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);
  return hash;
}

function App() {
  const hash = useHash();
  const article = PUBLISHED_ARTICLES.find((a) => hash === `#/writing/${a.slug}`);
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const [scrolled, setScrolled] = useState(false);
  const [showBrand, setShowBrand] = useState(false);
  const contactRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      // Storage unavailable (private mode); the choice just won't persist
    }
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Articles start at the top; returning home honors section anchors like #work
  useEffect(() => {
    if (article) {
      window.scrollTo(0, 0);
    } else if (hash && !hash.startsWith("#/")) {
      document.getElementById(hash.slice(1))?.scrollIntoView();
    }
  }, [article, hash]);

  // Only show the name in the header once the hero has scrolled away
  useEffect(() => {
    const hero = document.querySelector(".hero-eyebrow");
    if (!hero) return;
    const observer = new IntersectionObserver(([entry]) => setShowBrand(!entry.isIntersecting), {
      rootMargin: "-64px 0px 0px 0px",
    });
    observer.observe(hero);
    return () => observer.disconnect();
  }, [article]);

  // Fade sections in as they enter the viewport (index.html opts in before first paint)
  useEffect(() => {
    const els = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -10% 0px" },
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [article]);

  const openContact = () => contactRef.current?.showModal();
  const brandVisible = showBrand || Boolean(article);

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>

      <header className={`site-header${scrolled ? " site-header--scrolled" : ""}`}>
        <div className="container header-inner">
          <a
            href="#top"
            className={`brand${brandVisible ? " brand--visible" : ""}`}
            aria-hidden={!brandVisible}
            tabIndex={brandVisible ? undefined : -1}
          >
            Yonatan Lurie
          </a>
          <nav className="nav" aria-label="Primary">
            <a href="#how-i-work" className="nav-link nav-link--section">How I work</a>
            <a href="#work" className="nav-link nav-link--section">Work</a>
            {PUBLISHED_ARTICLES.length > 0 && (
              <a href="#writing" className="nav-link nav-link--section">Writing</a>
            )}
            <a href="#about" className="nav-link nav-link--section">About</a>
            <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" className="nav-link">Resume</a>
            <span className="nav-divider" aria-hidden="true" />
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label="GitHub">
              <GitHubIcon />
            </a>
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label="LinkedIn">
              <LinkedInIcon />
            </a>
            <button
              className="icon-btn"
              onClick={toggleTheme}
              aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
            >
              {theme === "dark" ? <SunIcon /> : <MoonIcon />}
            </button>
          </nav>
        </div>
      </header>

      <main id="main">
        {article ? <ArticleView article={article} /> : (
        <>
        <div className="hero-wrap">
        <section id="top" className="container hero">
          <div className="hero-main">
            <p className="hero-eyebrow">Yonatan Lurie</p>
            <h1 className="hero-headline">
              <span>Technical enough to build it.</span>{" "}
              <span className="hero-headline-muted">Clear enough to explain it.</span>
            </h1>
            <p className="hero-lede">
              I sit between the people with the idea and the people writing the code: hands-on in React, TypeScript,
              and APIs, and able to explain that work in plain language to clients, partners, and non-technical teams.
              Right now I'm the technical lead for vendor integrations at Invent.us, taking partner teams from first
              walkthrough to production.
            </p>
            <div className="hero-actions">
              <button className="btn btn--primary" onClick={openContact}>Get in touch</button>
              <a className="btn btn--secondary" href={RESUME_URL} target="_blank" rel="noopener noreferrer">
                View resume
              </a>
            </div>
          </div>
          <div className="facts card">
            {/* Placeholder until there's a photo: swap for <img className="headshot" src="..." alt="Yonatan Lurie" /> */}
            <div className="headshot" role="img" aria-label="Yonatan Lurie">YL</div>
            <dl className="facts-list">
              {FACTS.map((f) => (
                <div className="fact" key={f.label}>
                  <dt>{f.label}</dt>
                  <dd>{f.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
        </div>

        <section id="how-i-work" className="band" aria-labelledby="how-i-work-title">
          <div className="container">
            <SectionHeading id="how-i-work-title" eyebrow="How I work">
              From the first conversation to launch, I'm the technical point of contact.
            </SectionHeading>

            <div className="lifecycle" data-reveal>
              <div className="lc-handoff">
                <span className="lc-step-label">Them</span>
                <LifecycleStep index={1} {...LIFECYCLE_HANDOFF} />
              </div>
              <div className="lc-owned">
                <span className="lc-step-label lc-step-label--accent">Me</span>
                <ol className="lc-steps">
                  {LIFECYCLE_OWNED.map((s, i) => (
                    <li key={s.title} style={{ "--i": i } as React.CSSProperties}>
                      <LifecycleStep index={i + 2} {...s} />
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            <div className="principles">
              {PRINCIPLES.map((p, i) => (
                <article className="principle" key={p.title} data-reveal style={{ transitionDelay: `${i * 80}ms` }}>
                  <h3>{p.title}</h3>
                  <p>{p.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="work" className="container section" aria-labelledby="work-title">
          <SectionHeading id="work-title" eyebrow="Selected work">
            Tooling and fixes that took friction out of other people's work.
          </SectionHeading>
          <div className="work-grid">
            {WORK.map((w, i) => (
              <article className="card work-card" key={w.title} data-reveal style={{ transitionDelay: `${(i % 2) * 80}ms` }}>
                <span className="work-metric">{w.metric}</span>
                <h3 className="work-title">{w.title}</h3>
                <p className="work-body">{w.body}</p>
                <ul className="tags" aria-label="Topics">
                  {w.tags.map((t) => <li className="tag" key={t}>{t}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {PUBLISHED_ARTICLES.length > 0 && (
        <section id="writing" className="container section" aria-labelledby="writing-title">
          <SectionHeading id="writing-title" eyebrow="Writing">
            Notes on partner engineering and AI tooling.
          </SectionHeading>
          <div className="writing-list">
            {PUBLISHED_ARTICLES.map((a) => (
              <a className="card writing-card" href={`#/writing/${a.slug}`} key={a.slug} data-reveal>
                <div className="writing-meta">
                  {a.draft && <span className="draft-badge">Draft</span>}
                  <span>{a.readTime}</span>
                </div>
                <h3 className="writing-title">{a.title}</h3>
                <p className="writing-summary">{a.summary}</p>
                <span className="text-link">Read <span aria-hidden="true">→</span></span>
              </a>
            ))}
          </div>
        </section>
        )}

        <section id="about" className="container section about" aria-labelledby="about-title">
          <div className="about-text" data-reveal>
            <SectionHeading id="about-title" eyebrow="About">
              From psychology to platform engineering.
            </SectionHeading>
            <p>
              I studied psychology at the University of Washington, then went through App Academy's full-stack
              bootcamp and started building software for UW Finance. That combination turned out to be the job:
              understand what the people on the other side actually need, explain the technical side in terms they can
              use, then build the thing that gets them there.
            </p>
            <p>
              Today I do that for the partners building on Invent.us: I demo the platform, get them set up, help them
              build, review their code, and keep improving the SDK and AI tooling so the next partner has an easier time.
              I'm based in Seattle.
            </p>
          </div>

          <div className="about-side" data-reveal>
            <h3 className="subheading">Experience</h3>
            <ol className="timeline">
              {TIMELINE.map((t) => (
                <li className={`timeline-item${t.summary ? "" : " timeline-item--minor"}`} key={t.title}>
                  <div className="timeline-head">
                    <span className="timeline-title">{t.title}</span>
                    <span className="timeline-dates">{t.dates}</span>
                  </div>
                  <span className="timeline-org">{t.org}</span>
                  {t.summary && <p className="timeline-summary">{t.summary}</p>}
                </li>
              ))}
            </ol>
            <a className="text-link" href={RESUME_URL} target="_blank" rel="noopener noreferrer">
              Full resume <span aria-hidden="true">→</span>
            </a>
          </div>
        </section>

        <section id="skills" className="container section" aria-labelledby="skills-title">
          <h3 className="subheading" id="skills-title">Skills</h3>
          <dl className="skills" data-reveal>
            {SKILLS.map((group) => (
              <div className="skill-row" key={group.category}>
                <dt>{group.category}</dt>
                <dd>{group.items.join(" · ")}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="container cta" aria-labelledby="cta-title" data-reveal>
          <div className="cta-inner card">
            <div>
              <h2 className="cta-title" id="cta-title">Building a platform with partners?</h2>
              <p className="cta-body">I'd love to hear about it. The fastest way to reach me is email.</p>
            </div>
            <div className="cta-actions">
              <a className="btn btn--primary" href={`mailto:${EMAIL}`}>Email me</a>
              <button className="btn btn--secondary" onClick={openContact}>Contact form</button>
            </div>
          </div>
        </section>
        </>
        )}
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <p>© {new Date().getFullYear()} Yonatan Lurie · Seattle</p>
          <div className="footer-links">
            <a className="nav-link" href={`mailto:${EMAIL}`}>{EMAIL}</a>
            <a className="nav-link" href={GITHUB_URL} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a className="nav-link" href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </footer>

      <ContactDialog dialogRef={contactRef} />
    </>
  );
}

export default App;

function ArticleView({ article }: { readonly article: Article }) {
  useEffect(() => {
    const previous = document.title;
    document.title = `${article.title} — Yonatan Lurie`;
    return () => {
      document.title = previous;
    };
  }, [article]);

  return (
    <article className="container article">
      <a className="text-link article-back" href="#writing">
        <span aria-hidden="true">←</span> All writing
      </a>
      <header className="article-header">
        <div className="writing-meta">
          {article.draft && <span className="draft-badge">Draft</span>}
          <span>Yonatan Lurie · {article.readTime}</span>
        </div>
        <h1 className="article-title">{article.title}</h1>
        <p className="article-lede">{article.summary}</p>
      </header>
      <div className="prose">{article.body()}</div>
    </article>
  );
}

interface SectionHeadingProps {
  readonly id: string;
  readonly eyebrow: string;
  readonly children: ReactNode;
}

function SectionHeading({ id, eyebrow, children }: SectionHeadingProps) {
  return (
    <header className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="section-title" id={id}>{children}</h2>
    </header>
  );
}

interface LifecycleStepProps {
  readonly index: number;
  readonly title: string;
  readonly detail: string;
}

function LifecycleStep({ index, title, detail }: LifecycleStepProps) {
  return (
    <div className="lc-step">
      <span className="lc-index">{String(index).padStart(2, "0")}</span>
      <span className="lc-title">{title}</span>
      <span className="lc-detail">{detail}</span>
    </div>
  );
}

type SendStatus = "idle" | "sending" | "sent" | "error";

interface ContactDialogProps {
  readonly dialogRef: React.RefObject<HTMLDialogElement>;
}

// Native <dialog> provides Escape-to-close, focus containment, and inert background
function ContactDialog({ dialogRef }: ContactDialogProps) {
  const [status, setStatus] = useState<SendStatus>("idle");

  const close = () => dialogRef.current?.close();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error(`Formspree responded ${res.status}`);
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <dialog
      ref={dialogRef}
      className="contact"
      aria-labelledby="contact-title"
      onClose={() => setStatus("idle")}
      onClick={(e) => {
        if (e.target === e.currentTarget) close();
      }}
    >
      <div className="contact-inner">
        <div className="contact-head">
          <h2 className="contact-title" id="contact-title">Get in touch</h2>
          <button className="icon-btn" onClick={close} aria-label="Close">
            <CloseIcon />
          </button>
        </div>

        {status === "sent" ? (
          <div className="contact-success" role="status">
            <p>Thanks — your message is on its way. I'll get back to you soon.</p>
            <button className="btn btn--secondary" onClick={close}>Close</button>
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <label htmlFor="email">Your email</label>
            <input type="email" name="email" id="email" autoComplete="email" required />
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" required />
            {status === "error" && (
              <p className="form-error" role="alert">
                Something went wrong. Please try again or email <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
              </p>
            )}
            <button type="submit" className="btn btn--primary" disabled={status === "sending"}>
              {status === "sending" ? "Sending…" : "Send message"}
            </button>
          </form>
        )}
      </div>
    </dialog>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
      <path d="M12 .3a12 12 0 0 0-3.8 23.38c.6.12.83-.26.83-.57l-.02-2.04c-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.08-.74.09-.73.09-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.1-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.64 1.66.24 2.88.12 3.18a4.65 4.65 0 0 1 1.23 3.22c0 4.61-2.8 5.63-5.48 5.92.42.36.81 1.1.81 2.22l-.01 3.29c0 .31.2.69.82.57A12 12 0 0 0 12 .3" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <circle cx="12" cy="12" r="4.5" />
      <path d="M12 1.5v2M12 20.5v2M4.6 4.6l1.4 1.4M18 18l1.4 1.4M1.5 12h2M20.5 12h2M4.6 19.4 6 18M18 6l1.4-1.4" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}
