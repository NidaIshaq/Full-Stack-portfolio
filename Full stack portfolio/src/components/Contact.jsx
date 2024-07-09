import React from "react";
// import axios from "axios"
// import toast from 'react-hot-toast';
// import { useForm } from "react-hook-form";
// const Contact = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();
//   const onSubmit = async(data) => {
//     const userInfo = {
//       name: data.name,
//       email: data.email,
//       message: data.email,
//     };
//     try{
//  await axios.post(`${window.location.origin}//getform.io/f/panvmvpa`,userInfo);
//  toast.success("your message has been sent ")
//     }catch(error){
// console.log(error)
// toast.error("something went wrong ")
//     }
//   };

//   return (
//     <div
//       name=" Contact"
//       className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
//     >
//       <h1 className="text-3xl font-bold mb-4">Contact me </h1>
//       <span>Please fill out the form to contact me </span>
//       <div className="flex flex-col items-center justify-center mt-5 ">
//         <form
//           onSubmit={handleSubmit(onSubmit)}
//           // action="https://getform.io/f/panvmvpa"
//           // method="POST"
//           name="name"
//           className="bg-gray-200 w-96 px-8 py-6 rounded-xl"
//         >
//           <h1 className="text-xl font-semibold mb-4">Send your message </h1>
//           <div className="flex flex-col mb-4">
//             <label className="black text-gray-700">full name</label>
//             <input
//               {...register("name", { required: true, maxLength: 20 })}
//               className="shadow rounded-lg appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               type="text"
//               id="name"
//               name="name"
//               placeholder="Enter your full name "
//             />

//             {errors.name && <span>This field is required</span>}
//           </div>
//           <div className="flex flex-col mb-4">
//             <label className="black text-gray-700">email address</label>
//             <input
//               {...register("email", { required: true, maxLength: 20 })}
//               className="shadow rounded-lg appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               type="email"
//               id="email"
//               name="email"
//               placeholder="Enter your email address "
//             />
//             {errors.email && <span>This field is required</span>}
//           </div>
//           <div className="flex flex-col mb-4">
//             <label className="black text-gray-700">Message </label>
//             <textarea
//               {...register("message", { required: true })}
//               className="shadow rounded-lg appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               type="text"
//               id="message"
//               name="message"
//               placeholder="Enter your message"
//             />
//             {errors.message && <span>This field is required</span>}
//           </div>
//           <button
//             type="submit"
//             className="bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-500 "
//           >
//             send
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };


const Contact = () => {
  return (
    <div
      name="Contact"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
      <span>Reach out to me via email</span>
      <button
        className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded"
        onClick={() => window.location.href = 'mailto:ishaqnida7@gmail.com'}
      >
        ishaqnida7@gmail.com
      </button>
    </div>
  );
};

export default Contact;

