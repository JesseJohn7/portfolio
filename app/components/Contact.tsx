"use client";
import { motion } from "framer-motion";
import { FaGithub, FaTwitter, FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="bg-[#0b0b0c] px-4 py-16 text-center text-white md:py-24" id="contact">
      <motion.h2
        className="mb-4 text-[1.6rem] font-bold text-white md:text-[2rem]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Get in Touch
      </motion.h2>

      <motion.p
        className="mx-auto mb-8 max-w-[600px] text-base leading-relaxed text-[#ccc] md:mb-10 md:text-[1.1rem]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        I’m open to collaborations, partnerships, or creative projects.
        Let’s connect and build something impactful together.
      </motion.p>

      <motion.div
        className="mb-12 flex flex-wrap justify-center gap-5"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        {/* <a href="mailto:jessejohn260@gmail.com" className="flex items-center gap-2 text-base text-[#aaa] no-underline transition-all duration-300 hover:-translate-y-1 hover:text-[#00bcd4]">
          <FaEnvelope /> jessejohn260@gmail.com
        </a> */}
        <a
          href="https://github.com/JesseJohn7"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-[#aaa] no-underline transition-all duration-300 hover:-translate-y-1 hover:text-[#00bcd4] md:text-base"
        >
          <FaGithub />
        </a>
        <a
          href="https://x.com/Jesse_can_code"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-[#aaa] no-underline transition-all duration-300 hover:-translate-y-1 hover:text-[#00bcd4] md:text-base"
        >
          <FaTwitter />
        </a>
        <a
          href="https://wa.me/2348038509708"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-[#aaa] no-underline transition-all duration-300 hover:-translate-y-1 hover:text-[#00bcd4] md:text-base"
        >
          <FaWhatsapp />
        </a>
      </motion.div>

      <motion.footer
        className="mt-12 border-t border-white/[0.08] pt-8 text-center text-[0.85rem] text-[#888] md:text-[0.9rem]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        © {new Date().getFullYear()} Billionaire Dev. All rights reserved.
      </motion.footer>
    </section>
  );
}