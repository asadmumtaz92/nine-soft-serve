import React from "react"
import Image from "next/image"
import { c1, c2, c3, c4, } from "@/utils/assets"


const Catering: React.FC = () => {


    return (
        <>
            <div className="bpc2 !z-[2] relative bg-[url('/images/catbg.png')] bg-cover flex w-[100vw]">
            </div>

            <div className="flex justify-center mb-[100px] mx-[10px]">
                <div className="w-[15%] xl:w-[20%] flex justify-center mt-[-60px] z-[4]">
                    <Image src={c1} alt="icon" height={530} width={189} className="h-[530px] relative top-[-60px]" />
                </div>
                <div className="w-[15%] xl:w-[20%] flex mx-[5px] justify-center mt-[-60px] z-[4]">
                    <Image src={c2} alt="icon" height={440} width={189} className="h-[440px] my-auto relative top-[-60px]" />
                </div>
                <div className="w-[60%] text-center mx-[5%] flex flex-col items-center justify-center ">
                    <h2 className=" text-[50px] font-rowdies capitalize leading-[72px]">Our Catering</h2>
                    <p className="font-rowdies mt-[20px] leading-[32px]">
                        Write your desired quantity by contacting us through our WhatsApp number </p>
                    <button className="shop-btn-2">Reach Us On Whatsapp</button>
                </div>
                <div className="w-[15%] xl:w-[20%] flex justify-center mt-[-60px] z-[4]">
                    <Image src={c3} alt="icon" height={440} width={189} className="h-[440px] my-auto relative top-[-60px]" />
                </div>
                <div className="w-[15%] xl:w-[20%] mx-[5px] flex justify-center mt-[-60px] z-[4]">
                    <Image src={c4} alt="icon" height={530} width={189} className="h-[530px] relative top-[-60px]" />
                </div>
            </div>
        </>
    );
};

export default Catering;
