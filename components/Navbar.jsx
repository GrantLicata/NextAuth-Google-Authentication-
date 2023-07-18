import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="p-4 flex justify-between items-center shadow-md">
      <Link className="font-bold text-lg text-blue-700" href={"/"}>
        NextAuth Google Authentication
      </Link>
      <button className="bg-slate-900 text-white px-6 py-2 rounded-md">
        Sign In
      </button>
    </div>
  );
};

export default Navbar;
