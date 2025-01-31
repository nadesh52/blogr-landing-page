"use client";
import React from "react";
import Image from "next/image";

const productMenu: any = [
  { title: "Oveview" },
  { title: "Pricing" },
  { title: "Marketplace" },
  { title: "Features" },
  { title: "Integrations" },
];

const companyMenu: any = [
  { title: "About" },
  { title: "Team" },
  { title: "Blog" },
  { title: "Careers" },
];

const connectMenu: any = [
  { title: "Contact" },
  { title: "Newsletter" },
  { title: "LinkedIn" },
];

interface NavButtonProps {
  title: string;
  isOpen: boolean;
  onMenuClick: () => void;
}

const NavButton = ({ title, isOpen, onMenuClick }: NavButtonProps) => {

const menuList =
  title === "Product"
    ? productMenu
    : title === "Company"
      ? companyMenu
      : connectMenu;

  return (
    <div className="group relative">
      <button onClick={onMenuClick} className="flex items-center gap-2">
        <p className="decoration-2 group-hover:underline">{title}</p>
        <Image
          src="/assets/images/icon-arrow-light.svg"
          height={10}
          width={10}
          alt="arrow"
          className={`${isOpen ? "rotate-180" : "rotate-0"} transition-all`}
        />
      </button>
      <div
        className={`absolute top-8 flex min-w-[180px] flex-col space-y-2 rounded bg-white p-6 text-black ${isOpen ? "block" : "hidden"}`}
      >
        {menuList.map((menu: any, idx: any) => (
          <a key={idx} href="#" className="font-light hover:font-medium">
            {menu.title}
          </a>
        ))}
      </div>
    </div>
  );
};

export default NavButton;
