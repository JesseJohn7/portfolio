// src/components/Skill.tsx
import React from "react";
import { motion } from "framer-motion";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiGit,
  SiGithub,
  SiWeb3Dotjs,
  SiVercel,
  SiFramer,
  SiClerk,
  SiTailwindcss,
  SiFirebase,
  SiSupabase,
} from "react-icons/si";
import { FaWaveSquare, FaNodeJs } from "react-icons/fa";

interface Skill {
  name: string;
  icon: React.ReactNode;
}

const skills: Skill[] = [
  { name: "JavaScript", icon: <SiJavascript color="#f7df1e" size={34} /> },
  { name: "TypeScript", icon: <SiTypescript color="#3178c6" size={34} /> },
  { name: "React", icon: <SiReact color="#61dafb" size={34} /> },
  { name: "Next.js", icon: <SiNextdotjs color="#ffffff" size={34} /> },
  { name: "Node.js", icon: <FaNodeJs color="#68A063" size={34} /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss color="#38bdf8" size={34} /> },
  { name: "Git", icon: <SiGit color="#f05032" size={34} /> },
  { name: "GitHub", icon: <SiGithub color="#ffffff" size={34} /> },
  { name: "Firebase", icon: <SiFirebase color="#FFA000" size={34} /> },
  { name: "Supabase", icon: <SiSupabase color="#3ECF8E" size={34} /> },
  { name: "Web3.js", icon: <SiWeb3Dotjs color="#f16822" size={34} /> },
  { name: "Vercel", icon: <SiVercel color="#ffffff" size={34} /> },
  { name: "Framer Motion", icon: <SiFramer color="#0055ff" size={34} /> },
  { name: "Clerk", icon: <SiClerk color="#0a84ff" size={34} /> },
  { name: "GSAP", icon: <FaWaveSquare color="#88ce02" size={34} /> },
];

const Skill: React.FC = () => {
  return (
    <section className="skills-section">
      <div className="skills-container">
        <motion.h2
          className="skills-heading"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Skills
        </motion.h2>

        <motion.p
          className="skills-sub"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Technologies and tools I work with.
        </motion.p>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="skill-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
            >
              <div className="skill-header">
                <div className="skill-icon">{skill.icon}</div>
                <h3>{skill.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;