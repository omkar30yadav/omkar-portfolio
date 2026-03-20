import { useState, useEffect, useRef } from "react";
import {
  PERSONAL, EDUCATION, PROJECTS, SKILLS,
  TAG_META, STACKS, TYPEWRITER_ROLES, FILTERS, NAV,
} from "./data.js";
import { S } from "./styles.js";

/* ─── Main Component ────────────────────────────────────────────────────── */

export default function Portfolio() {
  const [filter, setFilter] = useState("All");
  const [activeNav, setActiveNav] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [typed, setTyped] = useState("");
  const [form, setForm] = useState({ name: "", email: "", msg: "" });
  const [sent, setSent] = useState(false);
  const [animate, setAnimate] = useState(false);

  /* Typewriter effect */
  const rIdx = useRef(0), cIdx = useRef(0), del = useRef(false);
  useEffect(() => {
    let t;
    const tick = () => {
      const word = TYPEWRITER_ROLES[rIdx.current];
      if (!del.current) {
        setTyped(word.slice(0, ++cIdx.current));
        if (cIdx.current === word.length) {
          del.current = true;
          t = setTimeout(tick, 1800);
          return;
        }
      } else {
        setTyped(word.slice(0, --cIdx.current));
        if (cIdx.current === 0) {
          del.current = false;
          rIdx.current = (rIdx.current + 1) % TYPEWRITER_ROLES.length;
        }
      }
      t = setTimeout(tick, del.current ? 55 : 95);
    };
    t = setTimeout(tick, 500);
    return () => clearTimeout(t);
  }, []);

  /* Skill bar scroll trigger */
  useEffect(() => {
    const ob = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setAnimate(true); },
      { threshold: 0.15 }
    );
    const el = document.getElementById("skills");
    if (el) ob.observe(el);
    return () => ob.disconnect();
  }, []);

  const scrollTo = (id) => {
    setActiveNav(id);
    setMenuOpen(false);
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", msg: "" });
    setTimeout(() => setSent(false), 3500);
  };

  const shown = filter === "All" ? PROJECTS : PROJECTS.filter(p => p.tag === filter);

  return (
    <div style={S.page}>

      {/* ── NAV ── */}
      <nav style={S.nav}>
        <span style={S.logo}>
          {PERSONAL.name.split(" ")[0]}
          <span style={S.logoDot}>.</span>
        </span>

        <ul style={{ ...S.navList, ...(menuOpen ? S.navMobile : {}) }}>
          {NAV.map(n => (
            <li key={n}>
              <button
                onClick={() => scrollTo(n)}
                style={{ ...S.navBtn, ...(activeNav === n ? S.navOn : {}) }}
              >
                {n}
              </button>
            </li>
          ))}
        </ul>

        <button style={S.burger} onClick={() => setMenuOpen(o => !o)}>
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* ── HERO ── */}
      <section id="home" style={S.hero}>
        <div style={S.heroLeft}>
          <span style={S.eyebrow}>👋 Hello, I'm</span>

          <h1 style={S.h1}>
            {PERSONAL.name.split(" ")[0]}<br />
            <span style={S.heroAccent}>{PERSONAL.name.split(" ")[1]}</span>
          </h1>

          <div style={S.typedLine}>
            <span>{typed}</span>
            <span style={S.cursor}>|</span>
          </div>

          <p style={S.heroDesc}>
            I build websites and web applications using WordPress, Django, Java,
            and the MERN stack — turning ideas into clean, functional digital experiences.
          </p>

          <div style={S.ctaRow}>
            <button className="btn-fill" onClick={() => scrollTo("Projects")}>View My Work</button>
            <button className="btn-line" onClick={() => scrollTo("Contact")}>Hire Me</button>
          </div>

          <div style={S.stackRow}>
            {["WordPress", "Django", "Java", "MERN Stack"].map(s => (
              <span
                key={s}
                style={{ ...S.stackBadge, background: TAG_META[s].bg, color: TAG_META[s].color }}
              >
                <span style={{ ...S.stackDot, background: TAG_META[s].dot }} />
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Avatar */}
        <div style={S.heroRight}>
          <div style={S.blob} />
          <div style={S.avaRing}>
            <img src="/avatar.png" alt="Omkar Yadav" style={{ width: "100%", height: "100%", borderRadius: "50%", objectFit: "cover" }} />
          </div>
          <div style={S.floatBadge(8, null, null, -10, "#1a6c8c")}>WordPress ✓</div>
          <div style={S.floatBadge(null, 14, null, -14, "#a04800")}>Django ✓</div>
          <div style={S.floatBadge(null, 10, -14, null, "#8a5a00")}>Java ✓</div>
          <div style={S.floatBadge(12, null, -10, null, "#2a7a2a")}>MERN ✓</div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" style={S.sectionAlt}>
        <div style={S.inner}>
          <SectionTitle pre="About" main="Me" />

          <div style={S.aboutGrid}>
            <div>
              {PERSONAL.bio.map((para, i) => (
                <p key={i} style={{ ...S.body, ...(i > 0 ? { marginTop: 16 } : {}) }}>
                  {i === 0
                    ? <><strong>{PERSONAL.name}</strong>{para.replace("I'm Omkar Yadav,", ",")}</>
                    : para
                  }
                </p>
              ))}

              {/* Education */}
              <div style={S.eduWrap}>
                <p style={S.eduHeading}>Education</p>
                {EDUCATION.map(e => (
                  <div key={e.degree} style={S.eduRow}>
                    <span style={S.eduIcon}>🎓</span>
                    <div>
                      <p style={S.eduDeg}>{e.degree}</p>
                      <p style={S.eduInst}>{e.inst} · {e.years}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stack cards */}
            <div style={S.stackCards}>
              {STACKS.map(st => (
                <div key={st.name} className="scard" style={S.sCard}>
                  <span style={S.sCardIcon}>{st.icon}</span>
                  <div>
                    <p style={S.sCardName}>{st.name}</p>
                    <p style={S.sCardDesc}>{st.desc}</p>
                  </div>
                  <span style={{ ...S.sCardDot, background: TAG_META[st.name].dot }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="projects" style={S.sectionWhite}>
        <div style={S.inner}>
          <SectionTitle pre="My" main="Projects" />

          <div style={S.filterRow}>
            {FILTERS.map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                style={{ ...S.fBtn, ...(filter === f ? S.fOn : {}) }}
              >
                {f}
              </button>
            ))}
          </div>

          <div style={S.pGrid}>
            {shown.map((p, i) => {
              const m = TAG_META[p.tag];
              return (
                <div
                  key={p.id}
                  className="pcard"
                  style={{ ...S.pCard, animationDelay: `${i * 0.08}s` }}
                >
                  <div style={S.pCardTop}>
                    <span style={{ ...S.pTag, background: m.bg, color: m.color }}>
                      <span style={{ ...S.pTagDot, background: m.dot }} />
                      {p.tag}
                    </span>
                    <span style={S.pYear}>{p.year}</span>
                  </div>

                  <p style={S.pType}>{p.type}</p>
                  <h3 style={S.pTitle}>{p.title}</h3>
                  <p style={S.pDesc}>{p.desc}</p>

                  <div style={S.techRow}>
                    {p.tech.map(t => (
                      <span key={t} style={S.techBadge}>{t}</span>
                    ))}
                  </div>

                  <a href={p.link} style={S.pLink}>View project →</a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section id="skills" style={S.sectionAlt}>
        <div style={S.inner}>
          <SectionTitle pre="My" main="Skills" />

          <div style={S.skillGrid}>
            {SKILLS.map((sk, i) => (
              <div key={sk.name} style={S.skillCard}>
                <div style={S.skillTop}>
                  <span style={S.skillName}>{sk.name}</span>
                  <span style={S.skillPct}>{sk.pct}%</span>
                </div>
                <div style={S.barBg}>
                  <div
                    style={{
                      ...S.barFill,
                      width: animate ? `${sk.pct}%` : "0%",
                      transitionDelay: `${i * 0.07}s`,
                    }}
                  />
                </div>
                <span style={S.skillCat}>{sk.cat}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" style={S.sectionWhite}>
        <div style={S.inner}>
          <SectionTitle pre="Get In" main="Touch" />

          <div style={S.contactGrid}>
            <div>
              <h3 style={S.contactH}>Let's build something together</h3>
              <p style={S.body}>
                Got a project in mind, or looking for a web developer? I'd love to hear from you.
              </p>

              <div style={S.cList}>
                {[
                  ["📧", PERSONAL.email],
                  ["📞", PERSONAL.phone],
                  ["📍", PERSONAL.location],
                  ["💼", PERSONAL.availability],
                ].map(([ic, v]) => (
                  <div key={v} style={S.cRow}>
                    <span>{ic}</span>
                    <span style={S.cVal}>{v}</span>
                  </div>
                ))}
              </div>

              <div style={S.socials}>
                {[
                  ["GitHub", PERSONAL.github],
                  ["LinkedIn", PERSONAL.linkedin],
                  ["Twitter", PERSONAL.twitter],
                ].map(([label, href]) => (
                  <a key={label} href={href} target="_blank" rel="noreferrer"
                    className="soc-link" style={S.socLink}>
                    {label}
                  </a>
                ))}
              </div>
            </div>

            <form onSubmit={submit} style={S.form}>
              {sent && (
                <div style={S.successBox}>✅ Sent! I'll get back to you soon.</div>
              )}

              <div style={S.twoCol}>
                <label style={S.label}>Name
                  <input
                    style={S.input} required placeholder="Your name"
                    value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                  />
                </label>
                <label style={S.label}>Email
                  <input
                    style={S.input} type="email" required placeholder="you@email.com"
                    value={form.email}
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                  />
                </label>
              </div>

              <label style={S.label}>Message
                <textarea
                  style={{ ...S.input, resize: "vertical", minHeight: 130 }} required
                  placeholder="Tell me about your project…"
                  value={form.msg}
                  onChange={e => setForm(f => ({ ...f, msg: e.target.value }))}
                />
              </label>

              <button type="submit" className="btn-fill" style={{ alignSelf: "flex-start" }}>
                Send Message →
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={S.footer}>
        <span style={S.footTxt}>© {new Date().getFullYear()} {PERSONAL.name} · Mumbai, India</span>
        <span style={S.footTxt}>Built with React 🤍</span>
      </footer>

    </div>
  );
}

/* ─── Section Title Helper ──────────────────────────────────────────────── */

function SectionTitle({ pre, main }) {
  return (
    <div style={{ marginBottom: 52 }}>
      <p style={S.sPre}>{pre}</p>
      <h2 style={S.sMain}>{main}</h2>
      <div style={S.sLine} />
    </div>
  );
}
