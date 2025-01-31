import React from 'react'
import MobileNavMenu from './MobileNavMenu';

const MobileMenu = () => {
  return (
    <div
      className={`absolute mt-[40px] block w-[326px] rounded bg-white p-8 text-black shadow-2xl desktop:hidden`}
    >
      <MobileNavMenu />
      <hr className="my-6" />
      <div className="flex w-full flex-col items-center justify-center gap-4 pt-4 font-overpass">
        <a href="#" className="text-lg font-medium">
          Login
        </a>
        <a
          href="#"
          className="rounded-full bg-gradient-to-r from-red-light-100 to-red-light-200 px-10 py-[10px] font-medium text-white"
        >
          Sign Up
        </a>
      </div>
    </div>
  );
}

export default MobileMenu