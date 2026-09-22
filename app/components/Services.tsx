'use client';
import { motion } from 'framer-motion';

const servicesData = [
  {
    title: 'WEB DEVELOPMENT',
    description:
      'I design and build beautiful websites with React, NextJS, TailwindCSS, Typescript, and JavaScript .',
  },
  {
    title: 'RESPONSIVE DESIGN',
    description:
      'Building websites and applications that work seamlessly on various devices and screen sizes, from desktop to smartphones.',
  },
  {
    title: 'BLOCKCHAIN',
    description:
      'I write Smart Contracts that matches the needs of many web3 companies.',
  },
  {
    title: 'VERSION CONTROL',
    description:
      'Implementing version control systems like Git to manage and track changes in your projects.',
  },
  {
    title: 'API INTEGRATION',
    description:
      'Connecting third-party services and APIs to enhance functionality and user experience.',
  },
];

export default function ServicesSection() {
  return (
    <section
      className="mx-auto max-w-[1300px] bg-[#0b040c] px-6 py-16 text-white md:px-8 md:py-32"
      id="services"
    >
      <motion.div
        className="mb-8 max-w-[700px] text-left"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2 className="mb-4 text-[28px] font-black sm:text-[35px]">Services & Offers</h2>
        <p className="text-[clamp(1rem,2vw,1.1rem)] leading-[1.7] text-[#bcbcbc]">
          I provide a range of professional digital solutions that help your
          brand grow with clarity, precision and modern aesthetics.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 gap-6 sm:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] sm:gap-10"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.2 } },
        }}
      >
        {servicesData.map((service, index) => (
          <motion.div
            key={index}
            className="cursor-pointer rounded-[20px] border border-white/[0.08] bg-[#a00707]/5 p-6 text-left backdrop-blur-[10px] transition-all duration-[400ms] hover:-translate-y-2 hover:bg-[#d46c0a]/[0.233] hover:shadow-[0_10px_30px_rgba(165,102,42,0.25)] sm:p-10"
            variants={{
              hidden: { opacity: 0, y: 50 },
              show: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.03 }}
          >
            <h3 className="mb-3 text-[1.4rem] font-semibold text-white">{service.title}</h3>
            <p className="text-[0.95rem] leading-relaxed text-[#bcbcbc]">{service.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}