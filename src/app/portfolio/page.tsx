"use client"
import { useState, useEffect } from 'react'
import Link from 'next/link';


const Portfolio = () => {

  // State to track whether the portfolio content is still loading
  const [isLoading, setIsLoading] = useState(true);

  // useEffect hook to simulate loading behavior on component mount
  useEffect(() => {
    // Set a timeout to simulate loading delay (e.g., fetching data)
    const timer = setTimeout(() => {
      // After delay, set isLoading to false to indicate loading is complete
      setIsLoading(false);
    }, 1000); // 1 second delay

    // Cleanup function to clear the timer if component unmounts before timeout
    return () => clearTimeout(timer);
  }, []);

  // Conditional rendering: show skeleton cards as placeholders while loading
  if (isLoading) {
    // Show 4 skeleton cards as placeholders while loading
    return (
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center p-9">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="card bg-base-200 w-80 p-4">
            <div className="skeleton h-48 w-full mb-4"></div>
            <div className="skeleton h-6 w-3/4 mx-auto mb-2"></div>
            <div className="skeleton h-4 w-1/2 mx-auto"></div>
          </div>
        ))}
      </div>
    );
  }

  // Final return block: renders the portfolio content once loading is complete
  return (
   
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
        <Link href="https://weather-dashboard-react-three.vercel.app">
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
   
  );
}

export default Portfolio