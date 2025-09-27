import React from "react";
import Theme from "./Theme";
import WeatherCard  from "./WeatherCard";
import { Link } from "react-router-dom";
import ThemeToggle from "./Theme";

export default function Header() {
  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-90 backdrop-blur-sm border-b bg-opacity-100 dark:border-gray-500 shadow-sm">
        <div className=" flex items-center rounded-md py-2">
          <div className="w-full ml-10 flex  items-center   ">
        
            <img src="/vite.svg" alt="" />
            <span className="font-semibold text-4xl text-blue-500 capitalize">
              blue cloud
            </span>
            <span className=" relative text-md  pt-6  font-medium ">
              Weather App
              <span className="absolute bottom-[-.5rem] left-0 w-full h-[3px]  bg-blue-500"></span>
            </span>
          </div>
          <div className="nav-menu hidden md:flex justify-end items-center px-10 space-x-12 w-full">
            <li>
              <Link to="/" className="text-md font-medium ">
                 Home
              </Link>
            </li>
            <li>
              <Link to="/news" className="text-md font-medium ">
                 Weather News
              </Link>
            </li>
            <li>
              <Link to="/favourites" className="text-md font-medium ">
                Favourites
              </Link>
            </li>
            <li>
              <Link to="/alerts" className="text-md font-medium ">
                Alerts
              </Link>
            </li>
            <li>
               <ThemeToggle />
            </li>
          </div>
        </div>
      </nav>
    </>
  );
}
