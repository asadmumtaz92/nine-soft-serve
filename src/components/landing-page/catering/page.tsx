import React from "react"
import Image from "next/image"
import { c1, c2, c3, c4, } from "@/utils/assets"


const Catering: React.FC = () => {


    return (
        <>
            <div id="catering" className="bpc2 relative bg-[url('/images/catbg.png')] bg-cover flex w-[100vw]">
            </div>

            <div  className="flex justify-center mb-[100px] mx-[10px]  3xl:max-w-[1900px] 3xl:mx-auto">
                <div className="hidden md:flex min-w-[100px] w-[15%] xl:w-[20%] flex justify-center mt-[-60px] z-[4]">
                    <Image src={c1} alt="icon" height={530} width={189} className="rounded-lg w-full h-[530px] object-cover object-center relative top-[-60px]" />
                </div>
                <div className="hidden md:flex min-w-[100px] w-[15%] xl:w-[20%] flex mx-[10px] justify-center mt-[-60px] z-[4]">
                    <Image src={c2} alt="icon" height={440} width={189} className="rounded-lg w-full h-[440px] object-cover object-center my-auto relative top-[-60px]" />
                </div>
                <div className="w-[60%] text-center mx-[5%] flex flex-col items-center justify-center mt-[-130px] ">
                    <h2 className=" text-[50px] font-rowdies capitalize leading-[72px]">Our Catering</h2>
                    <p className="!font-[200] !font-rowdies mt-[20px] text-[18px] leading-[32px]">
                        Write your desired quantity by contacting us through our WhatsApp number </p>
                    <button className="shop-btn-2">Reach Us On Whatsapp</button>
                </div>
                <div className="hidden md:flex min-w-[100px] w-[15%] xl:w-[20%] flex justify-center mt-[-60px] z-[4]">
                    <Image src={c3} alt="icon" height={440} width={189} className="rounded-lg w-full h-[440px] object-cover object-center my-auto relative top-[-60px]" />
                </div>
                <div className="hidden md:flex min-w-[100px] w-[15%] xl:w-[20%] ml-[10px] flex justify-center mt-[-60px] z-[4]">
                    <Image src={c4} alt="icon" height={530} width={189} className="rounded-lg w-full h-[530px] object-cover object-center relative top-[-60px]" />
                </div>
            </div>
        </>
    );
};

export default Catering;
