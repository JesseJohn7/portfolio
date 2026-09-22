"use client";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Core Contributor",
    company: "Drips Wave (Remote)",
    duration: "May 2026 – Present",
    details: [
      "Contribute to open-source Rust/Soroban smart contract codebases across multiple organizations as part of the Drips Wave program.",
      "Debug and resolve Rust build and CI/CD pipeline issues, ensuring GitHub Actions workflows pass reliably across contributed repositories.",
      "Implement features and fixes for issues raised by partner organizations, following full contribution workflows including forking, branching, and pull requests.",
      "Collaborate remotely with maintainers to review, test, and merge contributions into production codebases.",
    ],
  },
  {
    role: "IT Professional",
    company: "Toko Academy",
    duration: "February 2026 – April 2026",
    details: [
      "Provided IT support and software development services across the academy's digital operations.",
      "Built and maintained internal software tools to streamline academic and administrative workflows.",
      "Collaborated with staff to identify technical needs and deliver effective software solutions.",
    ],
  },
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
    <section className="w-full overflow-x-hidden bg-[#0b040c] px-5 pb-16 pt-8 text-[#f2f2f2] md:px-6 md:pb-24 md:pt-12" id="experience">
      <div className="mx-auto max-w-[900px]">
        <motion.h2
          className="mb-8 text-left text-[26px] font-black text-white md:mb-12 md:text-[2rem]"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Professional Experience
        </motion.h2>

        <div className="flex flex-col gap-10 border-l-2 border-white/10 pl-6 md:gap-12 md:pl-8">
          {experiences.map((exp, index) => (
            <motion.div
              className="group relative w-full min-w-0 pl-4 before:absolute before:-left-[1.9rem] before:top-[0.6rem] before:h-2.5 before:w-2.5 before:rounded-full before:bg-[#bf8441] before:shadow-[0_0_12px_rgba(4,19,36,0.6)] before:content-['']"
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="mb-3">
                <span className="mb-1 block text-sm text-[#aaa]">{exp.duration}</span>
                <h3 className="mb-0.5 break-words text-[1.1rem] font-semibold text-white transition-colors duration-300 group-hover:text-[#e4eaf1] md:text-[1.3rem]">
                  {exp.role}
                </h3>
                <h4 className="mb-3 break-words text-base text-[#bf8441]">{exp.company}</h4>
              </div>
              <ul className="list-none space-y-1.5 pl-0">
                {exp.details.map((line, i) => (
                  <li key={i} className="break-words text-[0.95rem] leading-relaxed text-[#d4d4d4]">
                    {line}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}