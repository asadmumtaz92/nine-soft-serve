import React from "react"
import Link from "next/link"
import Image from "next/image"

import { HeroHeadingIcon, Heroicon1, Heroicon2, Heroicon3, Heroicon4, } from "@/utils/assets"
import Button from "@/components/ui/button/page"


const HeroSection: React.FC = () => {


    return (
        <div className="relative z-[3] bg-[url('/images/hero-sec.svg')] bg-cover bg-bottom bg-no-repeat pt-[250px] pb-[130px] lg:px-[120px] px-[100px] flex flex-col items-center justify-center min-h-[100vh] gap-[17px]">
            <div className="flex relative">
                <h1 className="lg:text-[75px] text-[50px] lg:leading-[95px] leading-[80px] text-center text-white font-bold md:max-w-[734px] !font-rowdies">
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
                <Link href="/shop">
                    <Button className="h-[60px] px-[54px] rounded-[20px] bg-white text-pink-600 text-[20px] leading-[36px] text-center !font-outfit !font-[600]">
                        Shop Now
                    </Button>
                </Link>
            </div>
            <Image src={Heroicon1} alt="icon" height={92} width={91} className="absolute top-[205px] left-[8%]" />
            <Image src={Heroicon2} alt="icon" height={129} width={116} className="absolute top-[178px] right-[10%] hover:rotate-[45deg] transation trnsform duration-500" />
            <Image src={Heroicon3} alt="icon" height={63} width={62} className="absolute bottom-[133px] left-[15%]" />
            <Image src={Heroicon4} alt="icon" height={63} width={59} className="absolute bottom-[150px] right-[20%] hover:rotate-[90deg] transation trnsform duration-500" />
        </div>
    )
}

export default HeroSection
