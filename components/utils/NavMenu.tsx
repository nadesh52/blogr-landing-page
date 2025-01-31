"use client";
import React, { useState } from "react";
import NavButton from "./NavButton";

export function NavMenu({}) {
  const [menuState, setMenuState] = useState({
    product: false,
    company: false,
    connect: false,
  });

  const handleMenuClick = (menu: string) => {
    const lowerCase = menu.toLowerCase();

    setMenuState((prevState: any) => ({
      product: false,
      company: false,
      connect: false,
      [lowerCase]: !prevState[lowerCase],
    }));
  };

  return (
    <nav>
      <ul className="flex items-center gap-8 font-bold">
        <li>
          <NavButton
            title="Product"
            isOpen={menuState.product}
            onMenuClick={() => handleMenuClick("Product")}
          />
        </li>
        <li>
          <NavButton
            title="Company"
            isOpen={menuState.company}
            onMenuClick={() => handleMenuClick("Company")}
          />
        </li>
        <li>
          <NavButton
            title="Connect"
            isOpen={menuState.connect}
            onMenuClick={() => handleMenuClick("Connect")}
          />
        </li>
      </ul>
    </nav>
  );
}
