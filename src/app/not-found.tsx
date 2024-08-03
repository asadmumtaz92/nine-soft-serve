import React from 'react'
import Link from 'next/link';

import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "404 - Not Found",
};


const Custom404 = () => {

    return (
        <div className="flex flex-col justify-center items-center h-screen w-full text-center p-[30px]">
            <h1 data-aos="fade-down" className="!font-rowdies font-[700] [font-size:_clamp(3rem,3rem+1vw,5rem)] text-brown-base leading-[1.2]">404</h1>
            <h1 data-aos="fade-down" className="!font-rowdies mb-2 font-[700] [font-size:_clamp(2rem,2rem+1vw,4rem)] font-semibold text-brown-base">Page not found</h1>
            <p  data-aos="fade-up" className="!font-outfit mb-8 text-lg text-gray-400">Sorry, the page you are looking for could not be found.</p>
            <Link data-aos="fade-up" href="/" className="border-[0.5px] text-white bg-pink-base  font-[600] px-[30px] py-[10px] rounded-[30px]">Return To Home</Link>
        </div>
    );
};

export default Custom404;
