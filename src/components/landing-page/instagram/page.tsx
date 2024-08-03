import React from "react";
import Button from "@/components/ui/button/page";
import Link from "next/link";
import { Outfit } from "next/font/google";
import Image from "next/image";
import { c1, c2, c3, c4, HeroHeadingIcon, Heroicon1, Heroicon2, Heroicon3, Heroicon4, icicon1, icicon2, icicon3, icicon4, icicon5, ig, igw, insta } from "@/utils/assets";

const outfit = Outfit({ subsets: ["latin"], weight: ["400", "700"] });

const Instagram: React.FC = () => {
  return (
    <>
   <div className="mb-[100px] justify-center">
    <div className="flex gap-[20px] justify-center mb-[20px] ">
      <Image src={ig} alt="icon" height={50} width={80} className="relative w-[60px] h-[60px] top-[10px]" />
      <h2 className="font-outfit text-[50px]">Ninesoftserve</h2>
    </div>
    <p className="text-center font-outfit font-[500] text-[20px] capitalize">Follow us on intsgram</p>
    <div className="flex justify-center mt-[30px]">
    <Image src={insta} alt="icon" height={900} width={900} className="relative top-[10px]" />
    </div>
    <div className="flex gap-[20px] justify-center mt-[40px]">
    <button className="shop-btn-3">Load More</button>
    <button className="insta-btn">
    <Image src={igw} alt="icon" height={25} width={25} className="inline relative top-[-3px] left-[-8px]" />
      Follow On Instagram</button>
    </div>
   </div>
   
    </>
  );
};

export default Instagram;
