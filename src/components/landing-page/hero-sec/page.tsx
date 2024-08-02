import React from "react";
import Button from "@/components/ui/button/page";
import Link from "next/link";
import { Outfit } from "next/font/google";
import Image from "next/image";
import { HeroHeadingIcon, Heroicon1, Heroicon2, Heroicon3, Heroicon4 } from "@/utils/assets";

const outfit = Outfit({ subsets: ["latin"], weight: ["400", "700"] });

const HeroSection: React.FC = () => {
  return (
    <div className="relative bg-[url('../../public/images/hero-sec.svg')] bg-cover bg-bottom bg-center bg-no-repeat pt-[80px] pb-[130px] lg:px-[120px] px-[100px] flex flex-col items-center justify-center max-h-[100vh] gap-[17px]">
      <div className="flex relative">
        <Image src={HeroHeadingIcon} alt="icon" height={115} width={97} className="absolute lg:top-[-40px] top-[-34px] lg:left-[115px] left-[176px] lg:h-[115] lg:w-[97px] h-[95px] w-[80px]" />
        <h1 className="lg:text-[75px] text-[55px] lg:leading-[95px] leading-[80px] text-center text-white font-normal md:max-w-[734px]">
          Scooping <br /> Happiness & Baking Freshness All Day, Every Day!
        </h1>
      </div>
      <div
        className={`${outfit.className} flex flex-col gap-[36px] justify-center items-center xl:px-[250px]`}
      >
        <p className={`text-[16px] leading-[28px] text-center text-white`}>
          Aenean et turpis ipsum. Quisque consequat orci augue, at aliquam urna
          tempus a. Nulla luctus consequat odio, eget pulvinar libero elementum
          nec. Pellentesque luctus placerat.
        </p>
        <Link href="#shop-now">
          <Button className="py-[12px] px-[54px] rounded-[20px] bg-white text-pink-600 text-[20px] leading-[36px] text-center font-semibold">
            Shop Now
          </Button>
        </Link>
      </div>
      <Image src={Heroicon1} alt="icon" height={92} width={91} className="absolute top-[105px] left-[88px]" />
      <Image src={Heroicon2} alt="icon" height={129} width={116} className="absolute top-[78px] right-[154px]" />
      <Image src={Heroicon3} alt="icon" height={63} width={62} className="absolute bottom-[133px] left-[320px]" />
      <Image src={Heroicon4} alt="icon" height={63} width={59} className="absolute bottom-[90px] right-[326px]" />
    </div>
  );
};

export default HeroSection;
