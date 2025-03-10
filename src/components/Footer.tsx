import React from 'react'
import './Footer.css';
import Link from 'next/link';

const Footer = () => {

    const year = new Date().getFullYear();
  return (
    <footer className="footer-container">
      <Link href={"https://github.com/JGuzman87"}>
        <img
          className="w-10 rounded-full ring ring-offset-0"
          src="/github-icon-2.svg"
          rel="github"
        />
      </Link>
      <Link href={"https://www.linkedin.com/in/jorge-guzman-841714136/"}>
        <img
          className="ring-offset-base-100 w-10 rounded-full ring ring-offset-0"
          src="/linkedin-icon.svg"
          rel="linkedin"
        />
      </Link>

      <p>{year}</p>
    </footer>
  );
}

export default Footer