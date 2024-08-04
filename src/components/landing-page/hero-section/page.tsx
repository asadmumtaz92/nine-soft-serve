import React from "react"
import Link from "next/link"
import Image from "next/image"

import { HeroHeadingIcon, Heroicon1, Heroicon2, Heroicon3, Heroicon4, } from "@/utils/assets"
import Button from "@/components/ui/button/page"


const HeroSection: React.FC = () => {


    return (
        <div className="relative z-[3] bg-[url('/images/hero-sec.svg')] bg-cover bg-bottom bg-no-repeat pt-[250px] pb-[130px] px-[40px] md:px-[100px] xl:px-[120px] flex flex-col items-center justify-center min-h-[80vh] gap-[17px]">
            <div className="flex relative">
                <h1 className="text-[30px] leading-[45px] sm:text-[50px] sm:leading-[80px] lg:text-[75px] lg:leading-[95px] text-center text-white font-bold md:max-w-[734px] !font-rowdies">
                    <Image src={HeroHeadingIcon} alt="icon" height={115} width={97} className="absolute lg:top-[-40px] top-[-34px] lg:left-[115px] left-[26px] lg:h-[115] lg:w-[97px] h-[95px] w-[80px]" />
                    Scooping <br /> Happiness & Baking Freshness All Day, Every Day!
                </h1>
            </div>
            <div className={`flex flex-col gap-[36px] justify-center items-center xl:px-[250px]`}>
                <p className={`text-[16px] leading-[28px] text-center text-white !font-[400] !font-outfit md:max-w-[734px]`}>
                    Aenean et turpis ipsum. Quisque consequat orci augue, at aliquam urna
                    tempus a. Nulla luctus consequat odio, eget pulvinar libero elementum
                    nec. Pellentesque luctus placerat.
                </p>
                <Link href="/shop" className="flex justify-center items-center h-[52px] text-nowrap px-[50px] rounded-[25px] bg-white text-pink-600 text-[20px] leading-[36px] text-center !font-outfit !font-[600]">
                    Shop Now
                </Link>
            </div>
            <Image src={Heroicon1} alt="icon" height={92} width={91} className="absolute top-[205px] left-[8%] animate-rotateZ" />
            <Image src={Heroicon2} alt="icon" height={129} width={116} className="absolute top-[178px] right-[10%] animate-rotate" />
            <Image src={Heroicon3} alt="icon" height={63} width={62} className="absolute bottom-[63px] sm:bottom-[133px] left-[15%] animate-rotateZ" />
            <Image src={Heroicon4} alt="icon" height={63} width={59} className="absolute bottom-[83px] sm:bottom-[150px] right-[20%] animate-rotate" />
        </div>
    )
}

export default HeroSection
