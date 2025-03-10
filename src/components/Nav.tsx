import React from "react";
import Link from "next/link";
import './Nav.css';

const Nav = () => {
  return (
    <div>
      <nav className="nav-container">
        <div className="avatar">
          <div className=" ring-offset-base-100 w-17 rounded-full ring ring-offset-0">
            <img src="/IMG_1913.jpeg" alt="profile image" />
          </div>
        </div>
        <ul className="ul-container">
          <li>
            <Link href={"/"}>About Me</Link>
          </li>
          <li>
            <Link href={"/contact"}>Contact</Link>
          </li>
          <li>
            <Link href={"/portfolio"}>Portfolio</Link>
          </li>
          <li>
            <Link href={"/resume"}>Resume</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
