import Image from "next/image";
import React from "react";

const MidSection = () => {
  return (
    <div className="relative">
      <div className="absolute -top-[184px] z-10">
        <Image
          src="assets/images/illustration-phones.svg"
          height={0}
          width={550}
          alt="mobile"
          className="block desktop:hidden"
        />
      </div>
      <section className="mt-[270px] h-[620px] overflow-hidden desktop:overflow-visible rounded-bl-[105px] rounded-tr-[105px] bg-gradient-to-b from-blue-gray-400 to-blue-gray-500 desktop:mt-[4px] desktop:h-[400px] desktop:w-full desktop:bg-gradient-to-r">
        <div className="relative h-[400px] bg-pattern-cirlce bg-[580px_] bg-mobile-circle bg-no-repeat desktop:bg-[550px_] desktop:bg-desktop-circle">
          <div className="absolute -top-[69px] left-[126px]">
            <Image
              src="assets/images/illustration-phones.svg"
              height={0}
              width={550}
              alt="mobile"
              className="hidden desktop:block"
            />
          </div>
          <div className="flex desktop:mr-44 desktop:justify-end">
            <div className="w-[525px] px-10 pt-[230px] text-center desktop:text-left font-overpass text-white desktop:pt-[120px]">
              <h2 className="mb-[25px] text-[40px] font-normal leading-10 -tracking-[0.07rem]">
                State of the Art Infrastructure
              </h2>
              <span className="text-md leading-[27px] tracking-wider">
                With reliability and speed in mind, worldwide data centers
                provide the backbone for ultra-fast connectivity. This ensures
                your site will load instantly, no matter where your readers are,
                keeping your site competitive.
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MidSection;
