import React from "react";
import Navbar from "./components/Navbar";
import HerSection from "./components/HerSection";
import FeatureSection from "./components/FeatureSection";
import WorkFlow from "./components/WorkFlow";
import Pricing from "./components/Pricing";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";

const App = () => {
    return (
        <>
            <Navbar/>
            <div className="max-w-7xl mx-auto pt-20 px-6">
                <HerSection/>
                <FeatureSection/>
                <WorkFlow/>
                <Pricing/>
                <Testimonial/>
                <Footer/>
            </div>

        </>
    );
};

export default App;
