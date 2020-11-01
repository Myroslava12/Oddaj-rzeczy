import React from "react";
import Header from "./Header/Header";
import Navigation from "./Navigation/Navigation";

const Home = () => {
    return (
        <div className="home--app">
            <div className="container--home">
            <Navigation />
            <Header />
            </div>
        </div>
    );
}

export default Home;