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

import React from "react";

// Correct paths for images inside the 'public' folder
function Experiance() {
  const cardItem = [
    {
      id: 1,
      logo: "/html.png", // Correct path to html.png in public folder
      name: "HTML",
    },
    {
      id: 2,
      logo: "/css.jpg", // Correct path to css.jpg in public folder
      name: "CSS",
    },
    {
      id: 3,
      logo: "/java.png", // Correct path to java.png in public folder
      name: "Java",
    },
    {
      id: 4,
      logo: "/js.webp", // Correct path to javascript.png in public folder
      name: "JavaScript",
    },
    {
      id: 5,
      logo: "/oracle.png", // Correct path to oracle.png in public folder
      name: "Oracle",
    },
    {
      id: 6,
      logo: "/spring.png", // Correct path to spring.png in public folder
      name: "Spring",
    },
    {
      id: 7,
      logo: "/springBoot.jpg", // Correct path to springBoot.jpg in public folder
      name: "Spring Boot",
    },
  ];

  return (
    <div
      name="Experience"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16 text-white bg-black"
    >
      <div>
        <h1 className="text-4xl font-extrabold text-center text-gradient mb-6">
          My Technical Experience
        </h1>
        <p className="text-center text-gray-400 mb-6 font-light">
          I have more than 2 years of experience with the technologies listed
          below.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-7 my-8">
          {cardItem.map(({ id, logo, name }) => (
            <div
              className="relative flex flex-col items-center justify-center border-4 border-gradient-to-r from-[#00d4ff] via-[#39ff14] to-[#ff00ff] rounded-full md:w-[220px] md:h-[220px] shadow-lg p-6 cursor-pointer hover:scale-110 transform transition-all duration-300 ease-in-out hover:bg-gray-800 hover:shadow-2xl"
              key={id}
            >
              <img
                src={logo}
                className="w-[130px] h-[130px] rounded-full border-4 border-white shadow-xl transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:border-[#9b4d96]"
                alt={name}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-transparent hover:from-[#00d4ff] hover:to-[#ff073a] rounded-full opacity-50 transition-all duration-300 ease-in-out"></div>
              <div className="mt-3 font-semibold text-lg text-white">{name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experiance;
