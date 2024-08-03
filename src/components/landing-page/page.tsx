import React from "react"

import HeroSection from "./hero-section/page"
import DeliciousFlavours from './delicious-flavours/page'
import IceCreams from "./icecream-flavour/page"
import SecretRecipe from "./secret-recipe/page"
import Catering from "./catering/page"
import Instagram from "./instagram/page"
import Scooping from "./scooping-section/page"


const LandingPage = () => {


    return (
        <>
            <HeroSection />
            <Scooping />
            <IceCreams />
            <SecretRecipe />
            <DeliciousFlavours />
            <Catering />
            <Instagram />
        </>
    )
}

export default LandingPage
