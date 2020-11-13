import React, {useContext, useState, useEffect} from "react";
import Header from "./Header/Header";
import Navigation from "./Navigation/Navigation";
import ThreeColumns from "./ThreeColumns/ThreeColumns";
import FourSteps from "./FourSteps/FourSteps";
import AboutUs from "./AboutUs/AboutUs";
import Contact from "./Contact/Contact";
import WhoWeHelp from './WhoWeHelp/WhoWeHelp';

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
            <WhoWeHelp />
            <Contact />
        </div>
    );
}

export default Home;