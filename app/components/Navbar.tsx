'use client';
import Link from 'next/link';
import { GhIcon } from './Svgs';

const Navbar = () => {
  return (
    <header className="fixed left-0 top-0 z-50 flex w-full justify-center bg-[#0b040c]/90 px-5 py-4 backdrop-blur-md md:px-6 md:py-[18px]">
      <nav className="flex w-full max-w-[1200px] items-center justify-between">
        <Link href="/" className="relative text-xl font-semibold text-white no-underline">
          Billionaire Developer
        </Link>
        <Link
          href="https://github.com/JesseJohn7"
          target="_blank"
          rel="noreferrer"
          className="group flex items-center gap-2 text-white/70 no-underline transition-colors duration-300 hover:text-white"
        >
          <span className="flex h-[26px] w-[26px] items-center justify-center opacity-70 transition-opacity duration-300 group-hover:opacity-100 [&>svg]:h-full [&>svg]:w-full">
            <GhIcon />
          </span>
          <p>Github</p>
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;