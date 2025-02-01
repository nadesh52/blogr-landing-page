import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <section className="rounded-tr-[105px] bg-blue-dark-100 pt-[74px] desktop:pb-0 pb-[68px] desktop:h-[360px] desktop:pl-[164px] desktop:pr-[360px] desktop:pt-[70px]">
      <div className="flex flex-col items-center desktop:items-start font-ubuntu text-white desktop:w-[920px] desktop:flex-row">
        <div className="desktop:flex-0 desktop:mr-[185px] desktop:flex-shrink-0">
          <Image
            src="assets/images/logo.svg"
            height={0}
            width={110}
            alt="logo"
            className="w-[100px] desktop:w-[103px]"
          />
        </div>
        <div className="mt-[74px] flex flex-col justify-between text-center desktop:mt-[2px] desktop:w-[640px] desktop:flex-row desktop:text-left">
          <div className="mb-[38px] flex flex-col desktop:mb-0">
            <h6 className="desktop:text-md mb-[30px] text-lg desktop:text-base font-normal desktop:mt-[2px]">
              Product
            </h6>
            <a href="#" className="mb-[9px] hover:underline">
              Overview
            </a>
            <a href="#" className="mb-[9px] hover:underline">
              Pricing
            </a>
            <a href="#" className="mb-[9px] hover:underline">
              Marketplace
            </a>
            <a href="#" className="mb-[9px] hover:underline">
              Features
            </a>
            <a href="#" className="mb-[9px] hover:underline">
              Integrations
            </a>
          </div>
          <div className="mb-[38px] flex flex-col desktop:mb-0">
            <h6 className="desktop:text-md mb-[30px] text-lg desktop:text-base font-normal desktop:mt-[2px]">
              Company
            </h6>
            <a href="#" className="mb-[9px] hover:underline">
              About
            </a>
            <a href="#" className="mb-[9px] hover:underline">
              Team
            </a>
            <a href="#" className="mb-[9px] hover:underline">
              Blog
            </a>
            <a href="#" className="mb-[9px] hover:underline">
              Careers
            </a>
          </div>
          <div className="mb-[38px] flex flex-col desktop:mb-0">
            <h6 className="desktop:text-md mb-[30px] text-lg desktop:text-base font-normal desktop:mt-[2px]">
              Connect
            </h6>
            <a href="#" className="mb-[9px] hover:underline">
              Contact
            </a>
            <a href="#" className="mb-[9px] hover:underline">
              Newsletter
            </a>
            <a href="#" className="mb-[9px] hover:underline">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
