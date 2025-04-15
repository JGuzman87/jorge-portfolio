"use client"
import React from 'react'
import Link from 'next/link';
import Transition from '@/components/Transition';

const Portfolio = () => {
  return (
    <Transition>
      <div className="cards-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center p-9">
        <Link href="https://pac-overflow.onrender.com/api/posts/">
          <div className="card bg-base-200 w-80 justify-self-center">
            <figure>
              <img src="/VG-Games.png" alt="controllers" />
            </figure>
            <div className="card-body justify-center">
              <h2 className="card-title justify-center">Pac-Overflow</h2>
            </div>
          </div>
        </Link>
        <Link href="https://footy-net.onrender.com/">
          <div className="card bg-base-100 w-80 justify-self-center shadow-sm">
            <figure>
              <img src="/istockphoto-1440483244-612x612.jpg" alt="soccer" />
            </figure>
            <div className="card-body justify-center">
              <h2 className="card-title justify-center">footyNet</h2>
            </div>
          </div>
        </Link>
        <Link href="https://weather-dashboard-react-jlc8zuqfl.vercel.app/">
          <div className="card bg-base-100 w-80 shadow-sm justify-self-center self-center">
            <figure>
              <img src="/weather.png" alt="weather" />
            </figure>
            <div className="card-body justify-center">
              <h2 className="card-title justify-center">Weather-Dashboard</h2>
            </div>
          </div>
        </Link>
        <Link href="https://the-great-code-calamity.github.io/tune_tracker/">
          <div className="card bg-base-100 w-80 shadow-sm justify-self-center">
            <figure>
              <img src="/TuneTracker.png" alt="Tunes" />
            </figure>
            <div className="card-body justify-center ">
              <h2 className="card-title justify-center ">Tune-Tracker</h2>
            </div>
          </div>
        </Link>
      </div>
    </Transition>
  );
}

export default Portfolio