import React from 'react'
import './Footer.css';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {

    const year = new Date().getFullYear();
  return (
    <footer className="footer-container mt-auto">
      <div className='flex gap-8'>
      <Link href={"https://github.com/JGuzman87"}>
        <Image
          className="w-10 rounded-full ring ring-offset-0"
          src="/github-icon-2.svg"
          width={100}
          height={100}
          alt="github"
          rel="github"
        />
      </Link>
      <Link href={"https://www.linkedin.com/in/jorge-guzman-841714136/"}>
        <Image
          className="ring-offset-base-100 w-10 rounded-full ring ring-offset-0"
          src="/linkedin-icon.svg"
          width={100}
          height={100}
          rel="linkedin"
          alt="linkedin"
        />
      </Link>

      <p className='flex self-end'>{year}</p>
      </div>
    </footer>
  );
}

export default Footer