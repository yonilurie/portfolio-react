import "./App.css";
import { useState, useEffect, useRef } from "react";

const SUMMARY = "2+ years building client-facing products in financial environments. Full-stack depth paired with partner onboarding, SDK documentation, and relationship management";

const STATS = [
  { value: "3+", label: "Years Experience", description: "Building production software since 2022 across university systems, a coding bootcamp, and fintech." },
  { value: "20+", label: "Integration Partners", description: "Primary technical escalation for 20+ external partners at Invent.us, resolving 100+ developer tickets." },
  { value: "Full-Stack", label: "Comprehensive Skills", description: "React/TypeScript frontends, Node.js & ASP.NET Core APIs, and PostgreSQL — end to end." },
  { value: "Fintech", label: "Domain Experience", description: "UW Finance ($60M+ scholarship platform) and Invent.us (serving $8B+ AUM clients)." },
];

const JOBS = [
  { role: "Software Engineer", company: "Invent.us", dates: "2024 – Present" },
  { role: "Frontend Development Intern", company: "Invent.us", dates: "2024" },
  { role: "Full-Stack Software Developer", company: "University of Washington Finance", dates: "2023 – 2024" },
  { role: "Student", company: "App Academy", dates: "2023" },
  { role: "Student", company: "University of Washington", dates: "2022" },
];

const SKILLS = [
  { category: "Frontend", items: ["React", "TypeScript", "Redux", "Storybook", "Tailwind", "HTML", "CSS"] },
  { category: "Backend & APIs", items: ["Node.js", "Express.js", "ASP.NET Core", "Flask"] },
  { category: "Data", items: ["PostgreSQL", "SQLAlchemy", "Sequelize", "SSMS"] },
  { category: "Tools", items: ["Claude Code", "Git", "GitLab", "Jira", "Postman", "Figma"] },
  { category: "Languages", items: ["JavaScript", "TypeScript", "C#", "Python"] },
];

function App() {
  const [showContact, setShowContact] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [displayedSummary, setDisplayedSummary] = useState("");
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme = isDark ? "dark" : "light";
  }, [isDark]);

  useEffect(() => {
    const FIRST_SENTENCE_END = SUMMARY.indexOf(".") + 1;
    let cancelled = false;
    let timeoutId: ReturnType<typeof setTimeout>;

    const start = setTimeout(() => {
      let i = 0;

      function typeNext() {
        if (cancelled) return;
        i++;
        setDisplayedSummary(SUMMARY.slice(0, i));
        if (i >= SUMMARY.length) return;
        timeoutId = setTimeout(typeNext, i === FIRST_SENTENCE_END ? 650 : 16);
      }

      timeoutId = setTimeout(typeNext, 16);
    }, 1200);

    return () => {
      cancelled = true;
      clearTimeout(start);
      clearTimeout(timeoutId);
    };
  }, []);

  const gradRef = useRef<HTMLSpanElement>(null);
  const target = useRef({ x: 50, y: 50 });
  const current = useRef({ x: 50, y: 50 });
  const velocity = useRef({ x: 0, y: 0 });
  const rafId = useRef<number | null>(null);
  const hovering = useRef(false);

  const STIFFNESS = 0.1;
  const DAMPING = 0.78;
  const MIN_SPEED = 0.04;

useEffect(() => {
    const updateOpacities = () => {
      const sections = document.querySelectorAll<HTMLElement>(".page-section");
      const fadeRange = window.innerHeight * 0.7;
      document.querySelectorAll<HTMLElement>(".shape-group").forEach((el, i) => {
        const section = sections[i];
        if (!section) return;
        const rect = section.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        const dist = Math.abs(center - window.innerHeight / 2);
        el.style.opacity = String(Math.max(0, 1 - dist / fadeRange));
      });
    };

    const onScroll = () => {
      setScrolled(window.pageYOffset > 20);
      updateOpacities();
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    updateOpacities();

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  function tick() {
    if (hovering.current) {
      velocity.current.x = (velocity.current.x + (target.current.x - current.current.x) * STIFFNESS) * DAMPING;
      velocity.current.y = (velocity.current.y + (target.current.y - current.current.y) * STIFFNESS) * DAMPING;
    } else {
      velocity.current.x *= DAMPING;
      velocity.current.y *= DAMPING;
    }

    current.current.x += velocity.current.x;
    current.current.y += velocity.current.y;

    if (gradRef.current) {
      gradRef.current.style.background = `radial-gradient(circle at ${current.current.x}% ${current.current.y}%, var(--green) 0%, var(--text) 75%)`;
      gradRef.current.style.setProperty("-webkit-background-clip", "text");
      gradRef.current.style.backgroundClip = "text";
    }

    const stillMoving = Math.abs(velocity.current.x) > MIN_SPEED || Math.abs(velocity.current.y) > MIN_SPEED;
    if (hovering.current || stillMoving) {
      rafId.current = requestAnimationFrame(tick);
    } else {
      rafId.current = null;
    }
  }

  function handleNameMouseMove(e: React.MouseEvent<HTMLHeadingElement>) {
    const r = e.currentTarget.getBoundingClientRect();
    target.current.x = ((e.clientX - r.left) / r.width) * 100;
    target.current.y = ((e.clientY - r.top) / r.height) * 100;
  }

  function handleNameMouseEnter() {
    hovering.current = true;
    if (!rafId.current) rafId.current = requestAnimationFrame(tick);
  }

  function handleNameMouseLeave() {
    hovering.current = false;
    // RAF keeps running until velocity decays naturally
  }

  function openContact() {
    setShowContact(true);
    document.documentElement.classList.add("disable-scroll");
    document.body.classList.add("disable-scroll");
  }

  function closeContact() {
    document.getElementById("contact")?.classList.add("fade-out");
    document.getElementById("contact-container")?.classList.add("fade-out");
    document.documentElement.classList.remove("disable-scroll");
    document.body.classList.remove("disable-scroll");
    const t = setTimeout(() => setShowContact(false), 400);
    return () => clearTimeout(t);
  }

  return (
    <div className="App" aria-hidden={showContact}>
      {showContact && <Contact closeContact={closeContact} />}
      <ThemeToggle isDark={isDark} onToggle={() => setIsDark(d => !d)} />

      <div className="bg-shapes" aria-hidden="true">
        <div className="shape-group" data-section-shapes="0">
          <div className="shape s0-a" /><div className="shape s0-b" /><div className="shape s0-c" />
        </div>
        <div className="shape-group" data-section-shapes="1">
          <div className="shape s1-a" /><div className="shape s1-b" /><div className="shape s1-c" />
        </div>
        <div className="shape-group" data-section-shapes="2">
          <div className="shape s2-a" /><div className="shape s2-b" /><div className="shape s2-c" />
        </div>
        <div className="shape-group" data-section-shapes="3">
          <div className="shape s3-a" /><div className="shape s3-b" /><div className="shape s3-c" />
        </div>
      </div>

      <div className={`nav-wrap ${scrolled ? "nav-wrap--scrolled" : ""}`}>
        <nav className="nav">
          <a href="https://github.com/yonilurie" target="_blank" referrerPolicy="no-referrer" aria-label="GitHub">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/yonilurie/" target="_blank" referrerPolicy="no-referrer" aria-label="LinkedIn">
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
          <a href="YonatanLurieResume.pdf" target="_blank" referrerPolicy="no-referrer" className="nav-text-link">
            Resume
          </a>
          <button onClick={openContact} className="nav-text-link">Contact</button>
        </nav>
      </div>

      <main className="page-wrap">
        <div className="page-section page-section">
          <section className="hero">
<h1
              className="hero-name"
              onMouseMove={handleNameMouseMove}
              onMouseEnter={handleNameMouseEnter}
              onMouseLeave={handleNameMouseLeave}
            >
              <span className="name-base">Yonatan Lurie</span>
              <span className="name-gradient" aria-hidden="true" ref={gradRef}>Yonatan Lurie</span>
            </h1>
            <p className={`hero-summary${displayedSummary.length > 0 ? " typing-active" : ""}`}>
              {displayedSummary}
            </p>
          </section>
        </div>

        <div className="page-section page-section">
          <section className="stats-section" aria-label="Highlights">
            {STATS.map((s) => (
              <div className="stat-card-wrap" key={s.label}>
                <div className="stat-card">
                  <div className="stat-card-front">
                    <span className="stat-value">{s.value}</span>
                    <span className="stat-label">{s.label}</span>
                  </div>
                  <p className="stat-desc">{s.description}</p>
                </div>
              </div>
            ))}
          </section>
        </div>

        <div className="page-section">
          <section className="section experience-section">
            <h2 className="section-title">Experience</h2>
            <div className="timeline">
              {JOBS.map((job) => (
                <div className="timeline-item" key={job.role + job.company}>
                  <div className="timeline-card">
                    <div className="timeline-role">{job.role}</div>
                    <div className="timeline-company">{job.company}</div>
                    <div className="timeline-dates">{job.dates}</div>
                  </div>
                  <div className="timeline-node">
                    <div className="timeline-dot" />
                  </div>
                  <div className="timeline-spacer" />
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="page-section">
          <section className="section skills-section">
            <h2 className="section-title">Skills</h2>
            <div className="skills-grid">
              {SKILLS.map((group) => (
                <div className="skill-group" key={group.category}>
                  <span className="skill-category">{group.category}</span>
                  <div className="skill-pills">
                    {group.items.map((item) => (
                      <span className="pill" key={item}>{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;

interface ThemeToggleProps {
  readonly isDark: boolean;
  readonly onToggle: () => void;
}

function ThemeToggle({ isDark, onToggle }: ThemeToggleProps) {
  return (
    <button
      className={`theme-toggle${isDark ? " theme-toggle--dark" : ""}`}
      onClick={onToggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <span className="theme-toggle-thumb" />
    </button>
  );
}

interface ContactProps {
  readonly closeContact: () => void;
}

function Contact({ closeContact }: ContactProps) {
  return (
    <div className="contact-overlay" id="contact-container">
      <div className="contact-card neu-raised" id="contact">
        <button className="close-btn" onClick={closeContact} aria-label="Close">✕</button>
        <h2 className="contact-title">Get in touch</h2>
        <form action="https://formspree.io/f/xgeqapga" method="POST">
          <label htmlFor="email">Your email</label>
          <input type="email" name="email" id="email" required />
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" required></textarea>
          <button type="submit" className="send-btn">Send</button>
        </form>
      </div>
    </div>
  );
}
