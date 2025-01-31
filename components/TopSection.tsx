import Image from "next/image";
import React from "react";

const TopSection = () => {
  return (
    <section className="relative flex flex-col items-center justify-center overflow-hidden desktop:pb-[280px] pt-[102px] desktop:px-40 desktop:pt-[159px]">
      <h2 className="mb-11 font-overpass text-[26px] font-semibold leading-10 -tracking-[0.02rem] text-blue-gray-300 desktop:mb-0 desktop:text-[40px] desktop:-tracking-[0.1rem]">
        Designed for the future
      </h2>
      <div className="order-2 flex w-full desktop:order-1">
        <div className="mt-[53px] px-10 text-center font-overpass text-blue-gray-400 desktop:mt-[108px] desktop:w-[520px] desktop:px-0 desktop:text-left">
          <div className="mb-[41px] desktop:mb-[75px]">
            <h4 className="mb-[14px] text-[28px] font-semibold leading-[34px] desktop:mb-[23px] desktop:text-3xl">
              Introducing an extensible editor
            </h4>
            <span className="leading-[28px]">
              Blogr features an exceedingly intuitive which lets you focus on
              one thing: creating content. The editor supports management of
              multiple blogs and allows easy manipulation of embeds such as
              images, videos, and Markdown. Extensibility with plugins and
              themes provide easy ways to add functionality or change the looks
              of a blog.
            </span>
          </div>
          <div>
            <h4 className="mb-[14px] text-[28px] font-semibold leading-[34px] desktop:mb-[23px] desktop:text-3xl">
              Robust content management
            </h4>
            <span className="leading-[28px]">
              Flexible content management enables users to easily move through
              post. Increase the usability of your blog by adding customized
              categorie, sections, format, of flow With this functionalit,
              you are in full control.
            </span>
          </div>
        </div>
      </div>
      <div className="-right-[295px] top-[66px] order-1 desktop:absolute desktop:order-2">
        <Image
          src="/assets/images/illustration-editor-desktop.svg"
          height={0}
          width={925}
          alt="desktop"
          className="hidden desktop:block"
        />
        <Image
          src="/assets/images/illustration-editor-mobile.svg"
          height={0}
          width={406}
          alt="mobile"
          className="block desktop:hidden"
        />
      </div>
    </section>
  );
};

export default TopSection;
