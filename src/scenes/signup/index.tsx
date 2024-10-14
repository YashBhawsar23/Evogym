// import React, { useState } from "react";
// import Logo from "@/assets/Logo.png";
// import { Link } from "react-router-dom";

// const Signup = () => {
//   const [isLogin, setIsLogin] = useState(true);

//   return (
//     <>
//       <nav className="fixed top-0 z-30 w-full py-6 pt-4">
//         <Link to={"/"}>
//           <img src={Logo} alt="" className="mb-2 h-8" />
//         </Link>
//       </nav>

//       <div className="container flex h-screen w-full items-center justify-center bg-slate-100">
//         <div className="form-container w-80 rounded-lg bg-white p-5 shadow-md">
//           <div className="form-toggle mb-5 flex justify-between">
//             <button
//               className={`rounded-md px-10 py-2 hover:bg-primary-500 hover:text-white ${
//                 isLogin ? "bg-secondary-500" : "bg-gray-200"
//               }`}
//               onClick={() => setIsLogin(true)}
//               type="button"
//             >
//               Sign In
//             </button>
//             <button
//               className={`rounded-md px-10 py-2 hover:bg-primary-500 hover:text-white ${
//                 !isLogin ? "bg-secondary-500" : "bg-gray-200"
//               }`}
//               onClick={() => setIsLogin(false)}
//               type="button"
//             >
//               Sign Up
//             </button>
//           </div>
//           <form className="form flex flex-col">
//             {isLogin ? (
//               <>
//                 <input
//                   type="email"
//                   placeholder="Enter your email"
//                   className="mb-2 rounded-md border border-gray-300 p-2"
//                   required
//                 />
//                 <input
//                   type="password"
//                   placeholder="Enter your password"
//                   className="mb-2 rounded-md border border-gray-300 p-2"
//                   required
//                 />
//                 <a href="#" className="mt-2 text-right text-blue-500">
//                   Forgot Password?
//                 </a>
//                 <button
//                   type="submit"
//                   className="rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white"
//                 >
//                   Sign In
//                 </button>
//                 <p className="mt-2 text-center">
//                   Not a Member?{" "}
//                   <a
//                     href="#"
//                     onClick={() => setIsLogin(false)}
//                     className="text-blue-500"
//                     role="button"
//                   >
//                     Sign Up now
//                   </a>
//                 </p>
//               </>
//             ) : (
//               <>
//                 <input
//                   type="email"
//                   placeholder="Enter your email"
//                   className="mb-2 rounded-md border border-gray-300 p-2"
//                   required
//                 />
//                 <input
//                   type="password"
//                   placeholder="Enter your password"
//                   className="mb-2 rounded-md border border-gray-300 p-2"
//                   required
//                 />
//                 <input
//                   type="password"
//                   placeholder="Confirm your password"
//                   className="mb-2 rounded-md border border-gray-300 p-2"
//                   required
//                 />
//                 <button
//                   type="submit"
//                   className="rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white"
//                 >
//                   Sign Up
//                 </button>
//                 <p className="mt-2 text-center">
//                   Already a Member?{" "}
//                   <a
//                     href="#"
//                     onClick={() => setIsLogin(true)}
//                     className="text-blue-500"
//                     role="button"
//                   >
//                     Sign In now
//                   </a>
//                 </p>
//               </>
//             )}
//           </form>
//         </div>
//       </div>
//       <footer className="text-grey flex flex-col items-center justify-center bg-secondary-500 py-4">
//         <img src={Logo} alt="Logo" className="mb-2 h-10" />
//         <p className="text-center text-sm">
//           Your trusted partner in achieving your fitness goals. Join us today!
//         </p>
//       </footer>
//     </>
//   );
// };

// export default Signup;

import React, { useState } from "react";
import Logo from "@/assets/Logo.png";
import { Link } from "react-router-dom";
import HText from "@/shared/HText";

const Signup = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      <nav className=" w-full bg-secondary-500 py-3 pt-4">
        <Link to={"/"}>
          <img src={Logo} alt="" className="mb-2 h-8" />
        </Link>
      </nav>

      <div className="flex min-h-screen w-full flex-col items-center justify-center bg-slate-100">
        <HText>
          <span className="text-primary-500">JOIN NOW</span> TO GET IN SHAPE
        </HText>
        <p className="my-5">
          Join us today to start your fitness journey. Whether you're here to
          sign in or sign up, we've got you covered!
        </p>
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
          <form className="form flex flex-col">
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
      <footer className="text-grey flex flex-col items-center justify-center bg-secondary-500 py-4">
        <img src={Logo} alt="Logo" className="mb-2 h-10" />
        <p className="text-center text-sm">
          Your trusted partner in achieving your fitness goals. Join us today!
        </p>
      </footer>
    </>
  );
};

export default Signup;
