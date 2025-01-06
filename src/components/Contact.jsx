// import axios from "axios";
// import React from "react";
// import { useForm } from "react-hook-form";
// import toast from "react-hot-toast";

// function Contact() {
//   const {
//     register,
//     handleSubmit,

//     formState: { errors },
//   } = useForm();

//   const onSubmit = async (data) => {
//     const userInfo = {
//       name: data.name,
//       email: data.email,
//       message: data.message,
//     };
//     try {
//       await axios.post("https://getform.io/f/raeqjora", userInfo);
//       toast.success("Your message has been sent");
//     } catch (error) {
//       console.log(error);
//       toast.error("Something went wrong");
//     }
//   };
//   return (
//     <>
//       <div
//         name="Contact"
//         className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
//       >
//         <h1 className="text-3xl font-bold mb-4">Contact me</h1>
//         <span>Please fill out the form below to contact me</span>
//         <div className=" flex flex-col items-center justify-center mt-5">
//           <form
//             onSubmit={handleSubmit(onSubmit)}
//             // action="https://getform.io/f/raeqjora"
//             // https://getform.io/f/akkkzoza
//             // method="POST"
//             className="bg-slate-200 w-96 px-8 py-6 rounded-xl"
//           >
//             <h1 className="text-xl font-semibold mb-4">Send Your Message</h1>
//             <div className="flex flex-col mb-4">
//               <label className="block text-gray-700">FullName</label>
//               <input
//                 {...register("name", { required: true })}
//                 className="shadow rounded-lg appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 id="name"
//                 name="name"
//                 type="text"
//                 placeholder="Enter your fullname"
//               />
//               {errors.name && <span>This field is required</span>}
//             </div>
//             <div className="flex flex-col mb-4">
//               <label className="block text-gray-700">Email Address</label>
//               <input
//                 {...register("email", { required: true })}
//                 className="shadow rounded-lg appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 id="email"
//                 name="email"
//                 type="text"
//                 placeholder="Enter your email address"
//               />
//               {errors.email && <span>This field is required</span>}
//             </div>
//             <div className="flex flex-col mb-4">
//               <label className="block text-gray-700">Message</label>
//               <textarea
//                 {...register("message", { required: true })}
//                 className="shadow rounded-lg appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 id="message"
//                 name="message"
//                 type="text"
//                 placeholder="Enter your Query"
//               />
//               {errors.message && <span>This field is required</span>}
//             </div>
//             <button
//               type="submit"
//               className="bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-700 duration-300"
//             >
//               Send
//             </button>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Contact;


// ---------------------------------------------------------------------------------------------------------------------------------------------------------



// ---------------------------------------------------------------------------------------------------------------------------------------------------------


// import axios from "axios";
// import React from "react";
// import { useForm } from "react-hook-form";

// function Contact() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

// // const onSubmit = (data) => console.log(data);  

//   const onSubmit = async (data) => {
//     const userInfo = {
//       name: data.name,
//       email: data.email,
//       message: data.message,
//     };
//     try {
//       await axios.post("https://getform.io/f/akkkzoza", userInfo);
//       alert("Your message has been sent");
//     } catch (error) {
//       console.log(error);
//       alert("Something went wrong");
//     }
//   };

//   return (
//     <>
//       <div
//         name="Contact"
//         className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10 relative bg-black text-white"
//       >
//         <h1 className="text-3xl font-bold mb-4">Contact me</h1>
//         <span>Please fill out the form below to contact me</span>
//         <div className="flex flex-col items-center justify-center mt-5">
//           <form
//             onSubmit={handleSubmit(onSubmit)}
//             className="w-96 px-8 py-6 border-2 border-green-500 rounded-xl"
//           >
//             <h1 className="text-xl font-semibold mb-4">Send Your Message</h1>
//             <div className="flex flex-col mb-4">
//               <label className="block text-white">Full Name</label>
//               <input
//                 {...register("name", { required: true })}
//                 className="shadow rounded-lg appearance-none border py-2 px-3 text-white-700 leading-tight focus:outline-none focus:shadow-outline"
//                 id="name"
//                 name="name"
//                 type="text"
//                 placeholder="Enter your full name"
//               />
//               {errors.name && (
//                 <span className="text-red-500 text-sm">This field is required</span>
//               )}
//             </div>
//             <div className="flex flex-col mb-4">
//               <label className="block text-white">Email Address</label>
//               <input
//                 {...register("email", { required: true })}
//                 className="shadow rounded-lg appearance-none border py-2 px-3 text-white-700 leading-tight focus:outline-none focus:shadow-outline"
//                 id="email"
//                 name="email"
//                 type="email"
//                 placeholder="Enter your email address"
//               />
//               {errors.email && (
//                 <span className="text-red-500 text-sm">This field is required</span>
//               )}
//             </div>
//             <div className="flex flex-col mb-4">
//               <label className="block text-white">Message</label>
//               <textarea
//                 {...register("message", { required: true })}
//                 className="shadow rounded-lg appearance-none border py-2 px-3 text-white-700 leading-tight focus:outline-none focus:shadow-outline"
//                 id="message"
//                 name="message"
//                 placeholder="Enter your query"
//               />
//               {errors.message && (
//                 <span className="text-red-500 text-sm">This field is required</span>
//               )}
//             </div>
//             <button
//               type="submit"
//               className="bg-green-600 text-white rounded-xl px-3 py-2 hover:bg-green-700 duration-300"
//             >
//               Send
//             </button>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// }

// // export default Contact;
// import axios from "axios";
// import React from "react";
// import { useForm } from "react-hook-form";
// import { motion } from "framer-motion";

// function Contact() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = async (data) => {
//     const userInfo = {
//       name: data.name,
//       email: data.email,
//       message: data.message,
//     };
//     try {
//       await axios.post("https://getform.io/f/akkkzoza", userInfo);
//       alert("Your message has been sent");
//     } catch (error) {
//       console.log(error);
//       alert("Something went wrong");
//     }
//   };

//   return (
//     <motion.div
//       name="Contact"
//       initial={{ opacity: 0, y: 50 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8 }}
//       className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10 bg-gradient-to-b from-black via-gray-900 to-black text-white"
//     >
//       {/* Header Section */}
//       <motion.h1
//         className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 mb-4"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.2 }}
//       >
//         Contact Me
//       </motion.h1>
//       <motion.span
//         className="block text-center text-gray-400 mb-6"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.4 }}
//       >
//         Please fill out the form below to contact me
//       </motion.span>

//       {/* Form Section */}
//       <div className="flex flex-col items-center justify-center">
//         <motion.form
//           onSubmit={handleSubmit(onSubmit)}
//           className="w-full max-w-lg px-8 py-6 bg-gray-800 rounded-xl shadow-lg"
//           initial={{ scale: 0.9, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           transition={{ duration: 0.5 }}
//         >
//           <motion.h2
//             className="text-2xl font-semibold mb-4 text-center text-gradient bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-500"
//             initial={{ x: -50, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             transition={{ delay: 0.6 }}
//           >
//             Send Your Message
//           </motion.h2>

//           {/* Full Name Input */}
//           <div className="flex flex-col mb-4">
//             <label className="block text-white mb-2">Full Name</label>
//             <input
//               {...register("name", { required: true })}
//               className="shadow rounded-lg appearance-none border py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
//               id="name"
//               name="name"
//               type="text"
//               placeholder="Enter your full name"
//             />
//             {errors.name && (
//               <span className="text-red-500 text-sm">This field is required</span>
//             )}
//           </div>

//           {/* Email Address Input */}
//           <div className="flex flex-col mb-4">
//             <label className="block text-white mb-2">Email Address</label>
//             <input
//               {...register("email", { required: true })}
//               className="shadow rounded-lg appearance-none border py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
//               id="email"
//               name="email"
//               type="email"
//               placeholder="Enter your email address"
//             />
//             {errors.email && (
//               <span className="text-red-500 text-sm">This field is required</span>
//             )}
//           </div>

//           {/* Message Input */}
//           <div className="flex flex-col mb-4">
//             <label className="block text-white mb-2">Message</label>
//             <textarea
//               {...register("message", { required: true })}
//               className="shadow rounded-lg appearance-none border py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
//               id="message"
//               name="message"
//               placeholder="Enter your query"
//             />
//             {errors.message && (
//               <span className="text-red-500 text-sm">This field is required</span>
//             )}
//           </div>

//           {/* Submit Button */}
//           <motion.button
//             type="submit"
//             className="bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 text-white font-bold px-4 py-2 rounded-lg w-full mt-4 hover:scale-105 transition-transform duration-300"
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             Send Message
//           </motion.button>
//         </motion.form>
//       </div>
//     </motion.div>
//   );
// }

// export default Contact;

import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false); // Step 1: Create the state for submission status

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      message: data.message,
    };
    try {
      await axios.post("https://getform.io/f/akkkzoza", userInfo);
      alert("Your message has been sent");
      setIsSubmitted(true); // Step 2: Set the state to true after form submission
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  };

  return (
    <motion.div
      name="Contact"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10 bg-gradient-to-b from-black via-gray-900 to-black text-white"
    >
      {/* Header Section */}
      <motion.h1
        className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Contact Me
      </motion.h1>
      <motion.span
        className="block text-center text-gray-400 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Please fill out the form below to contact me
      </motion.span>

      {/* Form Section */}
      <div className="flex flex-col items-center justify-center">
        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-lg px-8 py-6 bg-gray-800 rounded-xl shadow-lg"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h2
            className="text-2xl font-semibold mb-4 text-center text-gradient bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-500"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Send Your Message
          </motion.h2>

          {/* Full Name Input */}
          <div className="flex flex-col mb-4">
            <label className="block text-white mb-2">Full Name</label>
            <input
              {...register("name", { required: true })}
              className={`shadow rounded-lg appearance-none border py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline ${isSubmitted ? 'text-black' : 'text-white'}`} // Step 3: Apply conditional styling
              id="name"
              name="name"
              type="text"
              placeholder="Enter your full name"
            />
            {errors.name && (
              <span className="text-red-500 text-sm">This field is required</span>
            )}
          </div>

          {/* Email Address Input */}
          <div className="flex flex-col mb-4">
            <label className="block text-white mb-2">Email Address</label>
            <input
              {...register("email", { required: true })}
              className={`shadow rounded-lg appearance-none border py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline ${isSubmitted ? 'text-black' : 'text-white'}`} // Step 3: Apply conditional styling
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email address"
            />
            {errors.email && (
              <span className="text-red-500 text-sm">This field is required</span>
            )}
          </div>

          {/* Message Input */}
          <div className="flex flex-col mb-4">
            <label className="block text-white mb-2">Message</label>
            <textarea
              {...register("message", { required: true })}
              className={`shadow rounded-lg appearance-none border py-2 px-3 text-grey-900 leading-tight focus:outline-none focus:shadow-outline ${isSubmitted ? 'text-black' : 'text-white'}`} // Step 3: Apply conditional styling
              id="message"
              name="message"
              placeholder="Enter your query"
            />
            {errors.message && (
              <span className="text-red-500 text-sm">This field is required</span>
            )}
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            className="bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 text-white font-bold px-4 py-2 rounded-lg w-full mt-4 hover:scale-105 transition-transform duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </motion.div>
  );
}

export default Contact;
