import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../Firebase/Firebase.init";
// import toast from "react-hot-toast";

export default function RequireAuth({ children }) {
  //   let auth = useAuth(auth);
  const [loggeduser] = useAuthState(auth);
  //   const authuser = getAuth(auth);
  let location = useLocation();
  if (!loggeduser) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    // toast.error("You Have To Login First!",{id:"login alert"});

    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}
