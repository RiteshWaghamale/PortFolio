import React from 'react'
import pict from "/MyPic.jpg";
import { ReactTyped } from "react-typed";

import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa6";

// import { FaFacebook } from "react-icons/fa";
// import { FaLinkedin } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";
// import { FaTelegram } from "react-icons/fa6";



import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
const Home = () => {
  return (
    <>
    <div
    name="Home"
     className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
      <div className='flex flex-col md:flex-row' >

        <div className='md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1'>
        <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 animate-welcome">
  Welcome In My Profile
</span>
            <div className='flex space-x-1 text-2xl md:text-4xl'>

            <h1 className=''>Hello, I'm a </h1>
            {/* <span>Devloper</span> */}
           
            <ReactTyped
        className="text-green-700 font-bold"
        strings={[
    " <span style='color: red;'>Developer  💻</span>",
    " <span style='color: orange;'>Programmer  🚀</span>",
    " <span style='color: yellow;'>Coder  🎯</span>",
    " <span style='color: lightgreen;'>Problem Solver 🔧</span>",
     ]}
  typeSpeed={40}
  backSpeed={50}
  loop={true}
/>
            </div >
          
            <p className="text-base md:text-lg text-gray-300 leading-relaxed">
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-yellow-400 to-red-600  font-bold text-xl md:text-2xl">
     I’m RITESH RAJENDRA WAGHAMALE , </span> a skilled <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 font-extrabold text-xl md:text-2xl">
    Full-Stack Developer</span> with expertise in building modern, scalable web applications. I am proficient in technologies like React, Node.js, Spring Boot, MongoDB, MySQL, and have strong command over Java, C++, JavaScript, HTML, CSS, and related frameworks. My experience spans designing responsive interfaces, developing robust backends, and optimizing performance for seamless user experiences. I am committed to delivering innovative solutions, continuously upgrading my skills, and contributing to impactful projects that make a difference.
</p>

            <br />

        {/* socialMediaItems */}

    {/* <div>
      <h1>Available On</h1>
      <FaFacebook />
      <FaLinkedin />
      <IoLogoYoutube />
      <FaTelegram />
      
    </div> */}
     <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
        <div className="  space-y-2">
                <h1 className="font-bold text-center animate-textGlow  ">Available on</h1>
                <ul className="flex space-x-5">
                  <li>
                    <a href="https://www.facebook.com/share/15h5Kndw93/?mibextid=qi2Omg" target="_blank">
                      <FaFacebook  className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/ritesh-waghamale-b849822b7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">
                      <FaLinkedin className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/_riteshh.1/profilecard/?igsh=MW00MzVsOHJ3bDhjeQ==" target="_blank">
                      <FaInstagram className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://x.com/Riteshwaghamale?t=M-lM0fe7eM-gT3UwjMBfTw&s=09" target="_blank">
                      <FaTwitter className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                </ul>
                </div>

                <div className=" space-y-2">
                <h1 className="font-bold text-center animate-textGlow  ">Currently working on</h1>
                <div className="flex space-x-5">
                  <SiMongodb className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <SiExpress className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <FaReact className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <FaNodeJs className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                </div>
              </div>
              </div>
          
        </div>

        {/* <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1">
            <img
              src={pict}
              className="rounded-full md:w-[400px] md:h-[400px]"
              alt=""
            />
          </div> */}

          {/* photo effect */}

    
<div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1 relative flex justify-center items-center group">
  {/* Outer Glowing Ring */}
  <div className="absolute w-[400px] h-[360px] rounded-full bg-gradient-to-r from-[#f0f3f4] via-[#5de246] to-[#dad8d3] blur-2xl opacity-90 group-hover:animate-pulse shadow-[0_0_30px_10px_rgba(255,0,255,0.8),0_0_40px_20px_rgba(57,255,20,0.6),0_0_50px_30px_rgba(0,212,255,0.7)]"></div>

  {/* Inner Animated Ring */}
  <div className="absolute w-[320px] h-[320px] rounded-full bg-gradient-to-r from-[#f0f3f4] via-[#5de246] to-[#da30a7] blur-lg opacity-75 animate-spin-slow group-hover:animate-pulse"></div>

  {/* Profile Image */}
  <img
    src={pict}
    className="relative z-10 rounded-full md:w-[400px] md:h-[400px] border-4 border-gray-300 shadow-xl transition-transform duration-300 ease-in-out hover:scale-125 group-hover:rotate-3 group-hover:shadow-2xl"
    alt=""
  />
</div>







          </div>
    </div>
    <br />
    <hr />
    
    </>
  )
}

export default Home