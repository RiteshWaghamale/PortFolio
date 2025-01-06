// import React from "react";
// import java from "/java.png";
// import python from "/python.webp";
// import mongoDB from "/mongodb.jpg";
// import express from "/express.png";
// import reactjs from "/reactjs.png";
// import nodejs from "/node.png";
// function PortFolio() {
//   const cardItem = [
//     {
//       id: 1,
//       logo: mongoDB,
//       name: "MongoDB",
//     },
//     {
//       id: 2,
//       logo: express,
//       name: "Express",
//     },
//     {
//       id: 3,
//       logo: reactjs,
//       name: "ReactJS",
//     },
//     {
//       id: 4,
//       logo: nodejs,
//       name: "NodeJS",
//     },
//     {
//       id: 5,
//       logo: python,
//       name: "Python",
//     },
//     {
//       id: 6,
//       logo: java,
//       name: "Java",
//     },
//   ];
//   return (
//     <div
//       name="Portfolio"
//       className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
//     >
//       <div>
//         <h1 className="text-3xl font-bold mb-5">PortFolio</h1>
//         <span className=" underline font-semibold">Featured Projects</span>
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5">
//           {cardItem.map(({ id, logo, name }) => (
//             <div
//               className="md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300"
//               key={id}
//             >
//               <img
//                 src={logo}
//                 className="w-[120px] h-[120px] p-1 rounded-full border-[2px]"
//                 alt=""
//               />
//               <div>
//                 <div className="px-2 font-bold text-xl mb-2">{name}</div>
//                 <p className="px-2 text-gray-700">
//                   Lorem ipsum, dolor sit amet consectetur adipisicing elit.
//                 </p>
//               </div>
//               <div className=" px-6 py-4 space-x-3 justify-around">
//                 <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded">
//                   Video
//                 </button>
//                 <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded">
//                   Source code
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }






// import React, { useState } from "react";
// import java from "/java.png";
// import python from "/python.webp";
// import mongoDB from "/mongodb.jpg";
// import express from "/express.png";
// import reactjs from "/reactjs.png";
// import nodejs from "/node.png";

// function PortFolio() {
//   const [modalOpen, setModalOpen] = useState(false);
//   const [activeProject, setActiveProject] = useState(null);

//   const cardItem = [
//     { id: 1, logo: mongoDB, name: "MongoDB", video: "https://example.com", source: "https://github.com" },
//     { id: 2, logo: express, name: "Express", video: "https://example.com", source: "https://github.com" },
//     { id: 3, logo: reactjs, name: "ReactJS", video: "https://example.com", source: "https://github.com" },
//     { id: 4, logo: nodejs, name: "NodeJS", video: "https://example.com", source: "https://github.com" },
//     { id: 5, logo: python, name: "Python", video: "https://example.com", source: "https://github.com" },
//     { id: 6, logo: java, name: "Java", video: "https://example.com", source: "https://github.com" },
//   ];

//   const handleModalClose = () => setModalOpen(false);

//   return (
//     <div
//       name="Portfolio"
//       className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10 relative bg-black text-white"
//     >
//       <div>
//         <h1 className="text-3xl font-bold mb-5 text-center text-gradient animate__animated animate__fadeIn">
//           Portfolio
//         </h1>
//         <span className="text-center block underline font-semibold text-2xl text-pink-400 mb-8">Featured Projects</span>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 my-10">
//           {cardItem.map(({ id, logo, name, video, source }) => (
//             <div
//               className="border-2 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 p-4 cursor-pointer hover:bg-gray-900 hover:text-white"
//               key={id}
//               onClick={() => setActiveProject({ video, source, name })}
//             >
//               <div className="flex justify-center mb-4">
//                 <img
//                   src={logo}
//                   className="w-[120px] h-[120px] rounded-full border-4 border-gray-300 transform hover:rotate-6 transition-transform duration-500"
//                   alt={name}
//                 />
//               </div>
//               <div className="text-center">
//                 <div className="font-bold text-xl text-gradient mb-2">{name}</div>
//                 <p className="text-gray-300 text-sm mb-4">
//                   Explore this technology in detail. Click to learn more.
//                 </p>
//               </div>
//               <div className="flex justify-between mt-6">
//                 <button
//                   className="bg-gradient-to-r from-blue-500 to-purple-600 hover:bg-gradient-to-l text-white font-bold px-4 py-2 rounded-lg transition-colors duration-300"
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     setModalOpen(true);
//                   }}
//                 >
//                   Video
//                 </button>
//                 <button
//                   className="bg-gradient-to-r from-green-500 to-yellow-500 hover:bg-gradient-to-l text-white font-bold px-4 py-2 rounded-lg transition-colors duration-300"
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     window.open(source, "_blank");
//                   }}
//                 >
//                   Source Code
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Modal for Video */}
//       {modalOpen && (
//         <div
//           className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-70 z-50"
//           onClick={handleModalClose}
//         >
//           <div className="bg-white p-8 rounded-lg w-3/4 md:w-1/2" onClick={(e) => e.stopPropagation()}>
//             <h2 className="text-2xl font-bold mb-4 text-gradient">{activeProject?.name} - Video</h2>
//             <div className="relative pb-56.25%">
//               <iframe
//                 className="absolute top-0 left-0 w-full h-full"
//                 src={activeProject?.video}
//                 title="Project Video"
//                 frameBorder="0"
//                 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//               ></iframe>
//             </div>
//             <button
//               className="bg-red-500 hover:bg-red-600 text-white font-bold px-4 py-2 rounded-lg mt-4"
//               onClick={handleModalClose}
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default PortFolio;
import React, { useState } from "react";
import java from "/java.png";
import python from "/python.webp";
import mongoDB from "/mongodb.jpg";
import express from "/express.png";
import reactjs from "/reactjs.png";
import nodejs from "/node.png";

function PortFolio() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(null);

  const cardItem = [
    { id: 1, logo: mongoDB, name: "MongoDB", video: "https://example.com", source: "https://github.com" },
    { id: 2, logo: express, name: "Express", video: "https://example.com", source: "https://github.com" },
    { id: 3, logo: reactjs, name: "ReactJS", video: "https://example.com", source: "https://github.com" },
    { id: 4, logo: nodejs, name: "NodeJS", video: "https://example.com", source: "https://github.com" },
    { id: 5, logo: python, name: "Python", video: "https://example.com", source: "https://github.com" },
    { id: 6, logo: java, name: "Java", video: "https://example.com", source: "https://github.com" },
  ];

  const handleModalClose = () => setModalOpen(false);

  return (
    <div
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10 relative bg-black text-white"
    >
      <div>
        {/* Header Section */}
        <h1 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 mb-5 animate-fadeIn">
          Portfolio
        </h1>
        <span className="text-center block underline font-semibold text-2xl text-pink-400 mb-8 animate-pulse">
          Featured Projects
        </span>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 my-10">
          {cardItem.map(({ id, logo, name, video, source }) => (
            <div
              className="group relative border-[2px] border-gray-700 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 p-6 cursor-pointer bg-gradient-to-b from-gray-800 to-black hover:bg-gray-900"
              key={id}
              onClick={() => setActiveProject({ video, source, name })}
            >
              {/* Logo with Hover Effect */}
              <div className="flex justify-center mb-4">
                <img
                  src={logo}
                  className="w-[100px] h-[100px] rounded-full border-4 border-gray-300 transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500"
                  alt={name}
                />
              </div>
              {/* Card Text */}
              <div className="text-center">
                <div className="font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-400 to-purple-500 mb-2">
                  {name}
                </div>
                <p className="text-gray-400 text-sm">
                  Explore this technology in detail. Click to learn more.
                </p>
              </div>
              {/* Buttons */}
              <div className="flex justify-between mt-6">
                <button
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:bg-gradient-to-l text-white font-bold px-4 py-2 rounded-lg transition-all duration-300 hover:shadow-lg"
                  onClick={(e) => {
                    e.stopPropagation();
                    setModalOpen(true);
                  }}
                >
                  Video
                </button>
                <button
                  className="bg-gradient-to-r from-green-500 to-yellow-500 hover:bg-gradient-to-l text-white font-bold px-4 py-2 rounded-lg transition-all duration-300 hover:shadow-lg"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(source, "_blank");
                  }}
                >
                  Source Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Section */}
      {modalOpen && (
        <div
          className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-80 z-50 transition-all duration-300"
          onClick={handleModalClose}
        >
          <div className="bg-gray-800 p-8 rounded-lg w-11/12 md:w-2/3 lg:w-1/2 shadow-xl relative text-white transition-transform transform scale-95 hover:scale-100">
            <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-500">
              {activeProject?.name} - Video
            </h2>
            <div className="relative pb-[56.25%]">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={activeProject?.video}
                title="Project Video"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <button
              className="bg-red-500 hover:bg-red-600 text-white font-bold px-4 py-2 rounded-lg mt-4 absolute top-4 right-4"
              onClick={handleModalClose}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default PortFolio;
