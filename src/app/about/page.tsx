"use client"
import React from 'react'
import Transition from "@/components/Transition";

const AboutMe = () => {
  return (
    <div className="flex justify-center items-center p-4">
      <Transition>
        <div className="aboutme-card w-full max-w-3xl shadow-lg shadow-gray-500/50 text-3xl p-6 rounded-lg">
          <div className="card-body">
            <h2 className="font-bold text-2xl card-title mb-4">About Me</h2>
            <p className="text-xl">
              After 16 years in the banking industry, I am now pursuing my
              passion for technology by transitioning into full stack
              development. I have a strong background in problem-solving,
              customer service, and project management, which I am now applying
              to software development. Currently, I am enhancing my skills in
              JavaScript, React, and MongoDB through a coding boot camp. My goal
              is to build intuitive and efficient web applications that provide
              excellent user experiences. I am eager to contribute to dynamic
              tech teams and continue learning and growing in this field. I look
              forward to connecting with fellow tech enthusiasts, developers,
              and companies to explore opportunities and collaborations in full
              stack development.
            </p>
          </div>
        </div>
      </Transition>
    </div>
  );
}

export default AboutMe;