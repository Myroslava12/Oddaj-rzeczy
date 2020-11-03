import React from "react";
import Header from "./Header/index";
import Navigation from "./Navigation/index";
import ThreeColumns from "./ThreeColumns/index";
import FourSteps from "./FourSteps/index";
import AboutUs from "./AboutUs/index";
import Contact from "./Contact/index";

const Home = () => {
    return (
        <div className="home--app">
            <div className="container--home">
                <Navigation />
                <Header />
            </div>
            <ThreeColumns />
            <FourSteps />
            <AboutUs />
            <Contact />
        </div>
    );
}

export default Home;