import React from "react";

export default function Header() {
  return (
    <>
    <nav className="border-b  border-gray-300 shadow-sm">
        <div className=" flex items-center rounded-lg py-2">
            <div className="w-full ml-10 flex gap-1.5 items-center   ">
            <img src="/vite.svg" alt="" />
                <span className="font-semibold text-4xl text-blue-500">Blue Cloud</span> 
                <span className="text-xs text-gray-800 pt-6 font-medium">Weather App</span>
            </div>
            <div className="nav-menu hidden md:flex justify-end items-center px-10 space-x-12 w-full"> 
                <li>
                    <h2>
                        <h3 className="text-md font-medium ">Home</h3>
                    </h2>
                </li>
                <li>
                    <h2>
                        <h3 className="text-md font-medium ">Weather News</h3>
                    </h2>
                </li>
                <li>
                    <h2>
                        <h3 className="text-md font-medium ">Favorites</h3>
                    </h2>
                </li>
                <li>
                    <h2>
                        <h3 className="text-md font-medium ">Alert</h3>
                    </h2>
                </li>
                <li>
                    <h2>
                        <h3 className="text-md font-medium ">Theme</h3>
                    </h2>
                </li>
            </div>
        </div>
     
     
    </nav>
    
      </>
  );
}
