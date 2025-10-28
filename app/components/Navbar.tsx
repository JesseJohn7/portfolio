'use client';
import Link from 'next/link';
import { GhIcon } from './Svgs';

const Navbar = () => {
  return (
    <header className="navbar">
      <nav>
        <Link href="/" className="navbar-logo">
          Jesse John
        </Link>
        <Link
          href="https://github.com/JesseJohn7"
          target="_blank"
          rel="noreferrer"
          className="navbar-github"
        >
          <GhIcon />
          <p>Github</p>
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
