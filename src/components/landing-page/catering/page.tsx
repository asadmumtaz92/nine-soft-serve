import React from "react";
import Button from "@/components/ui/button/page";
import Link from "next/link";
import { Outfit } from "next/font/google";
import Image from "next/image";
import { c1, c2, c3, c4, HeroHeadingIcon, Heroicon1, Heroicon2, Heroicon3, Heroicon4, icicon1, icicon2, icicon3, icicon4, icicon5 } from "@/utils/assets";

const outfit = Outfit({ subsets: ["latin"], weight: ["400", "700"] });

const Catering: React.FC = () => {
  return (
    <>
    <div className="bpc2 relative bg-[url('../../public/images/catbg.png')]   flex flex-col items-center justify-center">
    </div>
    <div className="flex justify-center  mb-[100px]">
      <div className="w-[15%] flex justify-center">
          <Image src={c1} alt="icon" height={530} width={189} className="relative top-[-60px]" />
      </div>
      <div className="w-[15%] flex mx-[5px] justify-center">
          <Image src={c2} alt="icon" height={440} width={189} className="relative top-[-60px]" />
      </div>
      <div className="w-[60%] text-center  mx-[5%] ">
        <h2 className=" text-[50px]  font-rowdies capitalize leading-[72px]">Our Catering</h2>
        <p className="font-rowdies mt-[20px] leading-[32px]">
        Write your desired quantity by contacting us through our WhatsApp number </p>
        <button className="shop-btn-2">Reach Us On Whatsapp</button>
      </div>
      <div className="w-[15%] mx-[5px] flex justify-center">
          <Image src={c3} alt="icon" height={530} width={189} className="relative top-[-60px]" />
      </div>
      <div className="w-[15%] flex justify-center">
          <Image src={c4} alt="icon" height={440} width={189} className="relative top-[-60px]" />
      </div>
     
    </div>
    </>
  );
};

export default Catering;
