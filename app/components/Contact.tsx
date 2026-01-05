"use client";
import { motion } from "framer-motion";
import { FaGithub, FaTwitter, FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <motion.h2
        className="contact-heading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Get in Touch
      </motion.h2>

      <motion.p
        className="contact-subtext"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        I’m open to collaborations, partnerships, or creative projects.  
        Let’s connect and build something impactful together.
      </motion.p>

      <motion.div
        className="contact-links"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
      {/*   <a href="mailto:jessejohn260@gmail.com" className="social-link">
          <FaEnvelope /> jessejohn260@gmail.com
        </a> */}
        <a
          href="https://github.com/JesseJohn7"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <FaGithub /> GitHub
        </a>
        <a
          href="https://x.com/Jesse_can_code"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <FaTwitter /> Twitter
        </a>
        <a
          href="https://wa.me/2348038509708"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <FaWhatsapp /> WhatsApp
        </a>
      </motion.div>

      <motion.footer
        className="footer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        © {new Date().getFullYear()} Billionaire Dev. All rights reserved.
      </motion.footer>
    </section>
  );
}
