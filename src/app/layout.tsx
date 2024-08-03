import React from "react"
import "./globals.css"
import Image from "next/image"

import type { Metadata } from "next"
export const metadata: Metadata = {
    title: {
        template: "%s - NINE",
        default: "NINE - Home",
    },
    description: "",
    keywords: [
        "",
    ],
}

import { Fonts } from "@/utils/fonts"
import Header from "@/components/header/page"
import Footer from "@/components/footer/page"

interface RootLayoutProps {
    readonly children: React.ReactNode
}


const RootLayout = ({ children }: RootLayoutProps) => {


    return (
        <html lang="en">
            <body className={`${Fonts.outfit} ${Fonts.rowdies}`}>
                <Header />
                <>
                    {children}
                    <Image src={'/icons/whatsapp.svg'} alt="icon" height={63} width={59} className="hover:opacity-[0.9] z-[11] cursor-pointer fixed bottom-[20px] right-[20px] min-w-[200px] w-auto" />

                </>
                <Footer />
            </body>
        </html>
    )
}

export default RootLayout
