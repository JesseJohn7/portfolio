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
    description: 'Web app to download videos from TikTok, Instagram, X, Facebook, and YouTube in full quality with an easy-to-use interface',
    image: '/images/clipio.png',
    link: 'https://clipio-tau.vercel.app/',
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
    <section className="mx-auto w-full max-w-[1300px] bg-[#0b040c] px-4 py-12 text-white sm:px-6 sm:py-16 md:px-8 md:py-24" id="projects">
      {/* Header - show immediately */}
      <motion.div
        className="mb-4"
        initial={{ opacity: 1, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0 }}
      >
        <h2 className="mb-4 text-[clamp(28px,5vw,35px)] font-black text-white">Projects</h2>
      </motion.div>

      {/* Projects Grid - visible instantly */}
      <motion.div
        className="grid grid-cols-1 gap-6 md:grid-cols-[repeat(auto-fit,minmax(280px,1fr))] md:gap-6 lg:gap-8"
        initial={{ opacity: 1, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0 }}
      >
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            className="group flex cursor-pointer flex-col overflow-hidden rounded-xl bg-white/10 text-white transition-all duration-100 hover:-translate-y-1.5 hover:bg-[#d46c0a]/25"
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 }}
          >
            <div className="relative h-40 w-full overflow-hidden sm:h-[180px] lg:h-[200px]">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>
            <div className="flex flex-col gap-3 p-6">
              <h3 className="text-lg font-bold text-white sm:text-xl">{project.title}</h3>
              <p className="text-sm leading-normal text-[#f0f0f0] sm:text-[0.95rem]">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-[#ffd700] transition-all duration-300 hover:translate-x-1 hover:text-[#ffb200] sm:text-base"
              >
                View Project{' '}
                <FiArrowRight className="text-base transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}