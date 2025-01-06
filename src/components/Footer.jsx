// import React from "react";
// import {
//   FaFacebook,
//   FaTwitter,
//   FaInstagram,
//   FaLinkedinIn,
// } from "react-icons/fa6";
// function Footer() {
//   return (
//     <>
//       <hr />
//       <footer className="py-12">
//         <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
//           <div className=" flex flex-col items-center justify-center">
//             <div className="flex space-x-4">
//               <FaFacebook size={24} />
//               <FaTwitter size={24} />
//               <FaInstagram size={24} />
//               <FaLinkedinIn size={24} />
//             </div>
//             <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center">
//               <p className="text-sm">
//                 &copy; 2024 Your Company. All rights reserved.
//               </p>
//               <p className="text-sm">Supportive Partner ❤️ Ritesh</p>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </>
//   );
// }

// export default Footer;

import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";

function Footer() {
  return (
    <>
      <hr className="border-t border-gray-700 mb-8" />
      <footer className="bg-black py-12 text-white">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className="flex flex-col items-center justify-center">
            {/* Social Icons */}
            <div className="flex space-x-6 mb-8">
              <a
                href="https://www.facebook.com/share/15h5Kndw93/?mibextid=qi2Omg"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-600 transition duration-300 hover:shadow-xl hover:shadow-blue-500"
              >
                <FaFacebook
                  size={30}
                  className="hover:scale-110 transition-all duration-200"
                />
              </a>
              <a
                href="https://x.com/Riteshwaghamale?t=M-lM0fe7eM-gT3UwjMBfTw&s=09"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400 transition duration-300 hover:shadow-xl hover:shadow-blue-400"
              >
                <FaTwitter
                  size={30}
                  className="hover:scale-110 transition-all duration-200"
                />
              </a>
              <a
                href="https://www.instagram.com/_riteshh.1/profilecard/?igsh=MW00MzVsOHJ3bDhjeQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-pink-500 transition duration-300 hover:shadow-xl hover:shadow-pink-500"
              >
                <FaInstagram
                  size={30}
                  className="hover:scale-110 transition-all duration-200"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/ritesh-waghamale-b849822b7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-800 transition duration-300 hover:shadow-xl hover:shadow-blue-800"
              >
                <FaLinkedinIn
                  size={30}
                  className="hover:scale-110 transition-all duration-200"
                />
              </a>
            </div>

            {/* Footer Text */}
            <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center">
              <p className="text-sm text-gray-300">
                &copy; 2025 Your Company. All rights reserved.
              </p>
             
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
