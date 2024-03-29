import React, { useEffect, useState } from "react";
import {
  useAuthState,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../Firebase/Firebase.init";

export default function Login() {
  const [signInWithEmailAndPassword, loginuser, loginloading, loginerror] =
    useSignInWithEmailAndPassword(auth);
  const [user] = useAuthState(auth);
  const [getLoginInfo, setLoginInfo] = useState({});

  // console.log(user);
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const [signInWithGoogle, loading, error] = useSignInWithGoogle(auth);

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
      toast.success("Login SuccessFull");
    }
  }, [user]);

  if (loginloading) {
    return <>Loading..</>;
  }

  const loginUser = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(getLoginInfo.email, getLoginInfo.userPassword);
    navigate("/");
    toast.success("Login SuccessFull");
  };

  const signInForm = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    getLoginInfo[name] = value;
    // console.log(newInfo);
  };

  const googleHandeler = () => {
    signInWithGoogle();
  };

  return (
    <>
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 ">
        <div className="max-w-md w-full h-[520px] space-y-8 border-2 p-8 shadow-md">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Login to your account
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={loginUser}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  onBlur={signInForm}
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  onBlur={signInForm}
                  id="password"
                  name="userPassword"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <a
                  href="/"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Forgot your password?
                </a>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <svg
                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                Login
              </button>
              <Link to="/register">
                <p className="p-2 text-center ">
                  Don't Have Any Account??{" "}
                  <span className="font-semibold hover:underline hover:text-indigo-700 p-1">
                    {" "}
                    Register here
                  </span>
                </p>
              </Link>

              <div className="mt-4 flex items-center gap-2">
                <div className="border fill-cyan-500 w-52 border-indigo-200"></div>
                <p className="font-semibold">OR</p>
                <div className="border fill-cyan-500 w-52 border-indigo-200"></div>
              </div>
            </div>
          </form>
          {/* Google Login */}
          <button
            onClick={googleHandeler}
            className=" w-full flex justify-center py-2 px-4 border  mt-3 border-transparent text-sm font-medium rounded-md bg-slate-300 text-slate-700  hover:focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <span className=" flex gap-2 items-center ">
              <FcGoogle />
              <span className="">Google</span>
            </span>
          </button>
        </div>
      </div>
    </>
  );
}
