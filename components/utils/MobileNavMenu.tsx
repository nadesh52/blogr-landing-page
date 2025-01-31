"use client";
import React, { useState } from "react";
import MobileNavButton from "./MobileNavButton";

const MobileNavMenu = () => {
  const [menuState, setMenuState] = useState({
    product: false,
    company: false,
    connect: false,
  });

  const handleMenuClick = (menu: string) => {
    const lowerCase = menu.toLowerCase();

    setMenuState((prevState:any) => ({
      product: false,
      company: false,
      connect: false,
      [lowerCase]: !prevState[lowerCase],
    }));
  };

  return (
    <ul className="flex w-full flex-col items-center space-y-6 font-overpass">
      <li className="w-full">
        <MobileNavButton
          title="Product"
          isOpen={menuState.product}
          onMenuClick={() => handleMenuClick("Product")}
        />
      </li>
      <li className="w-full">
        <MobileNavButton
          title="Company"
          isOpen={menuState.company}
          onMenuClick={() => handleMenuClick("Company")}
        />
      </li>
      <li className="w-full">
        <MobileNavButton
          title="Connect"
          isOpen={menuState.connect}
          onMenuClick={() => handleMenuClick("Connect")}
        />
      </li>
    </ul>
  );
};

export default MobileNavMenu;
