import React from "react"
import Image from "next/image"

import { icicon1, icicon2, icicon3, icicon4 } from "@/utils/assets"


const Scooping: React.FC = () => {


    return (
        <>
            <div className="bpc z-[2] relative bg-[url('/images/hero-sec-2.svg')] bg-cover flex w-[100vw]"></div>

            <div className="text-center mt-[-200px] mb-[140px] relative  3xl:max-w-[1900px] 3xl:mx-auto">
                <h2 className=" text-[50px] !font-rowdies">Scooping Happiness into Every Cone</h2>
                <p className="text-center bpcp !font-[200] !font-rowdies mt-[70px] capitalize px-[8%]">
                    Ice cream is a yummy treat &nbsp;
                    <Image src={icicon1} alt="icon" height={50} width={50} className="inline relative top-[-10px]" />
                    &nbsp; at that we all love. It comes in many flavors like chocolate, vanilla, strawberry &nbsp;
                    <Image src={icicon2} alt="icon" height={50} width={50} className="inline relative `top-[-5px] animate-rotate" />
                    &nbsp; and more. Some people like it in a &nbsp;
                    <Image src={icicon3} alt="icon" height={40} width={40} className="inline relative top-[-10px] animate-rotate" />
                    &nbsp; bowl, and some like it in a cone.
                    <Image src={'/icons/heart.svg'} alt="icon" height={60} width={60} className="inline adbsolute ml-2 hover:rotate-[90deg] transation trnsform duration-1000" />
                </p>
                <Image src={icicon4} alt="icon" height={60} width={60} className="inline absolute top-[240px] left-[5%]" />
            </div>
        </>
    )
}

export default Scooping
