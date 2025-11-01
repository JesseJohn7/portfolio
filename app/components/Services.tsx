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
    <section className="services-section" id="services">
    <motion.div
        className="services-header"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
    >
        <h2>Services & Offers</h2>
        <p>
        I provide a range of professional digital solutions that help your
        brand grow with clarity, precision and modern aesthetics.
        </p>
    </motion.div>

    <motion.div
        className="services-grid"
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
            className="service-card"
            variants={{
            hidden: { opacity: 0, y: 50 },
            show: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.03 }}
        >
            <h3>{service.title}</h3>
            <p>{service.description}</p>
        </motion.div>
        ))}
    </motion.div>
    </section>
);
}
