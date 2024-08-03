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
import WhatsAppChat from "@/components/ui/whatsApp-chat/page"

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
                    <WhatsAppChat />
                </>
                <Footer />
            </body>
        </html>
    )
}

export default RootLayout
