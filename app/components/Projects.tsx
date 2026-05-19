'use client';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import Image from 'next/image';

const projectsData = [
  {
    title: 'Flexvest',
    description: 'Flexvest is a platform that helps users beat inflation and excessive bank charges by helping them save in stablecoins.',
    image: '/images/flex.png',
    link: 'https://flexvest.vercel.app/',
  },
  {
  title: 'Clipio',
  description: 'Clipio is a video editing platform that allows users to create and share engaging videos with ease.',
  image: '/images/clipio.png',
  link: 'https://clipio.vercel.app/',
},
  {
  title: 'Sabiskill',
  description: 'Sabiskill helps graduates home and abroad learn real-world skills through curated YouTube resources, detailed roadmaps, and tools to master or level up any skill.',
  image: '/images/sabi.png',
  link: 'https://sabiskill.vercel.app/',
},
  {
  title: 'Readify',
  description: 'An Ai Powered Readme Generator that creates comprehensive README files for GitHub projects based on user input and project details.',
  image: '/images/readify.png',
  link: 'https://readify-delta.vercel.app/',
},
{
  title: 'Mojito',
  description: 'Mjito Website with cocktail recipes and ingredients.',
  image: '/images/Mojito.png',
  link: 'https://mojito-dusky.vercel.app/',
},
{
  title: 'Gabriel Adikwu Chambers',
  description: 'Website for a law firm based in Yola, Nigeria.',
  image: '/images/adikwu.png',
  link: 'https://www.gabrieladikwuchambers.com/',
},
  {
    title: 'Moviemate',
    description: 'A movie discovery app that allows users to search for movies, view details, and get recommendations based on their preferences.',
    image: '/images/moviemate.png',
    link: 'https://moviemate-blue.vercel.app/',
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
    title: 'Naija Codes',
    description: 'Naija Quick Codes lets you instantly find and dial all Nigerian network and bank USSD codes in one place.',
    image: '/images/Naijacodes.png',
    link: 'https://naija-codes.vercel.app/',
  },
  {
    title: 'Crypto Price Tracker',
    description: 'A web app that tracks real-time prices of various cryptocurrencies using CoinGecko API.',
    image: '/images/cryptotrack.png',
    link: 'https://v0-crypto-price-tracker-dusky.vercel.app/',
  },
  {
    title: 'Lagos Health Navigator',
    description: 'A healthcare platform connecting patients with medical professionals and facilities in Lagos.',
    image: '/images/lagos.png',
    link: 'https://lagos-health-navigator-phi.vercel.app/',
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
      {/* Header - show immediately */}
      <motion.div
        className="projects-header"
        initial={{ opacity: 1, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0 }}
      >
        <h2>Projects</h2>
      </motion.div>

      {/* Projects Grid - visible instantly */}
      <motion.div
        className="projects-grid"
        initial={{ opacity: 1, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0 }}
      >
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 }}
          >
            <div className="project-image relative w-full h-56 sm:h-64 md:h-72 overflow-hidden rounded-2xl shadow-md">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
                style={{ objectFit: 'cover' }}
                className="project-img"
                priority // ✅ ensures images load instantly, helps mobile render properly
              />
            </div>
            <div className="project-content mt-4">
              <h3 className="font-semibold text-lg">{project.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="project-link inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 mt-3 transition-colors duration-200"
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
