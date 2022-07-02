import { sendEmailVerification } from "firebase/auth";
import React from "react";
import { useAuthState, useSendEmailVerification } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import auth from "../../Firebase/Firebase.init";

export default function EmailVarifiedCmp() {
    const [sendEmailVerification, sending, error] = useSendEmailVerification(
        auth
      );
  const [user] = useAuthState(auth);
  return (
    <>
      <div className="container mx-auto text-center mt-4">
        <div className="py-8 shadow-md border-2">
          <h3 className="text-xl font-semibold">Hi, {user.displayName}</h3>
          <p className="text-green- font-semibold text-3xl mt-3">
            Please Verify Your Email
          </p>
          <p className="mt-3 text-lg ">
            You're Almost There. We sent an Email to <br />
            <span className="font-bold">{user?.email}</span> <br />
            <span>
              Just Click on the link in that email to Complete your Registration
            </span>
          </p>
          <p className="mt-5 font-semibold">Still Can't Find Email?</p>
          <button
            onClick={async () => {
              await sendEmailVerification();
              toast("Verification Email Has Been Sent To Your Mail");
            }}
            className="p-2 mt-2 bg-green-600 text-white  rounded-md hover:bg-green-700"
          >
            Resend Email
          </button>
        </div>
      </div>
    </>
  );
}
