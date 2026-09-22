"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FbIcon, IgIcon, InIcon, TwIcon } from "./Svgs";

const Hero = () => {
  return (
    <section className="flex justify-center bg-[#0b040c] px-5 pb-[60px] pt-[110px] text-white md:px-6 md:pb-20 md:pt-[130px]">
      <div className="flex w-full max-w-[1200px] flex-col items-start gap-[50px] text-left lg:flex-row lg:items-center lg:justify-between lg:gap-[60px]">
        {/* Text Section */}
        <motion.div
          className="flex-1 text-left"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <h1 className="text-[32px] font-black leading-[1.1] text-white sm:text-[38px] md:text-[55px]">
            Software
          </h1>
          <h2 className="mt-2 text-[32px] font-black leading-[1.1] text-white sm:text-[38px] md:text-[55px]">
            Developer.
          </h2>
          <p className="mt-5 max-w-full text-sm leading-[1.7] text-white/80 sm:text-base md:max-w-[480px] md:text-lg">
            Creating innovative solutions and captivating designs.
          </p>

          <div className="mt-6 flex flex-col gap-2.5 text-xs text-[#e9faff] sm:text-[13px] md:flex-row md:text-[15px] md:mt-[25px]">
            <p className="max-w-full md:max-w-[480px]">
              I’m Jesse John with 5+ years of experience specializing in Software Development, Blockchain Development , Open Source development.
            </p>
            <p className="max-w-full md:max-w-[480px]">
              CEO of BillionaireTechnologies, Self-taught programmer with proven experience in building live projects, and Active tech content creator.
            </p>
          </div>

          <div className="mt-5 flex gap-4 md:mt-[30px]">
            <motion.a
              href="https://www.linkedin.com/in/jessejohn7/"
              target="_blank"
              rel="noreferrer"
              whileTap={{ scale: 1.1 }}
              whileHover={{ scale: 0.95 }}
              className="flex h-9 w-9 items-center justify-center rounded-full border-[1.5px] border-[#bf8441] transition-all duration-300 hover:scale-105 hover:bg-[#bf8441] [&>svg]:h-[18px] [&>svg]:w-[18px] [&>svg]:fill-[#fdfdfd]"
            >
              <InIcon />
            </motion.a>

            <motion.a
              href="https://x.com/Jesse_can_code"
              target="_blank"
              rel="noreferrer"
              whileTap={{ scale: 1.1 }}
              whileHover={{ scale: 0.95 }}
              className="flex h-9 w-9 items-center justify-center rounded-full border-[1.5px] border-[#bf8441] transition-all duration-300 hover:scale-105 hover:bg-[#bf8441] [&>svg]:h-[18px] [&>svg]:w-[18px] [&>svg]:fill-[#fdfdfd]"
            >
              <TwIcon />
            </motion.a>

            <motion.a
              href="https://web.facebook.com/profile.php?id=100085129903427"
              target="_blank"
              rel="noreferrer"
              whileTap={{ scale: 1.1 }}
              whileHover={{ scale: 0.95 }}
              className="flex h-9 w-9 items-center justify-center rounded-full border-[1.5px] border-[#bf8441] transition-all duration-300 hover:scale-105 hover:bg-[#bf8441] [&>svg]:h-[18px] [&>svg]:w-[18px] [&>svg]:fill-[#fdfdfd]"
            >
              <FbIcon />
            </motion.a>

            {/* <motion.a
              href="https://www.instagram.com/Jesse John"
              target="_blank"
              rel="noreferrer"
              whileTap={{ scale: 1.1 }}
              whileHover={{ scale: 0.95 }}
              className="flex h-9 w-9 items-center justify-center rounded-full border-[1.5px] border-[#bf8441] transition-all duration-300 hover:scale-105 hover:bg-[#bf8441] [&>svg]:h-[18px] [&>svg]:w-[18px] [&>svg]:fill-[#fdfdfd]"
            >
              <IgIcon />
            </motion.a> */}
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="relative flex w-full flex-1 justify-start lg:justify-end"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="relative h-[300px] w-[300px] sm:h-80 sm:w-80 md:h-[clamp(250px,35vw,400px)] md:w-[clamp(250px,35vw,400px)]">
            <Image
              src="/images/pfp.jpg"
              alt="Jesse John profile"
              width={400}
              height={400}
              draggable={false}
              priority
              className="relative z-[2] h-full w-full rounded-[10px] object-cover"
            />
            <div className="absolute left-[15px] top-[15px] z-0 h-full w-full rounded-[10px] border-[3px] border-[#bf8441]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;