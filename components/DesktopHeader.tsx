"use client";
import { NavMenu } from "@/components/utils/NavMenu";
import Image from "next/image";
import React from "react";
import AuthButtonGroup from "./utils/AuthButtonGroup";

const DesktopHeader = () => {
  return (
    <section className="hidden pb-5 pt-12 font-ubuntu text-white desktop:block desktop:pt-[61px]">
      <div className="relative flex flex-col items-center justify-between px-6 desktop:flex-row desktop:px-40">
        <div className="flex w-full items-center justify-between desktop:w-auto">
          <div className="flex-shrink-0 desktop:mr-[68px]">
            <Image
              src="assets/images/logo.svg"
              height={0}
              width={100}
              alt="logo"
              className="w-[90px] desktop:w-[100px]"
            />
          </div>
          <NavMenu />
        </div>
        <div className="relative w-fit">
          <div className="hidden desktop:block">
            <AuthButtonGroup />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesktopHeader;
