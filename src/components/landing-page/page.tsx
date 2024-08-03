import React from "react"

import HeroSection from "./hero-sec/page"
import DeliciousFlavours from './delicious-flavours/page'
import IceCreams from "./icecream-flavour/page"
import SecretRecipe from "./secret-recipe/page"
import Catering from "./catering/page"
import Instagram from "./instagram/page"


const LandingPage = () => {


    return (
        <>
            <HeroSection />
            <SecretRecipe/>
            <IceCreams />
            <DeliciousFlavours />
            <Catering/>
            <Instagram/>
        </>
    )
}

export default LandingPage
