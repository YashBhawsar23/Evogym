// import React, { useState } from "react";

// const Signup = () => {
//   const [islogin, setIsLogin] = useState(true);

//   return (
//     <>
//       <div className="container flex h-screen w-full items-center justify-center">
//         <div className="form-container w-72 rounded-lg bg-white p-5 shadow-md">
//           <div className="form-toggle mb-5 flex justify-between">
//             <button
//               className={
//                 islogin
//                   ? "rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white"
//                   : ""
//               }
//               onClick={() => setIsLogin(true)}
//             >
//               Login
//             </button>
//             <button
//               className={
//                 !islogin
//                   ? "rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white"
//                   : ""
//               }
//               onClick={() => setIsLogin(false)}
//             >
//               SignUp
//             </button>
//           </div>
//           {islogin ? (
//             <>
//               <div className="form flex flex-col">
//                 <input
//                   type="email"
//                   placeholder="Enter your email"
//                   className="mb-2 rounded-md border border-gray-300 p-2"
//                 />
//                 <input
//                   type="password"
//                   placeholder="Enter your password"
//                   className="mb-2 rounded-md border border-gray-300 p-2"
//                 />
//                 <a href="#" className="mt-2 text-right text-blue-500">
//                   Forgot Password?
//                 </a>
//                 <button className="cursor-pointer rounded-md bg-[#033452] p-2 text-white">
//                   Login
//                 </button>
//                 <p className="mt-2 text-center">
//                   Not a Member?{" "}
//                   <a
//                     href="#"
//                     onClick={() => setIsLogin(false)}
//                     className="text-blue-500"
//                   >
//                     Sign Up now
//                   </a>
//                 </p>
//               </div>
//             </>
//           ) : (
//             <div className="form-container w-72 rounded-lg bg-white p-5 shadow-md">
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="mb-2 rounded-md border border-gray-300 p-2"
//               />
//               <input
//                 type="password"
//                 placeholder="Enter your password"
//                 className="mb-2 rounded-md border border-gray-300 p-2"
//               />
//               <input
//                 type="password"
//                 placeholder="Confirm your password"
//                 className="mb-2 rounded-md border border-gray-300 p-2"
//               />

//               <button className="rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white">
//                 Sign Up
//               </button>
//               <p className="mt-2 text-center">
//                 Already a Member?
//                 <a
//                   href="#"
//                   onClick={() => setIsLogin(true)}
//                   className="text-blue-500"
//                 >
//                   Sign In now
//                 </a>
//               </p>
//             </div>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Signup;

// CGPT CodeX xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

import React, { useState } from "react";
import Navbar from "@/scenes/navbar";
import Footer from "@/scenes/footer";

const Signup = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic
  };

  return (
    <>
      <Navbar />
      <div className="container flex h-screen w-full items-center justify-center bg-slate-100">
        <div className="form-container w-80 rounded-lg bg-white p-5 shadow-md">
          <div className="form-toggle mb-5 flex justify-between">
            <button
              className={`rounded-md px-10 py-2 hover:bg-primary-500 hover:text-white ${
                isLogin ? "bg-secondary-500" : "bg-gray-200"
              }`}
              onClick={() => setIsLogin(true)}
              type="button"
            >
              Sign In
            </button>
            <button
              className={`rounded-md px-10 py-2 hover:bg-primary-500 hover:text-white ${
                !isLogin ? "bg-secondary-500" : "bg-gray-200"
              }`}
              onClick={() => setIsLogin(false)}
              type="button"
            >
              Sign Up
            </button>
          </div>
          <form className="form flex flex-col" onSubmit={handleSubmit}>
            {isLogin ? (
              <>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="mb-2 rounded-md border border-gray-300 p-2"
                  required
                />
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="mb-2 rounded-md border border-gray-300 p-2"
                  required
                />
                <a href="#" className="mt-2 text-right text-blue-500">
                  Forgot Password?
                </a>
                <button
                  type="submit"
                  className="rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white"
                >
                  Sign In
                </button>
                <p className="mt-2 text-center">
                  Not a Member?{" "}
                  <a
                    href="#"
                    onClick={() => setIsLogin(false)}
                    className="text-blue-500"
                    role="button"
                  >
                    Sign Up now
                  </a>
                </p>
              </>
            ) : (
              <>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="mb-2 rounded-md border border-gray-300 p-2"
                  required
                />
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="mb-2 rounded-md border border-gray-300 p-2"
                  required
                />
                <input
                  type="password"
                  placeholder="Confirm your password"
                  className="mb-2 rounded-md border border-gray-300 p-2"
                  required
                />
                <button
                  type="submit"
                  className="rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white"
                >
                  Sign Up
                </button>
                <p className="mt-2 text-center">
                  Already a Member?{" "}
                  <a
                    href="#"
                    onClick={() => setIsLogin(true)}
                    className="text-blue-500"
                    role="button"
                  >
                    Sign In now
                  </a>
                </p>
              </>
            )}
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Signup;

//  XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

// import React, { useState } from "react";

// const Signup = () => {
//   const [islogin, setIsLogin] = useState(true);

//   return (
//     <>
//       <div className="container flex h-screen items-center justify-center bg-red-100">
//         <div className="form-container max-w-full rounded-lg bg-white p-5 shadow-md">
//           <div className="form-toggle mb-5 flex justify-between">
//             <button
//               className={
//                 islogin
//                   ? "rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white"
//                   : ""
//               }
//               onClick={() => setIsLogin(true)}
//             >
//               Login
//             </button>
//             <button
//               className={
//                 !islogin
//                   ? "rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white"
//                   : ""
//               }
//               onClick={() => setIsLogin(false)}
//             >
//               SignUp
//             </button>
//           </div>
//           {islogin ? (
//             <>
//               <div className="form flex flex-col">
//                 <input
//                   type="email"
//                   placeholder="Enter your email"
//                   className="mb-2 rounded-md border border-gray-300 p-2"
//                 />
//                 <input
//                   type="password"
//                   placeholder="Enter your password"
//                   className="mb-2 rounded-md border border-gray-300 p-2"
//                 />
//                 <a href="#" className="mt-2 text-right text-blue-500">
//                   Forgot Password?
//                 </a>
//                 <button className="cursor-pointer rounded-md bg-[#033452] p-2 text-white">
//                   Login
//                 </button>
//                 <p className="mt-2 text-center">
//                   Not a Member?{" "}
//                   <a
//                     href="#"
//                     onClick={() => setIsLogin(false)}
//                     className="text-blue-500"
//                   >
//                     Sign Up now
//                   </a>
//                 </p>
//               </div>
//             </>
//           ) : (
//             <>
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="mb-2 rounded-md border border-gray-300 p-2"
//               />
//               <input
//                 type="password"
//                 placeholder="Enter your password"
//                 className="mb-2 rounded-md border border-gray-300 p-2"
//               />
//               <input
//                 type="password"
//                 placeholder="Confirm your password"
//                 className="mb-2 rounded-md border border-gray-300 p-2"
//               />

//               <button className="rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white">
//                 Sign Up
//               </button>
//               <p className="mt-2 text-center">
//                 Already a Member?
//                 <a
//                   href="#"
//                   onClick={() => setIsLogin(true)}
//                   className="text-blue-500"
//                 >
//                   Sign In now
//                 </a>
//               </p>
//             </>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Signup;
