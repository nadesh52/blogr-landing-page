import Image from "next/image";
import React from "react";

const BottomSection = () => {
  return (
    <section className="desktop:mb-[304px] mb-24 mt-[70px] desktop:mt-[118px]">
      <div className="relative flex flex-col items-center desktop:pt-[184px]">
        <div className="absolute -left-[280px] top-0 hidden desktop:block">
          <Image
            src="blogr-landing-page/assets/images/illustration-laptop-desktop.svg"
            height={0}
            width={974}
            alt="laptop"
          />
        </div>
        <div className="desktop:hidden block">
          <Image
            src="blogr-landing-page/assets/images/illustration-laptop-mobile.svg"
            height={0}
            width={498}
            alt="laptop"
          />
        </div>
        <div className="flex w-full desktop:mt-0 mt-14 justify-center desktop:justify-end">
          <div className="desktop:mr-44 px-10 desktop:px-0 text-center flex desktop:w-[525px] flex-col justify-end font-overpass">
            <div className="mb-[72px]">
              <h4 className="mb-[21px] text-[28px] font-semibold leading-[42px] text-blue-gray-300">
                Free, open, simple
              </h4>
              <span className="text-[16px] font-normal leading-[28px] text-blue-gray-200">
                Blogr is a free and open source application backed by a large
                community of helpful developers. It supports features such as
                code syntax highlighting, RSS feeds, social media integration,
                third-party commenting tools, and works seamlessly with Google
                Analytics. The architecture is clean and is relatively easy to
                learn.
              </span>
            </div>
            <div>
              <h4 className="mb-[21px] text-[28px] font-semibold leading-[42px] text-blue-gray-300">
                Powerful tooling
              </h4>
              <span className="text-[16px] font-normal leading-[28px] text-blue-gray-200">
                Batteries included. We built a simple and straightforward CLI
                tool that makess customization and deployment a breeze, but
                capable of producing even the most complicated sites.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BottomSection;
