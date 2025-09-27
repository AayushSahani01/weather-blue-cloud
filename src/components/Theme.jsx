import React from 'react';
import { BsMoonStarsFill } from "react-icons/bs";
import { IoMdSunny } from "react-icons/io";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    
    useEffect(() => {
        if( localStorage.getItem('theme') === 'dark'){
            document.documentElement.classList.add('dark');
            setIsDarkMode(true);
        }
        
    },[])
    const toggleTheme = () => {
        if(isDarkMode){
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            setIsDarkMode(false);
        }else{
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            setIsDarkMode(true);
        }
    }
    return (
         <button onClick={toggleTheme} className=" rounded-full transition-all duration-200 ease-in-out cursor-pointer transform active:scale-90 hover:transform hover:scale-110 p-1"
            aria-label="Toggle theme">
            
            {!isDarkMode ?  (<IoMdSunny className="h-7 w-8 text-yellow-300"/>) : (<BsMoonStarsFill className="h-7 w-8 text-blue-800"/>)
            }
         </button>
    )
};

export default ThemeToggle;