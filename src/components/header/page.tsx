"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Logo, CartIcon, DeliveryIcon } from "@/utils/assets";
import { Outfit } from "next/font/google";

const outfit = Outfit({ subsets: ["latin"], weight: ["400", "700"] });

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
    <header className="lg:px-[120px] px-[80px] bg-pink-base">
      <div className="flex flex-row justify-between items-center border-b-2 border-dashed border-white lg:h-[130px] h-[120px]">
        <div className="flex items-end">
          <Image src={Logo} alt="logo" width={150} height={137} className="w-[120px] lg:w-[150px]" />
        </div>
        <nav className="bg-white lg:h-[50px] h-[40px] flex items-center justify-center rounded-[20px]">
          <ul className={`${outfit.className} flex flex-row no-underline justify-between items-center font-semibold lg:text-[16px] text-[14px] leading-[15px] text-pink-400 lg:px-[40px] px-[20px] lg:gap-[22px] gap-[18px]`}>
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
