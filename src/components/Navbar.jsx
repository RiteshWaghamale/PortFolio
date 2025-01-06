// import React, { useState } from 'react'
// import pic from "/photo.avif";
// import { CiMenuBurger } from "react-icons/ci";
// import { IoClose } from "react-icons/io5";


// const Navbar = () => {

//   const [menu, setmenu] = useState(false)

//   const navItems = [
//     {
//       id: 1,
//       text:'Home'
//     },
//     {
//       id: 2,
//       text:'About'
//     },
//     {
//       id: 3,
//       text:'Portfolio'
//     },
//     {
//       id: 4,
//       text:'Experiance'
//     },
//     {
//       id: 5,
//       text:'Contact'
//     }
//   ]
//   return (
//     <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 h-20 shadow-md shadow-white fixed left-0 right-0 top-0'> 
//     <div className='flex justify-between items-center h-20'>
//         <div className='flex space-x-2 '>
//             <img src={pic} className='h-12 w-12 rounded-lg' alt="" />
//             <h1 className='font-semibold cursor-pointer text-red-500 text-3xl'>R<span className='text-xl'>itesh</span>
//             <p className='text-sm'>Software Engineer</p></h1>
//         </div>
//         {/* // Desktoop Navbar */}
//         <div >
           
//              <ul className=' hidden md:flex gap-12'>
//                { navItems.map(({id , text})=> 
//                ( <li className='hover:scale-105 duration-200 cursor-pointer' key={id}>{text}</li>)
//               ) } 
//             </ul>
//     <div onClick={()=>setmenu(!menu)} className='md:hidden'>{menu?<CiMenuBurger size={24}/> : <IoClose size={24}/> }   </div>
//         </div>
//     </div>
//     {/* // Mobile Navbar */}
//     {
//       menu &&(
//     <div>
//     <ul className='md:hidden flex flex-col items-center justify-center gap-4 h-screen'>
//                 {/* <li>Home</li>
//                 <li>About</li>
//                 <li>Portfolio</li>
//                 <li>Experiance</li>
//                 <li>Contact</li> */}
//                 { navItems.map(({id , text})=> 
//                ( <li className='hover:scale-105 duration-200 font-semibold cursor-pointer' key={id}>{text}</li>)
//               ) } 
//             </ul>
//     </div>
        
//       )
//     }
//     </div>
//   )
// }

// export default Navbar



// import React, { useState } from "react";
// import pic from "/photo.avif";
// import { CiMenuBurger } from "react-icons/ci";
// import { IoClose } from "react-icons/io5";
// import { Link } from "react-scroll";

// const Navbar = () => {
//   const [menu, setMenu] = useState(false);

//   const navItems = [
//     { id: 1, text: "Home" },
//     { id: 2, text: "About" },
//     { id: 3, text: "Portfolio" },
//     { id: 4, text: "Experience" },
//     { id: 5, text: "Contact" },
//   ];

//   return (
//     <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-20 shadow-md bg-black fixed left-0 right-0 top-0 z-50">
//       <div className="flex justify-between items-center  h-20">
//         {/* Logo */}
//         <div className="flex space-x-3 items-center">
//           <img
//             src={pic}
//             className="h-12 w-12 rounded-lg border-2 border-gray-300"
//             alt="Logo"
//           />
//           <div className="text-white">
//           <h1 className="font-semibold cursor-pointer text-2xl text-white group relative">
//   <span className="group-hover:text-red-500 transition-all duration-500 transform group-hover:scale-110">
//     R
//   </span>
//   <span className="group-hover:text-yellow-500 transition-all duration-500 transform group-hover:scale-110">
//     itesh
//   </span>
//   {/* Glowing underline effect */}
//   <span className="absolute inset-x-0 bottom-0 h-[3px] bg-gradient-to-r from-blue-400 via-purple-500 to-pink-600 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-lg"></span>
// </h1>

//             <p className="text-sm font-light">Software Engineer</p>
//           </div>
//         </div>

//         {/* Desktop Navbar */}
//         <ul className="hidden md:flex gap-10 text-white">
//           {navItems.map(({ id, text }) => (
//             <li
//               className="group hover:text-yellow-500 hover:scale-110 hover:underline transform duration-300 cursor-pointer font-medium relative"
//               key={id}
//             >
//               {/* link */}
//               <Link 
//               to={text}
//               smooth={true}
//               duration={500}
//               offset={-70}
//               activeClass="active">
//               <span className="transition-all duration-500 opacity-100 group-hover:opacity-100 group-hover:translate-x-0 group-hover:scale-110 translate-x-[-10px] scale-90 group-hover:shadow-lg group-hover:shadow-[#ff0019]">
//                 {text}
//               </span>
              
//               </Link>



//               {/* <span className="transition-all duration-500 opacity-100 group-hover:opacity-100 group-hover:translate-x-0 group-hover:scale-110 translate-x-[-10px] scale-90 group-hover:shadow-lg group-hover:shadow-[#ff0019]">
//                 {text}
//               </span> */}
//             </li>
//           ))}
//         </ul>

//         {/* Hamburger Menu */}
//         <div
//           onClick={() => setMenu(!menu)}
//           className="md:hidden text-white cursor-pointer"
//         >
//           {menu ? < IoClose size={28} /> : < CiMenuBurger size={28} />}
//         </div>
//       </div>

//       {/* Mobile Navbar */}
//       {menu && (
//         <div className="absolute top-20 left-0 w-full bg-black bg-opacity-95 text-white">
//           <ul className="flex flex-col items-center justify-center gap-6 h-screen">
//             {navItems.map(({ id, text }) => (
//               <li
//                 className="hover:text-yellow-500 hover:scale-110 hover:underline transform duration-300 cursor-pointer font-semibold text-lg"
//                 key={id}
//               >

//                   <Link
//                     onClick={() => setMenu(!menu)}
//                     to={text}
//                     smooth={true}
//                     duration={500}
//                     offset={-70}
//                     activeClass="active"
//                   >
//                     <span className="group-hover:opacity-100 group-hover:scale-110 text-white group-hover:text-yellow-500 group-hover:shadow-lg group-hover:shadow-[#ff0004]">
//                   {text}
//                 </span>
//                   </Link>
                
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import pic from "/photo.avif";
import { CiMenuBurger } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { Link } from "react-scroll";
import { motion } from "framer-motion"; // Importing Framer Motion

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const navItems = [
    { id: 1, text: "Home" },
    { id: 2, text: "About" },
    { id: 3, text: "Portfolio" },
    { id: 4, text: "Experience" },
    { id: 5, text: "Contact" },
  ];

  return (
    <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-20 shadow-md bg-black fixed left-0 right-0 top-0 z-50">
      <div className="flex justify-between items-center h-20">
        {/* Logo */}
        <div className="flex space-x-3 items-center">
          <motion.img
            src={pic}
            className="h-12 w-12 rounded-lg border-2 border-gray-300"
            alt="Logo"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
          <div className="text-white">
            <motion.h1
              className="font-semibold cursor-pointer text-2xl text-white group relative"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="group-hover:text-red-500 transition-all duration-500 transform group-hover:scale-110">
                R
              </span>
              <span className="group-hover:text-yellow-500 transition-all duration-500 transform group-hover:scale-110">
                itesh
              </span>
              {/* Glowing underline effect */}
              <span className="absolute inset-x-0 bottom-0 h-[3px] bg-gradient-to-r from-blue-400 via-purple-500 to-pink-600 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-lg"></span>
            </motion.h1>
            <motion.p
              className="text-sm font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Software Engineer
            </motion.p>
          </div>
        </div>

        {/* Desktop Navbar */}
        <ul className="hidden md:flex gap-10 text-white">
          {navItems.map(({ id, text }) => (
            <motion.li
              className="group hover:text-yellow-500 hover:scale-110 hover:underline transform duration-300 cursor-pointer font-medium relative"
              key={id}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 * id }}
            >
              {/* link */}
              <Link 
                to={text}
                smooth={true}
                duration={500}
                offset={-70}
                activeClass="active"
              >
                <span className="transition-all duration-500 opacity-100 group-hover:opacity-100 group-hover:translate-x-0 group-hover:scale-110 translate-x-[-10px] scale-90 group-hover:shadow-lg group-hover:shadow-[#ff0019]">
                  {text}
                </span>
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* Hamburger Menu */}
        <div
          onClick={() => setMenu(!menu)}
          className="md:hidden text-white cursor-pointer"
        >
          {menu ? < IoClose size={28} /> : < CiMenuBurger size={28} />}
        </div>
      </div>

      {/* Mobile Navbar */}
      {menu && (
        <motion.div
          className="absolute top-20 left-0 w-full bg-black bg-opacity-95 text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ul className="flex flex-col items-center justify-center gap-6 h-screen">
            {navItems.map(({ id, text }) => (
              <motion.li
                className="hover:text-yellow-500 hover:scale-110 hover:underline transform duration-300 cursor-pointer font-semibold text-lg"
                key={id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 * id }}
              >
                <Link
                  onClick={() => setMenu(!menu)}
                  to={text}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  activeClass="active"
                >
                  <span className="group-hover:opacity-100 group-hover:scale-110 text-white group-hover:text-yellow-500 group-hover:shadow-lg group-hover:shadow-[#ff0004]">
                    {text}
                  </span>
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
