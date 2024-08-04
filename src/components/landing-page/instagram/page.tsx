import React from "react"
import Image from "next/image"
import { ig, igw, insta } from "@/utils/assets"


const Instagram: React.FC = () => {


    return (
        <div className="mb-[100px] justify-center px-[40px] md:px-[80px] xl:px-[120px]">
            <div className="flex gap-[20px] justify-center mb-[20px] ">
                <Image src={ig} alt="icon" height={50} width={80} className="relative w-[60px] h-[60px] top-[10px]" />
                <h2 className="font-outfit text-[50px]">Ninesoftserve</h2>
            </div>

            <p className="text-center font-outfit font-[500] text-[20px] capitalize">Follow us on intsgram</p>
            <div className="flex justify-center mt-[30px]">
                <Image src={insta} alt="icon" height={900} width={900} className="w-full max-w-[1200px] relative top-[10px]" />
            </div>

            <div className="flex gap-[20px] justify-center mt-[40px] w-full justify-center">
                <button className="w-[198.29px] h-[52px] rounded-[25px] text-white text-[20px] mt-[35px] bg-pink-base">Load More</button>
                <button className="flex items-center justify-center w-[298.29px] h-[52px] mt-[35px] bg-[#2D6AC6] rounded-[25px] text-[20px] text-white">
                    <Image src={igw} alt="icon" height={25} width={25} className="mr-[8px]" />
                    Follow On Instagram
                </button>
            </div>
        </div>
    )
}

export default Instagram
