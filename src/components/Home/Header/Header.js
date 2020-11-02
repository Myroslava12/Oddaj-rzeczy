import React from "react";
import {Link} from 'react-router-dom';
import * as ROUTES from "../../../constants/routes";
import decoration from "../../../assets/Decoration.svg";

const Header = () => {
    return (
        <div className="header--box">
            <div className="header--bg--img"></div> 
            <div className="header--section">
                <h1 className="header--title">Zacznij pomagać!</h1>
                <h1 className="header--title">Oddaj niechciane rzeczy w zaufane ręce</h1>
                <img className="header--img" src={decoration} alt="decoration" />
                <div className="header--links--box">
                    <Link to={ROUTES.LOG_IN} className="header--link link--give">
                        <div>
                            <span>Oddaj </span> <br />
                            <span>rzeczy</span>
                        </div>
                    </Link>
                    <Link to={ROUTES.LOG_IN} className="header--link link--organize">
                        <div>
                            <span>Zorganizuj </span> <br />
                            <span>zbiórkę</span>
                        </div>
                    </Link>
                </div>
            </div>      
        </div>
    )
}

export default Header;