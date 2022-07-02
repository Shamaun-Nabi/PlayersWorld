import { sendEmailVerification } from "firebase/auth";
import React, { useState } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../Firebase/Firebase.init";

export default function Register() {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, {
      sendEmailVerification: true,
    });
  const [updateProfile, updating, updateProfileError] = useUpdateProfile(auth);

  const [userInfo, setUserInfo] = useState({});
  const navigate = useNavigate();



  if (loading) {
    return <>Loading..</>;
  }
  if (updating) {
    return <>Updating..</>;
  }

  const getFormInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    userInfo[name] = value;
  };
  const registerUser = async (event) => {
    event.preventDefault();
    if (userInfo.userName.length < 3) {
      return toast.error("At least 3 character");
    }
    if (userInfo.password.length < 6) {
      return toast.error("Password must be 6 or Upper");
    }
    if (userInfo.password !== userInfo.confrimPassword) {
      return toast.error("Password mismatch");
    } else {
      await createUserWithEmailAndPassword(userInfo.email, userInfo.password);
      console.log(userInfo.userName);
      await updateProfile({ displayName: userInfo.userName });
      toast.success("Registration Successfull");
      navigate("/");

      // navigate("/");
    }
    console.log(user);
  };

  return (
    <>
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 ">
        <div className="max-w-md w-full h-[500px] space-y-8 border-2 p-8 shadow-md">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Create A New Account
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={registerUser}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="name" className="sr-only">
                  Your Name
                </label>
                <input
                  onBlur={getFormInput}
                  id="name"
                  name="userName"
                  type="text"
                  autoComplete="userName"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Your Name  "
                />
              </div>
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  onBlur={getFormInput}
                  id="email_address"
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
                  onBlur={getFormInput}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Confirm Password
                </label>
                <input
                  onBlur={getFormInput}
                  id="confirm-password"
                  name="confrimPassword"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Confirm Password"
                />
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
                Register
              </button>
              <Link to="/login">
                <p className="p-2 text-center ">
                  Already Have an Account??{" "}
                  <span className="font-semibold hover:underline hover:text-indigo-700 p-1">
                    Sign in here
                  </span>
                </p>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
