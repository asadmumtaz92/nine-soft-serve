import React from "react"
import Image from "next/image"
import Link from "next/link"

import { icicon5 } from "@/utils/assets"


const SecretRecipe: React.FC = () => {


    return (
        <div className="flex flex-col md:flex-row justify-center py-[100px] px-[40px] md:px-[80px] xl:px-[120px] md:min-h-[100vh] 3xl:max-w-[1900px] 3xl:mx-auto">
            <div className="flex flex-1 flex-col justify-center">
                <h2 className="text-[30px] leading-[45px] md:text-[50px] md:leading-[72px] font-rowdies capitalize">
                    Cakes made with a secret recipe derived
                </h2>
                <p className="!font-rowdies mt-[20px] md:max-w-[80%] text-[18px] leading-[32px]">
                    We have kept the recipes made from generation to generation that make our cakes taste very delicious and will not go out of style
                </p>
                <Link href='/shop' className="flex items-center justify-center w-[205px] h-[52px] rounded-[25px] text-white text-[20px] mt-[35px] bg-pink-base">Shop Now</Link>
            </div>

            <div className="flex flex-1 justify-end items-center mt-[40px] md:mt-0 bg-fblack">
                <Image src={icicon5} alt="icon" height={532} width={531} className="relative" />
            </div>
        </div>
    )
}

export default SecretRecipe
