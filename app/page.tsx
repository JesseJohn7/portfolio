"use client";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowRight, ArrowUp, ArrowUpRight, Sparkles } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaXTwitter, FaWhatsapp, FaFacebookF } from "react-icons/fa6";
import ThemeToggle from "@/app/components/ThemeToggle";
import Reveal from "@/app/components/Reveal";
import { experience, profile, projects } from "@/lib/data";
import { skills } from "@/lib/Skills";

const nav = ["Projects", "Skills", "Experience", "Contact"];

const socials = [
  { label: "GitHub", href: profile.github, Icon: FaGithub },
  { label: "LinkedIn", href: profile.linkedin, Icon: FaLinkedinIn },
  { label: "X", href: profile.x, Icon: FaXTwitter },
  { label: "WhatsApp", href: profile.whatsapp, Icon: FaWhatsapp },
  { label: "Facebook", href: profile.facebook, Icon: FaFacebookF },
];

const stats = [
  { value: "5+", label: "Years experience" },
  { value: `${projects.length}`, label: "Projects shipped" },
  { value: `${experience.length}`, label: "Roles held" },
  { value: "21", label: "Technologies" },
];

const headline = ["Software", "Developer."];

export default function Home() {
  const { scrollYProgress, scrollY } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  const heroY = useTransform(scrollY, [0, 500], [0, 100]);
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0.3]);

  return (
    <main className="relative overflow-x-clip">
      {/* scroll progress */}
      <motion.div style={{ scaleX: progress }} className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-violet-600" />

      {/* NAV */}
      <motion.header
        initial={{ y: -80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}
        className="fixed inset-x-0 top-4 z-50 mx-auto flex w-[92%] max-w-4xl items-center justify-between rounded-full border border-neutral-200 bg-white/80 px-4 py-2 backdrop-blur-xl dark:border-neutral-800 dark:bg-neutral-950/80"
      >
        <a href="#" className="font-bold tracking-tight">
          billionairedev
        </a>
        <nav className="hidden gap-7 text-sm text-neutral-600 dark:text-neutral-400 md:flex">
          {nav.map((n) => (
            <a key={n} href={`#${n.toLowerCase()}`} className="transition hover:text-black dark:hover:text-white">{n}</a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a href={profile.github} target="_blank" aria-label="GitHub"
            className="grid h-9 w-9 place-items-center rounded-full bg-neutral-900 text-white transition hover:scale-110 dark:bg-white dark:text-black">
            <FaGithub size={16} />
          </a>
        </div>
      </motion.header>

      {/* HERO */}
      <section className="relative flex min-h-screen items-center px-6 pt-28">
        <div className="grid-bg absolute inset-0 -z-10" />
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="mx-auto grid w-full max-w-6xl items-center gap-14 md:grid-cols-[1.2fr_1fr]">
          <div>
            <motion.a
              href="#projects" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1 text-sm dark:border-neutral-800 dark:bg-neutral-900"
            >
              {/* <Sparkles size={14} className="text-violet-600" />
              <span className="font-semibold">New</span>
              <span className="text-neutral-500">Flexvest is live</span>
              <span className="text-violet-600">Try it →</span> */}
            </motion.a>

            <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-7xl">
              {headline.map((w, i) => (
                <span key={w} className="block overflow-hidden pb-1">
                  <motion.span
                    initial={{ y: "110%" }} animate={{ y: 0 }}
                    transition={{ delay: 0.3 + i * 0.15, duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
                    className={`block ${i === 1 ? "text-violet-600" : ""}`}
                  >
                    {w}
                  </motion.span>
                </span>
              ))}
            </h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}
              className="mt-6 max-w-xl text-lg text-neutral-600 dark:text-neutral-400">
              Creating innovative solutions and captivating designs. I&apos;m <b className="text-neutral-900 dark:text-white">Jesse John</b>, 5+ years in
              Software Development, Blockchain Development and Open Source. CEO of BillionaireTechnologies, self-taught programmer and active tech content creator.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.85 }} className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#projects" className="group inline-flex items-center gap-2 rounded-full bg-neutral-900 px-6 py-3 font-medium text-white transition hover:scale-105 dark:bg-white dark:text-black">
                View my work <ArrowRight size={16} className="transition group-hover:translate-x-1" />
              </a>
              <div className="flex gap-2">
                {socials.slice(0, 4).map(({ label, href, Icon }) => (
                  <a key={label} href={href} target="_blank" aria-label={label}
                    className="grid h-12 w-12 place-items-center rounded-full border border-neutral-200 transition hover:-translate-y-1 hover:border-violet-600 hover:text-violet-600 dark:border-neutral-800">
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4, duration: 0.8 }} className="relative order-1 mx-auto mb-6 w-72 sm:w-80 md:order-2 md:mb-0">
            <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-[2rem] border-2 border-violet-600" />
            <motion.div whileHover={{ rotate: -2, scale: 1.02 }} className="relative overflow-hidden rounded-[2rem] border border-neutral-200 bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-900">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/pfp.jpg" alt="Jesse John" className="aspect-[4/5] w-full object-cover" />
            </motion.div>
            <div className="absolute -bottom-5 -left-5 rounded-2xl border border-neutral-200 bg-white px-4 py-2 text-sm shadow-lg dark:border-neutral-800 dark:bg-neutral-900">
              {/* <span className="mr-2 inline-block h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
              Open to collaborate */}
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* STATS */}
     {/*  <section className="border-y border-neutral-200 dark:border-neutral-800">
        <div className="mx-auto grid max-w-6xl grid-cols-2 md:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="border-neutral-200 p-8 text-center dark:border-neutral-800 md:border-r md:last:border-r-0">
              <p className="text-4xl font-extrabold tracking-tight sm:text-5xl">{s.value}</p>
              <p className="mt-1 text-sm text-neutral-500">{s.label}</p>
            </Reveal>
          ))}
        </div> 
      </section> */}

      {/* PROJECTS */}
      <section id="projects" className="mx-auto max-w-6xl px-6 py-28">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-widest text-violet-600">01 · Selected work</p>
          <h2 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">Projects I&apos;ve shipped</h2>
          <p className="mt-3 max-w-xl text-neutral-600 dark:text-neutral-400">Live products across fintech, AI, web3, education and more.</p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 0.1}>
              <motion.a
                href={p.url} target="_blank" whileHover={{ y: -8 }}
                className="group block overflow-hidden rounded-3xl border border-neutral-200 bg-white transition hover:border-violet-600 dark:border-neutral-800 dark:bg-neutral-900"
              >
                <div className="relative aspect-video overflow-hidden bg-neutral-100 dark:bg-neutral-800">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`/images/${p.img}`} alt={p.title} onError={(e) => (e.currentTarget.style.display = "none")}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                  <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-xs font-bold text-black">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">{p.title}</h3>
                    <ArrowUpRight size={18} className="text-neutral-400 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-violet-600" />
                  </div>
                  <p className="mt-2 line-clamp-3 text-sm text-neutral-600 dark:text-neutral-400">{p.desc}</p>
                </div>
              </motion.a>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="border-y border-neutral-200 bg-neutral-50 px-6 py-28 dark:border-neutral-800 dark:bg-neutral-900/40">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-violet-600">02 · Stack</p>
            <h2 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">Technologies &amp; tools</h2>
            <p className="mt-3 max-w-xl text-neutral-600 dark:text-neutral-400">The tools I use every day to design, build and ship.</p>
          </Reveal>

          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7">
            {skills.map(({ name, Icon, color }, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 24, scale: 0.9 }} whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: (i % 7) * 0.05, duration: 0.5 }}
                whileHover={{ y: -8, scale: 1.05 }}
                className="group flex cursor-default flex-col items-center gap-3 rounded-2xl border border-neutral-200 bg-white p-5 transition hover:border-violet-600 hover:shadow-xl dark:border-neutral-800 dark:bg-neutral-900"
              >
                <Icon size={38} style={color ? { color } : undefined} className={color ? "" : "text-neutral-900 dark:text-white"} />
                <span className="text-center text-xs font-semibold text-neutral-600 dark:text-neutral-400">{name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="mx-auto max-w-4xl px-6 py-28">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-widest text-violet-600">03 · Journey</p>
          <h2 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">Professional experience</h2>
        </Reveal>
        <div className="relative mt-12 border-l border-neutral-200 pl-8 dark:border-neutral-800">
          {experience.map((e, i) => (
            <Reveal key={e.role + e.org} className="relative pb-12 last:pb-0">
              <span className="absolute -left-[41px] top-1 grid h-5 w-5 place-items-center rounded-full bg-white ring-4 ring-violet-600/20 dark:bg-neutral-950">
                <span className="h-2 w-2 rounded-full bg-violet-600" />
              </span>
              <p className="text-sm text-neutral-500">{String(i + 1).padStart(2, "0")} · {e.date}</p>
              <h3 className="mt-1 text-xl font-semibold">{e.role}</h3>
              <p className="font-medium text-violet-600">{e.org}</p>
              <ul className="mt-3 space-y-2 text-neutral-600 dark:text-neutral-400">
                {e.points.map((pt) => (
                  <li key={pt} className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400" />{pt}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-6 pb-24">
        <Reveal>
          <div className="mx-auto max-w-5xl rounded-[2rem] bg-neutral-900 p-10 text-center text-white sm:p-16 dark:border dark:border-neutral-800">
            <p className="text-sm font-semibold uppercase tracking-widest text-violet-400">04 · Contact</p>
            <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-6xl">
              Let&apos;s build something <span className="text-violet-400">impactful.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-neutral-400">I&apos;m open to collaborations, partnerships, or creative projects. Let&apos;s connect.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {socials.map(({ label, href, Icon }, i) => (
                <motion.a
                  key={label} href={href} target="_blank" aria-label={label}
                  initial={{ opacity: 0, scale: 0.6 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
                  transition={{ delay: i * 0.08, type: "spring" }}
                  whileHover={{ y: -6, scale: 1.1 }}
                  className="grid h-14 w-14 place-items-center rounded-full bg-white text-black transition hover:bg-violet-500 hover:text-white"
                >
                  <Icon size={22} />
                </motion.a>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <footer className="flex items-center justify-between border-t border-neutral-200 px-6 py-8 text-sm text-neutral-500 dark:border-neutral-800">
        <span>© {new Date().getFullYear()} Billionaire Dev. All rights reserved.</span>
        <a href="#" aria-label="Back to top" className="grid h-10 w-10 place-items-center rounded-full border border-neutral-200 transition hover:-translate-y-1 hover:border-violet-600 hover:text-violet-600 dark:border-neutral-800">
          <ArrowUp size={16} />
        </a>
      </footer>
    </main>
  );
}