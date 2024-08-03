import React from "react"
import Image from "next/image"
import Link from "next/link"

import { icicon5 } from "@/utils/assets"


const SecretRecipe: React.FC = () => {


    return (
        <div className="flex flex-col md:flex-row justify-center py-[100px] px-[40px] md:px-[80px] xl:px-[120px] md:min-h-[100vh]">
            <div className="flex flex-1 flex-col justify-center">
                <h2 className=" text-[50px]  font-rowdies capitalize leading-[72px]">
                    Cakes made with a secret recipe derived
                </h2>
                <p className="!font-rowdies mt-[20px] max-w-[80%] text-[18px] leading-[32px]">
                    We have kept the recipes made from generation to generation that make our cakes taste very delicious and will not go out of style
                </p>
                <Link href='/shop' className="shop-btn flex items-center justify-center">Shop Now</Link>
            </div>

            <div className="flex flex-1 justify-center items-center mt-[40px] md:mt-0">
                <Image src={icicon5} alt="icon" height={532} width={531} className="relative" />
            </div>
        </div>
    )
}

export default SecretRecipe
