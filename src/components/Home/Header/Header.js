import React from "react";
import decoration from "../../../assets/Decoration.svg";

const Header = () => {
    return (
        <div className="header--box">
            <div className="header--bg--img"></div> 
            <div className="header--section">
                <h1 className="header--title">Zacznij pomagać!</h1>
                <h1 className="header--title">Oddaj niechciane rzeczy w zaufane ręce</h1>
                <img src={decoration} alt="decoration" />
                <div className="header--links--box">
                    <button className="header--link link--give">Oddaj rzeczy</button>
                    <button className="header--link link--organize">Zorganizuj zbiórkę</button>
                </div>
            </div>      
        </div>
    )
}

export default Header;