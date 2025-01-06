// import React from "react";

// function About() {
//   return (
//     <div
//       name="About"
//       className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
//     >
//       <div>
//         <h1 className="text-3xl font-bold mb-5">About</h1>
//         <p>
//         Hi, I’m Ritesh , a Full Stack Developer skilled in both front-end and back-end technologies. I have expertise in HTML, CSS, JavaScript, React, Node.js, Spring Boot, MySQL, and MongoDB. I’m also proficient in Java, C++, and AI & ML applications.I’m passionate about continuous learning and always strive to enhance my skills to stay ahead in the tech industry. I strive to create impactful and visually stunning Software solutions that leave a lasting impression.
//         </p>
//         <br />
//         <h1 className="text-green-600 font-semibold text-xl">
//           Education & Training
//         </h1>
//         <span>
//           [Degree/Certification], [Institution], [Year] [Degree/Certification],
//           [Institution], [Year] [Relevant Course], [Platform/Institution],
//           [Year]
//         </span>
//         <br />
//         <br />
//         <h1 className="text-green-600 font-semibold text-xl">
//           Skills & Expertise
//         </h1>
//         <span>
//         I am skilled in front-end development using HTML, CSS, JavaScript, and React, and have strong experience in back-end development with Node.js, Express.js, and Spring Boot. I am proficient in MySQL and MongoDB for database management and have hands-on experience with version control tools like Git. I am also familiar with AI & ML applications and work with tools like Linux, Postman, and npm. My expertise spans problem-solving, team collaboration, and applying Agile methodologies for efficient project delivery.
//         </span>
//         <br />
//         <br />
//         <h1 className="text-green-600 font-semibold text-xl">
//           Professional Experience
//         </h1>
//         <span>
//         During my journey as a developer, I worked on several key projects that enhanced my technical and problem-solving skills. One of the significant projects I developed was the Pharmacy Management System, a comprehensive web-based system for managing pharmacy operations. I used React for the front-end and Spring Boot with MySQL for the back-end. This project taught me how to design and implement full-stack applications, integrating the front-end with back-end technologies. I gained practical experience in handling MySQL databases and managing data flow between the front-end and back-end. Additionally, I developed my skills in problem-solving and project management by delivering a complex system. Another notable project was a Document Website, which I built using React and Framer Motion. This website allowed users to upload, download, and view documents with a dynamic and responsive front-end. I used Framer Motion to add smooth animations, enhancing the user interface. Through this project, I improved my knowledge of React, including advanced concepts like hooks and the context API, and developed a deeper understanding of building responsive and interactive web applications.
//         </span>
//         <br />
//         <br />
//         <h1 className="text-green-600 font-semibold text-xl">
//           Achievements & Awards
//         </h1>
//         <span>
//         <span>
//   Core Java Certification, Great Learning, 2024, JavaScript Certification, Great Learning, 2024,
//   Application of AI Certification, Great Learning, 2024
// </span>

//         </span>
//         <br />
//         <br />
//         <h1 className="text-green-600 font-semibold text-xl">
//           Mission Statement
//         </h1>
//         <p>
//           My mission is to leverage my skills and creativity to deliver
//           innovative  solutions that exceed client expectations and
//           contribute positively to the digital landscape. I am committed to
//           continuous learning and growth, always seeking new challenges and
//           opportunities to expand my horizons.
//         </p>
//       </div>
//     </div>
//   );
// }




import React, { useState } from "react";

function About() {
  const [isHovered, setIsHovered] = useState(null);

  return (
    <div
      name="About"
      className="max-w-screen-xl container mx-auto px-6 md:px-12 lg:px-16 py-12 bg-gradient-to-b from-black via-gray-900 to-black text-white"
    >
      <div className="space-y-16">
        {/* About Section */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 mb-6">
            About Me
          </h1>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto transition-transform transform duration-300 hover:scale-105">
            Hi, I’m <span className="text-green-400 font-bold">Ritesh</span>, a{" "}
            <span className="text-blue-400 font-bold">Full Stack Developer</span> skilled in both front-end and back-end technologies. I have expertise in HTML, CSS, JavaScript, React, Node.js, Spring Boot, MySQL, and MongoDB. I’m also proficient in Java, C++, and AI & ML applications. Passionate about continuous learning, I aim to create impactful software solutions that leave a lasting impression.
          </p>
        </div>

        {/* Education Section */}
        <div>
          <h2 className="text-3xl font-bold text-green-400 mb-4 text-center">
            Education & Training
          </h2>
          <div className="space-y-4 md:space-y-6">
            <div
              className="bg-gray-800 p-4 rounded-lg shadow-lg hover:scale-105 transition-transform group"
              onMouseEnter={() => setIsHovered(1)}
              onMouseLeave={() => setIsHovered(null)}
            >
              <h3 className="font-bold text-lg text-green-300">Bachelor of Computer Applications</h3>
              <p className="text-sm text-gray-400">DGCC College, Satara (2021 - 2024)</p>
              <p className="text-sm text-gray-500">8.26 CGPA</p>
              {isHovered === 1 && (
                <div className="text-gray-300 mt-2 text-sm">Focus on full-stack web development and AI & ML applications.</div>
              )}
            </div>
            <div
              className="bg-gray-800 p-4 rounded-lg shadow-lg hover:scale-105 transition-transform group"
              onMouseEnter={() => setIsHovered(2)}
              onMouseLeave={() => setIsHovered(null)}
            >
              <h3 className="font-bold text-lg text-green-300">HSC</h3>
              <p className="text-sm text-gray-400">LBS College, Satara (2019 - 2021)</p>
              <p className="text-sm text-gray-500">68.00%</p>
              {isHovered === 2 && (
                <div className="text-gray-300 mt-2 text-sm">Focused on mathematics and computer science subjects.</div>
              )}
            </div>
          </div>
        </div>

        {/* Skills & Expertise Section */}
        <div>
          <h2 className="text-3xl font-bold text-green-400 mb-4 text-center">
            Skills & Expertise
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            <div className="p-4 rounded-lg shadow-lg hover:scale-105 transition-transform group">
              <div className="text-center">
                <span className="text-2xl text-blue-500 font-bold">Frontend</span>
              </div>
              <ul className="list-disc text-gray-300 ml-6 mt-2">
                <li>HTML, CSS, JavaScript</li>
                <li>React, Tailwind CSS</li>
              </ul>
            </div>
            <div className="p-4 rounded-lg shadow-lg hover:scale-105 transition-transform group">
              <div className="text-center">
                <span className="text-2xl text-blue-500 font-bold">Backend</span>
              </div>
              <ul className="list-disc text-gray-300 ml-6 mt-2">
                <li>Node.js, Express.js</li>
                <li>Spring Boot</li>
              </ul>
            </div>
            <div className="p-4 rounded-lg shadow-lg hover:scale-105 transition-transform group">
              <div className="text-center">
                <span className="text-2xl text-blue-500 font-bold">Databases</span>
              </div>
              <ul className="list-disc text-gray-300 ml-6 mt-2">
                <li>MySQL, MongoDB</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Professional Experience Section */}
        <div>
          <h2 className="text-3xl font-bold text-green-400 mb-4 text-center">
            Professional Experience
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto">
            During my journey as a developer, I worked on several key projects:
            <ul className="list-disc list-inside space-y-3 mt-4">
              <li className="transition-transform transform group hover:scale-110">
                <span className="text-green-300 font-bold">Pharmacy Management System</span>: A comprehensive web-based system built with React, Spring Boot, and MySQL for managing pharmacy operations.
              </li>
              <li className="transition-transform transform group hover:scale-110">
                <span className="text-green-300 font-bold">Document Website</span>: Developed using React and Framer Motion to enhance user experience with dynamic and responsive design.
              </li>
            </ul>
          </p>
        </div>

        {/* Achievements Section */}
        <div>
          <h2 className="text-3xl font-bold text-green-400 mb-4 text-center">
            Achievements & Certifications
          </h2>
          <ul className="list-disc list-inside text-gray-300 max-w-3xl mx-auto space-y-2">
            <li>Core Java Certification, Great Learning, 2024</li>
            <li>JavaScript Certification, Great Learning, 2024</li>
            <li>Application of AI Certification, Great Learning, 2024</li>
          </ul>
        </div>

        {/* Mission Statement Section */}
        <div>
          <h2 className="text-3xl font-bold text-green-400 mb-4 text-center">
            Mission Statement
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed text-center max-w-3xl mx-auto">
            My mission is to leverage my skills and creativity to deliver innovative solutions that exceed client expectations and contribute positively to the digital landscape. I am committed to continuous learning and growth, always seeking new challenges and opportunities to expand my horizons.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
