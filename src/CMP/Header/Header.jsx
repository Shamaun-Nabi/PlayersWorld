import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { NavLink } from "react-router-dom";
import auth from "../../Firebase/Firebase.init";
import logo from "../../assets/logo.png";
import shortlogo from "../../assets/shortLogo.png";

export default function Header() {
  const [user, loading, error] = useAuthState(auth);
  const [profileTab, setProfileTab] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  // console.log(user.photoURL)

  if (loading) {
    return (
      <>
        <h3 className="text-center">Loading...</h3>
      </>
    );
  }
  if (error) {
    console.log(error.message);
  }
  // console.log(user.photoURL);

  const profileHandeler = () => {
    setProfileTab(!profileTab);
  };

  const mobileMenuHandeler = () => {
    setMobileMenu(!mobileMenu);
  };

  const signOutHandeler = () => {
    signOut(auth);
    toast.error("You Are logged out !");
  };

  return (
    <>
      <>
        {/* This example requires Tailwind CSS v2.0+ */}
        <nav className="bg-gray-800">
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                {/* <img src={user?.photoURL} alt="" /> */}
                <button
                  type="button"
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  {/*
      Icon when menu is closed.

      Heroicon name: outline/menu

      Menu open: "hidden", Menu closed: "block"
    */}
                  <svg
                    onClick={mobileMenuHandeler}
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                  {/*
      Icon when menu is open.

      Heroicon name: outline/x

      Menu open: "block", Menu closed: "hidden"
    */}
                  <svg
                    className="hidden h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="block lg:hidden h-8 w-auto"
                    src={shortlogo}
                    alt="Workflow"
                  />
                  <img
                    className="hidden lg:block h-10 w-auto"
                    src={logo}
                    alt="Workflow"
                  />
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4 items-center">
                    {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                    {/* <span
                      className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                      aria-current="page"
                    >
                      Dashboard
                    </span> */}

                    <NavLink
                      to="/"
                      className={({ isActive }) =>
                        isActive
                          ? "bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                      }
                    >
                      Home
                    </NavLink>
                    <NavLink
                      to="/team"
                      className={({ isActive }) =>
                        isActive
                          ? "bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                      }
                    >
                      Team
                    </NavLink>
                    <NavLink
                      to="/players"
                      className={({ isActive }) =>
                        isActive
                          ? "bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                      }
                    >
                      Players
                    </NavLink>
                    <NavLink
                      to="/about"
                      className={({ isActive }) =>
                        isActive
                          ? "bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                      }
                    >
                      About
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Profile dropdown */}
                <div className="ml-3 relative">
                  <div>
                    <button
                      onClick={profileHandeler}
                      type="button"
                      className={
                        user
                          ? "bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                          : "hidden"
                      }
                      id="user-menu-button"
                      aria-expanded="false"
                      aria-haspopup="true"
                    >
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src={user ? user?.photoURL : ""}
                        alt="notFound"
                      />
                    </button>
                  </div>
                  {/*
      Dropdown menu, show/hide based on menu state.

      Entering: "transition ease-out duration-100"
        From: "transform opacity-0 scale-95"
        To: "transform opacity-100 scale-100"
      Leaving: "transition ease-in duration-75"
        From: "transform opacity-100 scale-100"
        To: "transform opacity-0 scale-95"
    */}
                  {user && (
                    <div
                      className={`origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none ${
                        profileTab ? "block" : "hidden"
                      }`}
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="user-menu-button"
                      tabIndex={-1}
                    >
                      <div>
                        <NavLink
                          to="/profile"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-slate-500 hover:text-white"
                          role="menuitem"
                          tabIndex={-1}
                          id="user-menu-item-0"
                        >
                          {user?.displayName}
                        </NavLink>
                        <NavLink
                          to="/"
                          onClick={signOutHandeler}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-slate-500 hover:text-white"
                          role="menuitem"
                          tabIndex={-1}
                          id="user-menu-item-2"
                        >
                          Sign out
                        </NavLink>
                      </div>
                    </div>
                  )}
                </div>
                <NavLink
                  to="/login"
                  className={
                    user
                      ? "hidden"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  }
                >
                  Login
                </NavLink>
              </div>
            </div>
          </div>
          {/* Mobile menu, show/hide based on menu state. */}

          <div
            className={`${mobileMenu ? "block" : "hidden"}`}
            id="mobile-menu"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
              <NavLink
                to="/"
                className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
                aria-current="page"
              >
                Menu Options
              </NavLink>
              <NavLink
                to="/team"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Team
              </NavLink>
              <NavLink
                to="/allplayers"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Players
              </NavLink>
              <NavLink
                to="/about"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                About
              </NavLink>
            </div>
          </div>
        </nav>
      </>
    </>
  );
}
