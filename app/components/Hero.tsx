"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FbIcon, IgIcon, InIcon, TwIcon } from "./Svgs";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        {/* Text Section */}
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <h1>
            100x Software
          </h1>
          <h2>Developer.</h2>
          <p className="sub-text">
            Creating innovative solutions and captivating designs.
          </p>

          <div className="hero-bio">
            <p>
              I’m Jesse John with 5+ years of experience specializing in Software Development, Blockchain Development , Open Source development.
            </p>
            <p>CEO of BillionaireTechnologies, Self-taught programmer with proven experience in building live projects, and Active tech content creator.</p>
          </div>
          
          <div className="hero-socials">
              <motion.a
                href="https://www.linkedin.com/in/jessejohn7/"
                target="_blank"
                rel="noreferrer"
                whileTap={{ scale: 1.1 }}
                whileHover={{ scale: 0.95 }}
              >
                <InIcon />
              </motion.a> 
            </div>
            </motion.div>

            <motion.a
              href="https://x.com/Jesse_can_code"
              target="_blank"
              rel="noreferrer"
              whileTap={{ scale: 1.1 }}
              whileHover={{ scale: 0.95 }}
            >
              <TwIcon />
            </motion.a>
            
            <motion.a
              href="https://web.facebook.com/profile.php?id=100085129903427"
              target="_blank"
              rel="noreferrer"
              whileTap={{ scale: 1.1 }}
              whileHover={{ scale: 0.95 }}
            >
              <FbIcon /> 
            </motion.a>
            
          {/*  <motion.a
              href="https://www.instagram.com/Jesse John"
              target="_blank"
              rel="noreferrer"
              whileTap={{ scale: 1.1 }}
              whileHover={{ scale: 0.95 }}
            >
              <IgIcon />
            </motion.a> */}

        {/* Image Section */}
        <motion.div
          className="hero-image"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="hero-image-container">
            <Image
              src="/images/pfp.jpg"
              alt="Jesse John profile"
              width={400}
              height={400}
              draggable={false}
              priority
            />
            <div className="hero-image-border" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};


export default Hero;