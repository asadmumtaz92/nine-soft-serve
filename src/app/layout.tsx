import React from "react"
import "./globals.css"
import { Rowdies } from "next/font/google"
const inter = Rowdies({ subsets: ["latin"], weight: '400' })

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

import Header from "@/components/header/page"

interface RootLayoutProps {
    readonly children: React.ReactNode
}


const RootLayout = ({ children }: RootLayoutProps) => {


    return (
        <html lang="en">
            <body className={inter.className}>
                <Header />
                <div className="">
                    {children}
                </div>
            </body>
        </html>
    )
}

export default RootLayout
