import React from "react";
import Header from "./Header";
import Navigation from "./Navigation";
import ThreeColumns from "./ThreeColumns";
import FourSteps from "./FourSteps";
import AboutUs from "./AboutUs";

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
        </div>
    );
}

export default Home;