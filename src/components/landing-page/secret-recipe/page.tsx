import React from "react";
import Button from "@/components/ui/button/page";
import Link from "next/link";
import { Outfit } from "next/font/google";
import Image from "next/image";
import { HeroHeadingIcon, Heroicon1, Heroicon2, Heroicon3, Heroicon4, icicon1, icicon2, icicon3, icicon4, icicon5 } from "@/utils/assets";

const outfit = Outfit({ subsets: ["latin"], weight: ["400", "700"] });

const SecretRecipe: React.FC = () => {
  return (
    <>
    <div className="flex justify-center  mb-[100px] py-[100px] mx-[5%] my-[5%]">
      <div className="w-[50%]  mx-[5%] ">
        <h2 className=" text-[50px]  font-rowdies capitalize leading-[72px]">Cakes made with a secret recipe derived</h2>
        <p className="font-rowdies mt-[20px] max-w-[80%] leading-[32px]">
        We have kept the recipes made from generation to generation that make our cakes taste very delicious and will not go out of style
        </p>
        <button className="shop-btn">Shop Now</button>
      </div>
      <div className="w-[50%] flex justify-center">
        <Image src={icicon5} alt="icon" height={532} width={531} className="relative top-[-60px]" />
      </div>
     
    </div>
    </>
  );
};

export default SecretRecipe;
