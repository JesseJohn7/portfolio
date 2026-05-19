"use client";

import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FbIcon, TwIcon } from "./Svgs";

/* ─────────────────────────────────────────
   DATA
───────────────────────────────────────── */
const PROJECTS = [
  { title: "Flexvest", desc: "Save in stablecoins to beat inflation and excessive bank charges.", image: "/images/flex.png", link: "https://flexvest.vercel.app/", tag: "Blockchain · Web3" },
  { title: "Clipio", desc: "Download TikTok, IG, X, Facebook & YouTube videos in full quality.", image: "/images/clipio.png", link: "https://clipio-tau.vercel.app/", tag: "SaaS · Tool" },
  { title: "Sabiskill", desc: "Graduates learn real-world skills through curated YouTube roadmaps.", image: "/images/sabi.png", link: "https://sabiskill.vercel.app/", tag: "EdTech" },
  { title: "Readify", desc: "AI-powered README generator for GitHub projects.", image: "/images/readify.png", link: "https://readify-delta.vercel.app/", tag: "AI · Developer Tool" },
  { title: "Mojito", desc: "Cocktail recipes and ingredients browser.", image: "/images/Mojito.png", link: "https://mojito-dusky.vercel.app/", tag: "UI · Design" },
  { title: "Gabriel Adikwu Chambers", desc: "Law firm website based in Yola, Nigeria.", image: "/images/adikwu.png", link: "https://www.gabrieladikwuchambers.com/", tag: "Client Work" },
  { title: "Moviemate", desc: "Movie discovery app with search and personalised recommendations.", image: "/images/moviemate.png", link: "https://moviemate-blue.vercel.app/", tag: "Entertainment" },
  { title: "Foodhub", desc: "Connects users with local restaurants and food providers.", image: "/images/food.png", link: "https://jessejohn7.github.io/Foodhub/", tag: "Marketplace" },
  { title: "CGPA Calculator", desc: "Sleek GPA calculator for students with a modern interface.", image: "/images/Gpa-cal.png", link: "https://gpa-calculator-tau-eight.vercel.app/", tag: "EdTech · Utility" },
  { title: "Naija Codes", desc: "Instantly find all Nigerian network and bank USSD codes.", image: "/images/Naijacodes.png", link: "https://naija-codes.vercel.app/", tag: "Utility · Nigeria" },
  { title: "Crypto Tracker", desc: "Real-time cryptocurrency prices via CoinGecko API.", image: "/images/cryptotrack.png", link: "https://v0-crypto-price-tracker-dusky.vercel.app/", tag: "Blockchain · Finance" },
  { title: "Lagos Health Navigator", desc: "Healthcare platform connecting patients with Lagos medical facilities.", image: "/images/lagos.png", link: "https://lagos-health-navigator-phi.vercel.app/", tag: "HealthTech" },
  { title: "Opencut", desc: "Edit and share videos online with ease.", image: "/images/opencut.png", link: "https://opencut.app/", tag: "SaaS · Video" },
  { title: "Tic-Tac-Toe", desc: "Classic two-player Tic Tac Toe game.", image: "/images/tictac.png", link: "https://jessejohn7.github.io/Tic-tac-toe/", tag: "Game · Fun" },
  { title: "Magna Curia Chambers", desc: "Law students society site — Obafemi Awolowo University.", image: "/images/magna.png", link: "https://magna-curia.vercel.app/", tag: "Client Work" },
];

const FEATURED = PROJECTS.slice(0, 6);

const ROLES = ["Software Developer.", "Blockchain Builder.", "Tech Creator.", "CEO of Flexvest."];

/* ─────────────────────────────────────────
   TYPEWRITER
───────────────────────────────────────── */
function useTypewriter(words: string[], speed = 80, pause = 1800) {
  const [display, setDisplay] = useState("");
  const [wi, setWi] = useState(0);
  const [ci, setCi] = useState(0);
  const [del, setDel] = useState(false);
  useEffect(() => {
    const cur = words[wi];
    const delay = del ? speed / 2 : ci === cur.length ? pause : speed;
    const t = setTimeout(() => {
      if (!del && ci === cur.length) { setDel(true); }
      else if (del && ci === 0) { setDel(false); setWi(i => (i + 1) % words.length); }
      else { setCi(i => i + (del ? -1 : 1)); setDisplay(cur.slice(0, ci + (del ? -1 : 1))); }
    }, delay);
    return () => clearTimeout(t);
  });
  return display;
}

/* ─────────────────────────────────────────
   MAGNETIC TILT
───────────────────────────────────────── */
function Magnetic({ children, strength = 8 }: { children: React.ReactNode; strength?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0), y = useMotionValue(0);
  const rx = useSpring(useTransform(y, [-0.5, 0.5], [strength, -strength]), { stiffness: 300, damping: 30 });
  const ry = useSpring(useTransform(x, [-0.5, 0.5], [-strength, strength]), { stiffness: 300, damping: 30 });
  const onMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - r.left) / r.width - 0.5);
    y.set((e.clientY - r.top) / r.height - 0.5);
  };
  return (
    <motion.div ref={ref} style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
      onMouseMove={onMove} onMouseLeave={() => { x.set(0); y.set(0); }}>
      {children}
    </motion.div>
  );
}

/* ─────────────────────────────────────────
   FLOATING PROJECT CARD
───────────────────────────────────────── */
const FLOAT_OFFSETS = [
  { x: 0, y: 0, rot: -1.5 },
  { x: 0, y: 0, rot: 1.2 },
  { x: 0, y: 0, rot: -0.8 },
  { x: 0, y: 0, rot: 2 },
  { x: 0, y: 0, rot: -1.8 },
  { x: 0, y: 0, rot: 1 },
];

function ProjectCard({ p, i }: { p: typeof PROJECTS[0]; i: number }) {
  const off = FLOAT_OFFSETS[i % FLOAT_OFFSETS.length];
  return (
    <motion.a
      href={p.link} target="_blank" rel="noreferrer"
      className="proj-card"
      initial={{ opacity: 0, y: 60, rotate: off.rot }}
      whileInView={{ opacity: 1, y: 0, rotate: off.rot }}
      whileHover={{ y: -10, rotate: 0, scale: 1.02, zIndex: 10 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
      style={{ transformOrigin: "center bottom" }}
    >
      <div className="proj-img-wrap">
        <Image src={p.image} alt={p.title} fill sizes="400px" style={{ objectFit: "cover" }} />
        <div className="proj-overlay">
          <span className="proj-arrow">↗</span>
        </div>
      </div>
      <div className="proj-info">
        <span className="proj-tag">{p.tag}</span>
        <h3 className="proj-title">{p.title}</h3>
        <p className="proj-desc">{p.desc}</p>
      </div>
    </motion.a>
  );
}

/* ─────────────────────────────────────────
   MAIN PAGE
───────────────────────────────────────── */
export default function Portfolio() {
  const role = useTypewriter(ROLES);
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? PROJECTS : FEATURED;
  const [menuOpen, setMenuOpen] = useState(false);
  const [formState, setFormState] = useState({ name: "", email: "", msg: "" });

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Outfit:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --bg: #07080c;
          --bg2: #0d0f17;
          --surface: #12151f;
          --border: rgba(255,255,255,0.07);
          --border2: rgba(255,255,255,0.12);
          --accent: #e8ff47;
          --accent2: #00cfff;
          --text: #eceef5;
          --muted: #6a7391;
          --dim: #3a4060;
          --glow-y: rgba(232,255,71,0.15);
          --glow-c: rgba(0,207,255,0.12);
          --serif: 'Instrument Serif', serif;
          --sans: 'Outfit', sans-serif;
          --mono: 'JetBrains Mono', monospace;
        }

        html { scroll-behavior: smooth; }

        body {
          background: var(--bg);
          color: var(--text);
          font-family: var(--sans);
          -webkit-font-smoothing: antialiased;
        }

        /* ── NAV ── */
        .nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          display: flex; align-items: center; justify-content: space-between;
          padding: 0 clamp(1.5rem,5vw,4rem);
          height: 68px;
          background: rgba(7,8,12,0.8);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--border);
        }
        .nav-logo {
          font-family: var(--serif);
          font-size: 1.3rem;
          color: var(--text);
          text-decoration: none;
          letter-spacing: -0.01em;
        }
        .nav-logo em { font-style: italic; color: var(--accent); }
        .nav-links {
          display: flex; align-items: center; gap: 2rem;
          list-style: none;
        }
        .nav-links a {
          font-size: 0.85rem; color: var(--muted); text-decoration: none;
          font-weight: 500; letter-spacing: 0.02em;
          transition: color 0.2s;
        }
        .nav-links a:hover { color: var(--text); }
        .nav-cta {
          font-size: 0.82rem; font-weight: 600;
          padding: 9px 20px;
          background: var(--accent); color: #000;
          border-radius: 8px; text-decoration: none;
          transition: opacity 0.2s;
        }
        .nav-cta:hover { opacity: 0.85; }
        .nav-burger {
          display: none; flex-direction: column; gap: 5px;
          background: none; border: none; cursor: pointer; padding: 4px;
        }
        .nav-burger span {
          width: 22px; height: 2px; background: var(--text);
          border-radius: 2px; transition: all 0.3s;
        }

        /* ── MOBILE MENU ── */
        .mobile-menu {
          position: fixed; inset: 0; z-index: 99;
          background: var(--bg);
          display: flex; flex-direction: column; align-items: center; justify-content: center;
          gap: 2rem;
        }
        .mobile-menu a {
          font-size: 1.8rem; font-family: var(--serif); color: var(--text);
          text-decoration: none; transition: color 0.2s;
        }
        .mobile-menu a:hover { color: var(--accent); }

        /* ── SECTIONS common ── */
        section { padding: clamp(5rem,10vw,8rem) clamp(1.5rem,5vw,4rem); }
        .section-label {
          font-family: var(--mono); font-size: 0.7rem; letter-spacing: 0.2em;
          text-transform: uppercase; color: var(--muted);
          display: flex; align-items: center; gap: 10px; margin-bottom: 1rem;
        }
        .section-label::before {
          content: ''; width: 24px; height: 1px; background: var(--dim);
        }

        /* ── HERO ── */
        .hero {
          min-height: 100svh;
          display: flex; flex-direction: column; justify-content: flex-end;
          padding-top: 68px;
          position: relative; overflow: hidden;
        }
        .hero-noise {
          position: absolute; inset: 0; pointer-events: none;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
          opacity: 0.6;
        }
        .hero-orb {
          position: absolute; border-radius: 50%; filter: blur(100px); pointer-events: none;
        }
        .hero-orb-1 {
          width: 600px; height: 600px;
          background: radial-gradient(circle, rgba(232,255,71,0.08) 0%, transparent 65%);
          top: 10%; right: -100px;
          animation: orbFloat 14s ease-in-out infinite alternate;
        }
        .hero-orb-2 {
          width: 500px; height: 500px;
          background: radial-gradient(circle, rgba(0,207,255,0.07) 0%, transparent 65%);
          bottom: 0; left: -80px;
          animation: orbFloat 18s ease-in-out infinite alternate-reverse;
        }
        @keyframes orbFloat { from{transform:translate(0,0)} to{transform:translate(30px,-40px)} }

        .hero-inner {
          position: relative; z-index: 2;
          max-width: 1200px; margin: 0 auto; width: 100%;
          display: grid;
          grid-template-columns: 1fr 340px;
          gap: 3rem;
          align-items: flex-end;
          padding-bottom: clamp(3rem,6vw,5rem);
        }

        .hero-eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          font-family: var(--mono); font-size: 0.68rem;
          letter-spacing: 0.16em; text-transform: uppercase;
          color: var(--accent);
          background: rgba(232,255,71,0.06);
          border: 1px solid rgba(232,255,71,0.18);
          padding: 5px 12px; border-radius: 100px;
          margin-bottom: 1.6rem;
        }
        .hero-eyebrow::before {
          content: ''; width: 6px; height: 6px; border-radius: 50%;
          background: var(--accent); box-shadow: 0 0 8px var(--accent);
          animation: pulse 1.4s ease-in-out infinite;
        }
        @keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.3;transform:scale(0.8)} }

        .hero-headline {
          font-family: var(--serif);
          font-size: clamp(3.2rem, 8vw, 7rem);
          line-height: 1.0;
          letter-spacing: -0.02em;
          color: var(--text);
          margin-bottom: 0.6rem;
        }
        .hero-headline em {
          font-style: italic;
          background: linear-gradient(135deg, var(--accent) 0%, #aaff00 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }

        .hero-role {
          font-family: var(--mono); font-size: clamp(0.9rem, 1.8vw, 1.15rem);
          color: var(--muted); margin-bottom: 1.8rem; min-height: 1.8em;
        }
        .hero-cursor {
          display: inline-block; width: 2px; height: 1em;
          background: var(--accent2); margin-left: 2px; vertical-align: middle;
          animation: blink 0.9s step-end infinite;
        }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }

        .hero-bio {
          font-size: clamp(0.9rem,1.3vw,1.02rem); line-height: 1.8;
          color: var(--muted); max-width: 500px; margin-bottom: 2.4rem;
        }
        .hero-bio strong { color: var(--text); font-weight: 600; }

        .hero-actions {
          display: flex; align-items: center; gap: 1rem; flex-wrap: wrap;
        }
        .btn-y {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 13px 26px; background: var(--accent); color: #000;
          font-family: var(--sans); font-weight: 700; font-size: 0.88rem;
          border-radius: 9px; text-decoration: none;
          transition: box-shadow 0.25s, transform 0.15s;
        }
        .btn-y:hover { box-shadow: 0 0 40px var(--glow-y); transform: translateY(-2px); }
        .btn-outline {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 12px 22px; background: transparent; color: var(--text);
          font-family: var(--sans); font-weight: 600; font-size: 0.88rem;
          border-radius: 9px; text-decoration: none;
          border: 1px solid var(--border2);
          transition: border-color 0.2s, background 0.2s;
        }
        .btn-outline:hover { border-color: var(--accent2); background: rgba(0,207,255,0.05); }

        .hero-socials {
          display: flex; gap: 0.6rem; margin-left: auto;
        }
        .social-btn {
          width: 40px; height: 40px; border-radius: 9px;
          display: flex; align-items: center; justify-content: center;
          background: var(--surface); border: 1px solid var(--border);
          color: var(--muted); text-decoration: none;
          transition: border-color 0.2s, color 0.2s;
        }
        .social-btn:hover { border-color: var(--accent); color: var(--accent); }
        .social-btn svg { width: 17px; height: 17px; fill: currentColor; }

        /* ── HERO IMAGE ── */
        .hero-image-col {
          display: flex; justify-content: flex-end; align-items: flex-end;
        }
        .hero-img-wrap {
          position: relative; width: 300px; height: 380px;
          border-radius: 20px; overflow: hidden;
          border: 1px solid var(--border2);
          box-shadow: 0 40px 100px rgba(0,0,0,0.7), 0 0 0 1px rgba(232,255,71,0.05);
        }
        .hero-img-wrap img { object-fit: cover; }
        .hero-img-tag {
          position: absolute; top: 16px; right: 16px;
          background: rgba(7,8,12,0.85); border: 1px solid var(--border2);
          backdrop-filter: blur(12px);
          padding: 6px 12px; border-radius: 100px;
          font-family: var(--mono); font-size: 0.65rem;
          color: var(--accent); letter-spacing: 0.1em;
        }
        .hero-img-badge {
          position: absolute; bottom: 16px; left: 16px; right: 16px;
          background: rgba(13,15,23,0.92);
          backdrop-filter: blur(12px);
          border: 1px solid var(--border2);
          border-radius: 12px; padding: 10px 14px;
          display: flex; align-items: center; gap: 10px;
        }
        .badge-dot {
          width: 8px; height: 8px; border-radius: 50%; background: #4ade80; flex-shrink: 0;
          box-shadow: 0 0 8px rgba(74,222,128,0.6);
          animation: pulse 2s ease-in-out infinite;
        }
        .badge-txt { font-size: 0.75rem; }
        .badge-txt .b1 { color: var(--text); font-weight: 600; }
        .badge-txt .b2 { color: var(--muted); font-size: 0.68rem; font-family: var(--mono); }

        /* ── ABOUT ── */
        .about-section {
          background: var(--bg2);
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
        }
        .about-inner {
          max-width: 1200px; margin: 0 auto;
          display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center;
        }
        .about-heading {
          font-family: var(--serif);
          font-size: clamp(2rem, 4vw, 3.2rem);
          line-height: 1.15; letter-spacing: -0.02em;
          margin-bottom: 1.5rem;
        }
        .about-heading em { font-style: italic; color: var(--accent); }
        .about-body {
          font-size: 1rem; line-height: 1.85; color: var(--muted);
          display: flex; flex-direction: column; gap: 1rem;
        }
        .about-body strong { color: var(--text); }
        .about-stats {
          display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-top: 2rem;
        }
        .stat-box {
          background: var(--surface); border: 1px solid var(--border);
          border-radius: 14px; padding: 1.2rem 1.4rem;
        }
        .stat-box .sv { font-family: var(--serif); font-size: 2.4rem; color: var(--accent); line-height: 1; }
        .stat-box .sl { font-size: 0.75rem; color: var(--muted); font-family: var(--mono); margin-top: 4px; letter-spacing: 0.06em; }
        .about-skills { display: flex; flex-direction: column; gap: 1rem; }
        .skill-row { display: flex; align-items: center; gap: 1rem; }
        .skill-name { font-size: 0.82rem; color: var(--muted); font-family: var(--mono); width: 130px; flex-shrink: 0; }
        .skill-bar { flex: 1; height: 4px; background: var(--surface); border-radius: 4px; overflow: hidden; }
        .skill-fill { height: 100%; border-radius: 4px; background: linear-gradient(90deg, var(--accent2), var(--accent)); }
        .skill-pct { font-size: 0.72rem; color: var(--dim); font-family: var(--mono); width: 36px; text-align: right; }

        /* ── PROJECTS ── */
        .projects-section { max-width: 1200px; margin: 0 auto; }
        .projects-header {
          display: flex; align-items: flex-end; justify-content: space-between;
          margin-bottom: 3rem; gap: 1rem; flex-wrap: wrap;
        }
        .projects-heading {
          font-family: var(--serif);
          font-size: clamp(2.2rem, 5vw, 4rem);
          line-height: 1.1; letter-spacing: -0.02em;
        }
        .projects-heading em { font-style: italic; color: var(--accent2); }
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }
        .proj-card {
          display: block; text-decoration: none; color: inherit;
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 18px; overflow: hidden;
          cursor: pointer;
          transition: border-color 0.25s, box-shadow 0.25s;
          position: relative;
        }
        .proj-card:hover { border-color: var(--border2); box-shadow: 0 24px 60px rgba(0,0,0,0.5); }
        .proj-img-wrap {
          position: relative; height: 210px; overflow: hidden;
          background: var(--bg);
        }
        .proj-img-wrap img { object-fit: cover; transition: transform 0.5s ease; }
        .proj-card:hover .proj-img-wrap img { transform: scale(1.05); }
        .proj-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to bottom, transparent 40%, rgba(7,8,12,0.7) 100%);
          display: flex; align-items: flex-start; justify-content: flex-end;
          padding: 12px;
          opacity: 0; transition: opacity 0.25s;
        }
        .proj-card:hover .proj-overlay { opacity: 1; }
        .proj-arrow {
          width: 36px; height: 36px; border-radius: 50%;
          background: var(--accent); color: #000;
          display: flex; align-items: center; justify-content: center;
          font-size: 1rem; font-weight: 700;
        }
        .proj-info { padding: 1.1rem 1.3rem 1.4rem; }
        .proj-tag {
          font-family: var(--mono); font-size: 0.62rem;
          letter-spacing: 0.12em; text-transform: uppercase;
          color: var(--accent2); display: block; margin-bottom: 0.4rem;
        }
        .proj-title { font-size: 1.05rem; font-weight: 700; margin-bottom: 0.4rem; }
        .proj-desc { font-size: 0.82rem; color: var(--muted); line-height: 1.6; }

        .show-more-wrap { text-align: center; margin-top: 3rem; }

        /* ── WORK / EXPERIENCE ── */
        .work-section { background: var(--bg2); border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); }
        .work-inner { max-width: 1200px; margin: 0 auto; }
        .work-heading {
          font-family: var(--serif);
          font-size: clamp(2rem, 4vw, 3.5rem);
          letter-spacing: -0.02em; margin-bottom: 3rem;
        }
        .work-heading em { font-style: italic; color: var(--accent); }
        .timeline { display: flex; flex-direction: column; gap: 0; }
        .tl-item {
          display: grid; grid-template-columns: 200px 1fr;
          gap: 2rem; align-items: start;
          padding: 1.8rem 0;
          border-bottom: 1px solid var(--border);
          cursor: default;
        }
        .tl-item:last-child { border-bottom: none; }
        .tl-date { font-family: var(--mono); font-size: 0.72rem; color: var(--muted); letter-spacing: 0.06em; padding-top: 4px; }
        .tl-content { }
        .tl-role { font-size: 1.1rem; font-weight: 700; color: var(--text); margin-bottom: 4px; }
        .tl-company { font-size: 0.85rem; color: var(--accent2); font-weight: 600; margin-bottom: 8px; }
        .tl-desc { font-size: 0.85rem; color: var(--muted); line-height: 1.65; }

        /* ── CONTACT ── */
        .contact-section { }
        .contact-inner { max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: start; }
        .contact-heading {
          font-family: var(--serif);
          font-size: clamp(2.2rem, 5vw, 4rem);
          letter-spacing: -0.02em; line-height: 1.1; margin-bottom: 1.2rem;
        }
        .contact-heading em { font-style: italic; color: var(--accent); }
        .contact-sub { font-size: 1rem; color: var(--muted); line-height: 1.75; margin-bottom: 2.4rem; }
        .contact-links { display: flex; flex-direction: column; gap: 1rem; }
        .contact-link {
          display: flex; align-items: center; gap: 12px;
          font-size: 0.9rem; color: var(--text); text-decoration: none;
          padding: 14px 18px;
          background: var(--surface); border: 1px solid var(--border);
          border-radius: 12px; transition: border-color 0.2s, transform 0.2s;
        }
        .contact-link:hover { border-color: var(--accent); transform: translateX(4px); }
        .contact-link .cl-icon { font-size: 1.1rem; }
        .contact-link .cl-label { color: var(--muted); font-size: 0.75rem; font-family: var(--mono); }
        .contact-link .cl-val { font-weight: 600; }
        .contact-form { display: flex; flex-direction: column; gap: 1rem; }
        .form-field { display: flex; flex-direction: column; gap: 6px; }
        .form-label { font-size: 0.75rem; color: var(--muted); font-family: var(--mono); letter-spacing: 0.08em; text-transform: uppercase; }
        .form-input, .form-textarea {
          background: var(--surface); border: 1px solid var(--border);
          border-radius: 10px; color: var(--text); font-family: var(--sans);
          font-size: 0.9rem; padding: 12px 14px;
          outline: none; transition: border-color 0.2s;
          resize: none;
        }
        .form-input:focus, .form-textarea:focus { border-color: var(--accent2); }
        .form-textarea { min-height: 120px; }
        .form-submit {
          padding: 14px; background: var(--accent); color: #000;
          font-family: var(--sans); font-weight: 700; font-size: 0.9rem;
          border: none; border-radius: 10px; cursor: pointer;
          transition: opacity 0.2s, transform 0.15s;
        }
        .form-submit:hover { opacity: 0.88; transform: translateY(-2px); }

        /* ── FOOTER ── */
        .footer {
          border-top: 1px solid var(--border);
          padding: 2rem clamp(1.5rem,5vw,4rem);
          display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem;
        }
        .footer-copy { font-size: 0.78rem; color: var(--muted); font-family: var(--mono); }
        .footer-socials { display: flex; gap: 0.6rem; }

        /* ── RESPONSIVE ── */
        @media (max-width: 900px) {
          .nav-links, .nav-cta { display: none; }
          .nav-burger { display: flex; }
          .hero-inner { grid-template-columns: 1fr; }
          .hero-image-col { justify-content: center; order: -1; }
          .hero-img-wrap { width: 260px; height: 320px; }
          .hero-actions { justify-content: center; }
          .hero-socials { margin-left: 0; }
          .hero-eyebrow { display: block; text-align: center; width: fit-content; margin-left: auto; margin-right: auto; }
          .about-inner { grid-template-columns: 1fr; }
          .projects-grid { grid-template-columns: repeat(2, 1fr); }
          .contact-inner { grid-template-columns: 1fr; }
          .tl-item { grid-template-columns: 1fr; gap: 0.4rem; }
        }
        @media (max-width: 560px) {
          .projects-grid { grid-template-columns: 1fr; }
          .hero-headline { text-align: center; }
          .hero-role { text-align: center; }
          .hero-bio { text-align: center; }
          .hero-actions { flex-direction: column; align-items: center; }
          .hero-socials { margin: 0; }
          .about-stats { grid-template-columns: 1fr 1fr; }
        }
      `}</style>

      {/* ── NAV ── */}
      <nav className="nav">
        <a href="#" className="nav-logo">Jesse <em>John</em></a>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#work">Experience</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <a href="#contact" className="nav-cta">Let's Talk →</a>
        <button className="nav-burger" onClick={() => setMenuOpen(v => !v)} aria-label="Menu">
          <span /><span /><span />
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div className="mobile-menu" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setMenuOpen(false)}>
            {["About", "Projects", "Experience", "Contact"].map(l => (
              <a key={l} href={`#${l.toLowerCase()}`}>{l}</a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* ═══════════════════════════════
          HERO
      ═══════════════════════════════ */}
      <section className="hero" id="home">
        <div className="hero-noise" />
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />

        <div className="hero-inner">
          {/* TEXT */}
          <motion.div variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
            initial="hidden" animate="show">
            <motion.div variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22,1,0.36,1] } } }}>
              <span className="hero-eyebrow">Available for freelance &amp; collab</span>
            </motion.div>

            <motion.h1 className="hero-headline"
              variants={{ hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22,1,0.36,1] } } }}>
              Hey, I'm<br /><em>Jesse John.</em>
            </motion.h1>

            <motion.p className="hero-role"
              variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.6, delay: 0.1 } } }}>
              {role}<span className="hero-cursor" />
            </motion.p>

            <motion.p className="hero-bio"
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22,1,0.36,1] } } }}>
              I'm a <strong>self-taught programmer</strong> with <strong>4+ years</strong> of experience in software and blockchain development — building real products, shipping live projects, and sharing the journey as an <strong>active tech content creator</strong>.
            </motion.p>

            <motion.div className="hero-actions"
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}>
              <a href="#projects" className="btn-y">View Projects ↗</a>
              <a href="#contact" className="btn-outline">Get in Touch</a>
              <div className="hero-socials">
                <motion.a href="https://web.facebook.com/profile.php?id=100085129903427" target="_blank" rel="noreferrer"
                  className="social-btn" whileHover={{ y: -3 }} whileTap={{ scale: 0.9 }}>
                  <FbIcon />
                </motion.a>
                <motion.a href="https://x.com/Jesse_can_code" target="_blank" rel="noreferrer"
                  className="social-btn" whileHover={{ y: -3 }} whileTap={{ scale: 0.9 }}>
                  <TwIcon />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          {/* IMAGE */}
          <div className="hero-image-col">
            <Magnetic>
              <motion.div className="hero-img-wrap"
                initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.35, ease: [0.22,1,0.36,1] }}>
                <Image src="/images/pfp.jpg" alt="Jesse John" fill priority />
                <div className="hero-img-tag">Lagos, NG 🇳🇬</div>
                <div className="hero-img-badge">
                  <div className="badge-dot" />
                  <div className="badge-txt">
                    <div className="b1">Open to Work</div>
                    <div className="b2">Freelance · Full-time</div>
                  </div>
                </div>
              </motion.div>
            </Magnetic>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════
          ABOUT
      ═══════════════════════════════ */}
      <section className="about-section" id="about">
        <div className="about-inner">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7, ease: [0.22,1,0.36,1] }}>
            <div className="section-label">About Me</div>
            <h2 className="about-heading">I build things<br />that <em>actually ship.</em></h2>
            <div className="about-body">
              <p>I'm <strong>Jesse John</strong> — a Nigerian software developer based in Lagos with <strong>4+ years of hands-on experience</strong> specialising in web development and blockchain solutions.</p>
              <p>As <strong>CEO of Flexvest</strong>, I'm building the future of savings in Africa with DeFi infrastructure. Beyond that, I'm a self-taught programmer with a proven track record of shipping live products people actually use.</p>
              <p>I'm also an active tech content creator, helping demystify software development for the next generation of African developers.</p>
            </div>
            <div className="about-stats">
              {[{ v: "4+", l: "Years Experience" }, { v: "15+", l: "Live Projects" }, { v: "CEO", l: "@ Flexvest" }, { v: "∞", l: "Lines of Code" }].map(s => (
                <div className="stat-box" key={s.l}>
                  <div className="sv">{s.v}</div>
                  <div className="sl">{s.l}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15, ease: [0.22,1,0.36,1] }}>
            <div className="section-label">Skills</div>
            <div className="about-skills">
              {[
                { name: "React / Next.js", pct: 92 },
                { name: "TypeScript", pct: 85 },
                { name: "Solidity / Web3", pct: 80 },
                { name: "Node.js", pct: 82 },
                { name: "UI / UX Design", pct: 75 },
                { name: "Python", pct: 70 },
              ].map(sk => (
                <div className="skill-row" key={sk.name}>
                  <span className="skill-name">{sk.name}</span>
                  <div className="skill-bar">
                    <motion.div className="skill-fill"
                      initial={{ width: 0 }} whileInView={{ width: `${sk.pct}%` }}
                      viewport={{ once: true }} transition={{ duration: 1, delay: 0.2, ease: [0.22,1,0.36,1] }} />
                  </div>
                  <span className="skill-pct">{sk.pct}%</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════
          PROJECTS
      ═══════════════════════════════ */}
      <section id="projects" style={{ padding: "clamp(5rem,10vw,8rem) clamp(1.5rem,5vw,4rem)" }}>
        <div className="projects-section">
          <div className="projects-header">
            <div>
              <div className="section-label">Selected Work</div>
              <h2 className="projects-heading">Here's what<br />I've <em>built.</em></h2>
            </div>
            <motion.button
              onClick={() => setShowAll(v => !v)}
              className="btn-outline"
              style={{ cursor: "pointer", background: "transparent", fontFamily: "var(--sans)" }}
              whileHover={{ borderColor: "var(--accent2)" }}
              whileTap={{ scale: 0.96 }}>
              {showAll ? "Show Less ↑" : `View All (${PROJECTS.length}) →`}
            </motion.button>
          </div>

          <div className="projects-grid">
            {visibleProjects.map((p, i) => (
              <ProjectCard key={p.title} p={p} i={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════
          EXPERIENCE
      ═══════════════════════════════ */}
      <section className="work-section" id="work">
        <div className="work-inner">
          <div className="section-label">Experience</div>
          <h2 className="work-heading">What I've<br /><em>been up to.</em></h2>
          <div className="timeline">
            {[
              { date: "2022 – Present", role: "CEO & Founder", company: "Flexvest", desc: "Building a DeFi savings platform helping Africans beat inflation by saving in stablecoins. Leading product, engineering, and growth." },
              { date: "2023 – Present", role: "Freelance Developer", company: "Self-employed", desc: "Delivering full-stack web apps, blockchain solutions, and UI/UX design for clients across Nigeria and internationally." },
              { date: "2022 – 2023", role: "Frontend Developer", company: "Sabiskill", desc: "Built the skills-learning platform from the ground up — roadmap features, YouTube integration, and responsive UI." },
              { date: "2021 – 2022", role: "Blockchain Developer", company: "Various Projects", desc: "Developed and deployed smart contracts on Ethereum and compatible chains. Integrated Web3 wallets and DeFi protocols." },
            ].map((item, i) => (
              <motion.div className="tl-item" key={i}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.55, delay: i * 0.07 }}>
                <div className="tl-date">{item.date}</div>
                <div className="tl-content">
                  <div className="tl-role">{item.role}</div>
                  <div className="tl-company">{item.company}</div>
                  <div className="tl-desc">{item.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════
          CONTACT
      ═══════════════════════════════ */}
      <section id="contact">
        <div className="contact-inner">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <div className="section-label">Get in Touch</div>
            <h2 className="contact-heading">Let's build<br />something <em>amazing.</em></h2>
            <p className="contact-sub">I'm always open to new opportunities, collaborations, and ideas. Whether you have a project in mind or just want to say hi — my inbox is open.</p>
            <div className="contact-links">
              <a href="mailto:jessejohn@email.com" className="contact-link">
                <span className="cl-icon">✉️</span>
                <div>
                  <div className="cl-label">Email</div>
                  <div className="cl-val">jessejohn@email.com</div>
                </div>
              </a>
              <a href="https://x.com/Jesse_can_code" target="_blank" rel="noreferrer" className="contact-link">
                <span className="cl-icon">𝕏</span>
                <div>
                  <div className="cl-label">Twitter / X</div>
                  <div className="cl-val">@Jesse_can_code</div>
                </div>
              </a>
              <a href="https://web.facebook.com/profile.php?id=100085129903427" target="_blank" rel="noreferrer" className="contact-link">
                <span className="cl-icon">📘</span>
                <div>
                  <div className="cl-label">Facebook</div>
                  <div className="cl-val">Jesse John</div>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div className="contact-form" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}>
            <div className="form-field">
              <label className="form-label">Your Name</label>
              <input className="form-input" placeholder="John Doe" value={formState.name}
                onChange={e => setFormState(s => ({ ...s, name: e.target.value }))} />
            </div>
            <div className="form-field">
              <label className="form-label">Email Address</label>
              <input className="form-input" type="email" placeholder="you@example.com" value={formState.email}
                onChange={e => setFormState(s => ({ ...s, email: e.target.value }))} />
            </div>
            <div className="form-field">
              <label className="form-label">Message</label>
              <textarea className="form-textarea" placeholder="Tell me about your project..." value={formState.msg}
                onChange={e => setFormState(s => ({ ...s, msg: e.target.value }))} />
            </div>
            <button className="form-submit">Send Message →</button>
          </motion.div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <span className="footer-copy">© {new Date().getFullYear()} · Jesse John · All rights reserved</span>
        <div className="footer-socials">
          <motion.a href="https://x.com/Jesse_can_code" target="_blank" rel="noreferrer"
            className="social-btn" whileHover={{ y: -3 }} whileTap={{ scale: 0.9 }}><TwIcon /></motion.a>
          <motion.a href="https://web.facebook.com/profile.php?id=100085129903427" target="_blank" rel="noreferrer"
            className="social-btn" whileHover={{ y: -3 }} whileTap={{ scale: 0.9 }}><FbIcon /></motion.a>
        </div>
      </footer>
    </>
  );
}