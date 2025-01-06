// import React from "react";

// // Correct paths for images inside the 'public' folder
// function Experiance() {
//   const cardItem = [
//     {
//       id: 1,
//       logo: "/html.png",  // Correct path to html.png in public folder
//       name: "HTML",
//     },
//     {
//       id: 2,
//       logo: "/css.jpg",  // Correct path to css.jpg in public folder
//       name: "CSS",
//     },
//     {
//       id: 3,
//       logo: "/java.png",  // Correct path to java.png in public folder
//       name: "Java",
//     },
//     {
//       id: 4,
//       logo: "/js.webp",  // Correct path to javascript.png in public folder
//       name: "JavaScript",
//     },
//     {
//       id: 5,
//       logo: "/oracle.png",  // Correct path to oracle.png in public folder
//       name: "Oracle",
//     },
//     {
//       id: 6,
//       logo: "/spring.png",  // Correct path to spring.png in public folder
//       name: "Spring",
//     },
//     {
//       id: 7,
//       logo: "/springBoot.jpg",  // Correct path to springBoot.jpg in public folder
//       name: "Spring Boot",
//     },
//   ];

//   return (
//     <div
//       name="Experiance"
//       className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
//     >
//       <div>
//         <h1 className="text-3xl font-bold mb-5 text-center text-gradient">
//           Experience
//         </h1>
//         <p className="text-center text-gray-300 mb-5">
//           I have more than 2 years of experience with the technologies listed below.
//         </p>
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-7 my-3">
//           {cardItem.map(({ id, logo, name }) => (
//             <div
//               className="flex flex-col items-center justify-center border-2 rounded-full md:w-[200px] md:h-[200px] shadow-md p-4 cursor-pointer hover:scale-110 hover:bg-gray-800 duration-300"
//               key={id}
//             >
//               <img
//                 src={logo} 
//                 className="w-[120px] h-[120px] rounded-full"
//                 alt={name}
//               />
//               <div className="mt-2 font-semibold text-lg text-gray-200">{name}</div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Experiance;

// import React from "react";

// // Correct paths for images inside the 'public' folder
// function Experiance() {
//   const cardItem = [
//     {
//       id: 1,
//       logo: "/html.png", // Correct path to html.png in public folder
//       name: "HTML",
//     },
//     {
//       id: 2,
//       logo: "/css.jpg", // Correct path to css.jpg in public folder
//       name: "CSS",
//     },
//     {
//       id: 3,
//       logo: "/java.png", // Correct path to java.png in public folder
//       name: "Java",
//     },
//     {
//       id: 4,
//       logo: "/js.webp", // Correct path to javascript.png in public folder
//       name: "JavaScript",
//     },
//     {
//       id: 5,
//       logo: "/oracle.png", // Correct path to oracle.png in public folder
//       name: "Oracle",
//     },
//     {
//       id: 6,
//       logo: "/spring.png", // Correct path to spring.png in public folder
//       name: "Spring",
//     },
//     {
//       id: 7,
//       logo: "/springBoot.jpg", // Correct path to springBoot.jpg in public folder
//       name: "Spring Boot",
//     },
//   ];

//   return (
//     <div
//       name="Experience"
//       className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16 text-white bg-black"
//     >
//       <div>
//         <h1 className="text-4xl font-extrabold text-center text-gradient mb-6">
//           My Technical Experience
//         </h1>
//         <p className="text-center text-gray-400 mb-6 font-light">
//           I have more than 2 years of experience with the technologies listed
//           below.
//         </p>
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-7 my-8">
//           {cardItem.map(({ id, logo, name }) => (
//             <div
//               className="relative flex flex-col items-center justify-center border-4 border-gradient-to-r from-[#00d4ff] via-[#39ff14] to-[#ff00ff] rounded-full md:w-[220px] md:h-[220px] shadow-lg p-6 cursor-pointer hover:scale-110 transform transition-all duration-300 ease-in-out hover:bg-black-800 hover:shadow-2xl"
//               key={id}
//             >
//               <img
//                 src={logo}
//                 className="w-[130px] h-[130px] rounded-full border-4 border-white shadow-xl transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:border-[#9b4d96]"
//                 alt={name}
//               />
//               <div className="absolute inset-0 bg-gradient-to-r from-transparent to-transparent hover:from-[#00d4ff] hover:to-[#ff073a] rounded-full opacity-50 transition-all duration-300 ease-in-out"></div>
//               <div className="mt-3 font-semibold text-lg text-white">{name}</div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Experiance;

import React from "react";

function Experience() {
  const cardItem = [
    {
      id: 1,
      logo: "/html.png",
      name: "HTML",
    },
    {
      id: 2,
      logo: "/css.jpg",
      name: "CSS",
    },
    {
      id: 3,
      logo: "/java.png",
      name: "Java",
    },
    {
      id: 4,
      logo: "/js.webp",
      name: "JavaScript",
    },
    {
      id: 5,
      logo: "/oracle.png",
      name: "Oracle",
    },
    {
      id: 6,
      logo: "/spring.png",
      name: "Spring",
    },
    {
      id: 7,
      logo: "/springBoot.jpg",
      name: "Spring Boot",
    },
  ];

  return (
    <div
      name="Experience"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16 text-white bg-black"
    >
      <div>
        {/* Section Title */}
        <h1 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] via-[#39ff14] to-[#ff00ff] mb-6">
          My Technical Experience
        </h1>
        <p className="text-center text-gray-400 mb-6 font-light">
          I have more than 2 years of experience with the technologies listed
          below.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 my-8">
          {cardItem.map(({ id, logo, name }) => (
            <div
              className="relative flex flex-col items-center justify-center border-[6px] border-transparent rounded-full w-[160px] h-[160px] md:w-[220px] md:h-[220px] shadow-lg p-6 cursor-pointer hover:scale-110 transform transition-all duration-300 ease-in-out hover:bg-gradient-to-r from-[#000] via-[#1a1a1a] to-[#2b2b2b] group"
              key={id}
            >
              {/* Glowing Image */}
              <div className="relative">
                <img
                  src={logo}
                  className="w-[90px] h-[90px] md:w-[130px] md:h-[130px] rounded-full border-[4px] border-white shadow-xl transition-transform duration-300 ease-in-out group-hover:scale-105 group-hover:shadow-[0px_0px_15px_5px_rgba(57,255,20,0.6),0px_0px_25px_10px_rgba(255,0,255,0.4)]"
                  alt={name}
                />
                {/* Glowing Border Effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#00d4ff] via-[#39ff14] to-[#ff00ff] opacity-0 group-hover:opacity-100 blur-lg transition-all duration-300"></div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-transparent group-hover:from-[#00d4ff] group-hover:via-[#39ff14] group-hover:to-[#ff073a] rounded-full opacity-50 transition-all duration-300 ease-in-out"></div>

              {/* Name Label */}
              <div className="mt-3 font-semibold text-lg text-white bg-gradient-to-r from-[#00d4ff] to-[#ff00ff] text-transparent bg-clip-text">
                {name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
