'use client';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import Image from 'next/image';

const projectsData = [
  {
    title: 'Flexvest',
    description: 'Flexvest is a platform that helps users beat inflation and excessive bank charges by helping them save in stablecoins.',
    image: '/images/flex.png',
    link: 'https://jessejohn7.github.io/Flex_vest/',
  },
  {
    title: 'Foodhub',
    description: 'Foodhub is a platform that connects users with local restaurants and food providers.',
    image: '/images/food.png',
    link: 'https://jessejohn7.github.io/Foodhub/',
  },
  {
    title: 'Cgpa Calculator',
    description: 'A sleek CGPA calculator that helps students easily compute their semester and cumulative GPA with accurate results and a modern interface',
    image: '/images/Gpa-cal.png',
    link: 'https://gpa-calculator-tau-eight.vercel.app/',
  },
  {
    title: 'Opencut',
    description: 'Opencut is a platform that allows users to easily edit and share their videos online.',
    image: '/images/opencut.png',
    link: 'https://opencut.app/',
  },
  {
    title: 'Tictac-toe',
    description: 'A simple Tic Tac Toe to play with friends.',
    image: '/images/tictac.png',
    link: 'https://jessejohn7.github.io/Tic-tac-toe/',
  },
  {
    title: 'Magna Curia Chambers',
    description: 'Website for Law students in Obafemi Awolowo University, Ile-Ife.',
    image: '/images/magna.png',
    link: 'https://magna-curia.vercel.app/',
  },
];

export default function Projects() {
  return (
    <section className="projects-section" id="projects">
      <motion.div
        className="projects-header"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2>Projects</h2>
      </motion.div>

      <motion.div
        className="projects-grid"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.2 } },
        }}
      >
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            variants={{
              hidden: { opacity: 0, y: 50 },
              show: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
          >
            <div className="project-image">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
                style={{ objectFit: 'cover' }}
                className="project-img"
              />
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                View Project <FiArrowRight className="arrow-icon" />
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
