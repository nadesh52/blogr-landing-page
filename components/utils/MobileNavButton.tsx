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

const MobileNavButton = ({ title, isOpen, onMenuClick }: NavButtonProps) => {
  const menuList =
    title === "Product"
      ? productMenu
      : title === "Company"
        ? companyMenu
        : connectMenu;

  return (
    <div className="group flex w-full flex-col items-center">
      <button onClick={onMenuClick} className="flex items-center gap-2">
        <p className="text-lg font-medium">{title}</p>
        <Image
          src="assets/images/icon-arrow-dark.svg"
          height={10}
          width={10}
          alt="arrow"
          className={`${isOpen ? "rotate-180" : "rotate-0"} transition-all`}
        />
      </button>
      <div
        className={`mt-4 flex w-full flex-col space-y-2 rounded bg-blue-gray-100/20 p-4 text-center text-black ${isOpen ? "block" : "hidden"}`}
      >
        {menuList.map((menu: any, idx: any) => (
          <a key={idx} href="#" className="text-lg font-medium">
            {menu.title}
          </a>
        ))}
      </div>
    </div>
  );
};

export default MobileNavButton;
