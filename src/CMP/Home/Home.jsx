import React from "react";
import Banner from "../../assets/wider.jpg";
import Zoom from "react-reveal/Zoom";
import { Flip } from "react-reveal";
import { Link } from "react-router-dom";
import auth from "../../Firebase/Firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
export default function Home() {
  const [user, loading, error] = useAuthState(auth);
  return (
    <>
      {/* SLIDER AREA */}
      <div
        className="h-[320px] md:h-[640px]"
        style={{
          backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${Banner}`,
          backgroundSize: "cover",
          // backgroundRepeat: "repeat",
        }}
      >
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 text-white">
            <div className="flex justify-center items-center order-2  mt-20 md:mt-0 text-center md:text-left p-4 ">
              <div className="">
                <Zoom cascade>
                  <h3 className=" text-2xl md:text-3xl lg:text-5xl font-bold ">
                    Welcome To Crictet Villa
                  </h3>
                </Zoom>
                <p className="text-slate-400 mt-4">
                  {user ? (
                    <span className="text-green-500 text-xl font-semibold">
                     <span className="text-teal-500">Welcome</span> Mr.{user?.displayName}
                    </span>
                  ) : (
                    <span className=" animate-pulse text-red-500">
                      Your Are a New User. So You have to Register First To See
                      our Players and Team.
                    </span>
                  )}
                  <br />
                  We are Very happy to See you In Our Site
                </p>
                <Link to="/players">
                  <button className="w-50 bg-slate-800 p-3 md:p-4 mt-4 text-center rounded-md font-semibold">
                    <Flip left cascade>
                      Explore Our Players
                    </Flip>
                  </button>
                </Link>
              </div>
            </div>
            <div className="order-1 hidden md:block">
              <div className="">
                <Zoom>
                  <img
                    className=" h-[320px] md:h-[640px]"
                    src="https://assets.iplt20.com/ipl/IPLHeadshot2022/1.png"
                    alt=""
                  />
                </Zoom>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
