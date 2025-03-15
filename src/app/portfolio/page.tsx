import React from 'react'
import Link from 'next/link';


const Portfolio = () => {
  return (
    <div className="cards-container flex flex-wrap justify-center gap-6 p-4">
      <Link href="https://pac-overflow.onrender.com/api/posts/">
        <div className="card bg-base-100  image-full w-96  shadow-sm">
          <figure>
            <img src="/VG-Games.png" alt="controllers" />
          </figure>
          <div className="card-body justify-center">
            <h2 className="card-title justify-center">Pac-Overflow</h2>
          </div>
        </div>
      </Link>
      <Link href="https://footy-net.onrender.com/">
        <div className="card bg-base-100 image-full w-96  justify-self-center shadow-sm">
          <figure>
            <img src="/istockphoto-1440483244-612x612.jpg" alt="soccer" />
          </figure>
          <div className="card-body justify-center">
            <h2 className="card-title justify-center">footyNet</h2>
          </div>
        </div>
      </Link>
      <Link href="https://jguzman87.github.io/weather-dashboard/">
        <div className="card bg-base-100 image-full w-96 shadow-sm">
          <figure>
            <img src="/weather.png" alt="weather" />
          </figure>
          <div className="card-body justify-center">
            <h2 className="card-title justify-center">Weather-Dashboard</h2>
          </div>
        </div>
      </Link>
      <Link href="https://the-great-code-calamity.github.io/tune_tracker/">
        <div className="card bg-base-100 image-full w-96 shadow-sm justify-self-center">
          <figure>
            <img src="/TuneTracker.png" alt="Tunes" />
          </figure>
          <div className="card-body justify-center ">
            <h2 className="card-title justify-center ">Tune-Tracker</h2>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Portfolio