import React from "react";
import HeroSection from "./hero-sec/page";
import SecretRecipe from "./secret-recipe/page";
import Catering from "./catering/page";
import Instagram from "./instagram/page";

const LandingPage: React.FC = () => {
  return (
    <>
        <HeroSection />
        <SecretRecipe/>
        <Catering/>
        <Instagram/>
    </>
  );
};

export default LandingPage;
