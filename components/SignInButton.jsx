import Image from "next/image";
import React from "react";
import GoogleLogo from "public/google-logo.png";

const SignInButton = () => {
  return (
    <button className="flex items-center gap-4 shadow-xl rounded-lg pl-3">
      <Image src={GoogleLogo} height={40} width={40} />
      <span className="bg-blue-500 text-white px-4 py-3">
        Sign in with Google
      </span>
    </button>
  );
};

export default SignInButton;
