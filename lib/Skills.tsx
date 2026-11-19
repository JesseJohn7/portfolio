import type { IconType } from "react-icons";
import {
  SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiNodedotjs, SiExpress,
  SiPython, SiRust, SiTailwindcss, SiGit, SiGithub, SiMongodb, SiFirebase,
  SiSupabase, SiWeb3Dotjs, SiVercel, SiRailway, SiRender, SiFramer, SiClerk, SiGreensock,
} from "react-icons/si";

export const skills: { name: string; Icon: IconType; color?: string }[] = [
  { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
  { name: "React", Icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "Node.js", Icon: SiNodedotjs, color: "#5FA04E" },
  { name: "Express", Icon: SiExpress },
  { name: "Python", Icon: SiPython, color: "#3776AB" },
  { name: "Rust", Icon: SiRust, color: "#CE412B" },
  { name: "Tailwind", Icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Git", Icon: SiGit, color: "#F05032" },
  { name: "GitHub", Icon: SiGithub },
  { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
  { name: "Firebase", Icon: SiFirebase, color: "#FFCA28" },
  { name: "Supabase", Icon: SiSupabase, color: "#3FCF8E" },
  { name: "Web3.js", Icon: SiWeb3Dotjs, color: "#F16822" },
  { name: "Vercel", Icon: SiVercel },
  { name: "Railway", Icon: SiRailway },
  { name: "Render", Icon: SiRender, color: "#46E3B7" },
  { name: "Framer Motion", Icon: SiFramer, color: "#0055FF" },
  { name: "Clerk", Icon: SiClerk, color: "#6C47FF" },
  { name: "GSAP", Icon: SiGreensock, color: "#88CE02" },
];