"use client";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Founder & CEO",
    company: "Flexvest.",
    duration: "June 2025 – Present",
    details: [
      "Built and maintained the Flexvest platform using Next.js, Typescript, Web3js and modern frontend tools.",
      "Collaborated with designers and blockchain engineers to create seamless crypto-saving experiences.",
      "Optimized UI performance, responsiveness, and user flows for better engagement.",
    ],
  },
  {
    role: "Developer Relations (Devrel)",
    company: "Superteam NG",
    duration: "November 2024 – Present",
    details: [
      "Built and nurtured relationships with developers across the Superteam NG community.",
      "Organized and contributed to events, workshops, and community calls to onboard new members.",
      "Created developer-focused content and resources to promote Solana and Web3 adoption.",
    ],
  },
  {
    role: "Instructor",
    company: "Toko Academy",
    duration: "February 2026 – April 2026",
    details: [
      "Delivered structured training sessions to students at Toko Academy.",
      "Mentored learners through hands-on projects and real-world problem solving.",
      "Contributed to curriculum development and learning material creation.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "American University of Nigeria (AUN)",
    duration: "June 2024 – November 2024",
    details: [
      "Developed and optimized responsive web interfaces using React.js.",
      "Collaborated with designers and backend engineers to deliver seamless UI/UX.",
      "Enhanced site performance and accessibility through clean, efficient code.",
      "Improved AUN's digital presence and user engagement across platforms.",
    ],
  },
  {
    role: "Microsoft Student Ambassador",
    company: "Microsoft",
    duration: "March 2024 – June 2024",
    details: [
      "Led the design team in creating user-centered interfaces for community projects and campaigns.",
      "Collaborated with developers and marketers to ensure consistent brand identity across platforms.",
      "Improved visual communication and engagement through modern, accessible design systems.",
    ],
  },
  {
    role: "Design Lead",
    company: "Ingressive for Good (I4G)",
    duration: "February 2022 – October 2023",
    details: [
      "Led the design team in creating user-centered interfaces for community projects and campaigns.",
      "Collaborated with developers and marketers to ensure consistent brand identity across platforms.",
      "Improved visual communication and engagement through modern, accessible design systems.",
    ],
  },
];

export default function Experience() {
  return (
    <section className="experience" id="experience">
      <motion.h2
        className="experience-heading"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        Professional Experience
      </motion.h2>

      <div className="experience-list">
        {experiences.map((exp, index) => (
          <motion.div
            className="experience-item"
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="experience-meta">
              <span className="experience-duration">{exp.duration}</span>
              <h3 className="experience-role">{exp.role}</h3>
              <h4 className="experience-company">{exp.company}</h4>
            </div>
            <ul className="experience-details">
              {exp.details.map((line, i) => (
                <li key={i}>{line}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}