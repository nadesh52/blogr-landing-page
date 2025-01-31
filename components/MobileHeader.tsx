"use client";
import { NavMenu } from "@/components/utils/NavMenu";
import Image from "next/image";
import React, { useState } from "react";
import AuthButtonGroup from "./utils/AuthButtonGroup";
import MobileNavMenu from "./utils/MobileNavMenu";

const MobileHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <section className="absolute block w-full pb-5 pt-12 font-ubuntu text-white desktop:hidden desktop:pt-[59px]">
      <div className="relative flex flex-col items-center justify-between px-6 desktop:flex-row desktop:px-40">
        <div className="flex w-full items-center justify-between desktop:w-auto">
          <div className="flex-shrink-0 desktop:mr-[68px]">
            <Image
              src="blogr-landing-page/assets/images/logo.svg"
              height={0}
              width={100}
              alt="logo"
              className="w-[90px] desktop:w-[100px]"
            />
          </div>
          <div className="hidden desktop:block">
            <NavMenu />
          </div>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="block desktop:hidden"
          >
            <Image
              src="blogr-landing-page/assets/images/icon-close.svg"
              height={0}
              width={34}
              alt="menu-icon"
              className={`${isMenuOpen ? "block" : "hidden"}`}
            />
            <Image
              src="blogr-landing-page/assets/images/icon-hamburger.svg"
              height={0}
              width={34}
              alt="menu-icon"
              className={`${isMenuOpen ? "hidden" : "block"}`}
            />
          </button>
        </div>
        <div className="relative w-full">
          <div className="hidden desktop:block">
            <AuthButtonGroup />
          </div>
          <div
            className={` ${isMenuOpen ? "block" : "hidden"} absolute mt-[40px] block w-[326px] rounded bg-white p-8 text-black shadow-2xl desktop:hidden`}
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
        </div>
      </div>
    </section>
  );
};

export default MobileHeader;
