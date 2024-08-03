import React from "react"

import HeroSection from "./hero-sec/page"
import DeliciousFlavours from './delicious-flavours/page'
import SecretRecipe from "./secret-recipe/page"
import Catering from "./catering/page"
import Instagram from "./instagram/page"


const LandingPage = () => {


    return (
        <>
            <HeroSection />
            <SecretRecipe/>
            <div className="min-h-[100vh]"></div>
            <DeliciousFlavours />
            <div className="min-h-[100vh]"></div>
            <Catering/>
            <Instagram/>
        </>
    )
}

export default LandingPage
