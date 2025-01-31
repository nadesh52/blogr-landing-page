import React from "react";

const AuthButtonGroup = () => {
  return (
    <div className="mt-4 flex w-full flex-col items-center justify-center gap-8 desktop:mt-0 desktop:w-auto desktop:flex-row desktop:justify-end">
      <a href="#">Login</a>
      <a
        href="#"
        className="rounded-full bg-white px-6 py-2 text-red-light-300 hover:bg-red-light-300 hover:text-white desktop:px-10 desktop:py-3"
      >
        Sign Up
      </a>
    </div>
  );
};

export default AuthButtonGroup;
