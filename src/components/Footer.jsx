import React from 'react';
import { FaGithub, FaLinkedin, FaSquareXTwitter   } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className="footer">
            <p className='font-semibold text-[#1d4cf7] font-mono flex justify-center'>Copyright &copy;  
               {new Date().getFullYear() } <h2 className='ml-2'>All Rights Reserved!</h2>
            </p>
            <h1 className='text-[12px] capitalize'>made with ❤️ by Ayush Sahani</h1>
            <div className='flex justify-center items-center bg-white rounded-md p-4 mt-6 gap-x-8'>
            <p><a href=""> 
<FaGithub className='w-7 h-7'/>
            </a>
            </p>
            <p><a href="">
                <FaLinkedin className='w-7 h-7'/> </a>
            </p>
            <p><a href="">
               < FaSquareXTwitter className='w-7 h-7' /> </a>
            </p>
            </div>
        </div>
    )
}

export default Footer;