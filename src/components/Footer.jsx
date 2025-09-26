import React from 'react';
import { FaGithub, FaLinkedin, FaSquareXTwitter   } from "react-icons/fa6";

const Footer = () => {
    return (
        <div>
            <div className='flex flex-col justify-center items-center bg-[#141f40] p-4 mt-6 gap-x-8 text-white'>
            <span className='font-semibold font-mono flex justify-center'>Copyright &copy;  
               {new Date().getFullYear() } <b className='ml-2'>All Rights Reserved!</b>
            </span>
            <p className='text-[12px] capitalize'>made with ❤️ by Ayush Sahani</p>
            <div className='flex gap-x-4 pt-4'>
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
        </div>
    )
}

export default Footer;