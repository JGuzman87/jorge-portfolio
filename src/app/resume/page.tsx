"use client"
import React from 'react'
import Transition from '@/components/Transition';

const Resume = () => {
  return (
    <div className="flex justify-center items-center p-4 mt-auto ">
      <Transition>
        <div className="flex flex-col gap-4 text-center shadow-lg shadow-gray-500/50 p-6 rounded-lg">
          <h1 className="font-bold text-2xl">Resume</h1>
          <p>- Full Stack Web Development</p>
          <p>- JavaScript & React </p>
          <p>- APIs & Databases (MongoDB, SQL)</p>
          <p>- Version Control with Git & GitHub</p>
          <p>Download my Resume</p>
          <a className="underline text-blue-300"href="https://profile.indeed.com/p/jorgeg-tpe7141">Indeed Resume</a>
        </div>
      </Transition>
    </div>
  );
}

export default Resume;