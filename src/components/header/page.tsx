"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Logo, CartIcon, DeliveryIcon } from "@/utils/assets";
import { Outfit } from "next/font/google";

const Header: React.FC = () => {
  const [prevScrollpos, setPrevScrollpos] = useState(0);
  const [scrollTimeout, setScrollTimeout] = useState<number | null>(null);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    const navbar = document.getElementById("navbar");

    if (navbar) {
      navbar.style.top = "-130px";
    }

    setPrevScrollpos(currentScrollPos);

    if (scrollTimeout) {
      clearTimeout(scrollTimeout);
    }

    setScrollTimeout(
      setTimeout(() => {
        const navbar = document.getElementById("navbar");
        if (navbar) {
          navbar.style.transition = "all 0.3s ease-in-out";
          navbar.style.top = "0";
        }
      }, 100) as unknown as number
    );
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);

      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, [prevScrollpos, scrollTimeout]);

  return (
    <header className="lg:px-[120px] px-[100px] bg-pink-base">
      <div className="flex flex-row justify-between items-center border-b-2 border-dashed border-white lg:h-[130px] h-[120px]">
        <div className="flex items-end">
          <Image src={Logo} alt="logo" width={150} height={137} />
        </div>
        <nav className="bg-white h-[50px] flex items-center justify-center rounded-[20px]">
          <ul className="flex flex-row no-underline justify-between items-center font-medium text-[16px] leading-[15px] text-pink-400 px-[40px] gap-[22px]">
            <li>Home</li>
            <li>Shop</li>
            <li>Icecreams</li>
            <li>Cakes</li>
            <li>Catering</li>
          </ul>
        </nav>
        <div className="flex gap-[19px]">
          <Image src={DeliveryIcon} alt="icon" height={30} width={30} />
          <Image src={CartIcon} alt="icon" height={24} width={22} />
        </div>
      </div>
    </header>
  );
};

export default Header;
