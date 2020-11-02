import React from "react";
import Header from "./Header/Header";
import Navigation from "./Navigation/Navigation";
import ThreeColumns from "./ThreeColumns/ThreeColumns";

const Home = () => {
    return (
        <div className="home--app">
            <div className="container--home">
                <Navigation />
                <Header />
            </div>
            <ThreeColumns />
        </div>
    );
}

export default Home;