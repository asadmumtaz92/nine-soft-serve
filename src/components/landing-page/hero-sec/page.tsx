import React from "react"
import Button from "@/components/ui/button/page"
import Link from "next/link"
import Image from "next/image"
import { HeroHeadingIcon, Heroicon1, Heroicon2, Heroicon3, Heroicon4, icicon1, icicon2, icicon3, icicon4 } from "@/utils/assets"


const HeroSection: React.FC = () => {
    return (
        <>
            <div className="z-[10] relative bg-[url('../../public/images/hero-sec.svg')] bg-cover bg-bottom bg-center bg-no-repeat pt-[250px] pb-[130px] lg:px-[120px] px-[100px] flex flex-col items-center justify-center min-h-[100vh] gap-[17px]">
                <div className="flex relative">
                    <h1 className="lg:text-[75px] text-[50px] lg:leading-[95px] leading-[80px] text-center text-white font-bold md:max-w-[734px] !font-rowdies">
                        <Image src={HeroHeadingIcon} alt="icon" height={115} width={97} className="absolute lg:top-[-40px] top-[-34px] lg:left-[115px] left-[26px] lg:h-[115] lg:w-[97px] h-[95px] w-[80px]" />
                        Scooping <br /> Happiness & Baking Freshness All Day, Every Day!
                    </h1>
                </div>
                <div className={`flex flex-col gap-[36px] justify-center items-center xl:px-[250px]`}>
                    <p className={`text-[16px] leading-[28px] text-center text-white !font-[400] !font-outfit`}>
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
                <Image src={Heroicon1} alt="icon" height={92} width={91} className="absolute top-[205px] left-[8%]" />
                <Image src={Heroicon2} alt="icon" height={129} width={116} className="absolute top-[178px] right-[10%]" />
                <Image src={Heroicon3} alt="icon" height={63} width={62} className="absolute bottom-[133px] left-[15%]" />
                <Image src={Heroicon4} alt="icon" height={63} width={59} className="absolute bottom-[150px] right-[20%]" />
            </div>

            <div className="bpc z-[9] relative bg-[url('../../public/images/hero-sec-2.svg')] flex flex-col items-center justify-center">
            </div>

            <div className="text-center mt-[-300px] mb-[140px] relative">
                <h2 className=" text-[50px] !font-rowdies">Scooping Happiness into Every Cone</h2>
                <p className="text-center bpcp !font-[200] !font-rowdies mt-[70px] capitalize px-[7%]">
                    Ice cream is a yummy treat &nbsp;
                    <Image src={icicon1} alt="icon" height={50} width={50} className="inline relative top-[-10px]" />
                    &nbsp; at that we all love. It comes in many flavors like chocolate, vanilla, strawberry &nbsp;
                    <Image src={icicon2} alt="icon" height={50} width={50} className="inline relative top-[-5px]" />
                    &nbsp; and more. Some people like it in a &nbsp;
                    <Image src={icicon3} alt="icon" height={40} width={40} className="inline relative top-[-10px]" />
                    &nbsp; bowl, and some like it in a cone.
                    <Image src={'/icons/heart.svg'} alt="icon" height={60} width={60} className="inline adbsolute ml-2" />
                </p>
                <Image src={icicon4} alt="icon" height={60} width={60} className="inline absolute top-[240px] left-[5%]" />
            </div>
        </>
    )
}

export default HeroSection
