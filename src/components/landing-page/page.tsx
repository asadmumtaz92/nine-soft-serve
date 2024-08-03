import React from "react"

import HeroSection from "./hero-sec/page"
import DeliciousFlavours from './delicious-flavours/page'
import IceCreams from "./icecream-flavour/page"


const LandingPage = () => {


    return (
        <>
            <HeroSection />
            <div className="min-h-[100vh]"></div>
            <IceCreams />
            <div className="min-h-[100vh]"></div>
            <DeliciousFlavours />
            <div className="min-h-[100vh]"></div>
        </>
    )
}

export default LandingPage
