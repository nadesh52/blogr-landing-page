import React from "react";

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center pt-[106px] text-white desktop:pt-0">
      <div className="flex w-[320px] flex-col desktop:w-full">
        <h1 className="mb-[14px] desktop:mb-[31px] mt-[92px] desktop:mt-[121px] flex flex-col text-center font-overpass text-4xl font-medium leading-[46px] desktop:text-[64px]">
          A modern publishing platform
        </h1>
        <span className="text-center font-overpass text-[18px] leading-[23px] tracking-wide">
          Grow your audience and build your online brand
        </span>
      </div>
      <div className="mt-11 flex gap-4 font-ubuntu font-extrabold desktop:mt-[47px]">
        <a
          href="#"
          className="rounded-full bg-white px-5 py-[10px] text-red-light-300 hover:bg-red-light-300 hover:text-white desktop:px-[20px] desktop:py-[11px]"
        >
          Start for Free
        </a>
        <a
          href="#"
          className="rounded-full border border-white px-5 py-[10px] text-white hover:bg-white hover:text-red-light-300 desktop:px-[20px] desktop:py-[11px]"
        >
          Learn More
        </a>
      </div>
    </section>
  );
};

export default Hero;
