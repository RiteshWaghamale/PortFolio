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


import React from "react";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-xl container mx-auto px-6 md:px-12 lg:px-16 py-10 bg-black text-white"
    >
      <div className="space-y-10">
        {/* About Section */}
        <div>
          <h1 className="text-4xl font-extrabold text-center text-green-400 mb-6">
            About Me
          </h1>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed text-center">
     Hi, I’m Ritesh, a Full Stack Developer skilled in both front-end and back-end technologies. I have expertise in HTML,CSS JavaScript, React, Node.js, Spring Boot, MySQL, and MongoDB. I’m also proficient in Java, C++, and AI & ML applications. I’m passionate about continuous learning and always strive to enhance my skills to stay ahead in the tech industry. I aim to create impactful and visually stunning software solutions that leave a lasting impression.
          </p>
        </div>

        {/* Education Section */}
        <div>
          <h2 className="text-2xl font-semibold text-green-500 mb-4">Education & Training</h2>
          <span className="text-gray-300">
            Core Java Certification, Great Learning, 2024 | JavaScript Certification, Great Learning, 2024 | Application of AI Certification, Great Learning, 2024
          </span>
        </div>

        {/* Skills & Expertise Section */}
        <div>
          <h2 className="text-2xl font-semibold text-green-500 mb-4">Skills & Expertise</h2>
          <p className="text-gray-300">
            I am skilled in front-end development using HTML, CSS, JavaScript, and React, and have strong experience in back-end development with Node.js, Express.js, and Spring Boot. I am proficient in MySQL and MongoDB for database management and have hands-on experience with version control tools like Git. I am also familiar with AI & ML applications and work with tools like Linux, Postman, and npm. My expertise spans problem-solving, team collaboration, and applying Agile methodologies for efficient project delivery.
          </p>
        </div>

        {/* Professional Experience Section */}
        <div>
          <h2 className="text-2xl font-semibold text-green-500 mb-4">Professional Experience</h2>
          <p className="text-gray-300">
            During my journey as a developer, I worked on several key projects that enhanced my technical and problem-solving skills. One of the significant projects I developed was the Pharmacy Management System, a comprehensive web-based system for managing pharmacy operations. I used React for the front-end and Spring Boot with MySQL for the back-end. This project taught me how to design and implement full-stack applications, integrating the front-end with back-end technologies. Another notable project was a Document Website, which I built using React and Framer Motion. This website allowed users to upload, download, and view documents with a dynamic and responsive front-end.
          </p>
        </div>

        {/* Achievements & Awards Section */}
        <div>
          <h2 className="text-2xl font-semibold text-green-500 mb-4">Achievements & Awards</h2>
          <span className="text-gray-300">
            Core Java Certification, Great Learning, 2024 | JavaScript Certification, Great Learning, 2024 | Application of AI Certification, Great Learning, 2024
          </span>
        </div>

        {/* Mission Statement Section */}
        <div>
          <h2 className="text-2xl font-semibold text-green-500 mb-4">Mission Statement</h2>
          <p className="text-gray-300">
            My mission is to leverage my skills and creativity to deliver innovative solutions that exceed client expectations and contribute positively to the digital landscape. I am committed to continuous learning and growth, always seeking new challenges and opportunities to expand my horizons.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
