import React from "react";
import decoration from "../../../assets/Decoration.svg";
import Button from "./Button";

const Header = () => {
    return (
        <div className="header--box" id="header">
            <div className="mobile--first--bg"></div>
            <div className="header--bg--img"></div> 
            <div className="header--section">
                <h1 className="header--title">Zacznij pomagać!</h1>
                <h1 className="header--title">Oddaj niechciane rzeczy w zaufane ręce</h1>
                <img className="header--img" src={decoration} alt="decoration" />
                <div className="header--links--box">
                    <Button text="Oddaj rzeczy" className="header--link" />
                    <Button text="Zorganizuj zbiórkę" className="header--link" />
                </div>
            </div>      
        </div>
    )
}

export default Header;