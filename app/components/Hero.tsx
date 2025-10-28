'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FbIcon, IgIcon, InIcon, TwIcon } from './Svgs';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div>
          <div>
            <h1>
              Hey, I’m Jesse John
            </h1>
            <h2>Software Engineer</h2>
            <p>Creating innovative solutions and captivating designs.Problem Solver </p>
            <div className="hero-bio">
              <p>
                I’m a 22-year-old Nigerian software developer with 4 years of experience in Software development.
              </p>
              <p>
                Self-taught programmer, CEO of Flexvest.
              </p>
            </div>
            <div className="hero-socials">
              <motion.a
                href="https://www.facebook.com/honour.robinson.1"
                target="_blank"
                rel="noreferrer"
                whileTap={{ scale: 1.1 }}
                whileHover={{ scale: 0.99 }}
              >
                <FbIcon />
              </motion.a>
              <motion.a
                href="https://x.com/Jesse_can_code"
                target="_blank"
                rel="noreferrer"
                whileTap={{ scale: 1.1 }}
                whileHover={{ scale: 0.99 }}
              >
                <TwIcon />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/robinsonhonour"
                target="_blank"
                rel="noreferrer"
                whileTap={{ scale: 1.1 }}
                whileHover={{ scale: 0.99 }}
              >
                <IgIcon />
              </motion.a>
              <motion.a
                href="https://ng.linkedin.com/in/robinsonhonouramadi"
                target="_blank"
                rel="noreferrer"
                whileTap={{ scale: 1.1 }}
                whileHover={{ scale: 0.99 }}
              >
                <InIcon />
              </motion.a>
            </div>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-image-container">
            <Image src="/images/hero.png" alt="Robinson Honour profile" width={300} height={300} draggable={false} priority />
            <div className="hero-image-border"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;