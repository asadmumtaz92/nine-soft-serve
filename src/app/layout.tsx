import React from "react"
import "./globals.css"

import type { Metadata } from "next"
export const metadata: Metadata = {
    title: {
        template: "%s - Cake Shop",
        default: "Cake Shop",
    },
    description: "",
    keywords: [
        "",
    ],
}

import { Fonts } from "@/utils/fonts"
import Header from "@/components/header/page"

interface RootLayoutProps {
    readonly children: React.ReactNode
}


const RootLayout = ({ children }: RootLayoutProps) => {


    return (
        <html lang="en">
            <body className={`${Fonts.outfit} ${Fonts.rowdies}`}>
                <Header />
                <div className="">
                    {children}
                </div>
            </body>
        </html>
    )
}

export default RootLayout
