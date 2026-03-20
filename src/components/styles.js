// ─── Inline Style Objects ─────────────────────────────────────────────────────

export const S = {
  page: { fontFamily: "'DM Sans', sans-serif", background: "#fff", color: "#1a1a1a" },

  /* ── Nav ── */
  nav: {
    position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
    display: "flex", alignItems: "center", justifyContent: "space-between",
    padding: "0 6%", height: 60,
    background: "rgba(255,255,255,.95)", backdropFilter: "blur(10px)",
    borderBottom: "1px solid #eee",
  },
  logo:      { fontFamily: "'Playfair Display', serif", fontSize: 21, fontWeight: 700 },
  logoDot:   { color: "#e05c2a" },
  navList:   { display: "flex", gap: 2, listStyle: "none" },
  navMobile: {
    display: "flex", flexDirection: "column", position: "fixed",
    top: 60, left: 0, right: 0, background: "#fff",
    borderBottom: "1px solid #eee", padding: "14px 6%", zIndex: 99, gap: 4,
  },
  navBtn: {
    background: "none", border: "none", color: "#666",
    fontSize: 14, fontWeight: 500, padding: "7px 13px",
    borderRadius: 5, cursor: "pointer", transition: "all .15s",
  },
  navOn:  { color: "#1a1a1a", background: "#f3f3f1", fontWeight: 600 },
  burger: { display: "none", background: "none", border: "none", fontSize: 20, cursor: "pointer" },

  /* ── Hero ── */
  hero: {
    minHeight: "100vh", display: "flex", alignItems: "center",
    justifyContent: "space-between", flexWrap: "wrap",
    padding: "110px 6% 80px", gap: 40,
  },
  heroLeft:   { flex: "1 1 340px", maxWidth: 560 },
  eyebrow: {
    display: "inline-block", background: "#fef3ee", color: "#e05c2a",
    fontSize: 13, fontWeight: 600, padding: "6px 14px",
    borderRadius: 20, marginBottom: 20, letterSpacing: ".3px",
  },
  h1: {
    fontFamily: "'Playfair Display', serif",
    fontSize: "clamp(44px,7vw,72px)", fontWeight: 800, lineHeight: 1.05, marginBottom: 16,
  },
  heroAccent: { display: "block", color: "#e05c2a" },
  typedLine:  { fontSize: 19, fontWeight: 500, color: "#555", marginBottom: 18, minHeight: 30 },
  cursor:     { animation: "blink 1s step-end infinite", fontWeight: 300, marginLeft: 1 },
  heroDesc:   { fontSize: 16, lineHeight: 1.75, color: "#666", marginBottom: 30, maxWidth: 460 },
  ctaRow:     { display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 28 },
  stackRow:   { display: "flex", gap: 8, flexWrap: "wrap" },
  stackBadge: {
    display: "inline-flex", alignItems: "center", gap: 6,
    fontSize: 12, fontWeight: 600, padding: "5px 12px",
    borderRadius: 20, border: "1px solid transparent",
  },
  stackDot: { width: 6, height: 6, borderRadius: "50%", flexShrink: 0 },

  /* ── Hero visual ── */
  heroRight: { flex: "0 0 auto", position: "relative", width: 300, height: 300 },
  blob: {
    position: "absolute", inset: 0,
    borderRadius: "42% 58% 54% 46% / 46% 40% 60% 54%",
    background: "#fef3ee",
  },
  avaRing: {
    position: "absolute", top: "50%", left: "50%",
    transform: "translate(-50%,-50%)",
    width: 150, height: 150, borderRadius: "50%",
    background: "#fff", border: "3px solid #fde0d0",
    display: "flex", alignItems: "center", justifyContent: "center",
    boxShadow: "0 10px 36px rgba(224,92,42,.14)",
    animation: "floatY 4s ease-in-out infinite",
  },
  avaTxt: { fontFamily: "'Playfair Display', serif", fontSize: 44, fontWeight: 700, color: "#e05c2a" },
  floatBadge: (top, bottom, left, right, color) => ({
    position: "absolute",
    ...(top    !== null ? { top }    : {}),
    ...(bottom !== null ? { bottom } : {}),
    ...(left   !== null ? { left }   : {}),
    ...(right  !== null ? { right }  : {}),
    background: "#fff", border: "1px solid #eee", borderRadius: 20,
    fontSize: 11, fontWeight: 600, color, padding: "5px 11px",
    boxShadow: "0 4px 12px rgba(0,0,0,.07)",
  }),

  /* ── Layout ── */
  sectionWhite: { padding: "88px 0", background: "#fff"     },
  sectionAlt:   { padding: "88px 0", background: "#f9f9f7"  },
  inner:        { maxWidth: 1100, margin: "0 auto", padding: "0 6%" },
  sPre:  { fontSize: 12, letterSpacing: "2px", textTransform: "uppercase", color: "#e05c2a", fontWeight: 600, marginBottom: 6 },
  sMain: { fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px,4vw,42px)", fontWeight: 700, marginBottom: 12 },
  sLine: { width: 40, height: 3, background: "#e05c2a", borderRadius: 2 },

  /* ── About ── */
  aboutGrid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "start" },
  body:      { fontSize: 16, lineHeight: 1.8, color: "#555" },
  eduWrap:    { marginTop: 28, paddingTop: 24, borderTop: "1px solid #efefed" },
  eduHeading: { fontSize: 11, letterSpacing: "1.5px", textTransform: "uppercase", color: "#e05c2a", fontWeight: 600, marginBottom: 16 },
  eduRow:     { display: "flex", gap: 12, marginBottom: 14, alignItems: "flex-start" },
  eduIcon:    { fontSize: 18, marginTop: 1 },
  eduDeg:     { fontSize: 14, fontWeight: 600, color: "#1a1a1a" },
  eduInst:    { fontSize: 13, color: "#888", marginTop: 2 },
  stackCards: { display: "flex", flexDirection: "column", gap: 12 },
  sCard: {
    display: "flex", alignItems: "center", gap: 14,
    background: "#fff", border: "1px solid #efefed",
    borderRadius: 10, padding: "14px 16px", position: "relative", overflow: "hidden",
  },
  sCardIcon: { fontSize: 24, flexShrink: 0 },
  sCardName: { fontSize: 14, fontWeight: 600, marginBottom: 2 },
  sCardDesc: { fontSize: 12, color: "#888" },
  sCardDot:  { position: "absolute", top: 0, left: 0, width: 3, height: "100%", borderRadius: "10px 0 0 10px" },

  /* ── Projects ── */
  filterRow: { display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 36 },
  fBtn: {
    background: "#f3f3f1", border: "1px solid #e5e5e5", color: "#666",
    fontSize: 13, fontWeight: 500, padding: "8px 18px",
    borderRadius: 20, cursor: "pointer", transition: "all .15s",
  },
  fOn:   { background: "#1a1a1a", color: "#fff", border: "1px solid #1a1a1a" },
  pGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(270px,1fr))", gap: 22 },
  pCard: {
    background: "#fff", border: "1px solid #ebebeb",
    borderRadius: 12, padding: "24px", display: "flex",
    flexDirection: "column", gap: 10, cursor: "default",
  },
  pCardTop: { display: "flex", justifyContent: "space-between", alignItems: "center" },
  pTag:     { display: "inline-flex", alignItems: "center", gap: 5, fontSize: 12, fontWeight: 600, padding: "4px 10px", borderRadius: 20 },
  pTagDot:  { width: 5, height: 5, borderRadius: "50%", flexShrink: 0 },
  pYear:    { fontSize: 12, color: "#bbb", fontWeight: 500 },
  pType:    { fontSize: 11, color: "#bbb", fontWeight: 500, textTransform: "uppercase", letterSpacing: ".7px" },
  pTitle:   { fontFamily: "'Playfair Display', serif", fontSize: 19, fontWeight: 700, lineHeight: 1.3 },
  pDesc:    { fontSize: 14, lineHeight: 1.7, color: "#666", flexGrow: 1 },
  techRow:  { display: "flex", flexWrap: "wrap", gap: 5 },
  techBadge:{ background: "#f3f3f1", color: "#555", fontSize: 11, fontWeight: 500, padding: "3px 8px", borderRadius: 4, border: "1px solid #e8e8e8" },
  pLink:    { color: "#e05c2a", fontSize: 13, fontWeight: 600, textDecoration: "none", marginTop: 4 },

  /* ── Skills ── */
  skillGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))", gap: 16 },
  skillCard: { background: "#fff", border: "1px solid #efefed", borderRadius: 10, padding: "16px 20px" },
  skillTop:  { display: "flex", justifyContent: "space-between", marginBottom: 10 },
  skillName: { fontSize: 14, fontWeight: 600 },
  skillPct:  { fontSize: 13, color: "#e05c2a", fontWeight: 600 },
  barBg:     { height: 5, background: "#f0f0ee", borderRadius: 3, overflow: "hidden", marginBottom: 7 },
  barFill:   { height: "100%", background: "#e05c2a", borderRadius: 3, transition: "width 1s cubic-bezier(.4,0,.2,1)" },
  skillCat:  { fontSize: 11, color: "#bbb", fontWeight: 500, textTransform: "uppercase", letterSpacing: ".7px" },

  /* ── Contact ── */
  contactGrid: { display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 56, alignItems: "start" },
  contactH:    { fontFamily: "'Playfair Display', serif", fontSize: 24, fontWeight: 700, marginBottom: 12 },
  cList:       { display: "flex", flexDirection: "column", gap: 13, margin: "22px 0" },
  cRow:        { display: "flex", alignItems: "flex-start", gap: 11, fontSize: 14 },
  cVal:        { color: "#555" },
  socials:     { display: "flex", gap: 20 },
  socLink:     { fontSize: 13, fontWeight: 600, color: "#888", textDecoration: "none" },
  form:        { display: "flex", flexDirection: "column", gap: 16 },
  twoCol:      { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 },
  label:       { display: "flex", flexDirection: "column", gap: 6, fontSize: 13, fontWeight: 600, color: "#444" },
  input: {
    marginTop: 2, background: "#fff", border: "1.5px solid #e0e0e0",
    borderRadius: 7, padding: "11px 13px", fontSize: 14, color: "#1a1a1a",
    transition: "border-color .15s",
  },
  successBox: {
    background: "#eef9ee", border: "1px solid #bbe0bb",
    borderRadius: 7, padding: "11px 14px", color: "#2d7a2d", fontSize: 14,
  },

  /* ── Footer ── */
  footer: {
    borderTop: "1px solid #eee", padding: "22px 6%",
    display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8,
  },
  footTxt: { fontSize: 13, color: "#bbb" },
};
