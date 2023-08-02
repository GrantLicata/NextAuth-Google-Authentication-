"use client";

import Image from "next/image";
import React from "react";
import GoogleLogo from "public/google-logo.png";
import { signIn } from "next-auth/react";

const SignInButton = () => {
  return (
    <button
      onClick={() => signIn("google")}
      className="flex items-center gap-4 shadow-xl rounded-lg pl-3"
    >
      <Image
        src={GoogleLogo}
        height={40}
        width={40}
        alt="Google image for signin button"
      />
      <span className="bg-blue-500 text-white px-4 py-3">
        Sign in with Google
      </span>
    </button>
  );
};

export default SignInButton;
