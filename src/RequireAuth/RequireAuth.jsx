import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import {
  useAuthState,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import auth from "../Firebase/Firebase.init";
import EmailVarifiedCmp from "../CMP/EmailVarified/EmailVarifiedCmp";
// import toast from "react-hot-toast";

export default function RequireAuth({ children }) {
  const [loggeduser] = useAuthState(auth);
  // console.log(loggeduser)
  const [sendEmailVerification, sending, error] =
    useSendEmailVerification(auth);
  let location = useLocation();

  if (!loggeduser) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (!loggeduser?.emailVerified) {
    console.log("Email is herer", loggeduser?.email);
    return (
      <>
        <EmailVarifiedCmp />
      </>
    );
  }

  return children;
}
